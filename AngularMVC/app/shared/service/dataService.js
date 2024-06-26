﻿(function () {
    'use strict';

    angular
        .module('app')
        .factory('dataService', ['$http', '$q', function ($http, $q) {
            var service = {};
            debugger
            service.getUsers = function () {
                var deferred = $q.defer();
                $http.get('/User/Index').then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.getUserById = function (id) {
                var deferred = $q.defer();
                $http.get('/User/Details' + id).then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.addUser = function (User) {
                var deferred = $q.defer();
                $http.post('/User/Create', user).then(function (result) {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.editUser = function (User) {
                var deferred = $q.defer();
                $http.post('/User/Edit', user).then(function (result) {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.deleteUser = function (id) {
                var deferred = $q.defer();
                $http.post('/User/Delete', { id: id }).then(function (result) {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            return service;
        }]);

})();