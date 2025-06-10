let currentIndex = 0;
let images = [];

function openLightbox(img) {
  images = Array.from(document.querySelectorAll(".gallery img")).filter(i => i.style.display !== "none");
  currentIndex = images.indexOf(img);
  document.getElementById("lightboxImg").src = img.src;
  document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeSlide(n) {
  currentIndex = (currentIndex + n + images.length) % images.length;
  document.getElementById("lightboxImg").src = images[currentIndex].src;
}

function filterImages(category) {
  const allImages = document.querySelectorAll(".gallery img");
  allImages.forEach(img => {
    if (category === "all" || img.classList.contains(category)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}