var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.title = new TitleView();
    this.dashboard = new DashboardView();
    this.render();
  },

  render: function() {
    this.$el.append([
        this.title.$el,
        this.dashboard.$el
      ])
      .hide()
      .fadeIn();
  }

});
