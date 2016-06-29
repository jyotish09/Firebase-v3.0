
	
	// Angular ToDo
	
	var app = angular.module('myApp', []);
	app.controller('todoCtrl', function($scope) {

		// Initialize Firebase
	  
		var config = {
			apiKey: "",
			authDomain: "",
			databaseURL: "",
			storageBucket: "",
		};
		
		firebase.initializeApp(config);
		
		//console.log(firebase);
		var ToDo = firebase.database().ref('ToDo');
		//var Sample = firebase.database().ref('Sample');
		
		
		
		// for(i in $scope.todoList){
		// 	console.log($scope.todoList[i]);
		// 	ToDo.push($scope.todoList[i]);
		// 	Sample.push($scope.todoList[i]);
		// }
		//$scope.todoList = [];

		
		// ToDo.on('value',function(todoResults){
		// 	var todos = todoResults.val();
		// 	$scope.todoRes = [];
			
		// 	//console.log("Reading from "+ToDo);
		// 	for(j in todos){
		// 		//console.log(todos[j]);
		// 		$scope.todoRes.push(todos[j]);	
		// 		//console.log($scope.todoRes);
		// 	}

		// 	setToDos($scope.todoRes);
		// });

		ToDo.once("value").then(function(snapshot){
				$scope.todoList=snapshot.val();
				console.log($scope.todoList);
			});

		function setToDos(x){
			console.log(x);
			$scope.todoList = x;
			$scope.$apply();
		}

		$scope.todoAdd = function() {
			ToDo.push({todoText:$scope.todoInput, done:false});
			$scope.todoInput = "";
		};

		$scope.remove = function() {
			var oldList = $scope.todoList;
			$scope.todoList = [];
			angular.forEach(oldList, function(x) {
				if (!x.done) $scope.todoList.push(x);
			});
		};
		
	});
