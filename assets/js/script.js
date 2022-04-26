// let cat_pic = document.querySelector(".cat-pic"),
// dog_pic = document.querySelector(".dog-pic"),
// cat_button = document.querySelector(".cat-button"),
// dog_button = document.querySelector(".dog-button");

// const showCat = () => {

//     $.ajax({
//         url:'https://api.thecatapi.com/v1/images/search',
//         type:"GET",
//         success:(data) =>{
//             cat_pic.innerHTML = `<img src="${data[0].url}">`;    
//         },
//         error:(err) => {
//             console.log(err);
//         }
//     });
// }

// const showDog = () => {

//     $.ajax({
//         url:'https://dog.ceo/api/breeds/image/random',
//         type:"GET",
//         success:(data) =>{
//             dog_pic.innerHTML = `<img src="${data.message}">`;    
//         },
//         error:(err) => {
//             console.log(err);
//         }
//     });

// }

import * as fun from "./functions.js";
import {cat_button,dog_button} from "./variables.js";

cat_button.addEventListener("click",fun.showCat);
dog_button.addEventListener("click",fun.showDog);





















