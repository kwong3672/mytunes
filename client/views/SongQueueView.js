// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('remove', function() {
      this.render();
    }, this);
    this.collection.on('add', function() {
      this.render();
    }, this);
  },

  render: function() {
    var collection = this.collection;

    _.each(collection, function(song) {
      var view = new SongQueueEntryView(song);
      view.render();
    });
  }

});
