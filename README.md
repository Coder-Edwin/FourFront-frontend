# Fourfront Management – Frontend Assessment

A pixel-close recreation of the Fourfront Management investment club mobile UI, built with **HTML**, **CSS**, **Bootstrap 5**, and **JavaScript**.

---

## Folder Structure

```
fourfront-frontend/
 ├── index.html        → Main HTML page (structure only, no inline styles/scripts)
 ├── css/
 │    └── styles.css   → All custom styles, design tokens, responsive rules
 ├── js/
 │    └── app.js       → All interactivity (membership toggle, accessibility)
 └── assets/           → Reserved for images and icons
```

---

## Features

- Matches the provided design layout closely
- Bootstrap 5 grid system for the members leaderboard
- Fully responsive: desktop (phone-frame mockup) → tablet → mobile (full screen)
- Membership card toggle: clicking **Foundation** or **Economy** reveals/hides the description
- Keyboard accessible: cards can be toggled with `Enter` or `Space`
- `aria-expanded` attributes kept in sync for screen readers
- Clean separation of concerns: HTML / CSS / JS in their own files

---

## How to Run

No build tools needed. Just open the file in your browser:

```bash
# Option 1 – double-click
open index.html

# Option 2 – VS Code Live Server
# Right-click index.html → "Open with Live Server"
```

---

## Tech Stack

| Tool | Purpose |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Custom design tokens, animations, responsive layout |
| Bootstrap 5 | Grid system, utility classes |
| Bootstrap Icons | UI icons (status bar, chevrons, WhatsApp) |
| Google Fonts | Playfair Display + DM Sans typography |
| Vanilla JavaScript | Membership toggle, keyboard events |

---

## Commit History

| Commit | Description |
|---|---|
| 1 | Initial project setup with Bootstrap |
| 2 | Added hero/profile section with user info |
| 3 | Implemented membership cards grid |
| 4 | Added Foundation & Economy membership toggle functionality |
| 5 | Made layout fully responsive for mobile and tablet |
| 6 | Added footer and WhatsApp button |
| 7 | Refactored into proper folder structure (css/, js/, assets/) |
| 8 | Added README with project documentation |
