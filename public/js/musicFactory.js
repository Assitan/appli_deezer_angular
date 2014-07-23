'use strict';

app.factory('musicFactory', ['$http', function ($http){

    return{

        /*get: function(query){

            return $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            url: 'http://api.deezer.com/search/track/',
                data: {
                    output: 'jsonp',
                    q: query
                }
            });
        }*/
    };

}]);


