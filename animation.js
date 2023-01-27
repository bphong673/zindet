let body = document.body;
let scr_height = body.scrollHeight;
let windowHeight = window.innerHeight

let textInput = document.getElementById('textInput');
let mcords = {}
const circles = document.querySelectorAll('.circle');




console.log(circles)



body.addEventListener('mousemove', function (m) {

    mcords.x = m.clientX;
    mcords.y = m.clientY;

    console.log('RUN')
    circles.forEach(function hello(i) {
        setTimeout(

            () => {i.style.left = mcords.x + 'px';
        i.style.top = mcords.y + 'px';}
        , 1000

        )
});


})


let myPromise = new Promise(function(myResolve, myReject) {

    console.log(true)
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );