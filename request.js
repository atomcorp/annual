const request = require('request'); // "Request" library

const getMoreTracks = (options, callback, existingBody) => {
  request.get(options, function(error, response, body) {
    existingBody.tracks.items.push(...body.items);
    existingBody.tracks.next = body.next;
    getPlaylist(options, callback, existingBody);
  });
};

const getPlaylist = (options, callback, body) => {
  // if there are more tracks, call the url spotify gives us
  if (body.tracks.next) {
    getMoreTracks(
      Object.assign({}, options, {
        url: body.tracks.next,
      }),
      callback,
      body
    );
  } else {
    callback.send({body});
  }
};

exports.getPlaylist = getPlaylist;
