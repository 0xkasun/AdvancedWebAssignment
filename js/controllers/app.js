function playerControl($scope){
    //$scope.cmb="colombo";
    //$scope.sidebarURL=null;
    //
    //$scope.setURL=function(name){
    //$scope.sidebarURL='partials/'+name+'.html';
    //}

    $scope.setActive=function(type){
        $scope.bobbyActive='';
        $scope.magnusActive='';
        $scope[type+ 'Active']='active';

    }




}

