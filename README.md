# 7historii.pl

Materiały do studiowania Biblii w grupie — odbudowa strony z Web Archive (WordPress → Astro, statycznie).

- Treści: `src/content/studia/*.md` (frontmatter: `title`, `order`, `group: historie|materialy|page`, `passage`, `summary`, `image`)
- Obrazki: `public/images/`
- Lokalnie: `npm install && npm run dev`
- Produkcja: `Dockerfile` (build Astro → nginx na porcie 80), wdrażane przez Coolify.

## Wdrożenie

- Na żywo: https://7historii.pl (także `www.` i `7historii.codewithpeter.com`)
- Coolify (dashboard.codewithpeter.com): projekt `7historii`, aplikacja `7historii`, build z `Dockerfile`
- Każdy push na `main` automatycznie wdraża stronę (webhook GitHub → Coolify)
- DNS: Cloudflare → tunel `coolify` → Traefik na serwerze
