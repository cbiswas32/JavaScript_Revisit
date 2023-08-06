const multiply = (arg1, arg2) => arg1*arg2;
console.log(multiply(2,3));
console.log(multiply(7,10));

const arr = [1,-3,5];
 const countPositive = arr => {
    count = 0;
    arr.forEach(element => {
        if(element>0){
            count ++;
        }
    });
    return count;
 }

 console.log("Count of Positive Number is " + countPositive(arr));

 const addNum = (array, num) =>  array.map((element) => element + num)
 

console.log(addNum([2,2,3],1));

const food =['apple', 'egg','ham', 'egg', 'apple', 'orange', 'egg']
const removeEgg = food => {
    let countEgg = 0;
    return food.filter((element) => {   
        if(element === 'egg' && countEgg<2){
            countEgg++;
            console.log(countEgg);
            return false;
        }
        else{
            return true;
        }
        
    })
}
console.log(removeEgg(food));
 