// let firstpromise =new Promise((resolve , reject)=>{
//     console.log("hello my name is bharat");
// })


            /* use resolve*/
// let firstpromise =new Promise((resolve , reject)=>{
//     console.log("hello my name is bharat");
//     resolve(1);
// })

            /*use reject */

// let firstpromise =new Promise((resolve , reject)=>{
//     console.log("hello my name is bharat");
//     reject(1);
//or we can also send our custom error 
//reject(new Error("custom error"));
// })

            /*use any async code */
// function saymyname(){
//     console.log("hello my name is bharat");
// }
// setTimeout(saymyname,2000);
            /*use any async code in promise */
// let firstpromise = new Promise((resolve, reject) => {
//     setTimeout(function saymyname() {
//         console.log("hello my name is bharat");
//     }, 10000);
//     resolve(2);

// });



            /*using then and catch  */
// let firstpromise= new Promise((resolve, reject)=>{
// let success=false;
// if(success){
//     resolve("promise fullfilled");
// }
// else{
//     reject(" promise rejected");
// }
// });
// firstpromise.then((msg)=>{
//     console.log("then ka msg: "+msg);
// }).catch((err)=>{
//     console.log("catch msg: "+err);
// })

            /* handling multiple promises  */
// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 0, "first promise");
// })
// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 0, "second promise");
// })
// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 10000, "third promise");
// })
// Promise.all([promise1, promise2, promise3])
//     .then((values) => {
//         console.log(values);
//     }).catch((err) => {
//         console.log(new Error("err"));
//     })
