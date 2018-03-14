angular
    .module('myApp')
    .directive('headerDirective', headerDirective);

function headerDirective() {
    var directive = {
        link: link,
        templateUrl: '/common/header/header.html',
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
      /* */
    }
}