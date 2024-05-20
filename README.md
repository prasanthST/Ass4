# Day 3 Assignment 2
## To document the discussion about JSON propertiess are same without their orders and how to find specific information such as flags, country names, populations, regions, and subregions

## Files

- `Flag.html`: Contains the HTML structure for displaying both 1st and 2nd  answers.
- `script.js`: This section explains the JavaScript code written in `script.js` to find and display information about a country flags.
- `script2.js`: This section explains the JavaScript code written in `script2.js` to find and display information about a country, including its name, region, population, and subregion.


## HTML code 

### Flag.html
```
 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QUESTION 1</title>
</head>
<body>
    <h1>QUESTION 1 & 2 Answer </h1>
    <img src="" alt="">

    
    <script src="./script.js"></script>
</body>
</html>
```
## script.js
The script.js file contains the JavaScript logic for handling the queue answers. Here is the relevant code snippet:

```
// question no 1 
// compare two JSON have same properties

 let obj1 ={name:"person 1" , age:"5"}
 let obj2 ={age:"5", name:"person 1"}

 let stringifiedObj1 = JSON.stringify(obj1);
 let stringifiedObj2 = JSON.stringify(obj2);
 
 let isEqual = stringifiedObj1 === stringifiedObj2;
 
 console.log(isEqual); 





// question no 2 
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
```
 ## Document my code for finding a country's name, region, population, and subregion using script2.js

 ```
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
```



