// Adriano Siqueira - 8/14/2021 - Choose and add people

var app = angular.module("TossThenApp", []);

app.controller("MovePeopleController", function($scope) {

    $scope.collection = [];

    $scope.addThisOne = function(leader) {
        if ($scope.collection.indexOf(leader) > -1) {
            alert("This one it's already on list!!!")
        }
        else {
            $scope.collection.push(leader);
        }
    }

    $scope.removeThisOne = function(collect) {
        let leaderIndex = $scope.collection.indexOf(collect);
        $scope.collection.splice(leaderIndex, 1);    
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