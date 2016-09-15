(function(){
    angular
        .module("Michael Rascati")
        .config(Config);

    function Config($routeProvider) {
        $routeProvider
            .when("html/contact", {
                templateUrl: "contact.html",
                // controller: "HomeController",
                // controllerAs: "model",
            });
            // .when("/login", {
            //     templateUrl: "views/user/login.view.client.html",
            //     controller: "LoginController",
            //     controllerAs: "model"
            // })
            // .otherwise({
            //     redirectTo: "/home"
            // });
    }
})();