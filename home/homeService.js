angular.module('myApp')
    .service('homeService', homeService);

function homeService($http) {


    this.getUser = getUser;
    function getUser() {
        return $http.get('https://www.w3schools.com/angular/customers.php');
        //     .then(getUserComplete)
        //     .catch(getUserFailed);

        // function getUserComplete(response) {
        //     return response.data;
        // }

        // function getUserFailed(error) {
        //     logger.error('XHR Failed for get User.' + error.data);
        // }
    }
}

// angular.module('myApp')
// .service('homeService', homeService);
// homeService.$inject = ['$http'];
// function homeService($http) {
//     this.getUser  = getUser;
//     function getUser() {
//         return 'success';
//     }
// }