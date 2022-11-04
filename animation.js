
let ex = 1

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


function scroll() {
    let scrollHeight = document.body.scrollHeight;
    let scrollTop = document.body.scrollTop + window.innerHeight;


    let percentage = scrollTop / scrollHeight * 100

    ex = ex + 1

    console.log(ex, 'new')


    let change = ((percentage) * 10).toString() + 'vh';
    let change1 = (percentage)
    document.getElementById('hierarchy').style.left = change;


    for (let i = 0; i < document.getElementsByClassName('hi').length; i++) {
        const e = document.getElementsByClassName('hi')[i];
        //e.style.left = change1;
        console.log(Number('10vh'))
    }
}
 

document.body.addEventListener('scroll', () => { scroll() });