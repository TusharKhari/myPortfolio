document.addEventListener("DOMContentLoaded", () => {

  renderSkills();
  renderExperience();
  renderProjects();

  // Lucide icons
  lucide.createIcons();

  // Footer year
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  // GSAP
  gsap.registerPlugin(ScrollTrigger);

  const sections =
    gsap.utils.toArray(".section");

  sections.forEach(section => {

    gsap.from(section, {

      opacity: 0,
      y: 35,

      duration: 0.8,

      ease: "power2.out",

      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        once: true
      }

    });

  });


  // Mobile-friendly smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const target =
        document.querySelector(link.getAttribute("href"));

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });

});