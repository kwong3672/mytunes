// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: 'table',

  initialize: function() {
    this.collection.on('remove', function() {
      this.render();
    }, this);
    this.collection.on('add', function() {
      this.render();
    }, this);
    this.render();
  },

  render: function() {
    var collection = this.collection;

    this.$el.children().detach();

    var collectView = function(song) {
      var view = new SongQueueEntryView({model: song}); 
      return view.render();
    };

    this.$el.html('<th>Song Queue</th>').append(
      collection.map(collectView)
    );
  }

});


//render the songQueue
//add songs to songQueue from LibraryEntryView
//remove songs from songQueueEntryView
// BONUS: re-order your queue