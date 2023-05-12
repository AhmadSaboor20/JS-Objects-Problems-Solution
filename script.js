// // // Object Handling:

// // // 1. Write a JavaScript program to list the properties of a JavaScript object

// // // var student = {

// // // name : "David Rayy",

// // // sclass : "VI",

// // // rollno : 12 };

// // // Sample Output: name,sclass,rollno

  
// // let student =  {
// //     name: "Ahmad Saboor",
// //         sclass : 14,
// //             rollno : 105309
// // };

// // console.log(Object.keys(student));


// // // 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

// // // Sample object:

// // // var student = {

// // // name : "David Rayy",

// // // sclass : "VI",

// // // rollno : 12 };


// // let user =  {
// //     name: "Ahmad Saboor",
// //     sclass : 14,
// //     rollno : 105309
// // };

// // delete user.rollno;
// // // console.log(user);



// // // 3. Write a JavaScript program to get the length of a JavaScript object.

// // // Sample object :

// // // var student = {

// // // name : "David Rayy",

// // // sclass : "VI",

// // // rollno : 12 };

// // let xyz =  {
// //     name: "Ahmad Saboor",
// //         sclass : 14,
// //             rollno : 105309
// // };
// // console.log(Object.keys(xyz).length);



// // // 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

// // var library = [

// //    {

// //        author: 'Bill Gates',

// //        title: 'The Road Ahead',

// //        readingStatus: true

// //    },

// //    {

// //        author: 'Steve Jobs',

// //        title: 'Walter Isaacson',

// //        readingStatus: true

// //    },

// //    {

// //        author: 'Suzanne Collins',

// //        title:  'Mockingjay: The Final Book of The Hunger Games',

// //        readingStatus: false

// //    }];


// var library = [

//    {

//        author: 'Bill Gates',

//        title: 'The Road Ahead',

//        readingStatus: true

//    },

//    {

//        author: 'Steve Jobs',

//        title: 'Walter Isaacson',

//        readingStatus: true

//    },

//    {

//        author: 'Suzanne Collins',

//        title:  'Mockingjay: The Final Book of The Hunger Games',

//        readingStatus: false

//    }];
// library.forEach(book => {
//     for (book in library) {
//         console.log(book, library[book])
//     }
// })

    


// // // 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.

// // // Volume of a cylinder : V = πr2h

// // // where r is the radius and h is the height of the cylinder.

// // let rad = Number.parseInt(prompt("Enter Radius"));
// // let height = Number.parseInt(prompt("Enter height"));
// // let volumeOfCylinder = 3.14 * rad * 2 * height;
// // alert("The Volume of Cylinder is--"+ volumeOfCylinder.toFixed(4));


// // // 6. Write a Bubble Sort algorithm in JavaScript.

// // // Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,

// let x= [6,4,0, 3,-2,1]

// // // Expected Output : [-2, 0, 1, 3, 4, 6]
// for (val in x) {
//     for (val in x) {
//         if (x[val] > x[val + 1]) {
//             let temp = x[val];
//             x[val] = x[val + 1];
//             x[val + 1] = temp;
//         }
//         }
// }
// console.log(x)





// // // 7. Write a JavaScript program which returns a subset of a string.

// // // Sample Data: dog

// // // Expected Output: ["d", "do", "dog", "o", "og", "g"]



    // 8. Write a JavaScript program to create a Clock.

    // Note: The output will come every second.

    // Expected Console Output :

    // "14:37:42"

    // "14:37:43"

    // "14:37:44"

    // "14:37:45"

    // "14:37:46"

    // "14:37:47"

function clock() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  
  // Add leading zeros to minutes and seconds
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  
  var time = hours + ':' + minutes + ':' + seconds;
  console.log(time);
  
  // Call the clock function again in 1 second
  setTimeout(clock, 1000);
}

clock();




    // 9. Write a JavaScript program to calculate the area and perimeter of a circle.




