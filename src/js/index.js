import "../styles/main.scss";

const btnMenu = document.querySelector(".btn-menu");
const navMenu = document.querySelector(".nav-menu");
const body = document.body;

btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.classList.toggle("menu-open");
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    body.classList.remove("menu-open");
  });
});

const contactForm = document.getElementById("contactForm");
const thankYouModal = document.getElementById("thankYouModal");
const closeModal = document.getElementById("closeModal");
const modalBtn = document.getElementById("modalBtn");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  thankYouModal.classList.add("active");
  contactForm.reset();
});

closeModal.addEventListener("click", function () {
  thankYouModal.classList.remove("active");
});

modalBtn.addEventListener("click", function () {
  thankYouModal.classList.remove("active");
});

thankYouModal.addEventListener("click", function (e) {
  if (e.target === thankYouModal) {
    thankYouModal.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const animateElements = document.querySelectorAll(
    ".service-card, .team-member, .gallery-item, .tech-item, .info-card"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeInUp");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  animateElements.forEach((element) => {
    observer.observe(element);
  });
});

window.addEventListener("scroll", function () {
  const header = document.querySelector(".site-header");
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.05)";
  }
});

window.addEventListener("mousemove", function (e) {
  const heroImage = document.querySelector(".hero-image");
  if (heroImage) {
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;

    heroImage.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  }
});
