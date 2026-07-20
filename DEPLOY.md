# Deploy & staging workflow

Never test WIP on production. Use **staging → then main**.

## Environments

| Environment | Branch | URL |
|-------------|--------|-----|
| **Production** | `main` | https://wowdesign.io · https://www.wowdesign.io |
| **Staging** | `staging` | https://wowdesign-io.vercel.app *(once assigned to Preview → `staging` in Vercel Domains)* |

Fallback staging URL (any Preview deploy): the unique `*.vercel.app` link from the Vercel dashboard / CLI after push.

## Daily workflow (always preview first)

**Rule:** Push every change to `staging` first. Andy opens the staging URL in Cursor’s browser (Design Mode OK for quick polish). **Only after Andy approves** merge/push to `main` → production.

```bash
git checkout staging
git pull

# …build / fix / experiment…

git add -A
git commit -m "…"
git push origin staging
```

1. Wait for the Preview deploy to finish in Vercel  
2. Test on the staging URL in Cursor browser / Design Mode (not wowdesign.io)  
3. When Andy says ship / approved:

```bash
git checkout main
git pull
git merge staging
git push origin main
```

That updates **production** only. Never push WIP straight to `main`.

## One-time Vercel Domains setup

In [Project → Settings → Domains](https://vercel.com/wowdesign-io/wowdesign-io/settings/domains):

1. **`wowdesign.io`** + **`www.wowdesign.io`** → Environment: **Production** (no Git Branch)
2. **`wowdesign-io.vercel.app`** → Edit → **Preview** → Git Branch: **`staging`** → Save

If the UI won’t let you move `.vercel.app` off Production, add instead:

- Domain: `staging.wowdesign.io` → Preview → branch `staging`  
- Cloudflare CNAME `staging` → `cname.vercel-dns.com` (DNS only)

## `/hero-lab` (3D WIP)

Middleware returns **404 on wowdesign.io / www**. It stays reachable on staging hosts so you can iterate without shipping it to the public site. Remove the middleware gate when the hero is ready for production.

## Rules

- Do **not** `vercel --prod` or push experimental commits straight to `main`
- Production = approved merges from `staging` only
- Newsletter / Make / Cal automations run against whatever host you hit — prefer staging for UI tests; use a throwaway email for calc/demo tests
