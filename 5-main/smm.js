const buttons = document.querySelectorAll('#reels button');
const reels = document.querySelectorAll('#reels .videos div');
const numbers = [
    `style/reels/reel1.mp4`,
    `style/reels/reel2.mp4`,
    `style/reels/reel3.mp4`,
    `style/reels/reel4.mp4`,
    `style/reels/1.mp4`,
    `style/reels/reel5.mp4`,
    `style/reels/reel6.mp4`,
    `style/reels/reel21.mp4`,
    `style/reels/reel7.mp4`,
    `style/reels/reel8.mp4`,
    `style/reels/reel9.mp4`,
    `style/reels/3.mp4`,
    `style/reels/reel10.mp4`,
    `style/reels/reel23.mp4`,
    `style/reels/reel11.mp4`,
    `style/reels/reel12.mp4`,
    `style/reels/reel24.mp4`,
    `style/reels/reel13.mp4`,
    `style/reels/reel14.mp4`,
    `style/reels/reel15.mp4`,
    `style/reels/2.mp4`,
    `style/reels/reel16.mp4`,
    `style/reels/reel17.mp4`,
    `style/reels/reel18.mp4`,
    `style/reels/reel22.mp4`,
    `style/reels/reel19.mp4`,
    `style/reels/reel20.mp4`,

];


const [next,previous] = buttons;
const [right,mid,left] = reels;


let i = 0
let x = 1
let v = 2

// function createI(){
//     // link.remove();
//     right.removeChild(right.firstElementChild)
//     const link = document.createElement('a');
//     link.setAttribute('target','_blank')
//     link.setAttribute('href',`${numbers[i]}`);
//     const video = document.createElement('video');
//     // video.setAttribute('autoplay','');
//     video.setAttribute('muted','');
//     video.setAttribute('loop','');
//     video.setAttribute('src',`${numbers[i]}`);  
//     link.appendChild(video);
//     right.appendChild(link);
// }


function createI(){
    // link.remove();
    right.removeChild(right.firstElementChild)
    // const link = document.createElement('a');
    // link.setAttribute('target','_blank')
    // link.setAttribute('href',`${numbers[i]}`);
    const video = document.createElement('video');
    // video.setAttribute('autoplay','');
    video.setAttribute('muted','');
    video.setAttribute('loop','');
    video.setAttribute('src',`${numbers[i]}`);  
    // link.appendChild(video);
    right.appendChild(video);
}



function createX(){
    // link.remove();
    mid.removeChild(mid.firstElementChild)
    const link = document.createElement('a');
    link.setAttribute('target','_blank')
    link.setAttribute('href',`${numbers[x]}`);
    const video = document.createElement('video');
    video.setAttribute('autoplay','');
    video.setAttribute('muted','');
    // video.setAttribute('loop','');
    video.setAttribute('src',`${numbers[x]}`);  
    link.appendChild(video);
    mid.appendChild(link);
}

// function createV(){
//     // link.remove();
//     left.removeChild(left.firstElementChild)
//     const link = document.createElement('a');
//     link.setAttribute('target','_blank')
//     link.setAttribute('href',`${numbers[v]}`);
//     const video = document.createElement('video');
//     // video.setAttribute('autoplay','');
//     video.setAttribute('muted','');
//     video.setAttribute('loop','');
//     video.setAttribute('src',`${numbers[v]}`);  
//     link.appendChild(video);
//     left.appendChild(link);
// }


function createV(){
    // link.remove();
    left.removeChild(left.firstElementChild)
    // const link = document.createElement('a');
    // link.setAttribute('target','_blank')
    // link.setAttribute('href',`${numbers[v]}`);
    const video = document.createElement('video');
    // video.setAttribute('autoplay','');
    video.setAttribute('muted','');
    video.setAttribute('loop','');
    video.setAttribute('src',`${numbers[v]}`);  
    // link.appendChild(video);
    left.appendChild(video);
}


// right.innerHTML = numbers[i];
// mid.innerHTML = numbers[x];
// left.innerHTML = numbers[v];

next.addEventListener('click',()=>{
    if( i < numbers.length -1 ){
        i++;
        createI();
        // right.innerHTML = numbers[i]
    } else {
        i = -1;
    }
    if( x < numbers.length -1 ){
        x++;
        createX();
        // mid.innerHTML = numbers[x]
    } else {
        x = -1;
    }
    if( v < numbers.length -1 ){
        v++;
        createV();
        // left.innerHTML = numbers[v]
    } else {
        v = -1;
    }
})

previous.addEventListener('click',()=>{
    if(i <= 0){
        i = numbers.length -1;
        createI();
        // right.innerHTML = numbers[i]
    }else{
        i--;
        createI();
        // right.innerHTML = numbers[i]
    }
    if(x <= 0){
        x = numbers.length -1;
        createX();
        // mid.innerHTML = numbers[x]
    }else{
        x--;
        createX();
        // mid.innerHTML = numbers[x]
    }
    if(v <= 0){
        v = numbers.length -1;
        createV();
        // left.innerHTML = numbers[v]
    }else{
        v--;
        createV();
        // left.innerHTML = numbers[v]
    }
})






// next.addEventListener('click',()=>{
//     if (i >= numbers.length -3 ) i = -1
//     i++;
//     return right.innerHTML = numbers[i], mid.innerHTML = numbers[i+1], left.innerHTML = numbers[i+2]
// })

// previous.addEventListener('click',()=>{
//     if(i <= 0) i = numbers.length;
//     i--;
//     return right.innerHTML = numbers[i], mid.innerHTML = numbers[i+1], left.innerHTML = numbers[i+2]
// })


// Get  to DOM elements
const gameContainer = document.querySelector(".rock_game"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");

// Loop through each option image element
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src = "style/images/rock.png";
    result.textContent = "Wait...";

    // Loop through each option image again
    optionImages.forEach((image2, index2) => {
      // If the current index doesn't match the clicked index
      // Remove the "active" class from the other option images
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    // Set a timeout to delay the result calculation
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      // Get the source of the clicked option image
      let imageSrc = e.target.querySelector("img").src;
      // Set the user image to the clicked option image
      userResult.src = imageSrc;

      // Generate a random number between 0 and 2
      let randomNumber = Math.floor(Math.random() * 3);
      // Create an array of CPU image options
      let cpuImages = ["style/images/rock.png", "style/images/paper.png", "style/images/scissors.png"];
      // Set the CPU image to a random option from the array
      cpuResult.src = cpuImages[randomNumber];

      // Assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
      let cpuValue = ["R", "P", "S"][randomNumber];
      // Assign a letter value to the clicked option (based on index)
      let userValue = ["R", "P", "S"][index];

      // Create an object with all possible outcomes
      let outcomes = {
        RR: "Draw",
        RP: "I",
        RS: "U",
        PP: "Draw",
        PR: "U",
        PS: "I",
        SS: "Draw",
        SR: "I",
        SP: "U",
      };

      // Look up the outcome value based on user and CPU options
      let outComeValue = outcomes[userValue + cpuValue];

      // Display the result
    //   result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
    if (userValue === cpuValue) {
        result.textContent = "Match Draw ... Try again 🙂"
    } else if(outComeValue == 'U'){
        // console.log(outComeValue)
        // console.log('U won')
        result.textContent = "Congrats U've unlocked another section 🥳"
        Gallery.style.display = 'block'
        thirdList.style.display = 'block'

    } else if(outComeValue == 'I'){
        // console.log(outComeValue)
        // console.log('I won')
        result.textContent = "My name is Islam and i'm the winner 😎"
    }

    }, 2500);
  });
});
