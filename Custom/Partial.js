function partial(fn){
	var start_args = Array.prototype.slice.call(arguments , 1);
	var currentThis = this;
	return function(){
		
		return fn.apply(currentThis,start_args.concat(Array.prototype.slice.call(arguments)));
	}
}
***********
var sum3 = partial(sum , 1 ,2);
****************
sum3(1,2,3);
******************
9


//********************************
function partialRight(fn){
	var start_args = Array.prototype.slice.call(arguments , 1);
	var currentThis = this;
	return function(){
		var finalArgs = Array.prototype.slice.call(arguments).concat(start_args);
		if(finalArgs.length > fn.length){
			finalArgs = finalArgs(finalArgs.length - fn.length,finalArgs.length)
		}
		return fn.apply(currentThis,finalArgs);
	}
}
