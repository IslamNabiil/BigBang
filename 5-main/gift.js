const lastMessage = document.querySelector('.last_message')
const borderBox = document.querySelector(".body_box");
const presentBox = document.querySelector(".present_box");
const cover = document.querySelector(".cover");
const wrape = document.querySelector(".wrape");
// console.log(presentBox , cover , wrape)
if ((Gift.style.display = "none")) {
  setTimeout(() => {
    presentBox.style.opacity = "1";
    cover.style.animation = "shake linear 4s infinite";
  }, 2000);
  setTimeout(() => {
    presentBox.addEventListener("click", () => {
      cover.style.animation = "none";
      wrape.classList.add("pull");
      setTimeout(() => {
        cover.classList.add("throw_away");
      }, 1000);
      setTimeout(() => {
        presentBox.classList.add("fade");
      }, 60000);
      setTimeout(() => {
        borderBox.style.display = "none";
        //add the final div that contains the links
        const finalDiv = document.createElement('div')
        const finalP = document.createElement('p')
        const finalLink = document.createElement('a')
        finalDiv.classList.add('final_div')
        finalP.classList.add('final_p')
        finalLink.classList.add('final_a')
        finalLink.innerHTML = 'Your first gift My lady : https://islamnabiil.github.io/2022/'
        finalLink.setAttribute('href','https://islamnabiil.github.io/2022/')
        finalLink.setAttribute('target','_blank')
        finalP.appendChild(finalLink)
        finalDiv.appendChild(finalP)
        lastMessage.insertAdjacentElement('afterend',finalDiv)
      }, 2100);
    });
  }, 4000);
}

//https://islamnabiil.github.io/2022/
//https://islamnabiil.github.io/WhatsApp/
