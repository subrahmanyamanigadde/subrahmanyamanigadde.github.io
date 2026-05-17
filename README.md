# Subrahmanya Gaonkar Portfolio

Static GitHub Pages portfolio for `subrahmanyamanigadde.github.io`, redesigned as a cinematic Starship AI Terminal experience.

## Architecture

- `index.html` is the GitHub Pages entrypoint and contains semantic portfolio content for SEO and accessibility.
- `styles/starship.css` contains all visual design, responsive layout, glass/HUD panels, reduced-motion rules, and mobile navigation.
- `scripts/starship.js` contains the AI terminal typing sequence, command console, keyboard navigation, Three.js starfield, GSAP reveals, parallax, and interactive project star map.
- `assets/images/` contains the active portrait, favicon, and project imagery copied from the original portfolio assets.
- `assets/documents/` contains the resume PDF used by the Data Archive module.
- The launch modal asks for traveler identification before revealing the orbiting profile terminal.

Legacy template files are still present so no existing asset history is lost, but the new experience only needs `index.html`, `styles/`, `scripts/`, and `assets/`.

## Modules

- Captain Profile: current Fivetran profile, location, birthday, professional signals, and AMFI distributor status.
- Mission History: Fivetran, SAP Labs via R-Labs, TCS, accomplishments, and education timeline.
- Tech Arsenal: support operations, data integration, networking, platforms, programming, documentation, financial, and builder interests.
- Engineering Bay: preserved six project descriptions and images in an interactive star map.
- Data Archive: resume download, Wealthy referral/onboarding links, AMFI distributor card, and recruiter scan board.
- Communication Deck: email, phone, LinkedIn, and WhatsApp channels.

## Command Console

Open Command Console from the sidebar or press `C`, then type:

- `help`
- `projects`
- `skills`
- `resume`
- `contact`
- `profile`
- `history`
- `fivetran`
- `amfi`

## Local Preview

Because the site is fully static, any simple static server works:

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
git commit -m "Redesign portfolio as starship AI terminal"
git push origin master
```

## Asset Notes

The redesign reuses existing portfolio images and includes the updated professional resume at `assets/documents/Subrahmanya_Gaonkar_Resume.pdf`. The AMFI distributor deck links to Wealthy referral and onboarding pages. Future enhancements can add a short optional spaceship hum audio file under `assets/audio/`, but the current implementation avoids autoplay audio so the site stays fast and browser-friendly.
