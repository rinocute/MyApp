// angular.module('userApp', ['appRoutes', 'userControllers', 'userServices',
//  'ngAnimate', 'mainController', 'authServices', 'emailController', 'managementController'])



angular.module('userApp',['appRoutes', 'userControllers' ,'userServices',
'ngAnimate', 'mainController', 'authServices'])

.config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptors');
});
