// improved each 

function each(array, func){
    for(var i = 0; i<array.length; i++){
        func(array[i], i)
    }
}


//A- 1
function indexedExponentials(array){
	var outArr=[] ;
	each(array,function(element,i){
		outArr[i] = Math.pow(element,i)
	})
return outArr;
}

//A-2

function evenIndexedOddNumbers(array){
	var outArr = [] ;
	each(array, function(element, i){
		if (i%2 === 0 && element % 2 ===1){
		outArr.push(element)
		}
	})
	return outArr ;
}

//A-3

function evenIndexedEvenLengths (array){
	var outArr = [] ;
	each(array, function(element, i){
		if (i%2 === 0 && element.length % 2 === 0){
		outArr.push(element)
		}
	})
	return outArr ;
}


//each over array

//A-1

function values(obj){
    var outArr = [] ;
    each(obj, function(element, key){
        outArr.push(element)  ;
    })
    return outArr ;
}

function keys(obj){
    var outArr = [] ;
    each(obj, function(element, key){
        outArr.push(key)  ;
    })
    return outArr ;
}


//A-2

function keysLongerThan(obj, number){
    var outObj = {} ;
    each(obj, function(value, key){
        if(key.length > number){
            outObj[key]=value ;
        }
    })
    return outObj
}


//A-3

function incrementValues(obj){
    var outObj = {} ;
    each(obj, function (value, key){
        if(typeof(value) === 'number'){
            outObj[key]= value++  ;
        }
        outObj[key]=value ;
    })
    return outObj
}

A//4

var ex = {ages: [23, 44, {min: 1, max: 2}],
 people: {height: 'tall', eye_color: 'brown'}}; 

 

 function objectToArrayOrArrayToObject(obj){
    var outObj = {} ; 
    each(obj, function(value, key){
         if(Aray.isArray(value)){
             var subObj = {} ;
            each(array, function(element, index){
               subObj[index] = element ; 
            })
            outObj[key]=subObj
         }
         else{
             var subArr = [] ;
             each(obj, function(value, key){
                 subArr.push(value) ;
             })
             outObj[key]=subArr ;
         }
     })
     return outObj ;
 } 


//A-5

function oddEvenArray (obj){
    var outArray = [] ;
    each(obj, function(value, index){
        if(value % 2 === 1){
            outArray.unshift(value) ;
        }
        else{outArray.push(value) ;
        }
    })
    return outArray ;
}

//A-6 
function prime(number){
    for (var i = 2; i<number; i++){
        if(number%i === 0){
            return false ;
        }
        
    }
return true ;
}

function isPrime(obj){
    var outArr=[] ;
    each(obj, function(value){
        if(prime(value)){
            outArr.push(value) ;
        }
    })
    return outArr ;
}


// MAP 


function map(coll, f) { 
    var acc = []; 
    if(!Array.isArray(coll)){
        acc = {} ;
    }
    each(coll, function(element, key) { 
          acc[key] = f(element, key); 
    }); 
    return acc; 
}

//A-1

var people = [ 
    {name: {first: 'Grace', middle: 'B.', last: 'Hopper'}, age: 85}, 
    {name: {first: 'Adele', last: 'Goldstine'}, age: 43}, 
    {name: {first: 'Ada', last: 'Lovelace'}, age: 36}, 
    {name: {first: 'Hedy', middle: 'E.', last: 'Lamarr'}, age: 85}, 
    {name: {first: 'Ruchi', last: 'Sanghvi'}, age: 34} 
]; 


function ages(people) { 
    return map(people, function(person) { 
          return person.age;}); 
}

function firstname(obj){
    return map(obj, function(element){
        return element.name.first ;
    })
}

function last(obj){
    return map(obj, function(element){
        return element.name.last ;
    })
}


//A-3 
function maxInArray(array){
    var max = 0 ;
    for (var i = 0; i<array.length; i++){
        if(array[i]>max){
            max = array[i];
        }
    }
    return max ;
}

function maximums (obj){
    return map(obj, function(element,key){
        return maxInArray(element) ;
    })
}

//A-4
function reverse(string){
    outStr = '' ;
    for(var i = string.length -1; i>=0 ; i--){
        outStr+= string[i] ;
    }
    return outStr ;
}

function reverseWords (array){
    var arr = array.split(' ') ;
    return map(arr, reverse).join(' ')
}


//A-5

function pluck(array, key){
    return map(array, function(element){
        return element.key ;
    })
}

function csvToObj(string){
    var outArr = [] ;
    
    var firstArr = string.split('/');
return map(firstArr, function (csvpeople, i){
    var arrayone = csvpeople.split(',')
    var person = {} ;
    var name = {} ;
    if(arrayone.length === 4){
    name['first']=arrayone[0] ;
    name['middle'] = arrayone[1];
    name['last'] = arrayone[2];
    person['age'] = arrayone[3] ;
    person['name'] = name ;
    }
    else{
        name['first']=arrayone[0] ;
        name['last'] = arrayone[1];
        person['age'] = arrayone[2] ;
        person['name'] = name ;
    }
        return person ;
       })
}

// map over objects 
//A - 1

function increment(obj){
    return map(obj, function (value, key){
        if(typeof(value) === 'number'){
          return  ++value  ;
        }
        else{
            return value ;
        }  
    })    
}

//A--2

function uppercaseValues (obj){
    return map(obj, function (value, key){
        if(typeof(value) === 'string'){
          return  value.toUpperCase()  ;
        }
        else{
            return value ;
        }  
    })    
}


//A---3

function nestedKeys(obj){
    return map(obj, function(subobj, key){
        var count = 0 ;
        for(var i in subobj){
            count++
        }
        return count ;
    })
}

//A--4

function agesToMinutes(object){ 
    return map(object, function(element, key){
         element.age = element.age * 365 * 24 * 60 ;
         return element ;
        
    }) 
} 

// More practice
// A--1

