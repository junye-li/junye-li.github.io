# Junye Li Academic Website

Static academic website built with Astro and Markdown/YAML content.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The generated site is written to `dist/`.

## Content Updates

- Profile, research interests, publications, and working papers live in `src/content/site/home.md`.
- The Data & Code and FinAI page headings live in `src/content/site/data-code.md` and `src/content/site/finai.md`.
- Site-wide metadata, contact details, canonical URL, SSRN, Google Scholar, and profile image URL live in `site.config.mjs`.

## Launch Checklist

1. Create a GitHub repository named `junye-li.github.io`.
2. Push this project to the repository's `main` branch.
3. In the GitHub repository, open Settings -> Pages and set Source to GitHub Actions.
4. Wait for the `Deploy to GitHub Pages` workflow to finish.
5. Open `https://junye-li.github.io/robots.txt` and `https://junye-li.github.io/sitemap.xml`.
6. Submit `https://junye-li.github.io/sitemap.xml` in Google Search Console.

The profile image is served locally from `public/images/profile.jpeg`.
