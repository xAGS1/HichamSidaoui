const projects = window.PORTFOLIO_PROJECTS || [];
const grid = document.getElementById("projectGrid");

const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

if (grid) {
  grid.innerHTML = projects.map((project) => `
    <article class="project-card reveal" data-number="${escapeHtml(project.number)}">
      <div class="project-card-header">
        <span>${escapeHtml(project.number)}</span>
        <span>${escapeHtml(project.category)}</span>
      </div>
      <h3>${escapeHtml(project.title)}</h3>
      <p>${escapeHtml(project.description)}</p>
      <div class="project-stat">
        ${escapeHtml(project.stat)}
        <span>${escapeHtml(project.statLabel)}</span>
      </div>
      <div class="tags">
        ${(project.tech || []).map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

document.getElementById("year").textContent = new Date().getFullYear();

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: "0px 0px -40px" });

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

const glow = document.querySelector(".cursor-glow");
if (glow && window.matchMedia("(pointer:fine)").matches) {
  window.addEventListener("pointermove", (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  }, { passive: true });
}

const navLinks = [...document.querySelectorAll(".desktop-nav a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      const active = link.getAttribute("href") === `#${entry.target.id}`;
      link.style.color = active ? "#f4f5f7" : "";
    });
  });
}, { rootMargin: "-40% 0px -50%", threshold: 0 });

sections.forEach((section) => navObserver.observe(section));
