# Portfolio Website

A personal portfolio site built with plain HTML, CSS, and JavaScript — no build tools required.

## Structure

```
├── index.html        Page structure (About, Projects, Classes, Contact)
├── css/style.css      All styling (colors, layout, animations)
├── js/script.js       Content data + interactivity
└── assets/            Put images, resume PDF, etc. here
```

## Editing your content

You don't need to touch the HTML to update your info — everything content-related lives at the
top of `js/script.js`:

- `skillGroups` — the three skill cards (Languages, Web Dev, Design)
- `heroSkillStrip` — the short tag list under your name on the hero
- `projects` — your project cards (title, description, tags, link)
- `classes` — your Georgia Tech coursework list

In `index.html`, also update:
- Your name (appears in the `<title>`, nav brand, and hero heading)
- The hero terminal snippet's `name` field
- Contact section: email, LinkedIn, GitHub links

## Running locally

No build step needed. Either:
1. Open `index.html` directly in a browser, or
2. Use the VS Code "Live Server" extension for auto-reload while editing

## Pushing to GitHub

```bash
git init                     # if not already a repo
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

## Deploying with GitHub Pages (free hosting)

1. Push your code to GitHub (above)
2. Go to your repo → **Settings** → **Pages**
3. Under "Build and deployment," set **Source** to `Deploy from a branch`
4. Choose the `main` branch and `/ (root)` folder → **Save**
5. Your site will be live at `https://yourusername.github.io/your-repo-name/` within a minute or two

## Notes

- Colors, fonts, and spacing are all defined as CSS variables at the top of `css/style.css` —
  change them once and they update everywhere.
- The site respects `prefers-reduced-motion` for users who've disabled animations.
