# 7historii.pl

Materiały do studiowania Biblii w grupie — odbudowa strony z Web Archive (WordPress → Astro, statycznie).

- Treści: `src/content/studia/*.md` (frontmatter: `title`, `order`, `group: historie|materialy|page`, `passage`, `summary`, `image`)
- Obrazki: `public/images/`
- Lokalnie: `npm install && npm run dev`
- Produkcja: `Dockerfile` (build Astro → nginx na porcie 80), wdrażane przez Coolify.
