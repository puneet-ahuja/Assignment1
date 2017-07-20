function ObjectTrie(){

}

ObjectTrie.prototype.setSetting = setSetting;
var obj = new ObjectTrie();

var objNormal = {};



function setSetting(pathInArr , value , canReset){
    
    var obj = new ObjectTrie();

    

    if(pathInArr.length === 0){
        return value;
    }

    if(! (pathInArr[0] in this))  {
        obj[pathInArr[0]] = new ObjectTrie();
        obj[pathInArr[0]] = obj[pathInArr[0]].setSetting(pathInArr.splice(1) , value , canReset);

    }
    else{
        var temp = this[pathInArr[0]];
        if(typeof temp === "number"){
            if(canReset){
                temp = new ObjectTrie();
            }
            else{
                throw "Cannot Add";
            }

        }
        
        obj[pathInArr[0]] = temp.setSetting(pathInArr.splice(1) , value , canReset);
        
    }

    for (var prop in this) {
            // skip loop if the property is from prototype
            if(!this.hasOwnProperty(prop)) continue;

            // your code
            if(prop == pathInArr[0]){
                continue;
            }
            obj[prop] = this[prop];
        }


    return obj;

}

ObjectTrie.prototype.setSetting = setSetting;


var obj1 = new ObjectTrie();

var obj2 = obj1.setSetting(["A","b"] , 20);

// var obj3 = obj2.setSetting(["A" , "C"] , 30);

// obj2.A.b === obj3.A.b

// obj2.A === obj3.A


// var obj4 = obj3.setSetting([ "C" , "D"] , 50);


// obj3.A === obj4.A
// true
// obj3.A.b === obj4.A.b
// true
// obj3.A.C === obj4.A.C
// true
// obj3.C
// undefined

// var obj5 = obj4.setSetting([ "A" , "b" , "E"] , 50);

var obj5 = obj4.setSetting([ "A" , "b" , "E"] , 50 , true);



obj4.A === obj5.A
false
obj4.A.b === obj5.A.b
false
obj4.A.C === obj5.A.C
true
obj4.C === obj5.C
true
obj4.C.D === obj5.C.D
true
