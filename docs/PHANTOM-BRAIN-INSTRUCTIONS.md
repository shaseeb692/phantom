# Phantom Marketing — Brain Instructions

## 1. Purpose

This file is the operating brain for the Phantom Marketing website.

Whenever a developer or AI works on this project, these rules should be treated as the default source of truth unless the project owner explicitly changes them.

The goal is to preserve consistency across:
- Design
- Development
- Service architecture
- Content
- SEO
- AEO
- GEO
- LLM / AI Search
- Images
- Navigation
- Deployment

---

## 2. Brand

Brand: Phantom Marketing

Tagline: **Your Digital Demons**

Phantom Marketing is a digital marketing and technology agency with a dark, supernatural, modern and premium identity.

Core brand vocabulary may include:

- Phantom
- Haunt / Haunting
- Possess
- Demons
- Spells
- Conjure
- Sorcery
- Enchant
- Spectral
- Digital Shadows
- Feeds
- Scrolls

Do not force supernatural wording into every sentence.

Business clarity always comes first.

---

## 3. Visual Identity

The approved Phantom visual system uses:

- Black / near-black backgrounds
- Charcoal / smoke grey
- Deep Phantom purple
- Violet neon
- White headings
- Restrained purple highlights
- Frosted / glass panels
- Subtle glow
- Premium digital-supernatural atmosphere

Avoid:

- Generic agency templates
- Excessive pink
- Excessive bright blue
- Random new gradients
- Unrelated visual redesigns
- Stock-looking service imagery

Do NOT modify approved global gradients unless explicitly requested.

---

## 4. Technology

Current website foundation:

- Next.js 16
- TypeScript
- App Router
- Reusable service-page system
- Centralized service images
- Generated image manifest
- GitHub source control
- Vercel deployment

Repository:

shaseeb692/phantom

Production branch:

main

Vercel production tracks:

main

---

## 5. Master Service Page System

The approved SEO service page establishes the master service-page system.

Main / parent service pages should follow this structure:

1. Hero
2. The Haunting Truth
3. Our [Service] Sorcery
4. Why Phantom Marketing
5. Why Most Businesses Fail at [Service]
6. Our Winning [Service] Process
7. Who We Help
8. Industries
9. Our Digital Arsenal
10. Our Spectral Impact
11. Whispers from the Void — FAQs
12. The Choice Is Yours
13. Global Footer

### The Haunting Truth

Two-column section:

- Left: service/business explanation
- Right: service-specific Phantom visual

### Service Cards

Main service capabilities should be presented using the established large Phantom glass-card system.

### Why Phantom Marketing

Keep the following inside one large contained panel:

- Business/value proposition
- Why Most Businesses Fail
- Winning Process

### Who We Help

Default global markets:

- Thailand
- Dubai
- Australia
- Malaysia
- Pakistan
- Beyond

Market-specific pages may use more relevant markets.

### Industries

Default structure:

6 industry cards

Followed immediately by:

**Not seeing your industry? No problem!**

**If your customers are searching, we ensure they find YOU.**

### Spectral Impact

Use 3 clean counter cards.

### FAQs

Minimum:

6 relevant FAQs per service page.

### CTA

Use a service-specific version of:

**THE CHOICE IS YOURS**

CTA language may use Phantom personality but must remain understandable.

---

## 6. Parent vs Child Rule

This rule is critical.

### Digital Arsenal

Digital Arsenal appears ONLY on:

- Main service pages
- Parent service pages

Digital Arsenal must NEVER appear on child service pages.

Child pages use:

hideArsenal: true

---

## 7. Current Service Hierarchy

### Search & AI

Main pages:

- SEO
- AEO
- GEO
- LLM / AI Search

These are independent main service pages.

---

### Paid Media

Main pages:

- PPC
- SEM
- Google Ads
- LINE Ads

#### Google Ads Parent

Route:

/google-ads

Children:

- /google-ads/search-ads
- /google-ads/display-ads
- /google-ads/shopping-ads
- /google-ads/video-ads
- /google-ads/performance-max
- /google-ads/demand-gen
- /google-ads/app-advertising
- /google-ads/local-search

