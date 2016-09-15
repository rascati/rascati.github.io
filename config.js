(function(){
    angular
        .module("Michael Rascati")
        .config(Config);

    function Config($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "pages/home.html"
            })
            .when("/resume", {
                templateUrl: "pages/resume.html"
            })
            .when("/portfolio", {
                templateUrl: "pages/portfolio.html"
            })
            .when("/contact", {
                templateUrl: "pages/contact.html"
            })
            .otherwise({
                redirectTo: "/home"
            });
    }
})();