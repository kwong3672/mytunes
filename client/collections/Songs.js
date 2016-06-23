// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url: '/https://api.parse.com/1/classes/songs',
  initialize: function() {
    var self = this;
    var options = {
      success: function(data) {
        data.results.forEach(function(song) {
          self.add(song);
        });
      }
    };
    Backbone.sync('read', this, options);
  }
});