function partial(fn){
	var start_args = Array.prototype.slice.call(arguments , 1);
	var currentThis = this;
	return function(){
		console.log(start_args.concat(arguments));
		return fn.apply(currentThis,start_args.concat(Array.prototype.slice.call(arguments)));
	}
}
***********
var sum3 = partial(sum , 1 ,2);
****************
sum3(1,2,3);
******************
9
