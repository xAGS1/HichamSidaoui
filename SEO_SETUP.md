# Hicham Sidaoui — SEO deployment checklist

This package was built from the **original uploaded repository**, not the earlier SEO ZIP.

## Naming
- Public name: **Hicham Sidaoui** (title, page description, and Schema.org `name`).
- Academic name: **Hicham Ghazi Sidaoui** appears only as the Schema.org `alternateName`, connecting the public name to the research profile.

## Publishing
1. Copy these files into the local `HichamSidaoui` git repository (do not replace `.git`).
2. Make sure GitHub Pages is configured to serve this repository at `https://xags1.github.io/HichamSidaoui/`; otherwise update canonical, sitemap, JSON-LD and robots.txt URLs.
3. Commit and push changes, then confirm `https://xags1.github.io/HichamSidaoui/sitemap.xml` and `robots.txt` are publicly accessible.
4. Verify the website property in **Google Search Console**, submit sitemap and inspect/request indexing of the homepage.

## Photo and CV
- No actual headshot was included in the original repo. `assets/avatar.png` is an illustrated image; no misleading `image`/`og:image` property has been added. Once you have a public professional photo, add it visibly on the page and use an appropriate filename/alt text, then add its absolute URL to Person `image` and social-preview tags.
- `assets/Hicham_Sidaoui_CV.pdf` was missing from the original repository. Its two links are commented out in HTML to prevent broken clicks. Once you add the PDF, uncomment those links.

Search snippets, rankings and images are selected by Google; indexing is not guaranteed.
