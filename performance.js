// let T1 = performance.now();

// for (let i = 0; i < 10; i++) {
//     let para = document.createElement('p');
//     para.textContent = "this is para" ;

//     document.body.appendChild(para);

// }
// let T2 = performance.now();
// console.log(T2 - T1);//0.40000009536743164 time it will take

// const T3 = performance.now();

// let Mydiv = document.createElement('div');
// for (let i = 0; i < 10; i++) {
//     let para = document.createElement('p');
//     para.textContent = "this is a para ";

//     Mydiv.appendChild(para);

// }
// document.body.appendChild(Mydiv);
// const T4 = performance.now();
// console.log(T4 - T3);0.39999985694885254



// this takes least time to render
// const T3 = performance.now();


// let fragment= document.createDocumentFragment()
// for (let i = 0; i < 10; i++) {
//     let para = document.createElement('p');
//     para.textContent = "this is a para ";
//     fragment.appendChild(para);

// }
// document.body.appendChild(fragment);
// const T4 = performance.now();
// console.log(T4 - T3);//0.2999999523162842