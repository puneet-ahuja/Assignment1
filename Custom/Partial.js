function partial(fn){
	var start_args = Array.prototype.slice.call(arguments , 1);
	var currentThis = this;
	return function(){
		
		return fn.apply(currentThis,start_args.concat(Array.prototype.slice.call(arguments)));
	}
}
// ***********
// var sum3 = partial(sum , 1 ,2);
// ****************
// sum3(1,2,3);
// ******************
// 9

function printArgsInSequence(a,b,c){
	return "First Argument : " + a + "\nSecond Argument :" + b + "\nThird Argument :" + c;
}

var printInSeq = partial(printArgsInSequence , 1,2);

printInSeq(3);

var printInSeq = partial(printArgsInSequence , 1,2 , 3,4);

printInSeq(3);

var printInSeq = partial(printArgsInSequence , 1);

printInSeq(3);


//********************************
function partialRight(fn){
	var start_args = Array.prototype.slice.call(arguments , 1);
	var currentThis = this;
	return function(){
		var finalArgs = Array.prototype.slice.call(arguments).concat(start_args);
		if(finalArgs.length > fn.length){
			finalArgs = finalArgs.splice(finalArgs.length - fn.length,finalArgs.length)
		}
		return fn.apply(currentThis,finalArgs);
	}
}

function printArgsInSequence(a,b,c){
	return "First Argument : " + a + "\nSecond Argument :" + b + "\nThird Argument :" + c;
}

var printInSeq = partialRight(printArgsInSequence , 1,2);

printInSeq(3);


var printInSeq = partialRight(printArgsInSequence , 1,2 ,  3 , 4);

printInSeq(3);

var printInSeq = partialRight(printArgsInSequence , 1);

printInSeq(3);

