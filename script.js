const glow = document.querySelector(".cursor-glow");
if (glow) {
  window.addEventListener("pointermove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
}
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    }),
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
const menu = document.querySelector(".menu"),
  links = document.querySelector(".nav-links");
const setMenuState = (open) => {
  if (!menu || !links) return;
  const mobile = window.innerWidth <= 850;
  links.classList.toggle("is-open", mobile && open);
  menu.setAttribute("aria-expanded", String(mobile && open));
  if (!mobile) {
    links.classList.remove("is-open");
    menu.setAttribute("aria-expanded", "false");
  }
};
menu?.addEventListener("click", () => {
  const isOpen = links?.classList.contains("is-open");
  setMenuState(!isOpen);
});
document.querySelectorAll('a[href^="#"]').forEach((a) =>
  a.addEventListener("click", () => {
    if (window.innerWidth <= 850) setMenuState(false);
  }),
);
window.addEventListener("resize", () => {
  if (window.innerWidth > 850) {
    links?.classList.remove("is-open");
    menu?.setAttribute("aria-expanded", "false");
  }
});
