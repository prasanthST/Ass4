# Day 3 Assignment 2
## This project includes the implementation of the first and second que answers in `Flag.html` and `script.js`.

## Files

- `Flag.html`: Contains the HTML structure for displaying both 1st and 2nd  answers.
- `script.js`: Contains the JavaScript logic for managing and displaying the que answers.

## Code Description

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
```





