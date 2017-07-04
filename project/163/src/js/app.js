/**
 * Created by Administrator on 2017/6/22 0022.
 */
angular.module("myApp",["ionic","myApp.controller"])
    .config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider

            .state("slide",{
                url : "/",
                templateUrl:"views/slide.html"
            })
            .state("tabs",{
                url:"/tabs",
                abstract:true,
                templateUrl:"views/main.html"
            }).state("tabs.home", {
                url: "/home",
                views:{
                    "tabs-home":{
                        templateUrl: "views/home.html",
                        controller: "HomeController"
                    }

                }

            })
            .state("tabs.newsdetail", {
                url: "/newsdetail/:id",
                views:{
                    "tabs-home":{
                        templateUrl: "views/newsdetail.html",
                        controller: "NewsDetailController"
                    }

            }

        });
    }]);