// Add animations on scroll
document.addEventListener("DOMContentLoaded", function () {
    const animateElements = document.querySelectorAll(".animate__animated");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(entry.target.dataset.animate);
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