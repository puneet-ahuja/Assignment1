var scriptOutput =(function(){
    
    var liWidth = undefined;
    var xcoord = 0;
    var mouseMoveRequired = false;

  
    var noOfImages = 8;
    var leftCount = 0;

    var listElements = document.getElementsByClassName('listElement');

    var leftArrow = document.getElementById('leftArrow');
    var rightArrow = document.getElementById('rightArrow');
    
    var imageList = document.getElementById('imageList');

    var imgContainer = document.getElementById('imageContainer');



    
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

     function mouseDownHandler(){
        console.log("Mouse Down");
        mouseMoveRequired = true;
        imgContainer.addEventListener('mousemove' , mouseMoveHandler);
        imgContainer.addEventListener('mouseout' , mouseUpHandler);
        
    }

    function mouseUpHandler(){
        console.log("Mouse UP");
        mouseMoveRequired = false;
        xcoord = 0;
        imgContainer.removeEventListener('mousemove' , mouseMoveHandler);
        imgContainer.removeEventListener('mouseout' , mouseUpHandler);
    }

    function mouseMoveHandler(event){
        if(mouseMoveRequired){
            var imageList = document.getElementById('imageList');
            
            console.log("Mouse Moving client x : " + event.clientX );
            if(xcoord === 0){
                xcoord = event.clientX;
            }
            var curX = event.clientX;
            var diff = xcoord-curX;
            xcoord = curX;

            var currentLeft = parseInt(imageList.style.left);
            var newLeft= currentLeft - diff +'px';

            
            //check new Left and then perform transation
            imageList.style.left = newLeft;
        }

    }

  

    return{
        mouseDownHandler : mouseDownHandler,
        mouseUpHandler : mouseUpHandler
    }

})();

 

  
 