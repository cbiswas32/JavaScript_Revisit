const promiseOne = new Promise((resolve, reject)=>{
    //Do an async task
    //DB Calls, Network calls
    setTimeout(function(){
        console.log('Async task complete');
        resolve();
    }, 2000);
});

promiseOne.then(()=>{
    console.log('Promise 1 is consumed!');
})

new Promise((resolve, reject)=>{
    //Do an async task
    //DB Calls, Network calls
    setTimeout(function(){
        console.log('Async task complete');
        resolve();
    }, 5000);
}).then(()=>{
    console.log('Promise 2 is consumed!');
})


const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(function(){
        console.log('Async task complete');
        resolve({name: "Chinmoy", age : "22"});
    }, 5000);
})

promiseThree.then((user)=>{
    console.log(user);
})


const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(function(){
        console.log('Async task complete');
        let error = false;
        if(!error){
            resolve({name: "promiseFour", qty : "Four"});
        }
        else{
            reject('Error:  Something Went Wrong')
        }
       
    }, 5000);
})

promiseFour
.then((user)=>{
    return user.name;
}).then((name)=>{
    console.log(name);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("promise is either resolved or rejected");
})


promiseFive = new Promise((resolve, reject)=>{
    setTimeout(function(){
        console.log('Async task complete');
        let error = true;
        if(!error){
            resolve({name: "promiseFive", qty : "Four"});
        }
        else{
            reject('Error:  Something Went Wrong')
        }
       
    }, 5000);

})

const promiseFiveUsed = async () =>{
    try{
        let res = await  promiseFive;
        console.log(res);
    } catch(error){
        console.log(error);
    }
    
} 

promiseFiveUsed();


const getDataFetch = async function(){
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        response = await response.json();
        console.log(response);
    } catch (error) {
        console.log("Error: ", error);
    }
}
getDataFetch();

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((res)=>{
    return res.json();
})
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log("Error: ", error);
}
)