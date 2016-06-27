	
	// Angular ToDo
	
	var app = angular.module('myApp', []);
	app.controller('todo', function($scope) {
		$scope.todoList = [{todoText:'Clean House', done:false}];

		$scope.todoAdd = function() {
			$scope.todoList.push({todoText:$scope.todoInput, done:false});
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

	  
	// Initialize Firebase
	  
	  var config = {
		apiKey: "",
		authDomain: "",
		databaseURL: "",
		storageBucket: "",
	  };
	  firebase.initializeApp(config);