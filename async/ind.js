// const getTodos= (callback)=>{

    
//     const request = new XMLHttpRequest();
//     request.addEventListener('readystatechange',()=>{
//         if(request.readyState==4 && request.status==200){
//             // console.log(request, request.responseText);
//             //The JSON.parse() function takes a JSON string (jsonString) as its parameter and returns a JavaScript object representing the parsed JSON data.
//             const data = JSON.parse(request.responseText);
//             console.log("first")
//             callback(undefined,data);
//         }
//         else if(request.readyState==4){
//            callback("Could not fetch data",undefined)
//         }
//     })
    
    
//     request.open('GET','https://jsonplaceholder.typicode.com/todos/');
//     request.send();
    
// };
// console.log(1);
// console.log(2);
// console.log(3);



// getTodos((err,data)=>{
//     console.log("callback is fired");
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })
// console.log(4);console.log(5);console.log(6);


// const getSomething= (resource)=>{
//    return new Promise((resolve,reject)=>{
//     const request = new XMLHttpRequest();
//     request.addEventListener('readystatechange',()=>{
//         if(request.readyState==4 && request.status==200){
//             // console.log(request, request.responseText);
//             //The JSON.parse() function takes a JSON string (jsonString) as its parameter and returns a JavaScript object representing the parsed JSON data.
//             const data = JSON.parse(request.responseText);
//             console.log("first")
//             // callback(undefined,data);
//             resolve(data);
//         }
//         else if(request.readyState==4){
//            //callback("Could not fetch data",undefined)
//            reject("Could not fetch data");
//         }
//     })
    
    
//     request.open('GET',resource);
//     request.send();
    
//    })
// }

// getSomething('https://jsonplaceholder.typicode.com/todos/1').then( data =>{
//     console.log("promise 1 resolved:",data);
//     return getSomething('https://jsonplaceholder.typicode.com/todos/2');
// }).then( data =>{
//         console.log("promise 2 resolved:",data);
//         return getSomething('https://jsonplaceholder.typicode.com/todos/3'); 
// }).then( data =>{
//             console.log("promise 3 resolved:",data);
          
// }). catch(err =>{
//     console.log(err);
// })

// fetch('https://jsonplaceholder.typicode.com/todos/61')
//       .then(response => {
//         console.log("resolved",response);
//         return response.json()})
//       .then(json => console.log(json))
//       .catch(err => console.log("error occured",err))


const getTodo= async() =>{

     const response= await fetch('https://jsonplaceholder.typicode.com/todos/81');
     const data= await response.json();
     console.log(data)
     return data;
}
const test=getTodo();
console.log(test);