All Google Ads children:

hideArsenal: true

---

### Social & Creative

Main pages:

- Social Media Marketing
- Paid Social
- Graphics Designing
- Branding
- PR Marketing

#### Paid Social Parent

Route:

/social-media-paid-marketing

Children:

- /meta-ads
- /linkedin-paid-advertising
- /tiktok-advertising
- /pinterest-ads
- /snapchat-ads

All Paid Social children:

hideArsenal: true

---

### Web & Motion

Main pages:

- Web Development
- Web Designing
- Print Services
- Animation

#### Animation Parent

Route:

/animation

Children:

- /2d-animation
- /3d-animation

Both Animation children:

hideArsenal: true

---

## 8. Navigation Architecture

Desktop Services mega-menu categories:

### Search & AI
- SEO
- AEO
- GEO
- LLM / AI Search

### Paid Media
- PPC
- SEM
- Google Ads
  - Search Ads
  - Display Ads
  - Shopping Ads
  - Video Ads
  - Performance Max
  - Demand Gen
  - App Advertising
  - Local Search
- LINE Ads

### Social & Creative
- Social Media Marketing
- Paid Social
  - Meta Ads
  - LinkedIn Ads
  - TikTok Ads
  - Pinterest Ads
  - Snapchat Ads
- Graphics Designing
- Branding
- PR Marketing

### Web & Motion
- Web Development
- Web Designing
- Print Services
- Animation
  - 2D Animation
  - 3D Animation

Do not turn standalone services into children unless explicitly approved.

---

## 9. Image System

Central service image folder:

public/images/services/

Manifest:

lib/image-manifest.ts

After adding or changing service images run:

node scripts/generate-image-manifest.mjs

Preferred service artwork:

1200 x 700

Landscape orientation.

Visual style:

- Dark
- Phantom purple/violet
- Premium
- Futuristic
- Service-specific
- Consistent across the website

### Animation Mapping

Parent:

Animation -> services/Animation

Children:

2D Animation -> services/2D Animation

3D Animation -> services/3D Animation

Never use a child image for a parent when a dedicated parent image exists.

---

## 10. Digital Arsenal

Digital Arsenal should use actual tools/platforms relevant to the service.

Requirements:

- Recognizable logos where available
- Service-specific tools
- Continuous auto-scroll
- Seamless ticker
- Pause on hover/focus
- Resume when pointer leaves
- Click/tap opens tool detail modal
- Dark/frosted modal
- X closes modal
- Outside click closes modal
- Escape closes modal
- Body scroll locked while modal is open

Do not fill Arsenal with irrelevant generic tools.

Again:

**NO DIGITAL ARSENAL ON CHILD PAGES.**

---

## 11. Development Rules

When modifying the website:

1. Preserve approved baseline.
2. Change only the requested dimension.
3. Do not redesign unrelated sections.
4. Prefer reusable components.
5. Keep parent/child hierarchy intact.
6. Keep service content specific.
7. Preserve UTF-8.
8. Scripted file writes should use UTF-8 without BOM.
9. Avoid broad PowerShell Set-Content rewrites.
10. Do not touch global gradients unless requested.
11. Regenerate image manifest after adding images.
12. Run production build before deployment.

---

## 12. Encoding Rule

PowerShell has previously corrupted characters such as:

- em dash
- ellipsis
- multiplication symbol
- decorative symbols

Use:

System.Text.UTF8Encoding($false)

when scripting file writes.

Avoid careless full-file encoding conversions.

---

## 13. Build & Deployment Process

Standard workflow:

1. Make targeted change
2. Test locally
3. Run:

npm run build

4. Check:

git status --short

5. Confirm only intended files changed
6. Stage files
7. Commit
8. Push:

git push origin main

9. Vercel automatically deploys main
10. Verify production site

Windows LF -> CRLF warnings are not build errors.

---

## 14. Decision Rule

If something is unclear:

1. Preserve the existing approved design.
2. Follow the master service-page system.
3. Preserve service hierarchy.
4. Prefer service-specific content.
5. Make the smallest safe technical change.
6. Never invent a new design system when an approved one already exists.