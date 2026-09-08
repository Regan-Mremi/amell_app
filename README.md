# Amell In Dar – Progressive Web App

Pure static HTML/CSS/JS version. Works completely offline using localStorage. Perfect for Vercel.

## How to open

| URL | Purpose |
|-----|---------|
| `/` | Customer app (menus, rooftop, gym, events, reservations) |
| `/admin` | Admin panel (add / edit / delete everything) |

**Admin login**
- Username: `admin`
- Password: `amell2026`

## Deploy on Vercel (easiest way)

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project → Import the repo
3. Framework: **Other**
4. Click **Deploy**

Done. You get a live URL instantly.

## Local testing

Just open `public/index.html` in a browser, or run any static server:

```bash
npx serve public
```

## Notes

- All data is stored in the browser’s localStorage.
- Changes made in the Admin panel only appear on the same browser/device.
- The look and feel of the original app is kept exactly the same.
