# Design Brief

**Project**: Next-Store (Next.js + shadcn UI + Tailwind)
**Goal**: Renew the entire UI to a modern, refined e-commerce experience that aligns with high-end design aesthetics and strong usability.

---

## 1. Target Style & Inspiration

We draw inspiration from two designs:

- [BeliBeli.com – Ecommerce Web Design](https://dribbble.com/shots/22159545-BeliBeli-com-Ecommerce-Web-Design) — a clean, airy e-commerce layout, bold hero imagery, minimal distractions, generous white space, cards with soft shadows and strong product focus. :contentReference[oaicite:0]{index=0}
- [Fashion Tech Startup Dashboard](https://dribbble.com/shots/26525572-Fashion-Tech-Startup-Dashboard) — a polished, modern dashboard UI with layered cards, soft gradients, neutral background tones, accent colours, and a professional but approachable interface. :contentReference[oaicite:1]{index=1}

### Style keywords

- Modern high-end e-commerce feel
- Clean, spacious layouts with generous padding/margins
- Soft but crisp shadows and smooth elevation transitions
- A strong typographic hierarchy: large hero headings, readable body text, expressive subheads
- Subtle animations/hover states on product cards and interactive elements
- Dark mode support, but with same level of polish
- Colours: primarily neutral background + surface tones, with one strong accent/primary colour for CTAs and interactive elements
- Design tokens (colours, spacing, radius, elevation) to drive consistency across components

---

## 2. Constraints & Technical Foundations

- Use existing **shadcn/ui** component library and Tailwind CSS.
- No new custom CSS frameworks—drive styles via Tailwind utilities + `cva` variants + design tokens.
- Maintain existing component architecture: only refactor styles and variants, **don’t break API** (props/exports) mid-project.
- Responsive across mobile → tablet → desktop. Hero images, grids, cards should adapt.
- Accessibility: All UI must meet WCAG AA standards for colour contrast, keyboard navigation, focus states.
- Dark mode: Implements via the `class="dark"` toggler, and tokens should have dark‐mode counterparts.

---

## 3. Design Token System

### Colours

- **Background / Surface / Border / Text** (neutrals)
- **Primary / Accent**: one dominant colour used across CTAs, links, highlights
- **Muted / Secondary**: secondary interactions, disabled states, subtle elements
- **Error / Success / Warning**: for feedback components (toasts, alerts)
- Provide light-mode and dark-mode variants.

### Radius & Elevation

- Border-radius scale (e.g., `sm`, `lg`, `xl`, `2xl`)
- Shadow/elevation scale (e.g., `shadow-sm`, `shadow-md`, `shadow-lg`) that matches the polished cards from the reference designs.

### Spacing & Typography

- Vertical rhythm: base spacing unit (e.g., 8px or 4px) and scale for medium/large (24px, 32px, 40px) in the reference designs.
- Typographic scale:
  - Hero heading (e.g., 3.5rem)
  - Section heading (e.g., 2.25rem)
  - Subheading (e.g., 1.5rem)
  - Body text (e.g., 1rem)
  - Caption/small (e.g., 0.875rem)
- Font: Use a clean sans-serif (system UI + fallback) as base.

---

## 4. UI Primitives & Component Map

We will refactor or create the following components (all styled via tokens):

- Layout: `Header`, `Footer`, `Nav`, `Container`, `Grid`
- Product: `ProductCard`, `ProductGallery`, `PriceTag`, `Badge`, `RatingStars`, `VariantSelector`, `AddToCartButton`
- Commerce: `CartSheet`, `MiniCart`, `CheckoutSteps`, `EmptyState`
- Feedback: `Toast`, `Alert`, `SkeletonLoader`, `Spinner`
- Form: `Input`, `Select`, `Checkbox`, `Radio`, `Slider`, `Textarea`, `FormField`
- Primitives (shadcn): `Button`, `Card`, `Badge`, `Input`, `Dialog`, `Sheet`, `Tabs`, `Accordion`, `Switch`

### Variant examples

- Button: `primary`, `secondary`, `ghost`, `link`, `destructive`; sizes `sm`, `md`, `lg`, `xl`.
- Card: `productCard`, `promoCard`, `minimalCard`.
- Badge: `default`, `accent`, `outline`, `dot`.

We aim to reuse shadcn’s existing architecture: keep `cva` variant definitions, but update variant styles to use the new token system.

---

## 5. Page Templates & Layout Patterns

### Listing / PLP Page

- Hero banner with strong image billboard.
- Sticky filter column on desktop (left) + responsive product grid (right).
- Product cards with hover effect (scale image slightly + elevate shadow).
- Pagination/infinite scroll.
- Large margin sections for featured categories.

### Product Detail / PDP Page

- Hero product image or carousel.
- Variant selector.
- Price tag emphasised.
- “Add to Cart” CTA prominent (primary).
- Tabbed sections: Description / Specs / Reviews.
- Related products section.

### Cart / Checkout

- Mini-cart accessible from header (sheet or drawer).
- On checkout page: clean two-column layout—summary + form.
- Clear progress indicator for steps.

---

## 6. Metrics & Success Criteria

- Visual coherence: Every component uses tokens, no stray hex or inline styles.
- Performance: Lighthouse score for Performance, Accessibility, Best Practices all ≥ 90 on mobile & desktop.
- Accessibility: Colour contrast ≥ 4.5:1 for text, keyboard navigation works fully.
- Maintainability: UI components remain reusable across screens, with minimal duplication.
- Client impression: The look & feel should match the inspiration references: polished, modern, premium.

---

## 7. Project Plan

1. **Design Tokens Setup** – Update `globals.css` and `tailwind.config.ts` with token system.
2. **Primitive Refactor** – Refactor `components/ui/*` (Button, Card, Badge, etc.) to new tokens.
3. **Product Card & Grid** – Build new `ProductCard` and adjust listing page.
4. **PDP & Cart Flow** – Refactor product detail page, mini-cart & cart sheet, checkout.
5. **Global Touches** – Dark mode switch, responsive tweaks, animation/hover states.
6. **QA & Polish** – Accessibility audit, performance audit, cross-browser/viewport testing.

---

## 8. Notes & Considerations

- Keep your existing data fetching, state logic and backend integrations intact; this is purely a **design layer** refresh.
- Avoid breaking UI/UX flows: inventory, cart logic, variant selections should still work as currently.
- When introducing animations (hover, transitions), they should be subtle and performant (prefer `transform`, `opacity`, not heavy expensive filters).
- Ensure third-party integrations (e.g., payment, analytics) remain visually consistent.

---

By following this brief, we’ll ensure a high-quality redesign that remains grounded in your codebase, keeps technical debt minimal, and gives your e-commerce app the premium look & feel you want.

—
_End of Brief_
