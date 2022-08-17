// async and callbacks

// setTimeout 
function someCallBack () {
    console.log("Hi everybody"); 
}

// const id = setTimeout(function() {
//     console.log("hi everybody") 
// }, 2000) 
// console.log("this runs first")
// // you can cancel the triggered timeout 
// clearTimeout(id) 

let counter = 1 
let timOutId 
function callback(){
    console.log(counter)
    timOutId = setTimeout(callback, 1000)
    counter++
    if (counter > 3){
        clearTimeout(timOutId)
    }
}
// callback()
// 1... 2... 3... 4... 5... (every second one higher number (++ is adding 1 every time))
// withd clearTimeout counter > 3 it stops after 3 

//a better war to build a counter 
//setInterval 
// let i = 1 
// setInterval(function (){
//     console.log(i)
//     i++
// },1000)



