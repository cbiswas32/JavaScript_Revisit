// Hoisted but Not in Global scope
let a;
// Hoisted but in Global scope
var b;
// From Hoisting to a have a value is temporal dead zone
let c =4;

// Shadowing in javascript

//script scope
let shadow = 1;
//block scope
{
    let shadow = 2;
    console.log(shadow);
}

console.log(shadow);

// Map  -  map method is used when we want transformation of whole array. Parmeter -  Function :: Return New Array

const arr = [1, 2, 3, 5, 7, 2, 9, 4]

const double = arr.map( item =>  item*2 );
console.log(double);


// Filter -  filter is used when we want to filter the arrar to obtain required value.
const graterThanFive = arr.filter( x => x>5);
console.log(graterThanFive);

// Reduce -  reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc). Reduce passes two arguments one function(which includes accumulator and initial value as argument itself) and another initial value of accumulator.

const sum  = arr.reduce((acc, curr)=> { acc+= curr;  return acc;}, 0);
console.log(sum);

// Maximum
const max = arr.reduce( (acc, curr) =>{
    if(acc<curr){
        acc = curr;
    }
    return acc;
}, arr[0])

console.log(max);

// Advance Map

const user = [
    {firstName : "akshay", lastName: "saini", age: 26 },
    {firstName : "chinmoy", lastName: "biswas", age: 75},
    {firstName : "lalu", lastName: "prasad", age: 50 },
    {firstName : "mamta", lastName: "banarjee", age: 26 }

]

const  fullName = user.map( userItem => userItem.firstName + " " +userItem.lastName );
console.log(fullName);

//Advance Reduce

const age = user.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }
    else{
        acc[curr.age] = 1;
    }

    return acc;
},{})

console.log(age);

const less30Age = user.filter( x => x.age<30).map( f => f.firstName)

console.log(less30Age);

const less30AgeReduce = user.reduce(function(acc, curr){
    if(curr.age < 30){
        acc.push(curr.firstName);
    }
    return acc;
}, []);

console.log(less30AgeReduce);