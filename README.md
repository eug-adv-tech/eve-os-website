# EVE-OS — Edge Virtualization Engine Website

Static website for LF Edge EVE-OS (Edge Virtualization Engine OS).

Live site (after enabling Pages): https://eug-adv-tech.github.io/eve-os-website/

## Local preview
```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Enable GitHub Pages
1. Go to repo Settings → Pages
2. Source: Deploy from a branch, Branch: main, folder: / (root)
3. Save — site goes live in ~1 min.

Alternatively the included GitHub Action (.github/workflows/pages.yml) deploys via Actions if Pages source is set to "GitHub Actions".
