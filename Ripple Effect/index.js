const btn = document.querySelector(".js-ripple-click");


const activeRipple = (e) => {
    e.target.classList.add("is-ripple-active");
}

btn.addEventListener("click", activeRipple);