import {cat_pic,dog_pic} from "./variables.js";

const showCat = () => {

    fetch('https://api.thecatapi.com/v1/images/search'
    ).then(res => res.json())
    .then(
        data => {cat_pic.innerHTML = `<img src="${data[0].url}">`;}
        );

}

const showDog = () => {

    fetch('https://dog.ceo/api/breeds/image/random'
    ).then(res => res.json())
    .then(data => {dog_pic.innerHTML = `<img src="${data.message}">`;});
}

export {showCat,showDog};