// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

var myHeader = document.getElementById("header");

// Mengatur nilai awal posisi top header
var prevScrollpos = window.pageYOffset;

// Menangani event scroll
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  // Jika posisi scroll turun (scroll down)
  if (prevScrollpos < currentScrollPos) {
    header.style.top = "-80px"; // Menghilangkan header
  } else {
    header.style.top = "0"; // Menampilkan header
  }

  // Menyimpan posisi scroll sebelumnya
  prevScrollpos = currentScrollPos;
}
