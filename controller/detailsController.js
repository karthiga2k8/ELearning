eLearningApp.controller(courseDetailsCntrl,['$scope','$stateParams',courseDetailsCntrl]);
function courseDetailsCntrl($scope,$stateParams){
 	 $scope.name = $stateParams.name;
	 $scope.link = $stateParams.link;
	
}


