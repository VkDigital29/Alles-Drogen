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















var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})


