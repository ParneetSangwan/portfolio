
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".hero-buttons button");
  const sections = document.querySelectorAll("main .section");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-section");

      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add("active");
      }
    });
  });
});
