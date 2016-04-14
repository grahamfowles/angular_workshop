module.exports = ListSearchDirective;

function ListSearchDirective() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/list-search/list-search.html',
        controller: ['MovieService', ListSearchCtrl],
        controllerAs: 'listSearchCtrl',
        scope:{}
    };
}

function ListSearchCtrl(MovieService){
    var controller = this;

    controller.MovieService = MovieService;
}

