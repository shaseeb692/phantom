# Phantom Marketing — Current Project Status

## Last Updated

October 2026

---

## Project

Phantom Marketing Next.js production website.

Local project:

C:\Users\SEO-PC\Downloads\phantom-marketing-complete-project-v10

GitHub:

shaseeb692/phantom

Production branch:

main

Deployment:

Vercel

Production domain:

https://phantommarketing.vercel.app/

---

## Current Production State

Latest completed development batch includes:

- Google Ads child service architecture
- 8 Google Ads child pages
- Nested desktop service hierarchy
- Paid Social child hierarchy
- Animation child hierarchy
- Parent-only Digital Arsenal logic
- Dedicated Animation parent artwork
- Updated image manifest
- Successful production build
- Successful Git push
- Successful Vercel production deployment

---

## Latest Git Commit

Commit:

a0b3d5b

Message:

Add Google Ads child pages and service hierarchy

---

## Google Ads Children

Completed:

- /google-ads/search-ads
- /google-ads/display-ads
- /google-ads/shopping-ads
- /google-ads/video-ads
- /google-ads/performance-max
- /google-ads/demand-gen
- /google-ads/app-advertising
- /google-ads/local-search

Each uses the shared PhantomServicePage system.

Each is a child page.

Each must have:

hideArsenal: true

---

## Paid Social Children

Existing:

- /meta-ads
- /linkedin-paid-advertising
- /tiktok-advertising
- /pinterest-ads
- /snapchat-ads

Parent:

/social-media-paid-marketing

Digital Arsenal:

Parent = YES

Children = NO

---

## Animation

Parent:

/animation

Children:

- /2d-animation
- /3d-animation

Digital Arsenal:

Parent = YES

Children = NO

Dedicated images now exist for:

- Animation
- 2D Animation
- 3D Animation

---

## Animation Image Mapping

Current intended mapping:

Animation -> services/Animation

2D Animation -> services/2D Animation

3D Animation -> services/3D Animation

Central directory:

public/images/services/

---

## Image Manifest

Manifest:

lib/image-manifest.ts

Current manifest after Animation parent artwork:

37 assets

Regeneration command:

node scripts/generate-image-manifest.mjs

---

## Digital Arsenal Rule

Component supports:

hideArsenal?: boolean

Render logic:

Digital Arsenal is rendered only when hideArsenal is not true.

Critical rule:

**No child service page should display Digital Arsenal.**

---

## Navigation

Current desktop hierarchy includes nested children for:

- Google Ads
- Paid Social
- Animation

Standalone services such as:

- SEO
- AEO
- GEO
- LLM / AI Search
- PPC
- SEM
- LINE Ads
- Social Media Marketing

must not accidentally become child pages.

---

## Master Service Page

The SEO page remains the master service-page design reference.

Do not replace the established service system with generic landing-page layouts.

---

## Build Status

Latest production build:

PASSED

Command:

npm run build

No build errors were reported before the latest push.

---

## Git Status at Last Deployment

The intended changes included:

- Google Ads child routes
- Header hierarchy
- Global CSS for nested mega-menu
- PhantomServicePage changes
- Paid Social child flags
- Animation child flags
- Image manifest
- Animation.webp

No unwanted .next or next-env.d.ts changes were included in the reported status.

---

## Deployment Process

For future changes:

1. Develop locally
2. Test route
3. Run image manifest generator if images changed
4. Run npm run build
5. Run git status --short
6. Review changed files
7. git add intended files
8. git commit
9. git push origin main
10. Verify Vercel production

---

## Important Do-Not-Break Rules

Do not:

- Merge old master into the current Next.js main branch
- Rebuild the website from old master
- Redesign global gradients without explicit instruction
- Add Digital Arsenal to child pages
- Replace dedicated parent artwork with child artwork
- Create unnecessary routes
- Use generic content across every service
- Rewrite unrelated files during small fixes
- Use unsafe encoding operations

---

## Next Development Direction

Continue expanding and refining the service ecosystem while preserving:

- Master service design
- Parent/child architecture
- Phantom visual language
- Search intent separation
- Dedicated imagery
- Service-specific content
- Clean reusable Next.js architecture

When new child services are introduced, first determine:

1. Correct parent
2. URL
3. Keyword intent
4. Content scope
5. Dedicated image
6. Navigation placement
7. Internal links
8. hideArsenal: true

Then build and deploy through the standard workflow.