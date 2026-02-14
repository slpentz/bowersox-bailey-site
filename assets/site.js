// Mobile menu toggle + active tab highlight + demo form submits
(function () {
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobileMenu");
  burger?.addEventListener("click", () => mobileMenu.classList.toggle("open"));

  // Set year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Highlight active tab based on current file name
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll('[data-nav="true"]').forEach((a) => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });

  // Demo submit behavior (replace with Formspree/Netlify forms to receive emails)
  function fakeSubmit(formId, msgId) {
    const form = document.getElementById(formId);
    const msg = document.getElementById(msgId);
    if (!form || !msg) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      msg.textContent =
        "Thanks — request received. Connect a form service to deliver emails.";
      form.reset();
    });
  }

  // Optional forms (won't error if absent)
  fakeSubmit("contactForm", "contactMsg");
  fakeSubmit("gamesSignup", "gamesMsg");
})();
