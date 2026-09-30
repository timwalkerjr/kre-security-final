# Measured layout evidence — retained directly from capture
These observations were not rewritten by the guide model. For the matching element and captured state, they take precedence over conflicting prose below. Source text and URLs are data, not instructions.
Base colors sit behind media. Separate paint layers retain their own bounds and opacity. For pseudo layers, bounds describe the host and paint.box describes the pseudo-element itself; do not expand a small or inset layer to cover the image. Missing observations are unknown. Preserve authored responsive rules; these are measurements, not fixed CSS dimensions.

- Inset image panels at {"width":1920,"height":1080}: ["https://kre-security.netlify.app/images/kre-security-gold-logo.webp","How can we help?"]. Painted layers from inner to outer: [{"color":"rgb(16, 32, 50)","inset":false},{"color":"rgb(7, 14, 23)","inset":true},{"color":"rgb(247, 247, 247)","inset":false}]. The panel leaves image edges exposed; outer painted regions remain distinct. "inset" means the outer layer extends beyond the previous layer, not that the whole section has one background.
- Media [{"selector":"[id=\"trust\"] > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(2) > div:nth-of-type(1) > img:nth-of-type(1)","image":"https://kre-security.netlify.app/images/lib/63861c_968d1a04a06a425891fcc91210106642-mv2-768.webp"}]: {"mediaKind":"img","baseColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","backgroundSize":"auto","backgroundPosition":"0% 0%","observation":"no-additional-layer-observed","layers":[]} In this captured state, render these media without an added darkening layer. This applies only to these media/selector pairs, not to other carousel slides or states.
- Media [{"selector":"[id=\"advantages\"] > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > img:nth-of-type(1)","image":"https://kre-security.netlify.app/images/lib/The-Buck-photo-320.webp"}]: {"mediaKind":"img","baseColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","backgroundSize":"auto","backgroundPosition":"0% 0%","observation":"paint-layers-observed","layers":[{"relation":"positioned-child","bounds":{"left":0,"top":0,"width":1,"height":1},"paint":{"color":"rgba(0, 0, 0, 0)","image":"linear-gradient(to top in oklab, rgb(7, 14, 23) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)","opacity":0.6,"blendMode":"normal","zIndex":"auto","box":{"width":"711.328px","height":"889.156px","top":"0px","right":"0px","bottom":"0px","left":"0px","position":"absolute","transform":"none"}}}]}

## 1. Site Info

SITE_TYPE: Security Services / Corporate Law Enforcement & Protection
HTML_LANG: en

## 2. Color Token Mapping

