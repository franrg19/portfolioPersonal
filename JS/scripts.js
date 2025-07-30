const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });


  /* cookies*/

  document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('cookie-popup');
  const acceptBtn = document.getElementById('accept-cookies');

  // Comprobar si ya aceptó
  if (!localStorage.getItem('cookiesAccepted')) {
    popup.style.display = 'flex';
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    popup.style.display = 'none';
  });
});
