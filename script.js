
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