
let range = Math.round((document.body.scrollHeight - window.innerHeight));
let scrforce = 0
let scrUporDown = true
let scrLim = 5
let body = document.body
let scred = false

function vh_px(num) {
    let winHeight = window.innerHeight;
    let vh = num * winHeight / 100;

    return vh;
};
function vw_px(num) {
    let winWidth = window.innerWidth;
    let vw = num * winWidth / 100;

    return vw;
};

function numFromString(str) {

    return str.replace(/\D/g, '');
};


let percentage = 0
let currentSrc = 0



function scrollUp(last, current) {

    if (last > current) return true;
    if (last < current) return false;


}

function turnpage(scrollTop,scrUporDown,scrforce) {
    function findBiggerNum() {
        let bigger = 0

        for (let page = 0; page <range; page++) {

            
            let pos = page * vh_px(100)
            if (pos >= scrollTop) {

                bigger = pos

               break; 
            }

        }


        console.log('bigger')
        return bigger || null;
    }

    function findSmallerNum() {
        let smaller = 0

        console.log('smaller')
        
        for (let page = 0; page < range; page++) {

            
            
            let pos = page * vh_px(100)
            if (pos < scrollTop && pos >= smaller) {

                smaller = pos

              
            }

        }


        return smaller || null;
    }


    document.body.scrollTo(0,scrUporDown? findSmallerNum(): findBiggerNum() )


}


function scroll() {
    let scrollHeight = document.body.scrollHeight - window.innerHeight;
    let scrollTop = document.body.scrollTop;

    currentSrc = scrollTop / scrollHeight * 100

    if (scrollUp(percentage, currentSrc) != scrUporDown) {

        scrforce = 0

        scrUporDown = !scrUporDown;
    } else if (scrforce <= scrLim) {
        scrforce += 1
    } else {
        turnpage(scrollTop, scrUporDown, scrforce)
        scrforce = 0
    }













    console.log(scrforce);

    percentage = currentSrc;

}

for (let i = 0; i < document.getElementsByClassName('page').length; i++) {
    let parent = document.getElementsByClassName('page')

    parent[i].style.top = i * vh_px(100) + 'px';
    parent[i].style.color = i % 2 == 0 ? 'red' : 'blue';
}

const date =new Date();
console.log(date.getSeconds())
let exsec = 0
let lastScrTop = 0
document.body.addEventListener('scroll', () => { 
   
        

    disableScroll()
       scroll()
       enableScroll()

       
        
        
    


});


// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}