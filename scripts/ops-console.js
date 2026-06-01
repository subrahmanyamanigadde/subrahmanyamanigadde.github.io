(() => {
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  const routes = {
    help: { message: "Commands: help, experience, skills, certifications, contact, resume, systems.", target: null },
    experience: { message: "Opening Mission Log.", target: "#mission-log" },
    skills: { message: "Opening Technical Arsenal.", target: "#technical-arsenal" },
    certifications: { message: "Opening Certifications.", target: "#certifications" },
    contact: { message: "Opening Contact Terminal.", target: "#contact-terminal" },
    resume: { message: "Opening resume PDF.", target: "assets/documents/Subrahmanya_Gaonkar_Resume.pdf" },
    systems: { message: "Opening Systems Operated.", target: "#systems-operated" },
    fivetran: { message: "Opening Fivetran mission logs.", target: "#mission-log" }
  };

  function initNavigation() {
    const topbar = $(".topbar");
    const toggle = $(".nav-toggle");
    const links = $$("#site-nav a");
    const sections = links.map((link) => $(link.getAttribute("href"))).filter(Boolean);

    toggle?.addEventListener("click", () => {
      const isOpen = topbar.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.forEach((link) => {
      link.addEventListener("click", () => {
        topbar.classList.remove("open");
        toggle?.setAttribute("aria-expanded", "false");
      });
    });

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((link) => link.classList.toggle("active", link.hash === `#${entry.target.id}`));
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
    );

    sections.forEach((section) => observer.observe(section));
  }

  function initCommandPalette() {
    const palette = $("#command-palette");
    const input = $("#palette-input");
    const form = $("#palette-form");
    const log = $("#palette-log");
    const openers = $$("[data-palette-open]");
    const closer = $("[data-palette-close]");

    const open = () => {
      palette.classList.add("open");
      palette.setAttribute("aria-hidden", "false");
      window.setTimeout(() => input?.focus(), 20);
    };

    const close = () => {
      palette.classList.remove("open");
      palette.setAttribute("aria-hidden", "true");
    };

    openers.forEach((button) => button.addEventListener("click", open));
    closer?.addEventListener("click", close);

    palette?.addEventListener("click", (event) => {
      if (event.target === palette) close();
    });

    document.addEventListener("keydown", (event) => {
      const typing = ["INPUT", "TEXTAREA"].includes(document.activeElement.tagName);
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        open();
      }
      if (!typing && event.key === "/") {
        event.preventDefault();
        open();
      }
      if (event.key === "Escape") close();
    });

    form?.addEventListener("submit", (event) => {
      event.preventDefault();
      const command = input.value.trim().toLowerCase();
      const route = routes[command];
      const line = document.createElement("p");
      line.innerHTML = route
        ? `<strong>&gt; ${command}</strong><br>${route.message}`
        : `<strong>&gt; ${command || "blank"}</strong><br>Unknown command. Try <kbd>help</kbd>.`;
      log.appendChild(line);
      log.scrollTop = log.scrollHeight;
      input.value = "";

      if (!route?.target) return;

      window.setTimeout(() => {
        if (route.target.endsWith(".pdf")) {
          window.open(route.target, "_blank", "noopener");
          return;
        }
        close();
        $(route.target)?.scrollIntoView({ behavior: "smooth" });
      }, 260);
    });
  }

  function initBootSequence() {
    const boot = $("#boot-sequence");
    if (!boot || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    boot.animate(
      [
        { opacity: 0.55, filter: "blur(1px)" },
        { opacity: 1, filter: "blur(0)" }
      ],
      { duration: 520, easing: "ease-out" }
    );
  }

  function initNetworkPulse() {
    const pulse = $("#network-pulse");
    if (!pulse || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let tick = 0;
    window.setInterval(() => {
      tick = (tick + 7) % 100;
      pulse.textContent = `SYNC ${String(tick).padStart(2, "0")}`;
    }, 1400);
  }

  document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initCommandPalette();
    initBootSequence();
    initNetworkPulse();
  });
})();
