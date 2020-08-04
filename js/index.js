//blur//

document.addEventListener('blur',(event)=>{
    event.target.style.background = "";
},true)

//mousedown//
const headerSwap = document.querySelectorAll("h2");
headerSwap.querySelectorAll("h2").forEach(event =>{
  event.addEventListener("mousedown", ()=>{ 
    event.style.color = "green";
  
    })
})

//dblclick//
const paraPolka = document.querySelectorAll("p");
paraPolka.querySelectorAll("p").forEach(el=>{
    el.addEventListener("dblclick",()=>{
        el.target.style.fontWeight= "bold"
    })
})
//click//
const navLinks = document.querySelectorAll('a.nav-link');
navLinks.querySelectorAll('a.nav-link').forEach(el => {
    el.addEventListener('click', () => {
        el.style.color = 'orange';
    })
})
//keydown//
document.addEventListener("keydown", event =>{
    if (event.key === "p"){
        event.target.style.color = "blue";
    }
    })
//scroll//
window.addEventListener("scroll", ()=>{
    event.target.scrolling.style ="yellow"
})
//keyup//
document.addEventListener("keyup", event =>{
    if (event.key === "r"){
        event.target.style.color = "red";
    }else{
        event.target.style.color="purple";
    }
    })
    //onwheel//
    scale = Math.min(Math.max(.125, scale), 4)
    document.addEventListener("onwheel", event =>{
        event.style.transform =`${scale}`
    })
    let scale =1;
//resize//
function sizeOut(){
    event.preventDefault();
    heightOutput.textContent = window.innerHeight
    windowOutput.textContent = window. innerWidth
}
window.onresize = sizeOut;
window.addEventListener("resize", sizeOut);
//select//
function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
  }
const input = document.querySelector('input');
input.addEventListener('select',logSelection);
//propropgation//
Array.from(document.all).forEach(el=>{
    el.addEventListener('click',function (event{
        console.log("target",event.target)
        console.log("current",event.currentTarget)

        event.stopPropagation()
    })
})


