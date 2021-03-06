function Curry(fn){
    var count = 0;
    var pos = 0;
    var tempArgs = undefined;
    var remPosition = [];
  
    if(count < fn.length){
  	    return function inner(){
              if(count == 0){
                  tempArgs = [];
              }
   
    	var argsArr = Array.prototype.slice.call(arguments);
      
        if(pos >= fn.length){
            for(var i = 0 ; i < argsArr.length ; i++){
                var tempPos = remPosition.splice(0,1)[0];
                if(argsArr[i] === '*'){
                //store position somewhere
                remPosition.push(tempPos);
                }
                else{
                    
                    tempArgs[tempPos] = argsArr[i];
                    count++;
                }
            }
        }
        else{
            for(var i = 0 ; i < argsArr.length ; i++){
                if(argsArr[i] === '*'){
                    //store position somewhere
                    remPosition.push(pos);
                }
                else{
                    tempArgs[pos] = argsArr[i];
                    count++;
                }
                pos++;
                
            }
      }

      if(count < fn.length){
          return inner;
      }
      else{
		count = 0;
        pos = 0;
        
  		return fn.apply(null , tempArgs);
      }
    
  
      
    }
  }
  

}

function printArgsInSequence(a,b,c){
	return "First Argument : " + a + "\nSecond Argument :" + b + "\nThird Argument :" + c;
}

var printInSeq = Curry(printArgsInSequence);

printInSeq(1)(2)(3);
printInSeq(1)()(2)(3);
printInSeq(1,2)(3);
printInSeq(1)(2,3);
printInSeq(1,'*')(3)(2);
