const title = document.querySelector('.title');
const message = ["As usual we start our party with celebrating the new number that counted on your age, but that year will be different so we want to make a new celebrating style. I started this gift and i wanted it to be a real mark for you to see me when i'm not here with you... let's not talk too much we have a beautiful and amazing gift awaiting for you honey. I'm waiting now for your feedback about the gift so let's get started. I'll play a game with you ... I hope you you enjoy it. We will continue after 10sec..."];
let chart = 0;

function type(){
    if(chart<message[0].length){
        title.innerHTML+=message[0].charAt(chart);
        chart++;
        setTimeout(type,100);
        if(chart === 506){
            play()
        }
    }
}

document.addEventListener('DOMContentLoaded',function(){
    setTimeout(type, 2000);
})
function play(){
    setTimeout(() => {
        window.location ='../4-LoadingScreen/index.html'
    }, 10000);
}