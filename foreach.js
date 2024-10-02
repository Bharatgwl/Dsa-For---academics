let arr = [10, 20, 30, 40];
arr.forEach((value, index) => {
    console.log(value, index);
})
arr.forEach(add);
function add(val, index) {
    console.log(val * 10, index);
}