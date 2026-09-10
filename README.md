# Petropav — web katalog

Web katalog za **PETROPAV D.O.O.** ([petropav.rs](https://petropav.rs)) — statički sajt
napravljen u [Astro](https://astro.build) okviru, bez baze i bez servera. Objavljuje se na
Vercel-u: svaki `git push` na `main` automatski ažurira sajt.

## Pokretanje

```bash
npm install
npm run dev       # razvojni server na http://localhost:4321
npm run build     # gotov sajt u folderu dist/
npm run preview   # pregled build-a
```

## Gde se menja sadržaj

| Šta | Fajl |
|---|---|
| Naziv firme, adresa, telefon, email, radno vreme, domen, Formspree ID | `src/data/company.json` |
| Proizvodi (opis, primena, specifikacije, slika) | `src/data/products.json` |
| Boje i izgled | `src/styles/global.css` (promenljive na vrhu fajla) |
| Logo | `public/images/logo-mark.png` (zlatno „P”, providna pozadina), `public/images/logo-full.png`, `public/favicon.png` |

`src/data/company.example.json` je prazan šablon sa istim poljima — koristi se samo ako
`company.json` ne postoji.

### Dodavanje fotografije proizvoda

1. Ubaciti sliku u `public/images/products/` (npr. `pek-papir.jpg`, preporuka 1200×900 px).
2. U `src/data/products.json` kod tog proizvoda postaviti `"slika": "/images/products/pek-papir.jpg"`.

Dok je `"slika": null`, na sajtu se prikazuje prazan okvir „Fotografija uskoro”.

### Dodavanje novog proizvoda

Kopirati jedan blok u `products.json`, promeniti `slug` (deo URL-a, bez razmaka i dijakritika),
naziv i ostala polja. Strana `/proizvodi/<slug>` se pravi automatski.

## Forma za upit

Forma šalje podatke preko [Formspree](https://formspree.io) servisa na email firme.
Napraviti besplatan Formspree nalog, kreirati formu i upisati njen URL u `formspreeEndpoint`
u `src/data/company.json` (trenutno je `https://formspree.io/f/XXXXXXXX` — forma još ne šalje).

## Šta NIJE u repozitorijumu

- `CLIENT_CONTEXT.md` — interni dokument o klijentu (bonitet, finansije).
- `design/` — izvorni logo u punoj rezoluciji.

## Struktura

```
public/            statički fajlovi (logo, favicon, slike proizvoda)
src/config/        company.ts — učitava company.json (ili šablon ako fajl ne postoji)
src/data/          company.json, products.json, company.example.json
src/components/    Header, Footer, ProductCard, InquiryForm, ImagePlaceholder
src/layouts/       BaseLayout (zajednički <head>, header, footer)
src/pages/         strane: /, /proizvodi, /proizvodi/[slug], /o-nama, /kontakt
```
