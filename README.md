# Maryam Projects Company SPC — Corporate Website

Premium multi-page corporate website for Maryam Projects Company SPC, an Oman-based steel fabrication and structural solutions company.

**Tagline:** Built with Purpose. Led with Integrity. Delivered with Excellence.

---

## Tech Stack

- **React 18** + **TypeScript**
- **Vite 7** — build tool & dev server
- **Tailwind CSS 3** — styling
- **React Router 6** — client-side routing
- **Framer Motion** — animations
- **Lucide React** — icons
- **Web3Forms** — form submissions (free tier, no backend)

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About Us |
| `/services` | Our Services (11 service categories) |
| `/steel-fabrication` | Steel Fabrication |
| `/aluminium-glass` | Aluminium & Glass Solutions |
| `/process` | Our Process |
| `/contact` | Contact Us |
| `/quote` | Request a Quote |

---

## 1. Installation

```bash
npm install
```

## 2. Local Development

```bash
npm run dev
```

The site runs at `http://localhost:5173`.

## 3. Production Build

```bash
npm run build
```

Output is generated in `dist/`. Preview the build locally:

```bash
npm run preview
```

---

## 4. Web3Forms Setup (Email Delivery)

The Contact and Request a Quote forms use [Web3Forms](https://web3forms.com) to deliver submissions to **maryamprojectscompanyspc@gmail.com** — no backend server required.

### Steps

1. Go to [https://web3forms.com](https://web3forms.com).
2. Enter `maryamprojectscompanyspc@gmail.com` as the recipient email.
3. Copy the **Access Key** you receive.
4. Create a `.env` file in the project root (or edit the existing one):

   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_actual_access_key_here
   ```

5. Rebuild the project (`npm run build`).

### Testing

- After deploying, submit the Quote form and confirm the email arrives at the company inbox.
- Check spam/junk folder on first test.
- If the form shows an error, verify the access key is correct and that the email was entered at web3forms.com.

> **Important:** The access key is configured for the current build. Test the live form once after deployment to confirm delivery to the company inbox.

---

## 5. Image Replacement

All images are sourced from **Pexels** (free, license-free stock photography) and are used as representative placeholders. They are configured in a single file:

```
src/data/content.ts
```

- **Service images:** Edit the `image` field in the `SERVICES` array.
- **Hero/banner images:** Edit the constants at the top of each page file in `src/pages/`.

To use real company photographs:
1. Place images in `public/images/` (or any hosted URL).
2. Update the relevant `src`/`image` values in `src/data/content.ts`.
3. Rebuild.

---

## 6. GitHub Upload

1. Create a new repository on GitHub.
2. In the project directory:

```bash
git init
git add .
git commit -m "Initial commit — Maryam Projects website"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

---

## 7. Cloudflare Pages Deployment

1. Go to [Cloudflare Pages](https://pages.cloudflare.com).
2. **Create a project** → **Connect to Git** → select your GitHub repo.
3. Build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. **Environment variables:** Add `VITE_WEB3FORMS_ACCESS_KEY` with your Web3Forms access key.
5. **Deploy.**

The `public/_redirects` file ensures all routes resolve to `index.html` for SPA routing on Cloudflare Pages.

---

## 8. Custom Domain

1. In Cloudflare Pages → **Custom domains** → **Set up a custom domain**.
2. Enter `maryamprojects.com`.
3. Add a second domain `www.maryamprojects.com` if desired.
4. Update DNS records as instructed by Cloudflare (CNAME to the Pages project).
5. SSL is provisioned automatically.

---

## 9. Future Maintenance

- **Update services:** Edit `src/data/content.ts`.
- **Update contact details:** Edit the `COMPANY` object in `src/data/content.ts`.
- **Update SEO metadata:** Edit `src/components/SeoManager.tsx` and `index.html`.
- **Add a new page:** Create a component in `src/pages/`, add a route in `src/App.tsx`, add a link in `src/data/content.ts` (`NAV_LINKS`).
- **Update sitemap:** Edit `public/sitemap.xml`.

---

## Contact

- **Contact Person:** Abdullah Jabha
- **Phone:** +968 77503397 / +968 92174786
- **Email:** maryamprojectscompanyspc@gmail.com
- **Instagram:** @mpc__om
- **Website:** maryamprojects.com
