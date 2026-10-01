# WEVON Apparel Website

A responsive static website suitable for free hosting on Cloudflare Pages, Netlify, or GitHub Pages.

## Current setup
- Modern navy/red/gold WEVON theme
- Responsive mobile layout
- Product catalogue with category filters
- No product prices
- WhatsApp enquiry buttons using 070 350 3912
- Placeholder product images that can be replaced later
- About, process, why choose us, and contact sections

## Replace product images
Replace files in:
`assets/images/products/`

For the easiest update, keep the same file names:
`product-01.svg`, `product-02.svg`, etc.

## Update products
Edit `assets/app.js` and modify the `products` array.

## Run locally
Open `index.html` in a browser.

For best results, use a simple local web server:
`python3 -m http.server 8000`

Then open:
`http://localhost:8000`

## Deploy to Cloudflare Pages
Upload this folder to a GitHub repository and connect the repository to Cloudflare Pages.
No build command is required; the output directory is the repository root.


## Contact details in v2
- Phone / WhatsApp: 070 350 3912
- Email: wevongroup@gmail.com
- Facebook: https://www.facebook.com/share/1EMt8zidNn/?mibextid=wwXIfr

## Logo
The official WEVON logo has now been added as `assets/images/wevon-logo.png` and is used across the site.


## v4 updates
- Replaced the dummy shirt/logo artwork with updated product placeholders that use the official WEVON logo.
- Added a top hero image slider with 4 rotating slides.
- Hero slides are based on booklet visuals where available.


## v5 updates
- Replaced the booklet-based hero slider visuals with 4 custom generated slider images designed specifically for the website.
- Added premium left/right slider arrows.
- Improved the hero slider styling with stronger overlay, smoother visuals, and a more premium homepage feel.


## v6 updates
- Replaced the earlier placeholder catalogue visuals with realistic generated apparel images.
- Removed the previous "LOGO APPLIED" artwork/badge by replacing the old placeholder product renders.
- Updated the catalogue image set so each category now has a more realistic product-style visual.
- Reused the polo image for Corporate Uniforms and the customized T-shirt image for Custom Bulk Orders.
