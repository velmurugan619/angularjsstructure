angular.module('myApp')
    .service('loginService', loginService);

function loginService($http) {


    this.loginUser = loginUser;
    function loginUser(data) {
        // return $http.post('http://infinijith.com/public/api/consumer/authenticate', data);
        return $http.post('http://infinijith.com/AgroDeals/API/public/api/consumer/authenticate', data,  {
            headers: { 'Content-Type': 'application/json'}});
    }
}
