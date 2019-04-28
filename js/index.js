/*let logo = document.querySelector(".logo");
let about = document.querySelector('.about');

logo.addEventListener('mouseenter',x=>{
  about.style.display="inline";
  logo.addEventListener('mouseleave',x=>{
    setTimeout(x=>about.style.display="none",3000)
  })
})*/

let cta = document.querySelector(".cta");
cta.addEventListener('mouseenter',x => {
  cta.classList.add("cta-hover");
})
cta.addEventListener('mouseleave',x => {
  cta.classList.remove("cta-hover");
})
/*document.querySelector(".cta").addEventListener('click',x=>console.log("hovered"));*/