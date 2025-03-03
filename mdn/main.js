// // let age=11;
// // console.log(age);
// //  age = 30;
// //  console.log(age);
// //  pi=10;
// //  console.log(pi);
// //  console.log(23 + 97);
// // //  console.log((4 + 6 + 9) / 77);
// // //  let a = 10;
// // //  console.log(a);
// // //  a = 12;
// // //  console.log(a);
// // //  let b = 7 * a
// // //  console.log(b);
// // //  const max = 57;
// // //  const actual = max - 13;
// // //  const percentage = actual/max;
// // //  console.log(percentage);
	
// // let message;
// // message = 'Hello!';

// // alert(message);

// // let x = "5";
// // let y = "2";

// // let z = x/y;
// // console.log(z);

// // let d = 5;
// // d++;
// // // let r = d;
// // console.log(d);
// // const select = document.querySelector("select");
// // const para = document.querySelector("p");

// // select.addEventListener("change", setWeather);

// // function setWeather() {
// //   const choice = select.value;

// //   if (choice === "sunny") {
// //     para.textContent =
// //       "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
// //   } else if (choice === "rainy") {
// //     para.textContent =
// //       "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
// //   } else if (choice === "snowing") {
// //     para.textContent =
// //       "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
// //   } else if (choice === "overcast") {
// //     para.textContent =
// //       "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
// //   } else {
// //     para.textContent = "";
// //   }
// // }
// // if (choice === "sunny") {
// //     if (temperature < 86) {
// //       para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
// //     } else if (temperature >= 86) {
// //       para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
// //     }
// //   }
//   function favoriteAnimal(animal, name, age){
//     return animal+ name+ age+ " is my favorite animal"
//   }
//   console.log(favoriteAnimal("goat ", "daniel ", "10"));
//   const myString = "i am a string";
//   const newString = myString.replace("string", "sausage");
//   console.log(newString);
//   const myArray = ["i ", "love ", "chocolate ", "frogs"];
//   const newArray = myArray.join("");
//   console.log(newArray);
//   const myNumber = Math.random();
//   console.log(myNumber);
//   const canvas = document.getElementById("myCanvas");
//   const ctx = canvas.getContext("2d");
//   const WIDTH = window.innerWidth;
//   const HEIGHT = window.innerHeight;
//   canvas.width=WIDTH;
//   canvas.height =HEIGHT;
//   function random(max){
//     return Math.random()*max;
//   }
//   function draw(){
//     ctx.clearRect(0,0,WIDTH, HEIGHT);
//     for(let i = 0; i <100; i++){
//       ctx.beginPath();
//       ctx.fillStyle = "rgb(255 0 0 / 50%)"; // Red with 50% transparency
//       ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
//       ctx.fill();
//   }
// }

// // Call the draw function once to display the circles
// draw();
// function hello( name="chris"){
//   console.log('Hello ${name}!');
// }
// hello();
// const name = "chris";
// let username = "john";
// function showMessage(){
//   let userName = "Bob";
//   let message ='Hello, ' + userName;
//   alert(message);
//   alert(username);
// }
// showMessage();
function add7(num){

  return num + 7;
}
console.log(add7(8));
function multiply(a,b){
  return a * b
}
console.log(multiply(2,2));
function capitalize(){
  let string ="my name is john doe";
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  
}
console.log(capitalize());
function lastLetter(alph){
  return alph.slice(3);
}
console.log(lastLetter('abcd'));
let answer = (prompt("Please enter the number you would like to FizzBuzz up to:"));
for (let i=1; i<=answer; i++){
if(i % 3 === 0 && i % 5 ===0){
  console.log("FizzBuzz");
}
  else if(i % 3 ===0){
    console.log("Fizz");
  }
  else if(i % 5 ===0){
    console.log("Buzz");
  }
  else{
    console.log(i)
  }};
const str1 ="Hello";
const str2 ="World!";
const message = str1 + " " +str2;
console.log(message);

  
  // function draw() {
  //   ctx.clearRect(0, 0, WIDTH, HEIGHT);
  //   for (let i = 0; i < 100; i++) {
  //     ctx.beginPath();
  //     ctx.fillStyle = "rgb(255 0 0 / 50%)";
  //     ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
  //     ctx.fill();
  //   }
  // }
  