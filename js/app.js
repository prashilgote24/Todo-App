/**
 * Created by prashilg on 1/22/2015.
 */
angular.module("todoApp",[])
    .controller("MainCtrl", function($scope){
        $scope.todos = [];

        $scope.add = function(){
            $scope.todos.push($scope.newTodo);
            $scope.newTodo = {};
        }

        $scope.delete = function(item){
            var index = $scope.todos.indexOf(item);
            $scope.todos.splice(index, 1);
        }

        $scope.clear = function(){
            $scope.todos.forEach(function(todo){
                if(todo.completed){
                    $scope.todos.splice($scope.todos.indexOf(todo), 1);
                   // $scope.delete(todo);
                }
            })
        }

});