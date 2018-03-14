angular
    .module('myApp')
    .directive('footerDirective', footerDirective);

function footerDirective() {
    var directive = {
        link: link,
        templateUrl: '/common/footer/footer.html',
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
      /* */
    }
}