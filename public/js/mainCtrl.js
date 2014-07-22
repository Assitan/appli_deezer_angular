app.controller('MainCtrl', ['$scope', 'musicFactory',function ($scope, musicFactory){
    $scope.videos = [];

    musicFactory.get()
        .success(function(data){
            console.log(data);
        }).error(function(err){
            console.log('erreur: ' + err);
    });

}]);

