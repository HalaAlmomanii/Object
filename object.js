console.log('Here is : ', 'Object')


/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/

var my = {
  firstName: "hala", lastNmae: "Almoamni", age: 23, dob: "25-4-1996", favMovie: ["the walk", "the girl", "the body"], favFood: ["mansaf", "lazaneh", "kbsah"]
}




var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides

Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/


function firstName(a) {
  var arr = [];
  var names = '';
  for (var i = 0; i < a.length; i++) {
    arr[i] = a[i].name.first;

  }
  return arr;
}






/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2
*/


function averageAge(persons) {
  var result = 0;
  for (i = 0; i < persons.length; i++) {
    result = result + persons[i].age
  }
  return result / persons.length
}

/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person

Ex: olderPerson(persons) => "Soso Al-Amora"
*/



var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

function olderPerson(persons) {
  var x = ""

  for (i = 1; i < persons.length; i++) {
    if (persons[0].age > persons[i].age) {
      x = persons[0].name.first + " " + persons[0].name.last
    }
    else { x = persons[i].name.first + " " + persons[i].name.last }
  }

  return x
}

/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/

function longestName(persons) {
  x = ""
  for (i = 1; i < persons.length; i++) {
    if (persons[0].name.first + persons[0].name.last > persons[i].name.first + persons[i].name.last)
      x = persons[0].name.first + " " + persons[0].name.last
    else
      x = persons[i].name.first + " " + persons[i].name.last
  }
  return x
}


/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/

//////////////////////////////////////////////////////////////////

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??

Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/

function repeatWord(st) {
  var words = st.toLowerCase()
  words = words.split(" ")
  var z = {}
  var a = 0;
  for (x = 0; x < words.length; x++) {
    a = 0
    for (i = 0; i < words.length; i++) {
      if (words[x] === words[i])
        a = a + 1
    }
    z[words[x]] = a

  }
  return z;
}


/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??

Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/
function repeatChar(st) {
  st = st.toLowerCase()
  st = st.split("")
  var obj = {}
  for (i = 0; i < st.length; i++) {
    var count = 0;
    for (z = 0; z < st.length; z++) {
      if (st[i] === st[z])
        count++
    }
    obj[st[i]] = count;
  }
  return obj;
}

/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array

Ex: selectFromObject({a: 1, cat: 3}, ['a',  'd'])
=>  {a: 1}
*/
var obj = {}
var arr = []
var x = {}
function selectFromObject(obj, arr) {
  for (i = 0; i < arr.length; i++) {
    for (var z in obj) {
      if (arr[i] === z)
        x[arr[i]] = obj[z]
    }
  }
  return x
}
/*
10
Create a function called objectToArray
that accept an object
and return an array of the keys and values in this object

Ex: objectToArray({firstName:"Moh",age:24})
=> ["firstName","Moh","age",24]
*/
var obj = { firstName: "Moh", age: 24 }

function objectToArray(obj) {
  var newArr = [];
  var keys = Object.keys(obj);
  var key;
  
  for(var i = 0; i < keys.length; i++){
    key = keys[i]; // firstname | age
    newArr.push(keys[i])
    newArr.push(obj[key])
  }
  return newArr;
}





/*
11
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object

Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/

function t(a) {
var b = {};
for (i=0;i<a.length;i=i+2)
{
  b[a[i]]=a[i+1]
}
return b
}







/*
12
Create a function called onlyNumber
that accept an object
and return a new object that have only the values that is a number
**hint: search in MDN how to know the type of variable

Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {age:24}
*/

function  onlyNumber(obj){
  var ob={};
  for(var k in obj)
  {
    if(typeof obj[k]==="number")
    ob[k]=obj[k]
 
  }
  return ob
}


/*
13
Create a function called onlyString
that accept an object
and return a new object that have only the values that is a string
**hint: search in MDN how to know the type of variable

Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {firstName:"Moh"}
*/

function  onlyString(obj){
  var ob={};
  for(var k in obj)
  {
    if(typeof obj[k]==="string")
    ob[k]=obj[k]
 
  }
  return ob
}

/*
14
Create a function called onlyArray
that accept an object
and return a new object that have only the values that is a array
**hint: search in MDN how to know the type of variable

Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {movies:[1,5,"string"]}
*/
function  onlyArray(obj){
  var ob={};
  for(var k in obj)
  {
    if(typeof obj[k]==="object")
    ob[k]=obj[k]
 
  }
  return ob
}


/*
15
Create a function called keysArray
that accept an object
and return an array have the key inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ['firstName', 'age', 'movies']

*/

function keysArray(obj){
  return Object.keys(obj)
}

/*
16
Create a function called valuesArray
that accept an object
and return an array have the values inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ["Moh", 24, [1,5,"string"]]

*/

function valuesArray(obj){
  return Object.values(obj)
}

/*
17
make this object => {a:1,b:3,c:4}
to be this object {a:4,c:66}
**hint: Search on MDN how to remove a key/value from an object
*/
var obj={a:1,b:3,c:4}
obj["a"]=4;
obj["c"]=66;
delete obj["b"];
console.log(obj)
/*
18
Create a function called objectLength
that accept an object
and return the number of keys inside this object

Ex: keysArray({a:1,b:2,c:3,d:4})
=> 4
*/
var obj=({a:1,b:2,c:3,d:4})
function objectLength(obj){
return  Object.keys(obj).length
}

/*
19
Create a function called evenValue
that accept an object
and return a new object that have only the key/values if the value is even

Ex: evenValue({a:1, b:2, c:3, d:4})
=> {b:2, d:4}
*/ 
var obj={a:1, b:2, c:3, d:4}
function evenValue(obj){
  var ob={}
for (var k in obj)
{if(obj[k]%2===0)
ob[k]=obj[k]

}
return ob}

/*
20
Create a function called longestKey
that accept an object
and return the value inside the longest key

Ex: evenValue({car:1, school:2, monster:3, alexMercer:4})=> 4
*/
var obj={car:1, school:2, monster:3, alexMercer:4}
function longestKey(obj){
 var b=" "
for (var k in obj)
{if(k.length>b.length)
  b=k

}
return obj[b]
}
