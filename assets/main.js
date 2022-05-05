const btnMobile = document.getElementById('btn-mobile');

function toogleMenu() {
  const nav = document.getElementById('nav');
  // const nav = document.getElementById('btn');
  btnMobile.classList.toggle('active')
  nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toogleMenu);


var mybutton = document.getElementById("topBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}