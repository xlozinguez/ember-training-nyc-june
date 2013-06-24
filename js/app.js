(function() {
  "use strict";

  window.App = Ember.Application.create();

  App.IndexRoute = Ember.Route.extend({
    model: function() {
      return App.ALBUM_FIXTURES;
    }
  });

  // App.Album = Ember.Object.extend({
  //   total_duration: function() {
  //     var songs = this.get("songs");
  //     var total = 0;
  //     songs.forEach(function(song){
  //       total += songs.get("duration");
  //     });
  //     return total;
  //   }.property(this.songs)
  // });

  App.AlbumRoute = Ember.Route.extend({
    model: function(params) {
      return App.ALBUM_FIXTURES.findProperty('id', params.album_id);
    }
  });

  App.Router.map(function() {
    this.resource('album', { path: '/album/:album_id' });
  });

  Ember.Handlebars.helper('format-duration', function(value, options) {
    var wholeMin = Math.floor(value/60);
    var remainSec = value%60;
    var wholeSec = (remainSec < 10) ? '0'+remainSec : remainSec;
    return new Handlebars.SafeString(wholeMin+':'+wholeSec);
  });
})();