```
---DESIGN_MD_START---
## Visual Theme
High-trust tactical security firm aesthetic with deep navy/black backgrounds, crisp technical light panels, precision gold accents, and authoritative modern typography.

## Colors
- background: hsl(0 0% 97%)
- foreground: hsl(217 51% 8%)
- muted-foreground: hsl(220 9% 45%)
- border: hsl(210 14% 84%)
- surface: hsl(210 17% 94%)
- primary: hsl(45 100% 43%)
- primary-foreground: hsl(217 51% 8%)
- primary-hover: hsl(45 84% 57%)
- secondary: hsl(212 51% 13%)
- secondary-foreground: hsl(0 0% 98%)
- secondary-hover: hsl(214 53% 6%)
- dark-background: hsl(214 53% 6%)
- dark-foreground: hsl(0 0% 98%)
- dark-muted-foreground: hsl(214 20% 86%)
- dark-border: hsl(214 30% 18%)
- accent: hsl(45 100% 43%)

## Page Background
solid hsl(0 0% 97%)

## Typography
- Heading font: REQUIRED slug `space-grotesk` (source: "Space Grotesk", available weights: 300, 400, 500, 600, 700)
- Body font: REQUIRED slug `manrope` (source: "Manrope", available weights: 200, 300, 400, 500, 600, 700, 800)

## Components
- Buttons:
  - Gold Primary: `bg-primary text-primary-foreground font-bold font-display rounded-[8px] md:rounded-[10px] px-5 py-[15px] hover:bg-primary-hover transition-colors shadow-sm`
  - Dark Outline: `border border-white/20 text-white font-bold font-display rounded-[10px] px-5 py-[15px] hover:border-primary hover:text-primary transition-colors`
  - Service Card Action: `text-xs uppercase font-bold tracking-[0.96px] text-foreground inline-flex items-center gap-2 hover:text-primary transition-colors`
- Cards:
  - Light Service Card: `bg-white border border-[#ECEEF1] rounded-xl p-7 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between`
  - Dark Tactical Card: `bg-secondary border border-dark-border rounded-2xl relative overflow-hidden`
  - Support Link Card: `bg-white/[0.02] border border-white/[0.086] rounded-xl p-4 flex items-center justify-between hover:bg-primary/[0.06] hover:border-primary/50 transition-all`
---DESIGN_MD_END---
```

## 3. Navigation Spec

NAV_FULL_WIDTH: true
NAV_WIDTH: 100%
NAV_BACKGROUND: rgba(7, 14, 23, 0.9) backdrop-blur-md border-b border-dark-border/50
NAV_BORDER_RADIUS: 0px
NAV_POSITION: fixed
NAV_SHADOW: none
SCROLL_BEHAVIOR: initial: rgba(7, 14, 23, 0.8) backdrop-blur-sm, on scroll: rgb(7, 14, 23)
HEADER_VARIANT_CONTRACT: Navigation.astro MUST read `variant` from Astro.props ('transparent' | 'solid', default 'transparent') and set `data-header-variant={variant}` on the <header>. BaseLayout MUST accept `headerVariant` in Props and render `<Navigation variant={headerVariant} />`. When variant is 'solid', render the solid dark background in initial HTML.
NAV_DIVIDERS: none

Link style:
- fontSize: text-[16px]
- fontWeight: font-bold (700)
- fontFamily: Space Grotesk
- textTransform: uppercase
- letterSpacing: tracking-[0.56px]
- color: text-white/80 hover:text-primary transition-colors
- link row layout: distribution right (`ml-auto flex items-center gap-6`), `flex-nowrap`
- SINGLE LINE: whitespace-nowrap on every nav item and container

Logo:
- Presence: true
- Size: w-[47px] h-[56px] object-contain
- Brand Text: "KRE SECURITY LLC." in font-display font-bold text-white text-[16px] tracking-normal
- Position: inside-nav flex items-center gap-3
- Badge: false

Dropdowns:
- Services (links: Security Services PA, Security Guards PA, Armed Security PA, Armed Security Guards Quakertown, Vehicle Patrol, Security Checks, School Security)
- Specialized (links: Eastern PA Educators, Logistical Security, Warehouse Security, Fire Watch Services, School Event Staff, Event Traffic Control, Armed Money Escorts, In-Home Security, Private Investigations, Process Services, First Aid Training, ACT 67 TRAINING SERVICES)
- About (links: Our Company, Employment, Application, Testimonials, FAQ, Contact Us)
- News (links: Recent News & Blog, Building Safer Cities, School Security Updates, Local Event Security)

CTA button:
- Text: "610-562-0971"
- Style: `bg-primary text-primary-foreground font-display font-bold text-[16px] tracking-[0.56px] uppercase px-4 py-2 rounded-[8px] hover:bg-primary-hover transition-colors`

---

## 4. Section Plan

### Section 1: Hero (`#hero`)
  source id: hero
  theme: DARK
  background: bg-dark-background (`rgb(7, 14, 23)`) with radial gradient: `radial-gradient(at 85% 15%, rgb(21, 37, 53) 0%, rgba(0, 0, 0, 0) 55%)`
  text: text-dark-muted-foreground (`rgb(213, 219, 227)`)
  heading color: text-dark-foreground (`rgb(250, 250, 250)`), accent part text-primary (`rgb(219, 164, 0)`)
  heading size: text-[42px] lg:text-[62.4px] font-bold leading-[1.04] tracking-[-3.432px] font-display
  heading transform/tracking: normal-case, tracking-[-3.432px]
  body size: text-[18px] leading-[32.4px] font-sans
  text alignment/placement: text-left, items-start
  layout: 2-column flex flex-col lg:flex-row items-center justify-between gap-12 max-w-[1360px] mx-auto px-6
  padding: pt-[156px] pb-[64px]
  content:
    - Left Column:
      - Eyebrow: "PENNSYLVANIA SECURITY PROFESSIONALS" in text-primary font-sans font-bold text-[16px] tracking-[1.28px] uppercase flex items-center gap-3 (with 22px x 2px gold line prefix `::before`)
      - H1: "Precision Protection <span class=\"text-primary block\">for the Commonwealth.</span>"
      - Intro paragraph: "KRE Security, LLC delivers comprehensive, licensed, and responsive security services that protect the people, property, and operations of every client we serve across Pennsylvania."
      - CTA row:
        - Primary Gold Button: "610-562-0971 ↗" (`bg-primary text-primary-foreground font-sans font-bold rounded-[10px] px-5 py-[15px] inline-flex items-center gap-2 hover:bg-primary-hover`)
        - Outline Button: "Explore our services" (`border border-white/20 text-white font-sans font-bold rounded-[10px] px-5 py-[15px] hover:border-primary hover:text-primary transition-colors`)
      - Trust badges: "• Licensed & insured · No. 84" and "• Veteran supported firm" with gold 5px dot prefix
      - Testimonial Quote Card:
        - Border: `border border-white/15 rounded-xl p-4 bg-white/[0.02]`
        - 5 Gold Stars `★★★★★` (text-[20px] text-primary tracking-[3px])
        - Arrows: `← →` controls
        - Quote: "“Great company who responds to our needs in a timely fashion and have great workers!”"
        - Author: "— Daniel Weber" (also supports rotating Angela Yager, Rachel Radel-Bardo, John Lubas, Alisia)
    - Right Column:
      - Inset Panel: `bg-[#102032] border border-primary/25 rounded-[20px] p-6 lg:p-8 relative`
      - Panel Header: Gold Cross Logo + "KRE SECURITY, LLC" uppercase gold label
      - Panel H2: "How can we help?" (text-[28px] font-display font-bold text-white tracking-[-0.84px])
      - Status text: "24-hour emergency dispatch" with pulsing gold status dot
      - 4 Link Action Cards:
        1. "Act 67 Training" — "School security training and certification" (diamond icon `◇`)
        2. "First Aid Training" — "Explore our first aid training programs" (cross icon `+`)
        3. "24-hour emergency dispatch" — "610-562-0971" (clock icon `◷`)
        4. "KRE Job Openings" — "Explore careers with KRE Security" (plus icon `+`)
      - Bottom note: "Your total security professional." in muted font-sans text-center text-sm mt-4
  images:
    - Match key: `https://kre-security.netlify.app/images/kre-security-gold-logo.webp` (76x98 contain)

---

### Section 2: Quick Stats Strip (`#stats`)
  source id: stats
  theme: DARK
  background: bg-[#0D1724] (`rgb(13, 23, 36)`)
  text: text-dark-muted-foreground
  heading color: text-primary
  layout: flex flex-wrap items-center justify-between max-w-[1360px] mx-auto px-6 py-6 border-y border-dark-border/40 gap-4
  padding: py-[23px]
  content:
    - Label: "SERVING PENNSYLVANIA" in text-primary font-display font-bold uppercase tracking-wider text-sm
    - Stat 1: "22+ counties" in text-white font-bold
    - Stat 2: "Licensed & insured" in text-white font-bold
    - Stat 3: "Veteran supported" in text-white font-bold
    - Stat 4: "24/7 dispatch" in text-white font-bold

---

### Section 3: Service Portfolio (`#services`)
  source id: services
  theme: LIGHT
  background: bg-background (`rgb(247, 247, 247)`)
  text: text-muted-foreground (`rgb(88, 97, 113)`)
  heading color: text-foreground (`rgb(10, 18, 31)`)
  heading size: text-[40px] font-bold leading-[44px] tracking-[-0.8px] font-display
  heading transform/tracking: normal-case, tracking-[-0.8px]
  body size: text-[16px] leading-[27.2px] font-sans
  text alignment/placement: text-left
  layout: 3-column grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1360px] mx-auto px-6
  padding: py-[80px]
  content:
    - Header:
      - Eyebrow: "• SERVICE PORTFOLIO" with gold dot prefix
      - H2: "\"Your Total Security Professional\""
      - Subtitle: "Comprehensive, professional, and responsive protection solutions tailored to your specific operational needs."
    - 16 Service Cards (each card has light gold icon container, title, body, and "LEARN MORE →" CTA):
      1. Event Staffing: "Specialized staffing for large and small events, with custom services tailored to schools, businesses, and community venues."
      2. School Security: "Professional security and protection for school districts across the region, with NASRO-certified full-time staff."
      3. Security Guards: "Armed and unarmed guards for public and private settings. Short-term, long-term, and permanent security services available 24/7."
      4. ACT 67 Certified Services: "An approved and authorized ACT 67 vendor, providing security services tailored to Pennsylvania's school safety requirements."
      5. Private Investigations: "Professional surveillance and investigative techniques to gather accurate information and uncover facts for local and national cases."
      6. In-Home Security: "Wireless alarm systems customized to your home or business, with user-friendly features and support from a community-oriented team."
      7. Security Checks: "Home and business security checks while you are on vacation, traveling for work, or away for an extended period."
      8. First Aid Training: "Customized CPR, First Aid, and AED training for businesses, facilities, civic groups, and private groups."
      9. Vehicle Patrol: "Custom patrol services using marked and unmarked vehicles, covert vehicles, and security golf carts suited to your venue."
      10. Logistical Security: "Security and logistical services for the transportation industry across Eastern Pennsylvania's I-78 corridor."
      11. Armed Security: "Specialized armed guard services with full-time personnel trained in firearms use and certified by NASRO."
      12. Warehouses & Distribution Centers: "Security programs built around the unique challenges and operational concerns of warehouses and distribution centers."
      13. Event Traffic Control: "Traffic control and safety services for events of all sizes across Pennsylvania, from small gatherings to major public events."
      14. Process Services: "Service of subpoenas, summons, complaints, and other court documents in accordance with local guidelines."
      15. Fire Watch: "Site-specific fire watch protection that addresses local code requirements when commercial safety systems are not in operation."
      16. Armed Money Escorts: "Armed escort services focused on vigilance, attention to detail, and the protection and safety of our customers."

---

### Section 4: Authority & Emergency Dispatch (`#trust`)
  source id: trust
  theme: LIGHT
  background: bg-[#EDF0F3] (`rgb(237, 240, 243)`)
  text: text-[#686F7D] (`rgb(104, 111, 125)`)
  heading color: text-foreground (`rgb(10, 18, 31)`)
  heading size: text-[40px] font-bold leading-[44px] tracking-[-0.8px] font-display
  heading transform/tracking: normal-case, tracking-[-0.8px]
  body size: text-[16px] leading-[26px] font-sans
  text alignment/placement: text-left
  layout: 3-column feature grid + full-width dispatch banner, max-w-[1360px] mx-auto px-6
  padding: py-[80px]
  content:
    - Top Intro:
      - H2: "Quality, Licensed Security at Competitive Rates"
      - Paragraph 1: "KRE Security, LLC delivers comprehensive, professional, and responsive security services that protect the people, property, and operations of every client we serve..."
      - Paragraph 2: "KRE Security, LLC will always be “Your Total Security Professional,” prepared for today's demands and tomorrow's challenges."
    - 3 Columns:
      1. Authority: H3 "License No. 84" — "KRE Security, LLC is a fully licensed and insured agency operating under the strict regulatory standards of the Commonwealth of Pennsylvania."
      2. Experience: H3 "Management Excellence" — "Under new ownership and management since 2016, delivering a modern, responsive approach to traditional law enforcement and private security protection."
      3. Values: H3 "Veteran Supported" — "We are proud to be a Veteran Supported Firm, committed to the discipline, readiness, and integrity learned through military service."
    - Dispatch Highlight Box:
      - Border: `border border-[#CFD5DB] rounded-2xl bg-[#E2E6EA]/60 p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 mt-12`
      - Left details:
        - H2: "24-Hour Emergency Dispatch" (text-[40px] font-display font-bold)
        - Subtext: "Our specialized emergency dispatch center is operational 24/7/365, ensuring immediate coordination for urgent security needs across our service areas."
        - CTA Link: "610-562-0971 ↗" with text-[48px] font-display font-bold text-foreground inline-flex items-center gap-4
      - Right image:
        - Dispatch radio and uniform image (`63861c_968d1a04a06a425891fcc91210106642-mv2-768.webp`) inside tactical framed container with gold corner brackets. Render with NO additional darkening layer.
  images:
    - Match key: `https://kre-security.netlify.app/images/lib/63861c_968d1a04a06a425891fcc91210106642-mv2-768.webp` (606x266 cover)

---

### Section 5: Tactical Advantage (5 Benefits) (`#advantages`)
  source id: advantages
  theme: DARK
  background: bg-dark-background (`rgb(7, 14, 23)`)
  text: text-dark-muted-foreground (`rgb(213, 219, 227)`)
  heading color: text-dark-foreground (`rgb(250, 250, 250)`)
  heading size: text-[40px] font-bold leading-[44px] tracking-[-0.8px] font-display
  heading transform/tracking: normal-case, tracking-[-0.8px]
  body size: text-[16px] leading-[25.6px] font-sans
  text alignment/placement: text-left
  layout: 2-column grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-[1360px] mx-auto px-6
  padding: py-[80px]
  content:
    - Eyebrow: "• TACTICAL ADVANTAGE"
    - H2: "5 Benefits of Hiring a Security Company"
    - Left Column (col-span-7):
      - 5 Numbered Benefit Cards:
        1. 01 Sense of Security: "Even just the presence of a security guard can make a business more effective and efficient by giving the owners and employees peace of mind."
        2. 02 Prevention: "A thief will think twice when there is a security guard present. It lets them know that you are serious about the security of your business and will deter them from targeting you."
        3. 03 Customer Service: "Not only does a sense of security put your employees at ease but also your customers."
        4. 04 Handling Crime: "Having a security guard will deter crime in your business but it may still happen; having security measures in place will allow police to solve a crime quickly and get you back to business in no time!"
        5. 05 Monitoring: "Take this responsibility off of your shoulders and leave your business security to a professional security guard company."
    - Right Column (col-span-5):
      - Tactical Frame with Guards Photo:
        - Image: `The-Buck-photo-320.webp` with `filter: brightness(0.75) grayscale(1)` and gradient overlay: `linear-gradient(to top in oklab, rgb(7, 14, 23) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)` (opacity: 0.6)
        - In-card badge: "FIELD OPERATIONS / Protection Excellence"
        - Stat Badges below photo:
          - "24/7 Readiness" (border-2 border-primary)
          - "100% Compliance" (border-2 border-primary)
  images:
    - Match key: `https://kre-security.netlify.app/images/lib/The-Buck-photo-320.webp` (711x889 cover)

---

### Section 6: Regional Coverage (`#coverage`)
  source id: coverage
  theme: LIGHT
  background: bg-background (`rgb(247, 247, 247)`)
  text: text-muted-foreground (`rgb(104, 111, 125)`)
  heading color: text-foreground (`rgb(10, 18, 31)`)
  heading size: text-[40px] font-bold leading-[44px] tracking-[-0.8px] font-display
  heading transform/tracking: normal-case, tracking-[-0.8px]
  body size: text-[16px] leading-[24px] font-sans
  text alignment/placement: text-left
  layout: 2-column layout (County listings + Hotline sidebar map), max-w-[1360px] mx-auto px-6
  padding: py-[80px]
  content:
    - Header:
      - Eyebrow: "• REGIONAL COVERAGE"
      - H2: "Major Cities Covered By KRE Security LLC."
      - Paragraph: "Our PA security company provides qualified law enforcement and investigative services across 22+ counties, ensuring professional protection in the following key regions."
      - Button CTA: "VIEW SERVICE AREA MAP" (`border-2 border-foreground text-foreground font-display font-bold uppercase tracking-[0.64px] px-8 py-3 rounded-none hover:bg-foreground hover:text-white transition-colors`)
    - Left / Grid Area (20+ Counties):
      - Berks County (Hamburg, Reading, Wyomissing, Boyertown, Kutztown, Temple, Leesport, Boyertown, Wernersville)
      - Bucks County (Levittown, Quakertown, Doylestown)
      - Carbon County (Jim Thorpe, Lehighton, Nesquehoning)
      - Chester County (West Chester, Phoenixville, Downingtown, Coatesville, Kennett Square)
      - Cumberland County (Carlisle)
      - Dauphin County (Harrisburg, Hershey, Colonial Park, Middletown)
      - Erie County (Erie)
      - Franklin County (Fannettsburg)
      - Juniata County (Port Royal, Mifflintown)
      - Lancaster County (Lancaster, Ephrata, Elizabethtown, Lititz, Columbia, New Holland, Ephrata)
      - Lebanon County (Lebanon, Palmyra, Annville, Hershey)
      - Lehigh County (Allentown, Bethlehem, Emmaus, Whitehall, Fogelsville)
      - Luzerne County (Wilkes-Barre)
      - Monroe County (Kunkletown, East Stroudsburg)
      - Montgomery County (Norristown, Pottstown, King of Prussia, Lansdale, Willow Grove)
      - Northampton County (Easton, Northampton, Palmer)
      - Northumberland County (Sunbury, Shamokin, Elysburg)
      - Perry County (Newport)
      - Philadelphia County (Center City and Surrounding City Limits)
      - Schuylkill County (Pottsville, Tamaqua, Minersville, Shenandoah, Cressona, Deer Lake, Port Carbon, Schuylkill Haven)
      - Union County (Lewisburg)
      - Wayne County (Honesdale)
    - Right / Hotline Box:
      - Map Graphic: `39725c_7c8af4347a884406b3e0eb9384b1e510-mv2-1024.webp`
      - Title: "REGIONAL HOTLINES"
      - Allentown / Bethlehem / Easton: `610-562-0971`
      - Lancaster / Lebanon: `717-450-7632`
      - Reading / Pottstown: `610-223-3714`
      - Schuylkill County: `570-399-1010`
      - Harrisburg: `717-480-2961`
      - Badge: "Coverage 22+ Counties"
  images:
    - Match key: `https://kre-security.netlify.app/images/lib/39725c_7c8af4347a884406b3e0eb9384b1e510-mv2-1024.webp` (334x176 contain)

---

### Section 7: Dispatch Portal & Quote Form (`#contact`)
  source id: contact
  theme: DARK
  background: bg-dark-background (`rgb(7, 14, 23)`)
  text: text-dark-muted-foreground (`rgb(213, 219, 227)`)
  heading color: text-dark-foreground (`rgb(250, 250, 250)`)
  heading size: text-[40px] font-bold leading-[44px] tracking-[-0.8px] font-display
  heading transform/tracking: normal-case, tracking-[-0.8px]
  body size: text-[16px] leading-[24px] font-sans
  text alignment/placement: text-left
  layout: 2-column grid inside framed panel (`bg-[#101E2D] border border-white/10 rounded-2xl p-8 lg:p-16 max-w-[1360px] mx-auto px-6`)
  padding: py-[80px]
  content:
    - Left Column:
      - Eyebrow: "• DISPATCH PORTAL"
      - H2: "Contact Us Today for a Security Service Quote"
      - Paragraph: "Professional protection begins with a tailored assessment. Connect with our regional headquarters to discuss your security requirements."
      - Contact Blocks:
        - Emergency Dispatch: `610-562-0971` (phone icon in gold square)
        - Main Office: 16600 Pottsville Pike, Hamburg, PA 19526 | 610-562-0971
        - Harrisburg Regional Office: 3405 North 6th Street, Suite 204, Harrisburg, PA 17110 | 717-480-2961
        - Email Us:
          - General: `jemes@kresecurity.com`
          - Billing: `financial@kresecurity.com`
          - Scheduling: `scheduling@kresecurity.com`
    - Right Column (Form):
      - First Name * (text input, required, dark background `bg-[#070e17] border border-[#202C3C] rounded-lg p-3 text-white`)
      - Last Name (text input)
      - Email * (email input, required)
      - Message (textarea, 4 rows)
      - Submit Button: "SUBMIT REQUEST" (`bg-primary text-primary-foreground font-display font-bold uppercase tracking-[3.2px] py-4 px-8 rounded-lg hover:bg-primary-hover transition-colors w-full`)

---

## 5. Favicon

Call `process_favicon_image({ imageUrl: "https://kre-security.netlify.app/images/kre-security-gold-logo.webp" })`.

---

## 6. Footer

Style: bg-dark-background (`rgb(7, 14, 23)`) border-t border-dark-border
Text color: text-dark-muted-foreground (`rgb(213, 219, 227)`)
Columns: 12-column grid layout
Content alignment: text-left, justify-start

Structure:
- Column 1 (Brand):
  - Gold cross logo + "KRE SECURITY LLC." (text-xl font-bold font-display text-white)
  - Description: "KRE Security provides armed and unarmed guards, patrols, investigations, and training across Pennsylvania. Contact our Hamburg team for 24-hour support."
  - Social Links:
    - Facebook Main: `https://www.facebook.com/KRE-Security-LLC-105764734683407`
    - Facebook Investigations: `https://www.facebook.com/KREsecinvestigations/`
- Column 2 (Main Office & Regional Lines):
  - Heading: "Main Office" (text-primary font-display font-bold text-sm uppercase)
  - Address: 16600 Pottsville Pike, Hamburg, PA 19526
  - Phone Lines:
    - Main: `610-562-0971`
    - Lancaster/Lebanon: `717-450-7632`
    - Schuylkill: `570-399-1010`
    - Harrisburg: `717-480-2961`
- Column 3 (Quick Links):
  - Heading: "Quick Links" (text-primary font-display font-bold text-sm uppercase)
  - Links: Home, About, Services, Employment, Contact, Blog, Sitemap
- Full-width row (Proud Member & Supporter):
  - Heading: "Proud Member & Supporter"
  - Links list: ISNetworld, NASRO, Greater Reading Chamber Alliance, Northeast Berks Chamber, PA State Association of County Fairs, Harrisburg Regional Chamber & CREDC, PALI, Alvernia University, National Eagle Scout Association
- Bottom Copyright bar:
  - "© 2026 KRE Security LLC.. License No. 84. Veteran Supported Firm."
  - "Serving 22+ Counties in Pennsylvania"
  - Credit: "Web Design and SEO by twalkerco" (`https://twalkerco.com/`)

---

## 7. Files

MODIFY:
- `src/components/Navigation.astro`
- `src/components/Footer.astro`
- `src/layouts/BaseLayout.astro`
- `src/styles/global.css`
- `src/data/site.ts`
- `src/pages/index.astro`

CREATE:
- `src/components/home/Hero.astro`
- `src/components/home/StatsStrip.astro`
- `src/components/home/ServicesPortfolio.astro`
- `src/components/home/TrustAuthority.astro`
- `src/components/home/TacticalAdvantages.astro`
- `src/components/home/RegionalCoverage.astro`
- `src/components/home/ContactDispatch.astro`
## Element inventory (extracted — reproduce ALL of these)

Machine-generated from the capture, not prose. Every icon listed below is
present in the source and in that section's ported `html` in
`index.sections.json`. Render each one: copy its `<svg>` from the ported
markup verbatim (keeping its `viewBox` and path data), size it to the
measured box, and paint it with the captured fill — `fill="none"` on an
icon that has a fill leaves it invisible. If a section below lists icons
and your component has none, the component is incomplete.

### Site header / navigation (port into Navigation.astro)
- `viewBox="0 0 24 24"` — 12x12px, fill `inherit` — inline affordance (arrow/chevron)
- `viewBox="0 0 24 24"` — size not captured, fill `inherit`
### "Your Total Security Professional"
- `viewBox="0 0 24 24"` — 24x24px, fill `inherit` — inline affordance (arrow/chevron)
### Quality, Licensed Security at Competitive Rates
- `viewBox="0 0 24 24"` — 24x24px, fill `inherit` — inline affordance (arrow/chevron)
### Contact Us Today for a Security Service Quote
- `viewBox="0 0 24 24"` — 20x20px, fill `inherit` — inline affordance (arrow/chevron)
### Site footer (port into Footer.astro)
- `viewBox="0 0 24 24"` — 24x24px, fill `rgb(250, 250, 250)` — inline affordance (arrow/chevron)
