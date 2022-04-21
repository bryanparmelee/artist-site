const modal = document.querySelector('.modal');
const openModal = document.querySelectorAll('.trigger-modal');
const youtube = document.getElementById('youtube');
const burger = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');
const nLink = document.querySelectorAll('.n-link');

burger.addEventListener('click', () => {
  navLinks.style.display="block";
  burger.style.display="none";
  nLink.forEach((link) => 
  link.addEventListener("click", () => {
    navLinks.style.display="none";
    burger.style.display="block";
  })
);
});


for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener('click', (e) => {
    e.preventDefault();
    let id = openModal[i].getAttribute("yt-id");
    youtube.setAttribute('src', "https://www.youtube.com/embed/"+id);

    modal.style.display="block";
    
});
}

modal.addEventListener('click', () => {
    youtube.setAttribute('src', '');
    modal.style.display="none";
});

window.addEventListener('keydown', (e) => {
  if(e.key == "Escape") {
    youtube.setAttribute('src', '');
    modal.style.display="none";
  }
});

