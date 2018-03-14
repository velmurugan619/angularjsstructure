angular.module('myApp')
    .controller('homeCtrl', homeCtrl);
    homeCtrl.$inject = ['homeService'];
function homeCtrl(homeService) {
    var home = this;
    home.name = "sdfdsfsd"
    home.getHome = getHome;
    function getHome() {
        home.name = 'Home';
        homeService.getUser().then(function(response){
            home.user = response.data.records;
        });
    };
    
}