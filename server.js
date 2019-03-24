const express = require("express");
const bodyParser = require("body-parser");
const request = require("request"); // "Request" library
const { client_id, client_secret } = require("./secret");

// your application requests authorization
const authOptions = {
  url: "https://accounts.spotify.com/api/token",
  headers: {
    Authorization:
      "Basic " + new Buffer(client_id + ":" + client_secret).toString("base64")
  },
  form: {
    grant_type: "client_credentials"
  },
  json: true
};

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/playlist/:id", (req, res) => {
  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      // use the access token to access the Spotify Web API
      var token = body.access_token;
      var options = {
        url: `https://api.spotify.com/v1/playlists/${req.params.id}`,
        headers: {
          Authorization: "Bearer " + token
        },
        json: true
      };
      request.get(options, function(error, response, body) {
        res.send({ body });
      });
    } else {
      console.error(error, response.statusCode);
    }
  });
});

app.listen(port, () => console.log(`[💁Server] Listening on port ${port}`));
