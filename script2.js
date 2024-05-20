function reqListener (params) {
    const countryArr = JSON.parse(this.responseText);

 
    for(let country of countryArr){
        console.table(country.name.common)
        console.table(country.region)
        console.log(country.subregion)
        console.log(country.population)
    }  
  
 }
   const req = new XMLHttpRequest();
   req.addEventListener("load", reqListener);
   req.open("GET","https://restcountries.com/v3.1/all");
   req.send();