/**
 * Created by Administrator on 2017/6/6 0006.
 */
/*
 定义模块
 定义控制器
 1. 访问http://localhost:3000/IndexInfo得到数据
 2. 分开存放
 * */
angular.module("myApp.controller", [])
    /*.controller("HomeController", function($scope, $http){
        $scope.homeData = {
            slideData: []
        };
        var url = "http://192.168.2.68:3000/IndexInfo";
        $http({
            url: url,
            method: "get"
        }).then(function(res){
            //console.log(res);
            if(res.data.resultCode == "0000"){
                $scope.homeData.slideData = res.data.result.slides;

                $scope.homeData.hotData = res.data.result.hot;
                console.log(res.data.result.hot);
            }
        }, function(err){
            console.log(err);
        });
    })*/
    .controller("HomeController", function($scope, $http){
        $scope.homeData = {
            slideData: [],
            unitData: [],
            newData : [],
            hotData : []
        };
        var url = "http://192.168.2.54:3000/IndexInfo";
        $http({
            url: url,
            method: "get"
        }).then(function(res){
            console.log(res);
            if(res.data.resultCode == "0000"){
                $scope.homeData.slideData = res.data.result.slides;
                $scope.homeData.unitData = res.data.result.unit;
                $scope.homeData.newData = res.data.result.new;
                $scope.homeData.hotData = res.data.result.hot;

            }
        }, function(err){
            console.log(err);
        });
    })

    .controller("RegisterController",function ($scope,$http) {
        $scope.reg = function(b){
            if(b){              //只有表达式myForm.$valid && pwd1==pwd2为真
                $http({
                    url: "http://192.168.2.54:3000/user/reg",
                    method: "post",
                    data: {
                        name: $scope.username,
                        phone: $scope.phone,
                        password: $scope.pwd1,
                        passwordRepeat: $scope.pwd2
                    }
                }).then(function(res){
                    console.log(res);
                }, function (err) {
                    console.log(err);
                });
            }else{
                alert("error!");
            }
        };
    });
