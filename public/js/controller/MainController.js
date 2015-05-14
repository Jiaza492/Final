// MainController
app.controller('MainController', function($scope, $window, HomeworkFactory){
		// return homework list from factory
		$scope.homeworks = HomeworkFactory.getHomework();
		
		// define goDetail function
		$scope.goDetail = function(homework){
				if(!homework.askDetail){
					homework.askDetail = true;
				}else{
					homework.askDetail = false;
				}
			}
	
	})