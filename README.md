# KV Property Inc. — Production SEO & Architecture Master Guide

> **Official Website**: [https://www.kvpropertyinc.com/](https://www.kvpropertyinc.com/)  
> **Business Name**: KV Property Inc.  
> **Phone**: (732) 677-6674 | `tel:7326776674`  
> **Email**: `kvpropertyinc@gmail.com`  
> **Operating Base / HQ**: Neptune, NJ 07753  
> **Primary Service Radius**: Neptune, NJ and surrounding 25-mile area  
> **Regional Footprint**: Monmouth County & Ocean County, New Jersey (Jersey Shore)  
> **Licensing & Protection**: Fully Licensed & Insured  
> **Primary Target Keywords**: `remodeling contractor Neptune NJ`, `general contractor Monmouth County NJ`, `kitchen remodeling Neptune NJ`  

---

## Table of Contents
1. [Executive Summary & Business Overview](#section-a-executive-summary--business-overview)
2. [Information Architecture & Canonical URL Map](#section-b-information-architecture--canonical-url-map)
3. [On-Page SEO & Metadata Strategy](#section-c-on-page-seo--metadata-strategy)
4. [Local SEO & Google Business Profile (GBP) Alignment](#section-d-local-seo--citation-strategy)
5. [Structured Data & Schema.org Implementation](#section-e-structured-data--schemaorg-implementation)
6. [Technical SEO, Crawlability & Indexing](#section-f-technical-seo-crawlability--indexing)
7. [Keyword Strategy & Search Intent Map](#section-g-keyword-strategy--search-intent-map)
8. [Conversion Rate Optimization (CRO) & Lead Funnel](#section-h-conversion-rate-optimization-cro--lead-funnel)
9. [Developer Guide & Build Commands](#section-i-developer-guide--build-commands)

---

## Section A: Executive Summary & Business Overview

**KV Property Inc.** is a licensed and insured residential and commercial remodeling, construction, and property improvement company based in Neptune, New Jersey. With over 20 years of craftsmanship experience, KV Property Inc. serves homeowners and commercial property owners throughout Monmouth and Ocean counties.

### Service Footprint
- **Headquarters**: Neptune, Monmouth County, NJ 07753 (Latitude: `40.2204`, Longitude: `-74.0329`).
- **Service Area**: 25-mile radius covering the Jersey Shore and central New Jersey.
- **Key Municipalities Served**:
  - **Monmouth County**: Neptune, Neptune City, Asbury Park, Ocean Grove, Bradley Beach, Belmar, Wall Township, Tinton Falls, Freehold, Howell, Manasquan, Spring Lake, Avon-by-the-Sea, Red Bank, Long Branch.
  - **Ocean County**: Brick, Lakewood, Point Pleasant, Toms River, Jackson.
- **Core Services**:
  1. Kitchen Remodeling & Custom Cabinetry
  2. Bathroom Renovations & Walk-In Showers
  3. General Contracting & Structural Carpentry
  4. Custom Decks & Outdoor Living Spaces
  5. Pool Decks & Exterior Patios
  6. Property Maintenance & Preservation
  7. Interior & Exterior Painting
  8. Flooring Installation (Hardwood, Tile, LVP)
  9. Home Additions & Second-Story Extensions
  10. Handyman & Home Repair Services
  11. Custom Architectural Builds & Finish Carpentry
  12. Commercial Renovations & Tenant Improvements

---

## Section B: Information Architecture & Canonical URL Map

All pages run under HTTPS on `https://www.kvpropertyinc.com/` with lowercase URLs, no trailing slashes, and explicit self-referential canonical tags:

```
https://www.kvpropertyinc.com/
├── / (Homepage - Premier Remodeling & General Contracting Hub)
├── /services (Comprehensive Services Catalog)
│   ├── /kitchen-remodeling (Custom kitchens, cabinets, countertops, islands)
│   ├── /bathroom-remodeling (Master baths, tile showers, vanity installs)
│   ├── /general-contracting (Licensed GC, structural work, renovations)
│   ├── /deck-outdoor-living (Composite & pressure-treated decks, pergolas)
│   ├── /pools-outdoor-spaces (Pool surrounds, patios, outdoor kitchens)
│   ├── /property-maintenance (Preventative care, seasonal upkeep, repairs)
│   ├── /interior-exterior-painting (High-end finishes, weatherproofing)
│   ├── /flooring (Hardwood, ceramic tile, luxury vinyl plank)
│   ├── /home-additions (Bump-outs, sunrooms, second-story expansions)
│   ├── /handyman-services (Drywall, door/window adjustments, quick fixes)
│   ├── /custom-builds (Built-in millwork, custom cabinetry, trim)
│   └── /commercial-improvements (Office fit-outs, retail, facilities maintenance)
├── /about-us (20+ Years craftsmanship, credentials, legacy of trust)
├── /our-work (Before & after portfolio, gallery of completed jobs)
├── /reviews (Verified client ratings & homeowner testimonials)
├── /free-estimate (Interactive proposal & quote request form)
├── /financing (Flexible loan terms, rates, pre-qualification)
└── /contact-us (Direct phone, email, contact form, service hours)
```

---

## Section C: On-Page SEO & Metadata Strategy

Every route is optimized with:
1. **Single Strict `<h1>` Heading** with core keyword and geographic targeting.
2. **Curated `<title>` Tag** (< 60 chars) highlighting service, locality, and brand:
   `[Service Name] in Neptune, NJ | KV Property Inc.`
3. **Optimized `<meta name="description">` Tag** (140–160 chars) with value propositions, towns served, and the active telephone number: `(732) 677-6674`.
4. **Open Graph & Twitter Cards** configured for rich social media snippets.
5. **Geo-Location Meta Tags** in root shell:
   - `geo.region`: `US-NJ`
   - `geo.placename`: `Neptune, Monmouth County, New Jersey`
   - `geo.position`: `40.2204;-74.0329`
   - `ICBM`: `40.2204, -74.0329`
6. **Canonical Tags**:
   Each individual page specifies its own canonical link (e.g., `https://www.kvpropertyinc.com/kitchen-remodeling`) to prevent duplicate content indexing.

---

## Section D: Local SEO & Citation Strategy

### Exact NAP Consistency
| Field | Value |
|---|---|
| **Legal Business Name** | KV Property Inc. |
| **Phone Number** | (732) 677-6674 |
| **Email Address** | kvpropertyinc@gmail.com |
| **Headquarters Address** | Neptune, NJ 07753 |
| **Primary Metro Market** | Neptune & Monmouth County, NJ |
| **Regional Market** | Jersey Shore / Ocean County, NJ |
| **Service Radius** | 25 Miles (~40 km) |
| **Hours** | Monday – Saturday: 8:00 AM – 6:00 PM (24/7 Emergency Available) |

### Recommended Citation Distribution
To maximize local 3-Pack rankings for "remodeling contractor Neptune NJ", ensure identical NAP on:
- Google Business Profile (Primary Category: *General Contractor*, Secondary: *Kitchen Remodeler*, *Bathroom Remodeler*, *Deck Builder*, *Handyman*)
- Bing Places for Business
- Yelp for Business
- Better Business Bureau (BBB)
- HomeAdvisor / Angi
- Houzz Profile
- Facebook Business Page
- Nextdoor Business Page

---

## Section E: Structured Data & Schema.org Implementation

Implemented via type-safe schema generators in `src/lib/seo-schema.ts`:

1. **Global Root Schema (`src/routes/__root.tsx`)**:
   - Types: `["HomeAndConstructionBusiness", "GeneralContractor", "LocalBusiness"]`
   - Canonical entity `@id`: `https://www.kvpropertyinc.com/#business`
   - Coordinates: `40.2204, -74.0329`
   - `areaServed`: GeoCircle with 40,000m radius centered at Neptune, NJ.
   - `WebSite` Schema with publisher reference.
2. **Service Page Schema (`src/components/service-page-template.tsx`)**:
   - `Service` schema linking `provider` to `#business`.
   - `BreadcrumbList` schema with full navigational hierarchy.
   - `FAQPage` schema with questions & answers for rich snippets in Google search results.

---

## Section F: Technical SEO, Crawlability & Indexing

### 1. `robots.txt` (`public/robots.txt`)
```txt
User-agent: *
Allow: /
Disallow: /dashboard
Disallow: /login

Sitemap: https://www.kvpropertyinc.com/sitemap.xml
```

### 2. `sitemap.xml` (`public/sitemap.xml`)
Comprehensive XML sitemap covering all 20 public routes with `<lastmod>`, `<changefreq>`, and search-engine optimized `<priority>` ratings (1.0 for homepage, 0.9 for core landing pages, 0.8 for service sub-pages).

---

## Section G: Keyword Strategy & Search Intent Map

| Target Keyword | Search Intent | Priority | Target URL |
|---|---|---|---|
| remodeling contractor Neptune NJ | Transactional | High (Primary) | `/` |
| kitchen remodeling Neptune NJ | Transactional | High | `/kitchen-remodeling` |
| bathroom remodeling Neptune NJ | Transactional | High | `/bathroom-remodeling` |
| general contractor Monmouth County NJ | Commercial | High | `/general-contracting` |
| deck builder Neptune NJ | Transactional | High | `/deck-outdoor-living` |
| home additions Monmouth County NJ | Transactional | High | `/home-additions` |
| flooring contractor Neptune NJ | Commercial | High | `/flooring` |
| painting contractor Neptune NJ | Transactional | High | `/interior-exterior-painting` |
| property maintenance Neptune NJ | Commercial | High | `/property-maintenance` |
| handyman services Neptune NJ | Transactional | High | `/handyman-services` |
| commercial remodeling Monmouth County | Commercial | High | `/commercial-improvements` |
| free remodeling estimate Neptune NJ | Transactional | High | `/free-estimate` |
| renovation financing Neptune NJ | Commercial | Medium | `/financing` |
| KV Property Inc reviews | Navigational | High | `/reviews` |

---

## Section H: Conversion Rate Optimization (CRO) & Lead Funnel

1. **Direct Clickable Hotlines**:
   - Primary Phone: `<a href="tel:7326776674">(732) 677-6674</a>` in Header TopBar, Navigation, Hero, Sticky CTAs, and Footer.
   - Direct Email: `<a href="mailto:kvpropertyinc@gmail.com">`
2. **Interactive Lead Capture**:
   - Multi-step Free Estimate form on `/free-estimate`.
   - Floating Contact Drawer with quick quote shortcuts and WhatsApp direct messaging.
   - Lead management stored and managed through internal store.
3. **Trust & Proof Factors**:
   - 20+ years of local craftsmanship emphasized across all pages.
   - Fully Licensed & Insured credentials prominently badged.
   - Verified 5-star customer ratings integrated across the site.

---

## Section I: Developer Guide & Build Commands

### Tech Stack
- **Framework**: TanStack Start (SSR / Nitro / Vite)
- **Routing**: `@tanstack/react-router`
- **UI & Styling**: React 19, Tailwind CSS v4, Lucide Icons, Framer Motion
- **State & Data**: `@tanstack/react-query`

### Commands
```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle (client & SSR)
npm run build

# Preview production build locally
npx vite preview
```

### Key Source Files
- `src/lib/seo-schema.ts`: Schema.org structured data generators (LocalBusiness, GeneralContractor, WebSite, Service, FAQ, Breadcrumb).
- `src/routes/__root.tsx`: Root HTML shell with canonical links, geo meta tags, and global JSON-LD schemas.
- `public/robots.txt`: Search crawler directives and sitemap URL.
- `public/sitemap.xml`: Complete canonical XML sitemap for `https://www.kvpropertyinc.com`.
- `src/data/services-data.ts`: Comprehensive metadata, copy, FAQs, and imagery for all 12 services.
- `src/components/site-header.tsx` & `src/components/site-footer.tsx`: Global navigation and accessible telephone/email touchpoints.
