let logo = document.querySelector(".logo");
let about = document.querySelector(".about");
let login = document.querySelector(".login");
login.addEventListener("click", y => {
  location.href = "https://bubl-app.netlify.com/login";
});
login.addEventListener("mouseenter", y => {
  login.style.cursor = "pointer";
});

logo.addEventListener("mouseenter", x => {
  about.style.display = "inline";
  logo.addEventListener("mouseleave", x => {
    setTimeout(x => (about.style.display = "none"), 3000);
  });
});

let ctas = document.querySelectorAll(".cta");
ctas.forEach(x => {
  x.addEventListener("mouseenter", y => {
    x.classList.add("cta-hover");
    x.style.cursor = "pointer";
  });
  x.addEventListener("mouseleave", y => {
    x.classList.remove("cta-hover");
  });
  x.addEventListener("click", y => {
    location.href = "https://bubl-app.netlify.com/register";
  });
});

// TODO: Add github handle property to the teamData object, and work on auto-linking to their repo. Update README if this functionality is added
let teamData = [
  { firstName: "Izzy", role: "UI Dev" },
  { firstName: "Kathy", role: "UI Dev" },
  { firstName: "Julian", role: "UI Dev" },
  { firstName: "Edgar", role: "Frontend" },
  { firstName: "Adam", role: "Frontend" },
  { firstName: "Andrew", role: "Backend" },
  { firstName: "Carlos", role: "Project Manager" }
];


let teamElements = teamData.map((el, idx) => {
  let memberCard = document.createElement("div");
  let memberPic = document.createElement("img");
  let memberRole = document.createElement("div");
  let memberName = document.createElement("span");
  memberName.classList.add("member-name");
  // TODO: Automatically detect if a profile picture was found for the team member, and if not, use a default profile picture. Update README if this functionality is added.
  memberPic.src = "./assets/profile-pics/" + el.firstName + ".png";
  memberRole.innerText = el.role;
  memberRole.classList.add("member-bio");
  memberName.innerText = el.firstName;
  memberCard.classList.add("member");
  memberCard.classList.add("member-" + el.firstName);
  document.querySelector(".about-main").append(memberCard);
  memberCard.append(memberName);
  memberCard.append(memberPic);
  memberCard.append(memberRole);
  return memberCard;
});
