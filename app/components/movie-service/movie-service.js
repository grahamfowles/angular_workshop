module.exports = MovieService;
module.exports.$inject = ['$http', '$q'];

var _ = require('lodash');

function MovieService($http, $q) {
    var search = {};
    var movies = [];

    return {
        search: search,
        getMovie: getMovie,
        getRating: getRating,
        setRating: setRating,
        loadMovies: loadMovies
    };

    function getMovie(id){
        return _.find(movies, {id: parseInt(id)});
    }

    function getRating(id){
        return localStorage.getItem('rating-' + id) || 0;
    }

    function setRating(id, rating){
        localStorage.setItem('rating-' + id, rating);
    }

    function loadMovies(){
        // need to implement this function
        movies = [
            {id: 0, title: 'Movie From Service Title 0', year: '2016', director: 'Director 0', cast: ['Star 1', 'Star 2', 'Star 3'], description: 'Description 0', country: 'USA', imageUrl: 'http://ia.media-imdb.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_UX182_CR0,0,182,268_AL_.jpg'},
            {id: 1, title: 'Movie From Service Title 1', year: '2015', director: 'Director 1', cast: ['Star 1', 'Star 2', 'Star 3'], description: 'Description 1', country: 'USA', imageUrl: 'http://ia.media-imdb.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_UX182_CR0,0,182,268_AL_.jpg'},
            {id: 2, title: 'Movie From Service Title 2', year: '2014', director: 'Director 2', cast: ['Star 1', 'Star 2', 'Star 3'], description: 'Description 2', country: 'USA', imageUrl: 'http://ia.media-imdb.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_UX182_CR0,0,182,268_AL_.jpg'},
            {id: 3, title: 'Movie From Service Title 3', year: '2013', director: 'Director 3', cast: ['Star 1', 'Star 2', 'Star 3'], description: 'Description 3', country: 'USA', imageUrl: 'http://ia.media-imdb.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_UX182_CR0,0,182,268_AL_.jpg'},
            {id: 4, title: 'Movie From Service Title 4', year: '2012', director: 'Director 4', cast: ['Star 1', 'Star 2', 'Star 3'], description: 'Description 4', country: 'USA', imageUrl: 'http://ia.media-imdb.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_UX182_CR0,0,182,268_AL_.jpg'},
            {id: 5, title: 'Movie From Service Title 5', year: '2011', director: 'Director 5', cast: ['Star 1', 'Star 2', 'Star 3'], description: 'Description 5', country: 'USA', imageUrl: 'http://ia.media-imdb.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_UX182_CR0,0,182,268_AL_.jpg'},
            {id: 6, title: 'Movie From Service Title 6', year: '2010', director: 'Director 6', cast: ['Star 1', 'Star 2', 'Star 3'], description: 'Description 6', country: 'USA', imageUrl: 'http://ia.media-imdb.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_UX182_CR0,0,182,268_AL_.jpg'},
            {id: 7, title: 'Movie From Service Title 7', year: '2009', director: 'Director 7', cast: ['Star 1', 'Star 2', 'Star 3'], description: 'Description 7', country: 'USA', imageUrl: 'http://ia.media-imdb.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_UX182_CR0,0,182,268_AL_.jpg'},
            {id: 8, title: 'Movie From Service Title 8', year: '2008', director: 'Director 8', cast: ['Star 1', 'Star 2', 'Star 3'], description: 'Description 8', country: 'USA', imageUrl: 'http://ia.media-imdb.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_UX182_CR0,0,182,268_AL_.jpg'},
            {id: 9, title: 'Movie From Service Title 9', year: '2007', director: 'Director 9', cast: ['Star 1', 'Star 2', 'Star 3'], description: 'Description 9', country: 'USA', imageUrl: 'http://ia.media-imdb.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_UX182_CR0,0,182,268_AL_.jpg'}
        ];
        return $q.resolve(movies);
    }
}