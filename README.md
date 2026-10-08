# Templates by Isaiah

A curated catalog of portfolio website templates. Each product page includes the intended audience, features, technology, customization notes, and real screenshots captured from the corresponding project.

The storefront is a showcase for the templates, not a portfolio template itself. Live demos open the published projects. Pricing is available by email; the storefront does not process payments or deliver files.

## Run locally

Requirements: Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Available scripts

```sh
npm run typecheck
npm run build
```

## Add a template

Template content lives in [`src/data/templates.ts`](src/data/templates.ts). Add a `Template` object with its name, slug, category, copy, features, technology stack, status, and preview image paths. Put desktop and mobile WebP previews under `public/templates/<template-id>/`.

The collection and detail pages read from the same local data, so new entries automatically appear in the collection and get a `/templates/<slug>` detail route.

## Refresh screenshots

The capture script uses headless Microsoft Edge and Python with Pillow/WebP support:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\capture-template-previews.ps1
```

Pass `-Url` and `-OutputDirectory` to capture another running project. See [`docs/template-preview-assets.md`](docs/template-preview-assets.md) for source projects and their local URLs. Captures include desktop and 430px mobile views and are optimized to WebP.

## Catalog content

- **Dev Portfolio** — a code-led developer portfolio.
- **Art Portfolio** — an illustrated portfolio with a gallery and commission sheet.
- **Art Portfolio V2** — an interactive artwork archive built with Three.js.
- **Civil Engineering** — a technical portfolio with an interactive residential study.

Some source projects still contain example identities, artwork, project data, or contact details. These limitations are disclosed in their catalog descriptions; replace sample content with material you have rights to use before publishing a customized template.

## Deployment

The project can be deployed to Vercel. [`vercel.json`](vercel.json) rewrites page routes to the Vite app so template detail URLs work on direct visits.

## License

No open-source license is included. Contact the author for reuse or redistribution terms.
