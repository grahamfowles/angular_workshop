var angular = require('angular');

angular.module('app.list', [])
    .controller('ListCtrl', require('./list/list-controller'))
    .directive('listSearch', require('./list-search/list-search'));

angular.module('app.movie', [])
    .factory('MovieService', require('./movie-service/movie-service'));

angular.module('app.movie.header', [])
    .controller('MovieHeaderCtrl', require('./movie-header/movie-header-controller'));

angular.module('app.movie.details', [])
    .controller('MovieDetailsCtrl', require('./movie-details/movie-details-controller'));

angular.module('app.rating', [])
    .directive('rating', require('./rating/rating'));