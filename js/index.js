//img removal//
const contentDestination = document.querySelector('.content-destination')
const images = document.querySelectorAll('img')
contentDestination.addEventListener('copy', function () {
  closingImage.style.display = 'none';
})
const closingImage = document.querySelector('.content-destination img')
//mousedown//
const headerSwap = document.querySelectorAll("h2");
headerSwap.forEach(h2 =>{
  h2.addEventListener("click", (event)=>{ 
    event.target.style.color = "green";
  
    })
})

//dblclick//
const paraPolka = document.querySelectorAll("p");
paraPolka.forEach(p =>{
    p.addEventListener("dblclick",(el)=>{
        el.target.style.fontSize= "2rem"
    })
})
//click//
const navLinks = document.querySelectorAll('a.nav-link');
navLinks.forEach(link=> {
    link.addEventListener('click', (el) => {
        el.target.style.color = 'orange';
    })
})
//full blackout//
const paraPolka1 = document.querySelectorAll("p");
paraPolka1.forEach(p =>{
    p.addEventListener("dblclick",(el)=>{
        el.target.style.color = "black"
        el.target.style.backgroundColor = "black"
    })
})
//Blackout//
document.addEventListener('keydown', event => {
    if (event.key === 'd') {
      document.body.style.color = "white"
      document.body.style.backgroundColor = "black"
    }
  })
//keyup//
document.addEventListener("keyup", event =>{
    if (event.key === "r"){
        event.target.style.color = "red";
    }else{
        event.target.style.color="purple";
    }
    })
//     //onwheel//
//     scale = Math.min(Math.max(.125, scale), 4)
//     .addEventListener("onwheel", event =>{
//         event.style.transform =`${scale}`
//     })
//     let scale =1;
// //resize//
// function sizeOut(){
//     event.preventDefault();
//     heightOutput.textContent = window.innerHeight
//     windowOutput.textContent = window. innerWidth
// }
// window.onresize = sizeOut;
// window.addEventListener("resize", sizeOut);
//select//
// function logSelection(event) {
//     const log = document.getElementById('log');
//     const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
//     log.textContent = `You selected: ${selection}`;
//   }
// const input = document.querySelector('input');
// input.addEventListener('select',logSelection);

//propropgation//
Array.from(document.all).forEach(el=>{
    el.addEventListener('click',function (event){
        console.log("target",event.target)
        console.log("current",event.currentTarget)

        event.stopPropagation()
    })
})


