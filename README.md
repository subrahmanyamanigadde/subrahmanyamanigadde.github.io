# Subrahmanya Gaonkar Portfolio

Static GitHub Pages resume site for `subrahmanyamanigadde.github.io`, redesigned as a lightweight cyber-security and AI agent operations console.

## Architecture

- `index.html` is the GitHub Pages entrypoint with semantic resume content for SEO and accessibility.
- `styles/ops-console.css` contains the mobile-first SOC dashboard design, CSS variables, responsive layout, scanline/grid effects, and reduced-motion rules.
- `scripts/ops-console.js` contains only mobile navigation, command palette routing, and a subtle boot animation.
- `assets/images/` contains portrait, favicon, and preserved project imagery.
- `assets/documents/Subrahmanya_Gaonkar_Resume.pdf` is the current downloadable resume.

No frameworks, CDN libraries, build step, backend, Bootstrap, jQuery, Tailwind, Three.js, or animation libraries are required.

## Information Architecture

- Hero: agent dossier for current Fivetran role.
- Agent Profile: professional summary and identity signals.
- Mission Log: Fivetran, SAP, and TCS experience as operations logs.
- Systems Operated: Fivetran/dbt ecosystem and data infrastructure context.
- Technical Arsenal: command chips grouped by data systems, automation, cloud/networking, databases, observability, and AI tools.
- Certifications: AMFI distributor details and education.
- Key Achievements: robotics and global capstone achievements.
- Global Operations: remote readiness and languages.
- Contact Terminal: email, LinkedIn, GitHub, WhatsApp, Facebook, Instagram, and resume download.

## Command Palette

Open the command palette with the button, `/`, or `Cmd/Ctrl + K`, then type:

- `help`
- `experience`
- `skills`
- `systems`
- `certifications`
- `contact`
- `resume`
- `fivetran`

## Local Preview

The site is fully static. You can open `index.html` directly or run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## GitHub Pages

No build step is required. Commit and push changes to the publishing branch used by GitHub Pages, currently `master`.

```bash
git add index.html styles scripts assets README.md
git commit -m "Redesign portfolio as AI operations console"
git push origin master
```
