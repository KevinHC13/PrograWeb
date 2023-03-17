//Variables a manejar obteniendo los elementos
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const img = document.querySelector(".about-img");
const articles = document.querySelectorAll(".content");
//Evento para identificar los tabs
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
    if (id == "vision"){
      img.innerHTML = `<img src="https://images3.alphacoders.com/106/thumb-1920-1065466.png" alt=""/>`
    }
    if (id == "history"){
      img.innerHTML = `<img src="https://w0.peakpx.com/wallpaper/244/558/HD-wallpaper-video-game-the-last-of-us-part-ii-ellie-the-last-of-us-fan-art.jpg" alt=""/>`
    }
    if (id == "goals"){
      img.innerHTML = `<img src="https://images.wallpapersden.com/image/download/the-last-of-us-season-1-hd_bW1tamiUmZqaraWkpJRmbmdlrWZlbWVnZQ.jpg" alt=""/>`
    }
  }
});
