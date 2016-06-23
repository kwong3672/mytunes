// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.play();
      this.model.enqueue();
    }
  },

  render: function() {
    var attr = this.model.attributes;
    var templatedAttr = this.template(attr);
    // setting html of $el to interpolated template (cell in a table)
    return this.$el.html(templatedAttr);
  }

});
