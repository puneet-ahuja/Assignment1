

function CustomReduce(callback , initialValue){

    var accumulator = undefined;
    var element = undefined;
    var index = undefined;

    if(initialValue === undefined  && this.length == 0){
        throw new TypeError("CustomReduce of empty array with no initial value");
    }
    accumulator = initialValue || this[0];

    ;

    for( index = initialValue ? 0:1 ; index < this.length ; index++){

            element = this[index];
         
            accumulator = callback(accumulator,element , index , this)    
        }

    

    return accumulator;

}

Array.prototype.CustomReduce = CustomReduce;

var arr = [1,2,3];

function sum(a,b){
    return a + b;
}

arr.CustomReduce(sum , 0);




// ****************************************************


function CustomReduceRight(callback , initialValue){

    var accumulator = undefined;
    var element = undefined;
    var index = undefined;

    if(initialValue === undefined  && this.length == 0){
        throw new TypeError("CustomReduce of empty array with no initial value");
    }
    accumulator = initialValue || this[this.length-1];

    ;

    for( index = initialValue?this.length-1: this.length-2 ; index >= 0  ; index--){

            element = this[index];
         
            accumulator = callback(accumulator,element , index , this)    
        }

    

    return accumulator;

}

Array.prototype.CustomReduceRight = CustomReduceRight;

var arr = [1,2,3];

function sum(a,b){
    return a + b;
}

arr.CustomReduceRight(sum , 0);

var a = ['1', '2', '3', '4', '5']; 
var left  = a.reduce(function(prev, cur)      { return prev + cur; }); 
var right = a.CustomReduceRight(function(prev, cur) { return prev + cur; }); 

console.log(left);  // "12345"
console.log(right); // "54321"
