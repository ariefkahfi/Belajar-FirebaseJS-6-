import * as angular from 'angular';
import * as ang_route from 'angular-route';

let app = angular.module('mainApp',['ngRoute']);

app.config(($routeProvider)=>{
   $routeProvider
       .when('/chat',{
          templateUrl : '../templates/ChatTemplate.html',
          controller : 'chatController'
       })
       .when('/about',{
           templateUrl : '../templates/AboutTemplate.html',
           controller : 'aboutController'
       }).when('/sign-up',{
         templateUrl : '../templates/SignUpTemplate.html',
         controller : 'signUpController'
       }).otherwise({
           templateUrl : '../templates/HomeTemplate.html'
       });
});

export {app}