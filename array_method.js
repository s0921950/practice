// (1) indexOf

var arr = ['apple','orange','pear'],

found = false;

for(var i= 0, l = arr.length; i< l; i++){

	if(arr[i] === 'orange'){
		found = true;
	}
}

console.log("found:",found);

/************* use indexOf ********************/

var arr = ['apple','orange','pear'];

console.log("found:", arr.indexOf("orange") != -1);

// (2) filter

var arr = [
	{"name":"apple","count": 2},
	{"name":"orange","count": 5},
	{"name":"pear","count": 3},
 	{"name":"orange","count": 16},
];

var newArr = [];

for(var i= 0, l = arr.length; i< l; i++){

	if(arr[i].name ==="orange" ){
		newArr.push(arr[i]);
	}

}

console.log("Filter results:",newArr);

/************* use filter ********************/
var arr = [
	{"name":"apple","count": 2},
	{"name":"orange","count": 5},
	{"name":"pear","count": 3},
	{"name":"orange","count": 16},
];

var newArr = arr.filter(function(item){
  	return item.name ==="orange";
});

console.log("Filter results:",newArr);

// (3) forEach

/************* use for loop ********************/
var arr = [1,2,3,4,5,6,7,8];

for(var i= 0, l = arr.length; i< l; i++){
	console.log(arr[i]);
}

console.log("========================");

/************* use forEach ********************/

arr.forEach(function(item,index){
	console.log(item);
});

// (4) map

var oldArr = [{first_name:"Colin",last_name:"Toh"},{first_name:"Addy",last_name:"Osmani"},{first_name:"Yehuda",last_name:"Katz"}];

function getNewArr(){
	var newArr = [];
	for(var i= 0, l = oldArr.length; i< l; i++){
		var item = oldArr[i];
		item.full_name = [item.first_name,item.last_name].join(" ");
		newArr[i] = item;
	}
	return newArr;
}
console.log(getNewArr());

/************* use map ********************/

var oldArr = [{first_name:"Colin",last_name:"Toh"},{first_name:"Addy",last_name:"Osmani"},{first_name:"Yehuda",last_name:"Katz"}];

function getNewArr(){
	return oldArr.map(function(item,index){
		item.full_name = [item.first_name,item.last_name].join(" ");
		return item;
	});
}

console.log(getNewArr());

// (4) reduce

var arr = ["apple","orange","apple","orange","pear","orange"];

//function getWordCnt(){
	var obj = {};
	for(var i= 0, l = arr.length; i< l; i++){
		var item = arr[i];
		console.log(item);
		obj[item] = (obj[item] +1 ) || 1;
		console.log(obj);
	}
//	return obj;
// }
console.log(obj);

/************* use reduce ********************/

var arr = ["apple","orange","apple","orange","pear","orange"];

function getWordCnt(){
	return arr.reduce(function(prev,next){
		prev[next] = (prev[next] + 1) || 1;
		return prev;
	},{});
}
console.log(getWordCnt());

/*
* 二者的区别，在console中运行一下即可知晓
*/

var arr = ["apple","orange"];

function noPassValue(){
	return arr.reduce(function(prev,next){
    	console.log("prev:",prev);
    	console.log("next:",next);
    	return prev + " " +next;
	});
}

function passValue(){
	return arr.reduce(function(prev,next){
		console.log("prev:",prev);
		console.log("next:",next);
    	prev[next] = 1;
    	return prev;
	},{});

}
console.log("No Additional parameter:",noPassValue());
console.log("----------------");
console.log("With {} as an additional parameter:",passValue());