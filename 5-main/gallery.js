const topPic = document.querySelector("#Gallery .photos_section .one");
const leftPic = document.querySelector("#Gallery .photos_section .two");
const rightPic = document.querySelector("#Gallery .photos_section .three");

let xxx = 1;
let yyy = 1;
let zzz = 1;

let topPicBG =[
    'url(style/Gallery/4-1.jpg)',
    'url(style/Gallery/4-2.jpg)',
    'url(style/Gallery/4-3.jpg)',
    'url(style/Gallery/4-4.jpg)',
    'url(style/Gallery/4-5.jpg)',
    'url(style/Gallery/4-6.jpg)',
    'url(style/Gallery/4-7.jpg)',
    'url(style/Gallery/4-8.jpg)',
    'url(style/Gallery/4-9.jpg)',
    'url(style/Gallery/4-10.jpg)',
]
setInterval(() => {
    if( xxx < topPicBG.length ){
        topPic.style.cssText = `
        background : ${topPicBG[xxx]} black;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    `
    xxx++
    // console.log(xxx)
    }else if(xxx = topPicBG.length - 1){
        xxx = 0
    }
}, 3000);



let leftPicBG =[
    'url(style/Gallery/5-1.jpg)',
    'url(style/Gallery/5-2.jpg)',
    'url(style/Gallery/5-3.jpg)',
    'url(style/Gallery/5-4.jpg)',
    'url(style/Gallery/5-5.jpg)',
    'url(style/Gallery/5-6.jpg)',
    'url(style/Gallery/5-7.jpg)',
    'url(style/Gallery/5-8.jpg)',
    'url(style/Gallery/5-9.jpg)',
    'url(style/Gallery/5-10.jpg)',
]
setTimeout(() => {
    setInterval(() => {
        if( yyy < leftPicBG.length ){
            leftPic.style.cssText = `
            background : ${leftPicBG[yyy]} black;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
        `
        yyy++
        // console.log(yyy)
        }else if(yyy = leftPicBG.length - 1){
            yyy = 0
        }
    }, 3000);
}, 1000);



let rightPicBG =[
    'url(style/Gallery/6-1.jpg)',
    'url(style/Gallery/6-2.jpg)',
    'url(style/Gallery/6-3.jpg)',
    'url(style/Gallery/6-4.jpg)',
    'url(style/Gallery/6-5.jpg)',
    'url(style/Gallery/6-6.jpg)',
    'url(style/Gallery/6-7.jpg)',
    'url(style/Gallery/6-8.jpg)',
    'url(style/Gallery/6-9.jpg)',
    'url(style/Gallery/6-10.jpg)',
]
setTimeout(() => {
    setInterval(() => {
        if( zzz < rightPicBG.length ){
            rightPic.style.cssText = `
            background : ${rightPicBG[zzz]} black;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
        `
        zzz++
        // console.log(zzz)
        }else if(zzz = rightPicBG.length - 1){
            zzz = 0
        }
    }, 3000);
}, 2000);

// console.log(it)

// it.style.cssText = `
// background : url(style/Gallery/4-2.jpg);
// background-position: center;
// background-size: contain;
// background-repeat: no-repeat;`

// function changePic(e){
//     console.log(e)
//     // console.log(e.target)
//     // console.log(e.target.className)
//     // e.target.className = 'testooooo'
//     // console.log(e.target.className)
//     e.target.src = 'style/Gallery/4-2.jpg';
//     console.log(e.target.url)
// }
// it.addEventListener('click',changePic)
// function changeFirst() {
//     let x = 0;
//     topPic.style.cssText = `
//     background : ${topPicBG[x]};
//     background-position: center;
//     background-size: contain;
//     background-repeat: no-repeat;
//     `;
//     x+1
//     console.log(x)
// }

// topPic.addEventListener('click',changeFirst)


