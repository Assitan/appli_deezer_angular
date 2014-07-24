'use strict';

app.controller('MainCtrl', ['$scope', 'musicFactory',function ($scope, musicFactory){
    $scope.artists = [];

    $scope.searchMusic = function() {
        var duree =  0;
        var minutes = 0;
        var min = 0;
        var totalTime = 0;
    //var search_artist = "https://api.deezer.com/search/artist/?q=" + $scope.search.music+ "&output=jsonp&callback=JSON_CALLBACK";
        if($scope.search.music.length < 3) return false;

        $.ajax({
            type: 'GET',
            dataType: 'jsonp',
            url: 'http://api.deezer.com/search/track/artist',
            data: {
                output: 'jsonp',
                q: $scope.search.music
            }
        }).done(function(response){
           $scope.artists = response.data;
           console.log(response.data);
  
            for (var i = 0; i < response.data.length; i++) {
                duree = response.data[i].duration;
                minutes = duree/60;
                min = minutes.toFixed(2).match(/\d+/g);
                totalTime = min[0] + ':' + min[1];
                response.data[i].duration = totalTime;
           }
        });
    };

}])
    .filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);

