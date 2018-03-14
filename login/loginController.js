angular.module('myApp')
.controller('loginCtrl',loginCtrl);
loginCtrl.$inject = ['loginService'];
function loginCtrl(loginService) {
    var login = this;
    login.onSubmit = onSubmit;
    function onSubmit(data) {  
        // console.log(data.email.$viewValue);
        userData = {};
        userData = { email: data.email.$viewValue, password: data.password.$viewValue }
        loginService.loginUser(userData).then(function(response){
            login.user = response.data;
        });
    };
}