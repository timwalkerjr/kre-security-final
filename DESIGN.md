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