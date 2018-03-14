angular.module('myApp')
.controller('aboutCtrl',aboutCtrl);
function aboutCtrl() {
    var about = this;
    about.getAbout = getAbout;
    function getAbout() {  
        about.name = 'About';
    };
}