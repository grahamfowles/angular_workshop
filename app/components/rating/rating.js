module.exports = RatingDirective;

function RatingDirective() {
    return {
        // complete the directive
    };

    function link(scope){
        scope.$watch('rating', function(newValue){
            scope.ratingCtrl.rating = newValue;
        });
    }
}

function RatingCtrl($scope, MovieService){
    var controller = this;

    controller.RATING_OPTIONS = [1,2,3,4,5];
    controller.isFull = isFull;
    controller.setRating = setRating;
    controller.showRating = showRating;
    controller.resetRating = resetRating;

    function isFull(heart){
        return heart <= $scope.rating;
    }

    function setRating(rating){
        MovieService.setRating($scope.movieId, rating);
    }

    function showRating(rating){
        $scope.rating = rating;
    }

    function resetRating(){
        $scope.rating = MovieService.getRating($scope.movieId);
    }
}