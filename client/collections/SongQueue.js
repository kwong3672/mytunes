// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.length < 2) {
        this.playFirst();
      }
    });

    this.on('ended', function () {
      var song = this.shift();
      if (this.length > 0) { this.playFirst(); }
      return song;
    });

    this.on('dequeue', function() {
      this.remove();
    });
  },

  playFirst: function() {
    var song = this.at(0);
    if (song) { song.play(); }
  }
});