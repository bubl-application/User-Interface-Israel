let cta = document.querySelector(".cta");
cta.addEventListener('mouseenter',x => {
  cta.classList.add("cta-hover");
})
cta.addEventListener('mouseleave',x => {
  cta.classList.remove("cta-hover");
})
/*document.querySelector(".cta").addEventListener('click',x=>console.log("hovered"));*/