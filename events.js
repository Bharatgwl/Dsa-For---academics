// let paras = document.querySelectorAll('#fpara');
// for (let i = 0; i < paras.length; i++) {
//     let para = paras[i];
//     para.addEventListener('click', function () {
//         alert("You have clicked on Para: "+ (i + 1));
//     })
// }




function changetext(event) {
    console.log(event);
    let fpara = document.getElementById('fpara');
    fpara.textContent = "hello bhai";
}
let fpara = document.getElementById('fpara')

fpara.addEventListener('click', changetext );





// function changetext() {
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "hello bhai";
// }
// let fpara = document.getElementById('fpara')

// fpara.addEventListener('click', changetext);
// fpara.removeEventListener('click',changetext);