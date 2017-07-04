/**
 * Created by Administrator on 2017/6/6 0006.
 */
angular.module("myApp", ["ui.router", "myApp.controller"])
    .config(function ($stateProvider, $urlRouterProvider,$httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        var param = function(obj) {
            var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
            for (name in obj) {
                value = obj[name];
                if (value instanceof Array) {
                    for (i = 0; i < value.length; ++i) {
                        subValue = value[i];
                        fullSubName = name + '[' + i + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                } else if (value instanceof Object) {
                    for (subName in value) {
                        subValue = value[subName];
                        fullSubName = name + '[' + subName + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                } else if (value !== undefined && value !== null)
                    query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
            }
            return query.length ? query.substr(0, query.length - 1) : query;
        };
        $httpProvider.defaults.transformRequest = [
            function(data) {
                return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
            }
        ];
        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state("home", {     /*这个状态名是用来切换的， 一般是超连接的ui-sref的值*/
                url: "/home",    /*这个url用来追加到地址后的附加信息*/
                templateUrl: "views/home.html",    /*是用来插入到ui-view里面的代码*/
                controller: "HomeController"
            }
            )
            .state("register",{
                url:"/register",
                templateUrl : "views/register.html",
                controller : "RegisterController"
            });
    });