const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });


  /* cookies*/

  const popup = document.getElementById('cookie-popup');
  const acceptBtn = document.getElementById('acceptCookies');

  // Comprobar si ya aceptó
  if (!localStorage.acceptCookies) {
    popup.classList.add ("show")
  }

  acceptBtn.addEventListener('click',function () {
    localStorage.acceptCookies="true";
    popup.classList.remove("show")
    
  });
