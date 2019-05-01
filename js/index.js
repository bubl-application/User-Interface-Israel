/*let logo = document.querySelector(".logo");
let about = document.querySelector('.about');

logo.addEventListener('mouseenter',x=>{
  about.style.display="inline";
  logo.addEventListener('mouseleave',x=>{
    setTimeout(x=>about.style.display="none",3000)
  })
})*/

let ctas = document.querySelectorAll(".cta");
ctas.forEach(x=>{
  x.addEventListener('mouseenter', y => {
    x.classList.add("cta-hover");
    x.style.cursor="pointer";
  })
  x.addEventListener('mouseleave', y => {
    x.classList.remove("cta-hover");
  })
  x.addEventListener('click', y => {
    location.href="https://bubl-app.netlify.com/schools";
  })
});
  /*document.querySelector(".cta").addEventListener('click',x=>console.log("hovered"));*/