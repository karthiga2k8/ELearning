eLearningApp.controller(registerSuccessController,['$scope','registerDetails',registerSuccessController]);
function registerSuccessController($scope,registerDetails){
 	
	
		$scope.email = registerDetails.getEmailData();
		$scope.name = registerDetails.getNameData();
		$scope.webinarDetails = webinarDetailsJSON;


		$scope.sortType = 'Place';
		$scope.sortReverse = true;
	
}