//     // // Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.



    // 10. Write a JavaScript program to sort an array of JavaScript objects.

    // Sample Object :



    var library = [

       {

           title:  'The Road Ahead',

           author: 'Bill Gates',

           libraryID: 1254

       },

       {

           title: 'Walter Isaacson',

           author: 'Steve Jobs',

           libraryID: 4264

       },

       {

           title: 'Mockingjay: The Final Book of The Hunger Games',

           author: 'Suzanne Collins',

           libraryID: 3245

       }];

    // Expected Output:



    // [[object Object] {

    //   author: "Walter Isaacson",

    //   libraryID: 4264,

    //   title: "Steve Jobs"

    // }, [object Object] {

    //   author: "Suzanne Collins",

    //   libraryID: 3245,

    //   title: "Mockingjay: The Final Book of The Hunger Games"

    // }, [object Object] {

    //   author: "The Road Ahead",

    //   libraryID: 1254,

    //   title: "Bill Gates"

    // }]

    
library.sort(function(a, b) {
  return b.libraryID - a.libraryID;  //if a and b value are swaped than will sort small to large
});
console.log(library)



// //  11. Write a JavaScript function to print all the methods in an JavaScript object.

// const mthdObj = {
//   Name: 'Ahmad Saboor',
//   Number: +9212345698,
//     back: function () {
//       console.log(`I am Back`)
//     },
//     f: {
//         ahmad:"jj"
        
//     },
//     notBack: function () {
//       console.log(`I am Not Back`)
//   }
// };

// function consoleMthd(mthdObj) {
//   for ( prop in mthdObj) {
//     if (typeof mthdObj[prop] === 'function') {
//       console.log(prop);
//     }
//   }
// }

// consoleMthd(mthdObj);



// // 12. Write a JavaScript function to parse an URL.
// function parsingUrl(url) {
//   let parsedUrl = new URL(url);
//   let result = {
//     protocol: parsedUrl.protocol,
//     hostname: parsedUrl.hostname,
//     port: parsedUrl.port,
//     path: parsedUrl.pathname,
//     queryParams: Object.fromEntries(parsedUrl.searchParams.entries()),
//     hash: parsedUrl.hash,
//   };
//   return result;
// }

// let url = 'https://www.ahmadsaboor.com/path/to/page?paramater1=value1&paramater2=value2#section23';

// console.log(parsingUrl(url));




// //  14. Write a JavaScript function to retrieve all the values of an object's properties.
// let rndStudent = {
//     name: "Ali",
//     age:12,
//     gender:"MAle"
// }
// function extractVal() {
//     for (val in rndStudent) {
//         console.log(rndStudent[val])
//     }
// }
// extractVal();
// //    15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
// let rndObj = {
//     name: "Ahmad",
//     age: 20,
//     gender: "Male"
// }
// function rnd1(){

//     let makeIt = Object.keys(rndObj).map((key) => [key, rndObj[key]]);
//     console.log(makeIt);
// }
// rnd1();

// //  16. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.
// let copObj = {
//     name: "Ahmad",
//     age: 20,
//     gender: "Male"
// }
// let copObjClone={}
// Object.entries(copObj).forEach(entry => { //entry is an array here
//     let key = entry[0]; // name will be make at entry 0
//     let value = entry[1]; //"Ahmad will be make at entry 1"
//     copObjClone[value] = key; // here we will swap as foreach loop
// })
// console.log(copObjClone);

// //  17. Write a JavaScript function to check whether an object contains given property.
//     let student = {
//         name: "ali",
//         age: 32,
//         gender: "male"
// }
// let stdChk=() => {
    
//     let askForProp = prompt("Which property Do You Want To Check");
//     for (key in student) {
//     if (askForProp == key) {
//         console.log(`Yes It Has ${askForProp} property`);
//         break;
//     }
//     else {
//         console.log(`No It Does Not Have ${askForProp} property`);
//         break;
//     }
//     }
// }
// stdChk();