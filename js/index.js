let logo = document.querySelector('.logo');
let about = document.querySelector('.about');
let login = document.querySelector('.login');
login.addEventListener('click', y => {
  location.href="https://bubl-app.netlify.com/login";
});
  login.addEventListener('mouseenter', y => {
    login.style.cursor="pointer";
    
  })

logo.addEventListener('mouseenter',x=>{
  about.style.display="inline";
  logo.addEventListener('mouseleave',x=>{
    setTimeout(x=>about.style.display="none",3000)
  })
})

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
    location.href="https://bubl-app.netlify.com/register";
  })
});

let teamData = [
  {name: 'Izzy', role: 'UI Dev'},
  {name: 'Kathy', role: 'UI Dev'},
  {name: 'Julian', role: 'UI Dev'},
  {name: 'Edgar', role: 'Frontend'},
  {name: 'Adam', role: 'Frontend'},
  {name: 'Andrew', role: 'Backend'},
  {name: 'Carlos', role: 'Project Manager'}
  ]

let teamElements = teamData.map((el,idx)=>{
  let memberCard = document.createElement('div');
  let memberPic = document.createElement('img')
  let memberRole = document.createElement('div');
  let memberName = document.createElement('span')
  memberName.classList.add('member-name');
  memberPic.src="./assets/profile-pics/"+el.name+".png";
  memberRole.innerText=el.role;
  memberRole.classList.add("member-bio");
  // <div></div>
  memberName.innerText=el.name;
  //<div>Izzy</div>
  memberCard.classList.add("member");
  memberCard.classList.add("member-"+el.name);
  //<div class="member member-Izzy">Izzy</div>
  document.querySelector('.about-main').append(memberCard);
  memberCard.append(memberName);
  memberCard.append(memberPic);
  memberCard.append(memberRole);
  return memberCard;
  
})



