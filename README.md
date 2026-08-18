# Namu Legacy Schools — Website

A static site (HTML/CSS/JS, no build step) for Namu Legacy Schools, Abuja.

## How to use it
Just open `index.html` in a browser, or upload the whole folder to any static host
(Netlify, Vercel, GitHub Pages, cPanel, etc.) — no build process required.

## Files
- `index.html` — Home
- `about.html` — About / mission / leadership
- `admissions.html` — Admissions process + application form
- `news.html` — News & announcements
- `gallery.html` — Photo gallery
- `contact.html` — Contact details + message form
- `css/style.css` — All styling (colors, type, layout)
- `js/main.js` — Mobile nav toggle + form handling
- `images/logo.png` — Your crest, pulled from the uploaded screenshot

## ⚠️ Content still needed (marked inline as "needs-content" tags)
I couldn't pull real content from the Facebook page or Google share link
(both block automated access), so the site currently uses realistic
placeholder copy. Search the codebase for `needs-content` to find every spot,
or work through this list:

- [x] Phone (0812 626 3239) and address (No. 1, Yawori Street, Garki, Abuja, FCT) — added, appears in every footer + contact page + map embed
- [ ] Real email address (still placeholder — info@namulegacyschools.example)
- [ ] Founding year, founder name, and real history/about text (note: CAC registration date of 30 Jan 2019 is now shown on the About page as a credibility signal — actual school founding year may differ from incorporation date)
- [ ] Confirmed mission & vision statements
- [ ] Leadership names, titles, and photos (proprietor, head of school, etc.)
- [ ] Actual levels/classes offered (confirm creche → SSS3 is accurate)
- [ ] Real admissions process steps and required documents
- [ ] Real news posts/announcements with dates
- [ ] Real photos for the gallery (replace the placeholder tiles)
- [ ] Instagram / other social links
- [ ] Office hours
- [ ] Map embed on the Contact page (once address is confirmed, swap the placeholder div for a Google Maps iframe)

## ⚠️ Forms are not yet connected to anything
The admissions application form and the contact form currently just show a
"submitted" message locally — they don't send an email or save data anywhere.
Options:
1. **Quick fix**: wire them to a form service like Formspree or Web3Forms (a few lines of JS, no backend needed).
2. **Better long-term**: once the management webapp exists, point these forms at its API so admissions applications land directly in the admin dashboard.

## Design notes
- Palette and type system pulled directly from the school crest (navy, sky blue, gold ribbon, rainbow book accents).
- The ribbon-banner label used to head every section echoes the "WORK AND WORSHIP" banner in the logo.
- Portal Login button in the header is a placeholder link — point it at the management webapp once that's live.
