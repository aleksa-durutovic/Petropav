# Web katalog proizvoda

Statički web katalog za proizvodnu firmu (ambalaža od papira, kartona i folije),
napravljen u [Astro](https://astro.build) okviru — bez baze i bez servera.

## Pokretanje

```bash
npm install
npm run dev       # razvojni server na http://localhost:4321
npm run build     # gotov sajt u folderu dist/
npm run preview   # pregled build-a
```

## Podaci o firmi (nisu u repozitorijumu)

Pravi podaci firme i brend fajlovi se **ne čuvaju u git-u** — postoje samo lokalno:

| Fajl | Sadržaj |
|---|---|
| `src/data/company.json` | naziv, adresa, telefon, email, radno vreme, Formspree ID |
| `.env` | `SITE_URL=https://domen-firme.rs` |
| `public/images/logo-mark.png`, `public/images/logo-full.png`, `public/favicon.png` | logo |

Posle kloniranja sajt radi sa primer-podacima iz `src/data/company.example.json`.
Za pravi sajt:

1. Kopirati `src/data/company.example.json` u `src/data/company.json` i popuniti.
2. Napraviti `.env` sa `SITE_URL=...`.
3. Ubaciti logo fajlove u `public/images/` i `public/favicon.png`.

## Gde se menja sadržaj

| Šta | Fajl |
|---|---|
| Podaci o firmi | `src/data/company.json` (lokalno) |
| Proizvodi (opis, primena, specifikacije, slika) | `src/data/products.json` |
| Boje i izgled | `src/styles/global.css` (promenljive na vrhu fajla) |

### Dodavanje fotografije proizvoda

1. Ubaciti sliku u `public/images/products/` (preporuka 1200×900 px).
2. U `src/data/products.json` kod tog proizvoda postaviti `"slika": "/images/products/ime-fajla.jpg"`.

Dok je `"slika": null`, na sajtu se prikazuje prazan okvir „Fotografija uskoro”.

### Dodavanje novog proizvoda

Kopirati jedan blok u `products.json`, promeniti `slug` (deo URL-a, bez razmaka i dijakritika),
naziv i ostala polja. Strana `/proizvodi/<slug>` se pravi automatski.

## Forma za upit

Forma šalje podatke preko [Formspree](https://formspree.io) servisa. Napraviti besplatan nalog
sa email-om firme, kreirati formu i upisati njen URL u `formspreeEndpoint` u `company.json`.

## Struktura

```
public/            statički fajlovi (logo, favicon, slike proizvoda)
src/config/        company.ts — učitava company.json ili primer-podatke
src/data/          products.json, company.example.json (+ lokalni company.json)
src/components/    Header, Footer, ProductCard, InquiryForm, ImagePlaceholder
src/layouts/       BaseLayout (zajednički <head>, header, footer)
src/pages/         strane: /, /proizvodi, /proizvodi/[slug], /o-nama, /kontakt
```
