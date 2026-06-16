# AssetVault — Marketing Site

Static landing page for [AssetVault Pro](https://github.com/ladaojeifang/AssetVault_Pro) and the [browser extension](https://github.com/ladaojeifang/AssetVault_Browser_Extension). Built with [Astro](https://astro.build/) and deployed to **GitHub Pages** (free for public repos).

- **中文首页**: `/`
- **English**: `/en/`

## Local development

```bash
pnpm install
pnpm dev
```

If `pnpm install` warns about ignored build scripts (esbuild/sharp), ensure `pnpm-workspace.yaml` has:

```yaml
allowBuilds:
  esbuild: true
  sharp: true
```

Or run: `pnpm approve-builds --all`

Open `http://localhost:4321`. For project-style Pages paths during dev:

```bash
# Windows PowerShell
$env:BASE_PATH='/AssetVault_Website/'; pnpm dev

# macOS / Linux
BASE_PATH=/AssetVault_Website/ pnpm dev
```

## Build

```bash
pnpm build
pnpm preview
```

Copy `.env.example` to `.env` and adjust `BASE_PATH` / `SITE_URL` if needed.

## Deploy to GitHub Pages

1. Create a public repo (e.g. `AssetVault_Website`) and push this directory.
2. **Settings → Pages → Build and deployment**: Source = **GitHub Actions**.
3. Push to `main` — workflow `.github/workflows/pages.yml` builds and deploys.
4. Site URL (project Pages): `https://<user>.github.io/AssetVault_Website/`

### Custom domain or org site

| Scenario | `BASE_PATH` | `SITE_URL` |
|----------|-------------|------------|
| Project Pages (`user.github.io/repo/`) | `/repo-name/` | `https://user.github.io` |
| User/org root (`user.github.io`) | `/` | `https://user.github.io` |
| Custom domain | `/` | `https://your.domain` |

For a root site, rename the repo to `<username>.github.io` or use an organization `assetvault.github.io`, then set `BASE_PATH=/` in the workflow env block.

## Link from main repos

After deploy, set **Website** on GitHub repo About pages:

- AssetVault_Pro → your Pages URL
- AssetVault_Browser_Extension → same URL

Add to README top:

```markdown
🌐 **Website** · [Download](https://github.com/ladaojeifang/AssetVault_Pro/releases)
```

## License

MIT — same spirit as AssetVault Pro Community Edition.
