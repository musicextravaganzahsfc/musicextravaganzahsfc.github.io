window.addEventListener("scroll", scrollBackground);

function scrollBackground() {
  document.getElementById("starry_background").style.top =
    (scrollY / 20) * -1 + `px`;
}
