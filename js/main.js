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


  // Initialize Contact Form
  initContactForm();

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


/**
 * Contact Form Controller
 * Opens sender's default email app (Mail, Gmail, Outlook, etc.)
 * with recipient (tusharkhari25@gmail.com), subject, and message prefilled.
 */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const submitBtn = document.getElementById("contact-submit-btn");

  if (!form || !status || !submitBtn) return;

  const btnText = submitBtn.querySelector(".btn-text");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = form.querySelector("#contact-name");
    const emailInput = form.querySelector("#contact-email");
    const messageInput = form.querySelector("#contact-message");

    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const message = messageInput ? messageInput.value.trim() : "";

    if (!name || !email || !message) {
      status.className = "form-status error";
      status.innerHTML = `<i data-lucide="alert-circle"></i> Please fill in your name, email, and message.`;
      if (typeof lucide !== "undefined") lucide.createIcons();
      return;
    }

    // Construct formatted subject and body
    const emailSubject = `Portfolio Inquiry from ${name}`;
    const emailBody = `Hi Tushar,\n\n${message}\n\n---\nSender Details:\nName: ${name}\nEmail: ${email}\nSent via: TK.ai Portfolio`;

    const mailtoUrl = `mailto:tusharkhari25@gmail.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Set interactive loading state
    submitBtn.disabled = true;
    if (btnText) btnText.textContent = "Opening Email App...";
    status.className = "form-status success";
    status.innerHTML = `
      <div class="status-content">
        <span class="status-check">✓</span>
        <div>
          <strong>Launching Your Email App...</strong>
          <p>A new draft to <strong>tusharkhari25@gmail.com</strong> has been initiated with your name, email, and message prefilled.</p>
          <p style="margin-top: 6px;">Didn't open automatically? <a href="${mailtoUrl}" class="fallback-link">Click here to launch email draft</a></p>
        </div>
      </div>
    `;

    // Trigger sender's email client
    const mailLink = document.createElement("a");
    mailLink.href = mailtoUrl;
    mailLink.style.display = "none";
    document.body.appendChild(mailLink);
    mailLink.click();
    setTimeout(() => {
      mailLink.remove();
    }, 200);

    setTimeout(() => {
      submitBtn.disabled = false;
      if (btnText) btnText.textContent = "Transmit Message";
    }, 3000);
  });
}