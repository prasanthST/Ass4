
function reqListener (params) {
    const countryArr = JSON.parse(this.responseText);
    console.log(countryArr[0]);
 
    for(let country of countryArr){
     console.table(country.name.common)
     console.log(country.flags.png)
     console.log(country.region)
     console.log(country.population)
     console.log(country.subregion)
    }  
  
 }
   const req = new XMLHttpRequest();
   req.addEventListener("load", reqListener);
   req.open("GET","https://restcountries.com/v3.1/all");
   req.send();