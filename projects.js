async function loadProjects() {
  const container = document.getElementById("projectsGrid");
  const errorBox = document.getElementById("projectsError");

  try {
    const res = await fetch("./projects.json", { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to load projects.json (${res.status})`);

    const data = await res.json();
    const projects = Array.isArray(data.projects) ? data.projects : [];

    if (!projects.length) {
      container.innerHTML = `<p class="muted">No projects found yet.</p>`;
      return;
    }

    container.innerHTML = projects.map(renderProjectCard).join("");
  } catch (err) {
    console.error(err);
    errorBox.textContent = "Could not load projects. Check projects.json path/format.";
    errorBox.style.display = "block";
  }
}

function renderProjectCard(p) {
  const title = escapeHtml(p.title || "Untitled Project");
  const tag = escapeHtml(p.tag || "Project");

  const bullets = Array.isArray(p.bullets) ? p.bullets.slice(0, 3) : [];
  const tech = Array.isArray(p.tech) ? p.tech.slice(0, 10) : [];

  const github = p.links?.github ? escapeHtml(p.links.github) : "";
  const demo = p.links?.demo ? escapeHtml(p.links.demo) : "";
  const image = p.image ? escapeHtml(p.image) : "";

  const imageHtml = image
    ? `<img class="project-img" src="${image}" alt="${title} screenshot" loading="lazy">`
    : "";

  const bulletsHtml = bullets.length
    ? `<ul>${bullets.map(b => `<li>${escapeHtml(b)}</li>`).join("")}</ul>`
    : `<p class="muted">No description yet.</p>`;

  const techHtml = tech.length
    ? `<p class="tech"><strong>Tech:</strong> ${tech.map(escapeHtml).join(", ")}</p>`
    : "";

  const demoBtn = demo
    ? `<a class="btn small" href="${demo}" target="_blank" rel="noopener">Demo</a>`
    : "";

  const githubBtn = github
    ? `<a class="btn small ghost" href="${github}" target="_blank" rel="noopener">GitHub</a>`
    : "";

  return `
    <article class="card">
      <div class="card-head">
        <h3>${title}</h3>
        <span class="pill">${tag}</span>
      </div>
      ${imageHtml}
      ${bulletsHtml}
      ${techHtml}
      <div class="card-actions">
        ${demoBtn}
        ${githubBtn}
      </div>
    </article>
  `;
}

// Basic HTML escaping
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

document.addEventListener("DOMContentLoaded", loadProjects);
