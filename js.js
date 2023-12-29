const jan = new Date('Dec 2023, 30 01:03:00').getTime();//get the time you want to count for

function time(){
    //declare the time now and the gap between now and after
    const now = new Date().getTime();
    const gap = jan - now;
    //translate from millisecond to your unites
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    //calc how to get the right number
    let d = Math.floor(gap / day);
    let h = Math.floor((gap % day) / hour);
    let m = Math.floor((gap % hour) / minute);
    let s = Math.floor((gap % minute) / second);

    document.querySelector('.d').innerHTML = d;
    document.querySelector('.h').innerHTML = h;
    document.querySelector('.m').innerHTML = m;
    document.querySelector('.s').innerHTML = s;

    if(d <= 0 & h <= 0 & m <= 0 & s <= 0 ){
        transfere()
    }

}
//don't forget to play that function every second
setInterval(() => {
    time()
}, 1000);

function transfere(){
    window.location ='2-LodingScreen/index.html'
}




function change() {

    const img = [
        'url(style/1.png)',
        'url(style/2.png)',
        'url(style/3.png)',
        'url(style/4.png)',
        'url(style/5.png)',
        'url(style/6.png)',
        'url(style/7.png)',
        'url(style/8.png)',
        'url(style/9.png)',
        'url(style/10.png)',
        'url(style/11.png)',
        'url(style/12.png)',
        'url(style/13.png)',
        'url(style/14.png)',
        'url(style/15.png)'
    ]
    
    const div = document.querySelector('.container div');
    const bg = img[Math.floor(Math.random() * img.length)];
    div.style.backgroundImage = bg;

}
setInterval(() => {
    change()
}, 3000);

// const children = document.querySelector('.container').children;

// function loopToChange(){
//     for(let i = 0 ; i < 10 ; i++){
//         children[i].removeAttribute('id');
//         children[i+1].setAttribute('id','change');
//         console.log(i);
//     }
// }

// setInterval(() =>{
//     loopToChange()
// },1000)


// function play(){
//     for(let i = 0 ; i < 0 ; i++){
//         console.log(i);
//     }
// }
// setInterval(() => {
//     play()
// },1000)


// function play(){
//     for( let i = 0 ; i < 10 ; i++ ){
//         if(i === 0){
//             children[0].removeAttribute('id');
//             children[1].setAttribute('id','change');
//         }else if( i === 1){
//             children[1].removeAttribute('id');
//             children[2].setAttribute('id','change');
//         }
//         else if( i === 2){
//             children[2].removeAttribute('id');
//             children[3].setAttribute('id','change');
//         }
//         else if( i === 3){
//             children[3].removeAttribute('id');
//             children[4].setAttribute('id','change');
//         }
//         else if( i === 4){
//             children[4].removeAttribute('id');
//             children[5].setAttribute('id','change');
//         }
//         else if( i === 5){
//             children[5].removeAttribute('id');
//             children[6].setAttribute('id','change');
//         }
//         else if( i === 6){
//             children[6].removeAttribute('id');
//             children[7].setAttribute('id','change');
//         }
//         else if( i === 7){
//             children[7].removeAttribute('id');
//             children[8].setAttribute('id','change');
//         }
//         else if( i === 8){
//             children[8].removeAttribute('id');
//             children[9].setAttribute('id','change');
//         }
//         }
// }

// setInterval(() => {
//     play()
// }, 1000);

// function change(){
//     x = 0;
//     children[x].removeAttribute('id');
//     setTimeout(() => {
//         x++;
//         children[x].setAttribute('id','change')
//     }, 1000);
//     return x
// }

// setInterval(() => {
//     x = 0;
//     children[x].removeAttribute('id');
//     setTimeout(() => {
//         x++;
//         children[x].setAttribute('id','change')
//     }, 1000);
//     return x;
// }, 1000);

