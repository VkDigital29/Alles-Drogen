let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();

    alert("Not Allowed!!");
   }, false);

window.alert = (text = "", theme = "danger") => {
  const getElems = () => document.querySelectorAll(".custom_alert");
  if (getElems().length)
    Array.from(getElems()).map((e, i) => {
      try {
        i === 1 ? (e.innerHTML = `<div class="alert alert-${theme}" role="alert">${text}</div>`) : e.remove();
        clearTimeout(window.alertTimeout_1);
        clearTimeout(window.alertTimeout_2);
      } catch {}
    });

  document.body.insertAdjacentHTML("afterbegin", `<div class="custom_alert"><div class="alert alert-${theme}" role="alert">${text}</div></div>`);

  window.alertTimeout_1 = setTimeout(() => {
    const k = document.querySelector(".custom_alert");
    if (k) {
      k.classList.add("closed");
      window.alertTimeout_2 = setTimeout(() => {
        k.remove();
      }, 500);
    }
  }, 2000);
};

