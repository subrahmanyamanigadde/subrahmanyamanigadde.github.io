(() => {
  // Static-site controller layer: no build step, no backend, and every feature degrades to plain content.
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const projects = [
    {
      title: "Humanoid Robot - AJIT",
      place: "KLE Technological University, Hubli",
      image: "assets/images/project-ajit.jpg",
      alt: "Humanoid Robot AJIT",
      description:
        "Ajit, a social and intelligent humanoid robot, is capable of walking like a human, obstacle detection and avoidance, speech recognition and response, and basic gestures like Namaste, handshake, and bye. The objective was to assist old age people and persons with disabilities."
    },
    {
      title: "Autonomous Unmanned Aerial Vehicle",
      place: "KLE Technological University, Hubli",
      image: "assets/images/project-uav.jpg",
      alt: "Autonomous unmanned aerial vehicle",
      description:
        "An autonomous indoor mapping UAV for architectural applications. It works on Robot Operating System and used Pixhawk with Raspberry Pi coordinated flight control."
    },
    {
      title: "Double Pendulum Motion Interpolation",
      place: "KLE Technological University, Hubli",
      image: "assets/images/project-pendulum.jpg",
      alt: "Double pendulum motion interpolation project",
      description:
        "Closed-loop feedback system using DC motors as servo motors with encoder feedback. Built a robotic arm, achieved precise positioning, and programmed the system with Arduino."
    },
    {
      title: "Sleep Apnea Prediction Software",
      place: "KLE Technological University, Hubli",
      image: "assets/images/project-apnea.jpg",
      alt: "Sleep apnea prediction software interface",
      description:
        "Software built with a Java front end and MySQL database to help people suffering from sleep apnea. Data from four sensors was collected, analyzed, and shown through real-time prediction graphs."
    },
    {
      title: "Automatic Metal and Nonmetal Sorting Machine",
      place: "KLE Technological University, Hubli",
      image: "assets/images/project-sorter.jpg",
      alt: "Automatic metal and nonmetal sorting machine",
      description:
        "Automatic metal and nonmetal sorting machine built with a Panasonic PLC and proximity sensor."
    },
    {
      title: "Cost-Effective Gel Electrophoresis Device",
      place: "KLE Technological University, Hubli",
      image: "assets/images/project-electrophoresis.jpg",
      alt: "Cost-effective gel electrophoresis device",
      description:
        "A low-cost equipment redesign with temperature reduction, an overflow valve, and improved aesthetics to reduce device constraints."
    }
  ];

  const routes = {
    help: {
      message: "Available commands: help, projects, skills, resume, contact, profile, history, fivetran, amfi.",
      target: null
    },
    projects: {
      message: "Opening Engineering Bay. Six preserved project missions are mapped as interactive star nodes.",
      target: "#engineering-bay"
    },
    skills: {
      message: "Opening Tech Arsenal. Support operations, data integration, networking, platforms, programming, and financial systems are online.",
      target: "#tech-arsenal"
    },
    resume: {
      message: "Opening Data Archive. Resume capsule is ready for download.",
      target: "#data-archive"
    },
    contact: {
      message: "Opening Communication Deck. Email, phone, LinkedIn, and WhatsApp channels are available.",
      target: "#communication-deck"
    },
    profile: {
      message: "Opening Captain Profile. Fivetran support, data integration, robotics background, and AMFI distributor status detected.",
      target: "#captain-profile"
    },
    history: {
      message: "Opening Mission History. Work missions, achievements, and education logs are online.",
      target: "#mission-history"
    },
    fivetran: {
      message: "Opening Mission History. Current assignment: Customer Support Engineer I at Fivetran India Pvt. Ltd.",
      target: "#mission-history"
    },
    amfi: {
      message: "Opening Data Archive. AMFI registered Mutual Fund Distributor details, Wealthy referral, and onboarding links are online.",
      target: "#data-archive"
    }
  };

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  function typeLines(container, lines, speed = 24) {
    if (!container) return;
    container.innerHTML = "";
    if (prefersReducedMotion) {
      container.innerHTML = lines.map((line) => `<p>${line}</p>`).join("");
      return;
    }

    let lineIndex = 0;
    let charIndex = 0;
    let paragraph = document.createElement("p");
    container.appendChild(paragraph);

    const tick = () => {
      const line = lines[lineIndex] || "";
      paragraph.textContent = line.slice(0, charIndex + 1);
      charIndex += 1;

      if (charIndex < line.length) {
        window.setTimeout(tick, speed);
        return;
      }

      lineIndex += 1;
      charIndex = 0;
      if (lineIndex < lines.length) {
        paragraph = document.createElement("p");
        container.appendChild(paragraph);
        window.setTimeout(tick, speed * 8);
      }
    };

    tick();
  }

  function initTerminal() {
    const modal = $("#launch-modal");
    const form = $("#identity-form");
    const input = $("#traveler-name");
    const continueButton = $("#launch-continue");
    const launchOutput = $("#launch-output");
    const output = $("#ai-output");

    typeLines(launchOutput, ["Incoming traveler detected...", "Please identify yourself."]);
    window.setTimeout(() => input?.focus(), 300);

    form?.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = input.value.trim() || "Traveler";
      typeLines(launchOutput, [
        `Welcome aboard, ${name}.`,
        "Initiating mission briefing...",
        "Orbiting profile is ready."
      ]);
      form.hidden = true;
      continueButton.hidden = false;
      continueButton.focus();
      continueButton.dataset.travelerName = name;
    });

    continueButton?.addEventListener("click", () => {
      const name = continueButton.dataset.travelerName || "Traveler";
      modal?.classList.add("is-cleared");
      modal?.setAttribute("aria-hidden", "true");
      typeLines(output, [
        `Welcome aboard, ${name}.`,
        "Orbiting profile synchronized.",
        "Mission modules are online."
      ]);
    });
  }

  function initNavigation() {
    const nav = $(".holo-nav");
    const toggle = $(".nav-toggle");
    const links = $$("#module-nav a");
    const sections = links.map((link) => $(link.getAttribute("href"))).filter(Boolean);

    toggle?.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle?.setAttribute("aria-expanded", "false");
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
          });
        });
      },
      { threshold: 0.32 }
    );

    sections.forEach((section) => observer.observe(section));

    document.addEventListener("keydown", (event) => {
      if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
      if (event.key.toLowerCase() === "c") {
        event.preventDefault();
        openConsole();
      }
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        const currentIndex = sections.findIndex((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top > -160 && rect.top < window.innerHeight * 0.55;
        });
        const offset = event.key === "ArrowDown" ? 1 : -1;
        const nextIndex = Math.min(Math.max((currentIndex < 0 ? 0 : currentIndex) + offset, 0), sections.length - 1);
        sections[nextIndex]?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
      }
    });
  }

  function initProjects() {
    const nodes = $$(".project-node");
    const title = $("#project-title");
    const place = $("#project-place");
    const description = $("#project-description");
    const image = $("#project-image");

    const activate = (index) => {
      const project = projects[index];
      if (!project) return;
      nodes.forEach((node) => node.classList.toggle("active", Number(node.dataset.project) === index));
      title.textContent = project.title;
      place.textContent = project.place;
      description.textContent = project.description;
      image.src = project.image;
      image.alt = project.alt;

      if (window.gsap && !prefersReducedMotion) {
        window.gsap.fromTo("#project-detail", { opacity: 0.55, y: 12 }, { opacity: 1, y: 0, duration: 0.35 });
      }
    };

    nodes.forEach((node) => {
      node.addEventListener("click", () => activate(Number(node.dataset.project)));
    });
  }

  function initConsole() {
    const consoleEl = $("#command-console");
    const closeButton = $("[data-console-close]");
    const log = $("#console-log");
    const form = $("#console-form");
    const input = $("#console-input");

    window.openConsole = () => {
      consoleEl?.classList.add("open");
      consoleEl?.setAttribute("aria-hidden", "false");
      window.setTimeout(() => input?.focus(), 20);
    };

    window.closeConsole = () => {
      consoleEl?.classList.remove("open");
      consoleEl?.setAttribute("aria-hidden", "true");
    };

    $$("[data-console-toggle]").forEach((button) => button.addEventListener("click", window.openConsole));
    closeButton?.addEventListener("click", window.closeConsole);

    consoleEl?.addEventListener("click", (event) => {
      if (event.target === consoleEl) window.closeConsole();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") window.closeConsole();
    });

    form?.addEventListener("submit", (event) => {
      event.preventDefault();
      const command = input.value.trim().toLowerCase();
      const route = routes[command];
      const entry = document.createElement("p");
      entry.innerHTML = route
        ? `<strong>&gt; ${command}</strong><br>${route.message}`
        : `<strong>&gt; ${command || "blank"}</strong><br>Unknown command. Type <kbd>help</kbd> for available routes.`;
      log.appendChild(entry);
      log.scrollTop = log.scrollHeight;
      input.value = "";

      if (route?.target) {
        window.setTimeout(() => {
          window.closeConsole();
          $(route.target)?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
        }, 500);
      }
    });
  }

  function initParallax() {
    const tiltItems = $$("[data-tilt]");
    if (prefersReducedMotion || !tiltItems.length) return;

    window.addEventListener("pointermove", (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      tiltItems.forEach((item) => {
        item.style.transform = `perspective(1200px) rotateY(${x * 2.5}deg) rotateX(${y * -2.5}deg)`;
      });
    });
  }

  function initGsap() {
    if (!window.gsap || prefersReducedMotion) return;

    window.gsap.from(".terminal-shell", { opacity: 0, y: 24, scale: 0.98, duration: 1, ease: "power3.out" });
    window.gsap.from(".holo-nav", { opacity: 0, x: -18, duration: 0.8, delay: 0.3, ease: "power2.out" });

    const modules = $$(".content-module");
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          window.gsap.to(entry.target, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" });
          reveal.unobserve(entry.target);
        });
      },
      { threshold: 0.18 }
    );

    modules.forEach((module) => {
      window.gsap.set(module, { opacity: 0, y: 36 });
      reveal.observe(module);
    });
  }

  function initStarfield() {
    const canvas = $("#starfield");
    if (!canvas || !window.THREE) {
      drawCanvasFallback(canvas);
      return;
    }

    const renderer = new window.THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: "high-performance" });
    const scene = new window.THREE.Scene();
    const camera = new window.THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 1200);
    camera.position.z = 340;

    const geometry = new window.THREE.BufferGeometry();
    const count = window.innerWidth < 700 ? 650 : 1200;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 900;
      positions[i + 1] = (Math.random() - 0.5) * 700;
      positions[i + 2] = (Math.random() - 0.5) * 900;
    }

    geometry.setAttribute("position", new window.THREE.BufferAttribute(positions, 3));
    const material = new window.THREE.PointsMaterial({
      color: 0x83f3ff,
      size: 1.5,
      transparent: true,
      opacity: 0.78
    });
    const stars = new window.THREE.Points(geometry, material);
    scene.add(stars);

    const resize = () => {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
      renderer.setSize(window.innerWidth, window.innerHeight, false);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    const animate = () => {
      stars.rotation.y += prefersReducedMotion ? 0 : 0.00055;
      stars.rotation.x += prefersReducedMotion ? 0 : 0.00018;
      renderer.render(scene, camera);
      if (!prefersReducedMotion) window.requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    animate();
  }

  function drawCanvasFallback(canvas) {
    if (!canvas) return;
    const context = canvas.getContext("2d");
    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.6 + 0.2
    }));

    const draw = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "#83f3ff";
      stars.forEach((star) => {
        context.globalAlpha = 0.35 + Math.random() * 0.55;
        context.beginPath();
        context.arc(star.x * canvas.width, star.y * canvas.height, star.r, 0, Math.PI * 2);
        context.fill();
      });
      context.globalAlpha = 1;
    };

    draw();
    window.addEventListener("resize", draw);
  }

  document.addEventListener("DOMContentLoaded", () => {
    initTerminal();
    initNavigation();
    initProjects();
    initConsole();
    initParallax();
  });

  window.addEventListener("load", () => {
    initStarfield();
    initGsap();
  });
})();
