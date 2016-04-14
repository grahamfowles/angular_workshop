module.exports = MovieDetailsCtrl;
module.exports.$inject = ['$stateParams', 'MovieService'];

function MovieDetailsCtrl($stateParams, MovieService) {
    var controller = this,
        movieId = $stateParams.id;

    controller.movie = MovieService.getMovie(movieId);

    if(!controller.movie){
        MovieService.loadMovies()
            .then(function(){
                controller.movie = MovieService.getMovie(movieId);
            })
    }
    controller.getListOfStars = getListOfStars;
    controller.getRating = getRating;

    function getListOfStars(){

        return controller.movie.cast.join(', ');
    }

    function getRating(){
        return MovieService.getRating(movieId);
    }
}