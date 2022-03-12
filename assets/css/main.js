window.onscroll = function () {
  console.log(document.body.scrollTop);
};
document.body.onscroll = function (e) {
  console.log(e.path[1].scrollY);
  if (e.path[1].scrollY > 400 && e.path[1].scrollY < 450) {
    playAudio();
  }
  document.querySelector(".air").style.transform = `translateX(-${
    e.path[1].scrollY * 1.5
  }px)`;
  document.querySelector(".about__us img").style.transform = `scale(${
    e.path[1].scrollY / 800
  })`;
  document.querySelector(".arein img").style.left = `${
    e.path[1].scrollY - 2060
  }px`;
};
function sendRequest() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const data = {
    name: name,
    email: email,
    message: message,
  };
  console.log(data);
  scrollTo(0, 0);
  email = "";
}
function playAudio() {
  let aud = new Audio("../assets/img/airmp.mp3");
  aud.play();
  console.log(aud);
}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
