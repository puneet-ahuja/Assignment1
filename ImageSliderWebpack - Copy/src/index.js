// var togglePopup = require('./zoomInOut');
import {togglePopup} from './zoomInOut';
import './styles.css';
(function(){
    
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

    var images = document.getElementsByTagName('img');



    
    liWidth = listElements[0].getBoundingClientRect().width;
    var minLeftValue = -((noOfImages-1) * liWidth); 
    imageList.style.width = liWidth * noOfImages + 'px';
    imageList.style.left = '0px';
    for(var listIndex = 0 ; listIndex < listElements.length ; listIndex++ ){
        var listElement = listElements[listIndex];
        listElement.style.width = liWidth + 'px';
    }

    function registerEvents(){
        leftArrow.addEventListener('click' , leftArrowCH);
        rightArrow.addEventListener('click' , rightArrowCH);
        imgContainer.addEventListener( 'mousedown', mouseDownHandler);
        imgContainer.addEventListener('mouseup' , mouseUpHandler);

        for(var index = 0 ; index < images.length ; index++){
            images[index].addEventListener('click' ,clickOnImgHandle );
        }
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


    /***********************************
    **********  MOUSE EVENTS  **********
    ************************************/

    var startXPos = undefined;
    var endXPos = undefined;

    function mouseDownHandler(){
        console.log("Mouse Down");
        mouseMoveRequired = true;
        imgContainer.addEventListener('mousemove' , mouseMoveHandler);
        imgContainer.addEventListener('mouseout' , mouseUpHandler);

        startXPos = parseInt(imageList.style.left);
        
    }

    function mouseUpHandler(){
        console.log("Mouse UP");
        mouseMoveRequired = false;
        xcoord = 0;
       
      
        endXPos = parseInt(imageList.style.left);
        //Do Some Logic to perform
        var displacement = startXPos - endXPos;
        if(displacement > 0){
            if(displacement < liWidth/2){
                imageList.style.left = startXPos + 'px';
            }
            else{
                imageList.style.left = startXPos - liWidth + 'px';
                leftCount++;
            }
        }
        else{
            displacement = Math.abs(displacement);
            if(displacement < liWidth/2){
                imageList.style.left = startXPos + 'px';
            }
            else{
                imageList.style.left = startXPos + liWidth + 'px';
                leftCount--;
            }
        }
        
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
            var newLeft= currentLeft - diff ;

            
            if(newLeft > 0){
                console.log("Cannot Move Right");
            }
            else if(newLeft < minLeftValue){
                console.log("Cannot Move Left");
            }
            else{
               imageList.style.left = newLeft + 'px'; 
            }
            
        }

    }
    var origHeight = undefined;
    var origWidth = undefined;

    function clickOnImgHandle(event){

        if(startXPos !== endXPos){
            return;
        }
        if(startXPos == 0 && endXPos==0){
            return;
        }
        
        var overlay = document.getElementById("overlay");
        var popup = event.currentTarget;
        if(overlay.style.height === "100%"){
            togglePopup.hidePopup(popup , overlay);
            popup.removeEventListener('wheel' , wheelEventHandler);
        }
        else{
            
            togglePopup.showPopup(popup , overlay);
            popup.addEventListener('wheel' , wheelEventHandler);
        }
        
        
        event.preventDefault();
    }

    function wheelEventHandler(event){
        debugger;
        var heightWidth = parseInt(this.style.height);
        var remHeightWidth = (100 - heightWidth)/2;
        
        if(event.deltaY < 0){
            heightWidth -= 2;
            remHeightWidth +=1;

            
        }
        else{
            heightWidth += 2;
            remHeightWidth -=1;
            
        }
        this.style.height = heightWidth+"%";
        this.style.width = heightWidth+"%";
        this.style.top = remHeightWidth+"%";
        this.style.left = remHeightWidth+"%";
    }

 

    /***********************************
    *******  END OF MOUSE EVENTS  ******
    ************************************/


    function init(){
        registerEvents();
    }

    init();


    
  


})();

 

  
 