import {cat_pic,dog_pic} from "./variables.js";

const showCat = () => {

    $.ajax({
        url:'https://api.thecatapi.com/v1/images/search',
        type:"GET",
        success:(data) =>{
            cat_pic.innerHTML = `<img src="${data[0].url}">`;    
        },
        error:(err) => {
            console.log(err);
        }
    });
}

const showDog = () => {

    $.ajax({
        url:'https://dog.ceo/api/breeds/image/random',
        type:"GET",
        success:(data) =>{
            dog_pic.innerHTML = `<img src="${data.message}">`;    
        },
        error:(err) => {
            console.log(err);
        }
    });

}

export {showCat,showDog};