module.exports = MovieHeaderCtrl;
module.exports.$inject = ['MovieService', '$stateParams', '$state'];

function MovieHeaderCtrl(MovieService, $stateParams, $state) {
    var controller = this,
        movieId = $stateParams.id;

    controller.movie = MovieService.getMovie(movieId);
    controller.back = back;

    function back(){
        $state.go('list');
    }
}