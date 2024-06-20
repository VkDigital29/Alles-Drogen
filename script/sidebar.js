 const body = document.querySelector('body'),
                  sidebar = body.querySelector('nav1'),
                  toggle = body.querySelector(".toggle"),
                  searchBtn = body.querySelector(".search-box"),
                  modeSwitch = body.querySelector(".toggle-switch"),
                  modeText = body.querySelector(".mode-text");
            toggle.addEventListener("click" , () =>{
                sidebar.classList.toggle("close");
            })
