// question no 1 
// compare two JSON have same properties

 let obj1 ={name:"person 1" , age:"5"}
 let obj2 ={age:"5", name:"person 1"}

 let stringifiedObj1 = JSON.stringify(obj1);
 let stringifiedObj2 = JSON.stringify(obj2);
 
 let isEqual = stringifiedObj1 === stringifiedObj2;
 
 console.log(isEqual); 





// question2 
// print Flag names ?
function reqListener (params) {
    const countryArr = JSON.parse(this.responseText);
    console.log(countryArr[0]);
 
    for(let country of countryArr){

     console.log(country.flags.png)

    }  
  
 }
   const req = new XMLHttpRequest();
   req.addEventListener("load", reqListener);
   req.open("GET","https://restcountries.com/v3.1/all");
   req.send();