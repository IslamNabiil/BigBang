const songs = document.querySelectorAll('#Intro .songs div')
const mySongOne = document.getElementById('one')
const mySongTwo = document.getElementById('two')
const mySongThree = document.getElementById('three')
const paper = document.querySelector('.paper')
const game = document.querySelector('.game')
document.addEventListener('DOMContentLoaded',()=>{
    paper.classList.add('none')
    game.classList.add('none')
})
songs[0].onclick = function(){
    mySongOne.play();
    songs[0].classList.add('active_song')
    setTimeout(() => {
        songs[0].classList.remove('active_song')
        songs[1].classList.add('active_song')
        mySongTwo.play()
        setTimeout(() => {
            songs[1].classList.remove('active_song')
            songs[2].classList.add('active_song')
            mySongThree.play()
            setTimeout(() => {
                songs[2].classList.remove('active_song')
                paper.classList.remove('none')
                setTimeout(() => {
                    game.classList.remove('none')
                }, 120000);
            }, 60000);
        }, 268000);
    }, 23000);
}






function random(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}


const text = document.getElementsByTagName('input')[0];
const p = document.getElementsByTagName('p')[2]
const test = random(0,1000)
console.log(test)
function play(){

    // if (text.valueAsNumber === test) {
    //     // console.log('right')
    //     // console.log(random(0,10))
    //     // console.log(test)
    //     p.innerHTML = 'right'
    // } else {
    //     // console.log('wrong')
    //     // console.log(random(0,10))
    //     // console.log(test)
    //     p.innerHTML = 'wrong'

    // }
    if(text.valueAsNumber > test){
        console.log('the number is high')
        p.innerText = 'the number is high'
    } else if(text.valueAsNumber < test){
        console.log('the number is low')
        p.innerText = 'the number is low'
    } else {
        console.log('pass')
        p.innerText = "Congrats U've unlocked a new Section"
        SMM.style.display = 'block'
        secondList.style.display = 'block'
    }
}

const SMM = document.getElementById('SMM')
const secondList = document.getElementById('second_list')
// const links = document.querySelectorAll('ul li a')
// const [one,two,three,four] = links
// console.log(links)
