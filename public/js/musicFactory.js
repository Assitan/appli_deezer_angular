app.factory('musicFactory', ['$http', function ($http){
    var trackIdPif = Math.random() * 9999999 | 0;
    var artist = '';
    var url = 'http://api.deezer.com/album/?q=' + artist + '&output=jsonp&callback=JSON_CALLBACK';

    return{
        get: function(){
            return $http.jsonp(url);   
        }
    };

}]);

