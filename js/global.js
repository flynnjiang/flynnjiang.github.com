jQuery.githubUser = function(username, callback) {
  jQuery.getJSON("http://github.com/api/v1/json/" + username + "?callback=?", callback);
};

jQuery.fn.loadRepositories = function(username) {
  this.html("<span>Querying GitHub for repositories...</span>");

  var target = this; 
  $.githubUser(username, function(data) {
    var repos = data.user.repositories;
    sortByNumberOfWatchers(repos);

    $(repos).each(function() {
      target.append('<dl>'
                  + '<dt><a href="'+ this.url + '">' + this.name + '</a></dt>'
                  + '<dd>' + this.description + '</dd>'
                  + '</dl>');
    });
  });

  function sortByNumberOfWatchers(repos) {
    repos.sort(function(a,b) {
      return b.watchers - a.watchers;
    });
  }
};
