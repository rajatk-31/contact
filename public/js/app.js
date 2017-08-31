  var app = angular.module("addrBook",[]);
        app.controller("myCtrl",function($scope, $http){
            $scope.info = [
                {First_Name:"Chandler", Last_Name:"Bing",tel:"012-345-6789"},
                {First_Name:"Joey", Last_Name:"Tribbiani",tel:"012-345-6789"},
                {First_Name:"Ross", Last_Name:"Geller",tel:"012-345-6789"}
            ];
            $http({
            url: 'http://localhost/contact/public/index.html',
            method: 'POST',
            info: $scope.info,
        })
            
            $scope.addMe = function(){
                return {
                    First_Name: $scope.newFirstName,
                    Last_Name: $scope.newLastName,
                    tel:$scope.newTel
                }
            }
            $scope.addItem = function(){
             for(var i=0;i<$scope.info.length;i++){
                 if(($scope.info[i].First_Name == $scope.addMe().First_Name)||
                    ($scope.info[i].Last_Name == $scope.addMe().Last_Name)||
                    ($scope.info[i].tel == $scope.addMe().tel)){
                     alert("name or telphone number was repeated");
                     return false;
                 }
             }
             $scope.info.push($scope.addMe());
              }
                
            $scope.removeItem = function(){
                $scope.info.splice(this.$index,1)
            }
                  
            $scope.change = function(){
              index = this.$index;
              $scope.showMe = function(indx){
                  if(indx == index){
                   return true;                 
                  }
              }    
            }
            $scope.save = function(){
              index = this.$index;
              $scope.showMe = function(indx){
                  if(indx == index){
                   return false;                 
                  }
              }    
            }            
        })