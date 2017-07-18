(function(){
    var liWidth = undefined;
  
    var noOfImages = 8;
    var leftCount = 0;

    var listElements = document.getElementsByClassName('listElement');

    var leftArrow = document.getElementById('leftArrow');
    var rightArrow = document.getElementById('rightArrow');
    
    var imageList = document.getElementById('imageList');



    
    liWidth = listElements[0].getBoundingClientRect().width;
    imageList.style.width = liWidth * noOfImages + 'px';
    imageList.style.left = '0px';
    for(var listIndex = 0 ; listIndex < listElements.length ; listIndex++ ){
        var listElement = listElements[listIndex];
        listElement.style.width = liWidth + 'px';
    }

    function registerEvents(){
        leftArrow.addEventListener('click' , leftArrowCH);
        rightArrow.addEventListener('click' , rightArrowCH);
    }

    function moveLeft(){
        var currentLeft = undefined;
        if(leftCount < noOfImages -1){
            currentLeft = parseInt(imageList.style.left);
            imageList.style.left = currentLeft - liWidth +'px';
            leftCount++;
        }
        else{
            console.log("Cannot move left");
        }
    }

    function moveRight(){
        var currentLeft = undefined;
        if(leftCount > 0){
            currentLeft = parseInt(imageList.style.left);
            imageList.style.left = currentLeft + liWidth +'px';
            leftCount--;
        }
        else{
            console.log("Cannot move right");
        }
    }


    function leftArrowCH(){
        moveLeft();
    }

    function rightArrowCH(){
        moveRight();
    }

    function init(){
        registerEvents();
    }

    init();

})();