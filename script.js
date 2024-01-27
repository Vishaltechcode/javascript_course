


// // var courseduration = 2;               number datatype

// // console.log(typeof courseduration)

// var coursename = 'fullstack developer';  string datatype

// console.log(typeof coursename)

// var courseidea = '2';                    boolean datatype

// console.log(typeof courseidea);

// if(courseduration == courseidea){
//     console.log(true);
// } else {
//      console.log(false);
// }    

// var coursecompleted = false;              boolean datatype

// console.log(typeof coursecompleted);
 
// var ;                                     undefined datatype

// console.log(typeof coursecompleted);

// var coursetopics = null;                  object

// console.log(typeof coursetopics);

// var coursename = "REACT COURSE";                  object

// console.log(coursename.

// console.log(coursename);

// var courseday = 4;

// switch(courseday){
//     case 1:
//        console.log("sunday");
//     break;
//     case 2:
//        console.log("monday");
//     break;
//     case 3:
//        console.log("tuesday");
//     break;
//     case 4:
//        console.log("wednesday");
//     break;
//     case 5:
//        console.log("thursday");
//     break;
//     case 6:
//        console.log("friday");
//     break;
//     default:
//        console.log("saturday");      
// }


// var studentscores = [3,26,99,49,88,"ashok",true,null,88];


// console.log(studentscores);
// var vishalscores = [3,1,8,7,9,5];
// var mariascores = [3,21,8,13,9,51];

//console.log(mariascores.sort((a,b)=>a-b));
//console.log(mariascores);

//mariascores.push(39);
//mariascores.unshift(23);
//console.log(mariascores);
//mariascores.pop();
//mariascores.shift();
//mariascores.splice(3,1,7);
//console.log(mariascores);


//var employees = ["ashok","anita","rakesh","vikash","vishal","hari"];
//console.log(employees.indexOf("ajay"));
//console.log(employees.indexOf("vishal"));
// //console.log(employees.includes("ajay"));
// var employees = ["ashok","anita","rakesh","vikash","vishal","hari"];

// //for(var i=0;i<employees.length;i++){
// //console.log(employees[i]);
// //}
// //employees.forEach(emp => console.log(emp));

// //var myfavemployees = employees.slice(2,5);
// //console.log(myfavemployees);

// // var myfinaldata = employees.join("-");

// // console.log(myfinaldata);

// // var mydata = employees.fill("vikas", 4);

// // console.log(mydata);
// // function add(){
// //     return "generally i do mathematics addition";
// // }
// // //invoke method

// // console.log(add());

// //empty parameterized function
// function add(){
//         return "this is a addition method";
//      }

//      // paramaterized function
// function add(a,b){
//     return a+b;
// }
 
// //arrow function
// const add = (a,b) => a+b;

// //anonymous function
// (()=>{console.log("welcome")});

// //immediately invoking function
// (console.log("welocme to the world of javascript function"))();

// function A(){    //outer function
//     function B({ //Inner function

//     }
// }
  
// var myname = "rakesh";

// var myname = "hari";

// console.log(myname);

// console.log(courseraring);

// var courserating;


// let myname = "rakesh";

//  myname = "hari";

//  console.log(myname);

//const coursename;

// const coursename = "javascript fullstack";


// console.log(coursename);


// let mydata = [32,46,28,8,3,9,11,44];

// for (mydata % 2 == 0){
// console.log(mydata);
// }

// let mydata = [32, 46, 28, 8, 3, 9, 11, 44];

// for(var i=0;i<mydata.length;i++){
    
    
//     if(mydata[i]%2 == 0){

//         console.log(mydata[i]);

//         }
//         }

//  var selectButton = document.querySelector("button");

//  selectButton.addEventListener('click',(event)=> {
//     selectButton.style.backgroundColor = "green";
//     selectButton.style.color = "white";
//     selectButton.textContent = "user already selected" 


// var newTitle = document.createElement("h1");
// newTitle.textContent = "web digital course";



// var newTitletwo = document.createElement("h1");
// newTitle.textContent = "this is advanced course";

// var selectedImage = document.createElement("img");
// selectedImage.src="code2.png";


// selectButton.appendChild(newTitle);
// selectButton.append(newTitletwo);

// selectButton.appendChild(selectedImage);

// });


// var selectButton = document.querySelector("button");
// var targetElement = document.querySelector(".result");

// selectButton.addEventListener('click',(event)=> {
    
//     for(var i=0;i<100;i++){
//     var divElement = document.createElement("div");

//     var h1Element = document.createElement("h1");
//     h1Element.textContent = "Amit Jee";

//     var imgElement = document.createElement("img");
//     imgElement.src = "code2.png";

//     divElement.appendChild(h1Element);
//     divElement.appendChild(imgElement);

//     targetElement.appendChild(divElement);
//     }

// // });
// let myfriends = ["surya","jyothika","amitabh","rr","ranbir","ishwarya","nayanatara","atlee"];

// // for(var i=0;i<myfriends.length;i++){
// //     console.log(myfriends[i]);
// // }

// //myfriends.map(friend => console.log(friend));

// let mybestfriends = myfriends.filter((friend)=> friend.startsWith("i"));

// console.log(mybestfriends);

// var coursefeeses = [100,37,21,87,73,28,66,99,56];

// var total = coursefeeses.reduce((a,b)=>a+b);
// console.log(coursefesses);
// console.log(total);

// function setUserChoice(){
//     localStorage.setItem("option","uk is my fav destination");
// }

// function setSessionStorage(){
//     sessionStorage.setItem("mygoodfriend","shivani")
// }

const options = {
    enableHighAccuracy:true,
    timeout:5000
} 

function getMyLocation(){
    navigator.geolocation.getCurrentPosition(success,error,options);
}

function success(pos){

const crd =pos.coords;

console.log("my current position");
console.log(crd.latitude);
console.log(crd.longitude);

}

function error(err){
    console.warn('${err.message}')
}


function doTask(){
    localStorage.setItem("youtuber","kohli");
    if(localStorage.getItem("items") != null &&  Number(localStorage.getItem("items"))<5){
        let mytotal = Number(localStorage.getItem("items"))+1;
        localStorage.setItem("items",mytotal);
    }else{
    localStorage.setItem("items",1);
    }
}