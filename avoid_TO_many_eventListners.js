// let paras = document.querySelectorAll('p');
// function alertpara(event) {
//     alert("you have clicked on: " + event.target.textContent);
// }
// for (let i = 0; i < paras.length; i++) {
//     let para = paras[i];
//     para.addEventListener('click', alertpara);
// }

    // Putting eventlistener to whole div

let divv = document.getElementById('mydiv').addEventListener('click', alertpara);;
function alertpara(event) {
    alert("you have clicked on: " + event.target.textContent);
}
// divv.addEventListener('click', alertpara);


   // if we want to add event listenerss on specific position in a div of html content

// let elem = document.getElementById('mydiv');
// function alertpara(event) {
//     alert("you have clicked on: " + event.target.textContent);
// }
// elem.addEventListener('click', alertpara);


     /*if we want to perform action for specific element */ 
     
// let elem = document.getElementById('mydiv');
// function alertpara(event) {
//     if (event.target.nodeName === 'SPAN')
//         alert("you have clicked on: " + event.target.textContent);
// }
// elem.addEventListener('click', alertpara);