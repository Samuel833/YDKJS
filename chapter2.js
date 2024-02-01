//Values And Types
/*
string
number
boolean
null and undefined
object
symbol
*/
let num1 = 373738383883838383838383838888888888888888888888388888888888888888888888888888888888888888888888888888888888888888888842749392303030203238383838383939293929939992999299
typeof(num1)
let a;
console.log(typeof a);

a = "hello world";
console.log(typeof a);

a = 42;
console.log(typeof a);

a = true;
console.log(typeof a);
console.log(typeof(typeof a));//The return value from the typeof operator is always a string value. That is, typeof "abc" returns "string", not string as we can see here.

a = null;
console.log(typeof a);//This returning an object instead of returning null is a long standing bug in JS but might likely never goimg to be fixed as too much code on the web relies on the bug and fixing it would cause a lot of more bugs

a = undefined;
console.log(typeof a);
/*
Also, note a = undefined. We’re explicitly setting a to the undefined value, but that is behaviorally no different from a variable that has no value set yet, like with the let a; line at the top of the snippet.
A variable can get to this “undefined” value state in several different ways, including functions that return no values and usage of the void operator.
*/

//Objects can take values of different data types
let obj = {
  a: "hello world",
  b: 42,
  c: true
};
//Properties can either be accesses with the dot notation or bracket notation
console.log(obj.a);//dot notation
console.log(obj.b);
console.log(obj.c);
console.log(obj["a"]); //bracket notation
console.log(obj["b"]); 
console.log(obj["c"]); 
/*
  Bracket notation is useful if you have a property name that has special characters in it, like obj["hello world!"]—such properties are often referred to as keys when accessed via bracket notation. The [ ] notation requires either a variable (explained next) or a string literal (which needs to be wrapped in " " or ' ')
*/

let newObj = {
  a: "hello brother",
  b: 1592,
  c: false,
  "hello world!": ["1st line", "Programmer's favorite"],
  "hello world": "withoutExclaim"
};
let z = "a";
console.log(newObj[z])//Takes the value of z which is "a" puts it into the square bracket and rfeturns the value at "a"
console.log(newObj["hello world!"][1])

//ARRAYS
//An array is an object that hold values(of any type) not particularly in named properties/keys, but rather in numerically indexed position
let arr = [
  "hello world",
  42,
  true
]
arr[0];
arr[1];
arr[2];
arr[3];


//This will not output anything to the console as typeof returns a "string"
if((typeof(arr[3])) === null){
  console.log("It is null")
}else if((typeof(arr[3])) === undefined){
  console.log("It is undefined")
}

//Now this will work as we have equated it to a string
if((typeof(arr[3])) === "null"){
  console.log("It is null")
}else if((typeof(arr[3])) === "undefined"){
  console.log("It is undefined")
}else{
  console.log("It is neither an array or string")
}

if(arr[1] === null){
  console.log("It is null")
}else if(typeof(arr[1]) === "number"){
  console.log("It is undefined")
}else{
  console.log("It is neither an array or string")
}
console.log(typeof(arr[1]));
console.log(typeof(arr));

//FUNCTIONS
//The other object subtype you'll use all over your JS programs is a function:
function foo(){
  return 42;
}
foo.bar = "hello world"
console.log( typeof(foo));
console.log( typeof(foo.bar));
console.log( typeof(foo()));
//Again, functions are a subtype of objects—typeof returns "function", which implies that a function is a main type—and can thus have properties, but you typically will only use function object properties (like foo.bar) in limited cases.