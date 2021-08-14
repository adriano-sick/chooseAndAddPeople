// Adriano Siqueira - 8/14/2021 - Choose and add people

var app = angular.module("TossThenApp", []);

app.controller("MovePeopleController", function($scope) {

    $scope.collection = [];

    $scope.addThisOne = function(leader) {
        $scope.collection.push(leader);
    }

    $scope.leaders = [
        {"pic" : "./assets/img/cleopatra.webp",     "name" : "Cleopatra"},
        {"pic" : "./assets/img/genghiskhan.webp",   "name" : "Genghiskhan"},
        {"pic" : "./assets/img/ghandi.webp",        "name" : "Ghandi"},
        {"pic" : "./assets/img/montezuma.webp",     "name" : "Montezuma"},
        {"pic" : "./assets/img/pachacuti.webp",     "name" : "Pachacuti"},
        {"pic" : "./assets/img/pedro2.webp",        "name" : "D. Pedro II"},
        {"pic" : "./assets/img/saladin.webp",       "name" : "Saladin"},
        {"pic" : "./assets/img/victoria.webp",      "name" : "Victoria Queen"}
    ]
});