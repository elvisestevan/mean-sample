myApp.controller('homeController', ['$scope', function($scope) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;
    
    slides.push({
        image: 'img/img1.jpg',
        text: 'Image ' + (slides.length + 1),
        id: currIndex++
    });
    
    slides.push({
        image: 'img/img2.jpg',
        text: 'Image ' + (slides.length + 1),
        id: currIndex++
    });
    
    slides.push({
        image: 'img/img3.jpg',
        text: 'Image ' + (slides.length + 1),
        id: currIndex++
    });
}]);