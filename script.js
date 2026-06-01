//         //Fetch Users Data from API using JavaScript

// //Objective:Make an HTTP request to the given API
// //  and log the response data (array of objects) to the console using two different approaches:
//  //1).then() and .catch()
//        //fetch always return a promise  
//        //promise result return raw response data
// const user = fetch("https://jsonplaceholder.typicode.com/users");
  
//    console.log(user);
//         //convert the raw response data to javascript object 
//    user.then((rawdata)=>(rawdata.json()))
//    .then((dataobj)=>(console.log(dataobj)))
//      // if it is not resolve catch will handle the error
//    .catch((error)=>(console.log(error)))
//    // finally always execute:
//    .finally(()=>(console.log("done")));


   //2)async/await:
     async function usersdata(){
        try{
//fetch()return a promise
// initially return promise pending
 // await keyword wait for resolve
// then stores the promise raw data in a variable 
//sponse.json() takes time to parse JSON data, so we use await to pause the async function until parsing is complete.
//  After the Promise resolves, .json() converts the raw response body into a JavaScript object, 
// stores it in a variable, and then we can print it using console.log()
          const apidata = await fetch(
            "https://jsonplaceholder.typicode.com/users");
            console.log(apidata);
          const data = await apidata.json();
          console.log(data);
        }
     // if it is not resolve catch will handle the error
     catch(error){
        console.log(error);
     }
     finally{
  // finally always execute
        console.log("end");
     }

    }
      usersdata();