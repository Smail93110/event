// const array = ['Paris', 'Lyon', 'Bordeau', 'Monréal']
// const array1 = ['Paris', 33, ['Bordeau', 'Monréal'], true]

// console.log(array[0])
// console.log(array[1][3]);
// for(i= 0; i<array.length; i++){

// console.log(typeof array1[i]);


// }


// const number = [11, 33, , 22, 44]
// console.log(number.sort());




//*********************************************** */

const input = document.getElementById('input');
const video = document.getElementById('video');
let link = "";


input.addEventListener("input", (e) => {
    console.log(e.target.value);



    link = (e.target.value);
    changeLink(e.target.value);

    if (link) {


        video.innerHTML = `<iframe width="560" height="315" src=${link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    }

});

const changeLink = (linkTOChange) =>{
    let embed = linkTOChange.replace('watch?v=',"embed/");
    link = embed.split('&')[0];
    console.log(link);



}

// https://www.youtube.com/embed/QB1DTl7HFnc
// https://www.youtube.com/watch?v=QB1DTl7HFnc&t=13s&ab_channel=FromScratch-Led%C3%A9veloppementWebdez%C3%A9ro