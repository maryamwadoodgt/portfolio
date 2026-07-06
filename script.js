/* ============================================
   EDIT YOUR CONTENT HERE
   These arrays drive the Skills, Projects, and
   Classes sections — no HTML editing required.
   ============================================ */

const skillGroups = [
  {
    title: "Languages & Data",
    tags: ["Java", "C", "Python", "SQL", "Swift", "Pandas", "NumPy", "Power BI", "Tableau"],
  },
  {
    title: "Web Development",
    tags: ["HTML", "CSS", "JavaScript", "TypeScript", "jQuery", "React", "Django", "SQLite", "SwiftUI", "Firebase"],
  },
  {
    title: "Design & UI/UX",
    tags: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe XD"],
  },
];

// Short strip shown under the hero text
const heroSkillStrip = ["React", "TypeScript", "SQL", "Firebase", "Figma"];

const projects = [
  {
    title: "Medication App",
    description: "One or two sentences on what this project does and the problem it solves.",
    tags: ["TypeScript", "Figma"],
    link: "#",
  },
  {
    title: "Empathy Bytes App",
    description: "One or two sentences on what this project does and the problem it solves.",
    tags: ["React Native", "JavaScript"],
    link: "#",
  },
  {
    title: "EPLI Website",
    description: "One or two sentences on what this project does and the problem it solves.",
    tags: ["Tableau", "UI/UX"],
    link: "#",
  },
  {
    title: "Forklore",
    description: "One or two sentences on what this project does and the problem it solves.",
    tags: ["Figma", "UI/UX"],
    link: "#",
  },
  {
    title: "ClassQ",
    description: "One or two sentences on what this project does and the problem it solves.",
    tags: ["Figma", "UI/UX"],
    link: "#",
  },
  {
    title: "iOS Reminders App",
    description: "One or two sentences on what this project does and the problem it solves.",
    tags: ["Swift", "SwiftUI", "Firebase"],
    link: "#",
  },
];

const classes = [
  { code: "CS 1332", name: "Data Structures & Algorithms", tag: "Core" },
  { code: "CS 2110", name: "Computer Organization & Programming", tag: "Core" },
  { code: "CS 2200", name: "Systems & Networks", tag: "Core" },
  { code: "CS 2340", name: "Objects & Design", tag: "Software Eng" },
  { code: "CS 3451", name: "Computer Graphics", tag: "Media" },
  { code: "CS 3751", name: "Introduction to User Interface Design", tag: "Design" },
  { code: "CS 4400", name: "Introduction to Database Systems", tag: "Data" },
];

/* ============================================
   RENDER FUNCTIONS
   ============================================ */

function renderHeroStrip() {
  const el = document.getElementById("skillStrip");
  el.innerHTML = heroSkillStrip.map((s) => `<li>${s}</li>`).join("");
}

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = skillGroups
    .map(
      (group) => `
      <div class="skill-card reveal">
        <h3>${group.title}</h3>
        <div class="tags">
          ${group.tags.map((t) => `<span>${t}</span>`).join("")}
        </div>
      </div>`
    )
    .join("");
}

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = projects
    .map(
      (p, i) => `
      <article class="project-card reveal">
        <div class="project-thumb">preview.png</div>
        <div class="project-body">
          <p class="project-index">project_0${i + 1}</p>
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="project-tags">
            ${p.tags.map((t) => `<span>${t}</span>`).join("")}
          </div>
          <a class="project-link" href="${p.link}" target="_blank" rel="noopener">View project &rarr;</a>
        </div>
      </article>`
    )
    .join("");
}

function renderClasses() {
  const list = document.getElementById("classList");
  list.innerHTML = classes
    .map(
      (c) => `
      <div class="class-row reveal">
        <span class="class-code">${c.code}</span>
        <span class="class-name">${c.name}</span>
        <span class="class-tag">${c.tag}</span>
      </div>`
    )
    .join("");
}

/* ============================================
   HERO TERMINAL — typing effect
   ============================================ */

function typeHeroCode() {
  const codeEl = document.getElementById("typedCode");
  const cursor = document.getElementById("cursor");
  const snippet = `const student = {
  name: "Maryam Wadood",
  school: "Georgia Tech",
  major: "Computer Science",
  concentrations: ["information internetworks", "media"]
};`;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    codeEl.textContent = snippet;
    cursor.style.display = "none";
    return;
  }

  let i = 0;
  function tick() {
    if (i <= snippet.length) {
      codeEl.textContent = snippet.slice(0, i);
      i++;
      setTimeout(tick, 18);
    }
  }
  tick();
}

/* ============================================
   SCROLL REVEAL
   ============================================ */

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((item) => observer.observe(item));
}

/* ============================================
   NAV: mobile toggle + active tab on scroll
   ============================================ */

function initNav() {
  const toggle = document.getElementById("navToggle");
  const tabs = document.querySelector(".nav-tabs");

  toggle.addEventListener("click", () => {
    const isOpen = tabs.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  tabs.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => tabs.classList.remove("open"));
  });

  const sections = document.querySelectorAll("main .section[id]");
  const tabLinks = document.querySelectorAll(".nav-tabs .tab");

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          tabLinks.forEach((t) => t.classList.toggle("active", t.dataset.tab === id));
        }
      });
    },
    { rootMargin: "-40% 0px -50% 0px" }
  );
  sections.forEach((s) => navObserver.observe(s));
}

/* ============================================
   INIT
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
  renderHeroStrip();
  renderSkills();
  renderProjects();
  renderClasses();
  typeHeroCode();
  initReveal();
  initNav();
  document.getElementById("year").textContent = new Date().getFullYear();
});
