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

//BUILT IN TYPE METHODS

//The built-in types and subtypes we’ve just discussed have behaviors exposed as properties and methods that are quite powerful and useful.
let c = "This is New";
let p = 3.14519;

console.log(c.length);
console.log(c.toUpperCase());
console.log(p.toFixed(3)); 

//A string value can be wrapped by a String object, a number can be wrapped by a Number object, and a boolean can be wrapped by a Boolean object. For the most part, you don’t need to worry about or directly use these object wrapper forms of the values—prefer the primitive value forms in practically all cases and JavaScript will take care of the rest for you.

//Using Primitive Values
// Primitive values
let myString = "apple";  // a string
let myNumber = 5;        // a number
let isTrue = true;       // a boolean

// You can use them directly without wrappers
console.log(myString);   // Output: apple
console.log(myNumber);   // Output: 5
console.log(isTrue);     // Output: true

//Object wrapper forms
let stringObject = new String("banana");  // a String object
let numberObject = new Number(10);         // a Number object
let booleanObject = new Boolean(false);   // a Boolean object

// You can still use them, but it's a bit more complicated
console.log(stringObject.valueOf());  // Output: banana
console.log(numberObject.valueOf());  // Output: 10
console.log(booleanObject.valueOf()); // Output: false

console.log(stringObject);
console.log(numberObject);
console.log(booleanObject);

//COMPARING VALUES
//Two main types of values comaprisom: The equality and inequality 
//The result of any comparison is a strictly boolean value (true or false), regardless of what value types are compared.

//COERCION
//Comes in 2 forms : The explicit and implicit coercion
//Explicit coercion is simply that you can see from the code that a conversion from one type to another will occur
let d = "42"
e = Number(d);
console.log(d); //"42"
console.log(e); //42-- the number
//Implicit coercion is when the type conversion can happen as more of a nonobvious side effect of some other operation
let f = "54";
let b = f * 1; // "54" implicitly coerced to 54 here
console.log(f); // "54"
console.log(b); // 54---the number

// TRUTHY & FALSY
// What happens when a non-boolean value is coerced to a boolean?
// The specific list of FALSY values in JS
/*
• "" (empty string)
• 0, -0, NaN (not a number / invalid number)
• null, undefined
• false
*/

//Values not here are on the falsy list is truthy
//Examples
/*
• "hello"
• 42
• true
• [ ], [ 1, "2", 3 ] (arrays)
• { }, { a: 42 } (objects)
• function foo() { .. } (functions)
*/

//EQUALITY
//Four equality operators
//==, ===, !=, !==..! denoting not equal
//The difference between == and === is ofen characterised as beign == checks for only value equality while === checks for both value and type equality but in reality the == checks for value equality while allowing coercion and the === checks for value equality without allowing coercion, reason why it is called the strict equality
//implicit coercion allowed by the == loose equality comparison and not allowed by === the strict equality comparison
let g = "59";
let h = 59;

console.log(g == h); // true
console.log(g === h); // false
// When to use == or === 
//• If either value (aka side) in a comparison could be the true or false value, avoid == and use ===.
//• If either value in a comparison could be of these specific values(0, "", or []—empty array), avoid == and use ===.
//• In all other cases, you’re safe to use ==. Not only is it safe, but in many cases it simplifies your code in a way that improves readability.

//In non-primitive values like objects(including arrays and objects) both == and === will only check if the references match not anything about the underlying values because those values are actually held by reference

//E.g Arrays are by default coerced into strings seperated by commas , in btw one wouldnthink two arrays should be equal == but it is not.

let i = [1,2,3,4];
let j = [1,2,3,4];
let k = "1,2,3,4";
console.log(i);
console.log(i == j); // false
console.log(j === i); // false
console.log(j === k); // false
console.log(k === i); // false
console.log(i == k); // true
console.log(k == i); //true

//INEQUALITY
// The <, >, <= and >= operators 
// Used in comparing numbers
// Also used for comparing strings inequality
console.log(`is "u" > "t"? ${"u" > "t"}`);
console.log(`is "bro" < "foo"? ${"bro" < "foo"}`);
let l = 42;
var m = "foo";
//Here they all returned  a value of false because when Js was trying to coerce the b value into a number and got a NaN(Not a number) Which is neither greater than or less than any other value
//The same thing applies for the equaity in the l === m as Js failed to coerce the value to be equal
console.log(l < m); // false
console.log(l > m); // false
console.log(l == m); // false

//VARIABLES
// variable names must be valid identifier
// Must start with either an alphabet or $, _ symbol
//MUst not be any of the reserved JS keywords
