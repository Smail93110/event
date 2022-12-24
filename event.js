const btn = document.querySelector('#btn');
const img = document.getElementById('img');


btn.addEventListener('click', () => {
    img.classList.toggle('show')

    // alert('sa fonctionne ')
    // console.log('yes');

})


// ******************************************


const mouseEvent = document.querySelector('.mouseEvent');
const horizental = document.querySelector('.horizental');
const vertical = document.querySelector('.vertical');


mouseEvent.addEventListener('mousemove', (e) => {
    horizental.innerHTML = e.x;
    vertical.innerHTML = e.y;
    mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";
    document.body.style.overflow = "hidden";

    // console.log(e);


    if (e.x > 500) {
        document.body.style.filter = "blur(3px)";
    } else {
        document.body.style.filter = "none";
    }


})



// *************************************************

document.getElementById('input').addEventListener('input', (e) => {

    vertical.innerHTML = e.target.value;
    // horizental.innerHTML = e.target.value;


    // console.log(e.target.value);

})


// ************************************************* DARK mode pour un seul element
const theme = document.querySelector('.theme');
// const dark = document.querySelector('.dark');


theme.addEventListener('click', (e) => {
    console.log(e.target.id);
    document.body.classList.remove("whitetheme2", "darktheme");


    switch (e.target.id) {
        case "dark":
            document.body.classList.add("darktheme");


            break;
            default:
            null;


    }





});



const theme2 = document.querySelector('.theme2');
// const white = document.querySelector('.white');



theme2.addEventListener('click', (e) => {
    console.log(e.target.id);
    document.body.classList.remove("whitetheme2", "darktheme");

    switch (e.target.id) {
        case "white":

            document.body.classList.add("whitetheme2");
            break;
        default:
            null;

    }





});


//******************************************/


// const theme = document.querySelectorAll('.theme');
// // const dark = document.querySelector('.dark');
// // const white = document.querySelector('.white');



// theme.forEach((item) => {
//     item.addEventListener('click ', (e) => {
//         console.log(e.target.id);
//         switch(e.target.id){

//             case "dark":
//                 document.body.classList.add("darktheme")
//                 break;
//                 case "white":
//                     document.body.classList.add("whitetheme")
//                     break;
//                     default:
//                         null;
//             }


//     })


// })



