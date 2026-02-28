# Design System: Indu Dental
**Project ID:** 1

## 1. Visual Theme & Atmosphere
Clean, minimalist, and highly professional. The atmosphere should evoke trust, hygiene, and modern healthcare. The UI should feel airy with generous whitespace, crisp typography, and high-quality photography. Avoid clutter.

## 2. Color Palette & Roles
* **Clinical White** (`#FFFFFF`): Primary background color. Ensures a clean, sanitary look.
* **Trust Blue** (`#0056B3`): Primary brand color used for key actions, buttons, and important highlights.
* **Soothing Teal** (`#20B2AA`): Secondary accent color for softer elements, secondary buttons, or decorative shapes.
* **Slate Gray** (`#333333`): Primary text color for high readability without the starkness of pure black.
* **Soft Gray** (`#F8F9FA`): Secondary background color for alternating sections or subtle card backgrounds.
* **WhatsApp Green** (`#25D366`): Reserved strictly for WhatsApp integration elements.

## 3. Typography Rules
* **Primary Font:** Inter or Outfit. (San-serif, modern, clean).
* **Headings:** Bold and commanding, but not overly heavy. Use `font-bold` and slightly tighter letter spacing for large headers.
* **Body Text:** highly readable, `text-base` to `text-lg` with comfortable line height (`leading-relaxed`).

## 4. Component Stylings
* **Buttons:** Gently rounded edges (`rounded-md` or `rounded-lg`). Solid background with `Trust Blue` or `Soothing Teal` for primary actions. Subtle hover state (slight opacity change or slight elevation).
* **Cards/Containers:** Soft Gray backgrounds or Clinical White with very subtle, diffuse shadows (`shadow-sm` or `shadow-md`). `rounded-xl` or `rounded-2xl` for a modern, friendly feel.
* **Navigation:** Clean, sticky top nav. Transparent to solid white on scroll. Minimalist links with subtle underline or color change on hover.
* **Floating Action Button (WhatsApp):** Circular (`rounded-full`), fixed to bottom right, using `WhatsApp Green`, with a subtle drop shadow and a pulse animation if possible.

## 5. Layout Principles
* **Whitespace:** Generous padding and margins between sections (`py-16` or `py-24`).
* **Grid:** Standard container width (`max-w-7xl`). Use standard CSS Grid or Flexbox for alignments. Elements should feel intentionally placed and balanced.
* **Mobile-First:** Ensure all layouts gracefully stack on smaller screens.
