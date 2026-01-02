# LEGACY SYSTEM ARCHITECTURE & VISUAL PROTOCOLS
> **Project Code**: DELTAFLOW
> **Version**: 2.0 (Cosmic Intelligence)
> **Classification**: TOP SECRET // DESIGN MANUAL

---

## TABLE OF CONTENTS

1.  **01. CORE PHILOSOPHY & VISUAL LANGUAGE**
    *   1.1 The "Cosmic Intelligence" Aesthetic
    *   1.2 Design Pillars (Weight, Light, Depth)
    *   1.3 The Void Strategy

2.  **02. TECHNOLOGY STACK ARCHITECTURE**
    *   2.1 Framework Core (Next.js 15)
    *   2.2 The Physics Engine (Framer Motion 12)
    *   2.3 The Inertia System (Lenis)
    *   2.4 Utility Engine (Tailwind CSS 4)

3.  **03. GLOBAL DESIGN SYSTEM**
    *   3.1 Color Palette & Hex Codes
    *   3.2 Typography & Scale (Geist)
    *   3.3 Glassmorphism V2 Protocols
    *   3.4 Lighting & Shadows
    *   3.5 Iconography & Holograms

4.  **04. ANIMATION PHYSICS & CURVES**
    *   4.1 Global Smooth Scroll Configuration
    *   4.2 The "Apple" Spring Curve
    *   4.3 Reveal Timing & Stagger
    *   4.4 Parallax Coefficients

5.  **05. COMPONENT LIBRARY (DEEP DIVE)**
    *   5.1 Primary Buttons (Magnetic & Gradient)
    *   5.2 The "Cosmic Card" (Border, Glow, Noise)
    *   5.3 Navigation Bars (Fluidity & Blur)
    *   5.4 Form Inputs (Active States)

6.  **06. PAGE ARCHITECTURE: HOME ("THE COMMAND DECK")**
    *   6.1 Hero Section: Canvas Starfield Logic
    *   6.2 The "Systems Online" Badge
    *   6.3 Infinite Marquees (Velocity Math)
    *   6.4 Bento Grid Layouts

7.  **07. PAGE ARCHITECTURE: SERVICES ("THE HOLOGRAPHIC DECK")**
    *   7.1 Sticky Horizontal Scroll Explained
    *   7.2 3D Icon Rotation Loops
    *   7.3 Layout Calculations

8.  **08. PAGE ARCHITECTURE: WORK ("THE COSMIC BENTO")**
    *   8.1 Asymmetric Grid Pattern
    *   8.2 Mouse-Tracking Spotlight Shader
    *   8.3 Hover Reveal Dynamics
    *   8.4 Custom Cursor Logic

9.  **09. PAGE ARCHITECTURE: PROCESS ("THE GOLDEN HELIX")**
    *   9.1 3D CSS Transformations
    *   9.2 Scroll-Linked Path Drawing
    *   9.3 The Amber Glow System

10. **10. PAGE ARCHITECTURE: ABOUT ("THE ORIGIN STORY")**
    *   10.1 Sticky Stacking Cards
    *   10.2 Image Cross-Fades
    *   10.3 Digital HUD Stats

11. **11. PAGE ARCHITECTURE: CONTACT ("THE LAUNCH")**
    *   11.1 Starfield Warp Speed Math
    *   11.2 Magnetic Button Physics
    *   11.3 Success State Transitions

12. **12. RECREATION & MAINTENANCE GUIDE**
    *   12.1 Adding New Projects
    *   12.2 Tuning Animation Speeds
    *   12.3 Asset Generation Prompts

---

## 01. CORE PHILOSOPHY & VISUAL LANGUAGE

### 1.1 The "Cosmic Intelligence" Aesthetic
The DeltaFlow website is not designed as a standard corporate brochure. It is conceptually engineered as a **futuristic command center** floating in deep space. 
*   **The Metaphor**: The user is a commander navigating a high-tech interface to deploy intelligence.
*   **The Feeling**: Cold, precise, powerful, and expensive.
*   **The Era**: Near-future (2030s). Not "sci-fi" in a fantasy sense, but "hard sci-fi" in a NASA/SpaceX sense.

### 1.2 Design Pillars

#### A. Weight (Inertia)
Nothing moves instantly. Every interaction, scroll, and hover has "mass."
*   **Implementation**: This is achieved primarily through `Lenis` smooth scrolling (high duration) and Framer Motion spring physics with high damping.
*   **Why**: Weight conveys quality. Cheap things rattle; expensive things glide.

#### B. Light (Bioluminescence)
In the void of space (black background), light is the only hierarchy.
*   **Implementation**: We do not use "borders" in the traditional sense. We use "light leaks" and "glows."
*   **Rule**: Active elements must emit light. Inactive elements recede into shadow.

#### C. Depth (Z-Axis)
The interface is not flat. It has endless depth towards the stars.
*   **Implementation**: Multiple layers of `z-index`.
    *   Layer 1 (Deepest): Starfields/Canvas Particles.
    *   Layer 2: Ambient Blobs (blurred 150px+).
    *   Layer 3: Grid Overlays (opacity 0.05).
    *   Layer 4: Glass Cards (backdrop-blur).
    *   Layer 5 (Highest): Text and Bloom.

### 1.3 The Void Strategy
*   **Background**: Pure `#000000` (Hex Black).
*   **Why Not Dark Gray?**: OLED screens turn off pixels at pure black. Using pure black makes the device boundary disappear, making the interface feel like it's floating in the room.

---

## 02. TECHNOLOGY STACK ARCHITECTURE

To recreate this site, you must strictly adhere to this stack. Deviating (e.g., using standard CSS transitions) will break the physics model.

### 2.1 Framework Core: Next.js 15 (App Router)
*   **Rendering Strategy**: Server Components (RSC) by default for all static content.
*   **Client Components**: Only "leaf" nodes (buttons, interactive cards) are marked `"use client"`.
*   **Routing**: Standard directory-based routing (`src/app/page.tsx`).

### 2.2 The Physics Engine: Framer Motion 12
*   **Role**: The "Muscle" of the site.
*   **Usage**: 95% of DOM mutations happen via `motion.div`.
*   **Key Hooks**:
    *   `useScroll`: Monitors scroll position (0 to 1).
    *   `useTransform`: Maps scroll position to CSS values (e.g., `[0, 1] => ["0deg", "180deg"]`).
    *   `useSpring`: Adds physics to raw values to prevent jitter.
    *   `useMotionTemplate`: For complex string interpolations (e.g., gradients).

### 2.3 The Inertia System: Lenis (@studio-freight/lenis)
*   **Role**: The "Gravity" of the site.
*   **Configuration** (Critical):
    ```javascript
    const lenis = new Lenis({
      duration: 1.5,       // High duration for "heavy" feel
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing (smooth start/stop)
      wheelMultiplier: 0.5, // Halves the scroll speed for precision
      touchMultiplier: 1.5, // Standardizes touch
      syncTouch: true       // Fixes desync on iOS
    })
    ```
*   **Why**: Browser native scrolling is 1:1. It feels "light" and "digital." Lenis interpolates the scroll position, adding a "flywheel" effect.

### 2.4 Utility Engine: Tailwind CSS 4
*   **Role**: The "Skin."
*   **Config**: Custom color variables in `globals.css` hooked into Tailwind's `@theme` directive.

---

## 03. GLOBAL DESIGN SYSTEM

### 3.1 Color Palette & Hex Codes

| Name | Variable | Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| **Void Black** | `--background` | `#000000` | Main Background |
| **Delta Green** | `--color-brand-green` | `#22c55e` | Primary Actions, Success, "Online" Status |
| **Hologram Blue** | `--color-blue-400` | `#60a5fa` | Secondary Accents, Glass Text |
| **Deep Indigo** | `--color-indigo-900` | `#312e81` | Deep Ambient Glows |
| **Starlight** | `--foreground` | `#ffffff` | Primary Headings |
| **Moon Dust** | `--color-gray-400` | `#a3a3a3` | Body Text, Secondary Info |
| **Glass Border** | N/A | `rgba(255,255,255,0.1)` | Card Borders |

### 3.2 Typography & Scale (Geist)
*   **Family**: `Geist Sans` (Vercel).
*   **Characteristics**: Geometric, high legibility, "Swiss International" style.
*   **Mono**: `Geist Mono` for all data, charts, numbers, and tags.
*   **Scale**:
    *   `text-7xl` to `text-9xl`: Hero Headlines (Tracking `-0.05em`).
    *   `text-xl` (Light): Body copy.
    *   `text-xs` (Mono, Uppercase, Tracking `0.2em`): Labels and badges.

### 3.3 Glassmorphism V2 Protocols
Standard glassmorphism (`backdrop-filter`) is effectively "frosted glass." We use **"Holographic Glass"**.
*   **Recipe**:
    1.  **Base**: `bg-white/[0.03]` (Extremely transparent).
    2.  **Blur**: `backdrop-blur-md` (Medium blur, preserving background forms).
    3.  **Border**: `border border-white/10` (Subtle definition).
    4.  **Noise**: Optional usage of grain texture.
    5.  **Highlight**: A linear gradient overlay from `white/5` to `transparent` (top-left to bottom-right).

### 3.4 Lighting & Shadows
*   **Ambient Glow**: Large, colored `div` elements with `blur-[120px]` placed behind content.
*   **Focus Glow**: Active inputs/cards get `shadow-[0_0_30px_rgba(34,197,94,0.3)]` (Green glow).

---

## 04. ANIMATION PHYSICS & CURVES

### 4.1 Global Smooth Scroll Configuration
See Section 2.3 for code. The philosophy is **"Linear Interpolation with Cubic Easing."**
*   **Friction**: The scroll bar "drags" the viewport.
*   **Stop**: It doesn't stop instantly; it settles.

### 4.2 The "Apple" Spring Curve
For UI elements (modals, reveal animations), we use a specific spring configuration that mimics iOS physics:
*   **Config**: `transition={{ type: "spring", stiffness: 300, damping: 30 }}`.
*   **Feel**: Snappy but elastic. No "bouncing" (damping is high enough to arrest oscillation), but energetic.

### 4.3 Reveal Timing & Stagger
*   **Rule**: Nothing appears at once.
*   **Stagger**: `0.1s` delay between list items.
*   **Direction**: Always `y: 20` -> `y: 0` (Upwards drift).
*   **Opacity**: `0` -> `1`.

### 4.4 Parallax Coefficients
*   **Backgrounds**: Move at `0.5x` speed of scroll.
*   **Foregrounds**: Move at `1.2x` speed of scroll.
*   **Text**: Moves at `1.0x` (Locked).

---

## 05. COMPONENT LIBRARY (DEEP DIVE)

### 5.1 Primary Buttons
*   **Structure**: Custom `Button` component using `cva` (Class Variance Authority).
*   **Physics**: "Magnetic Hover."
    *   While not strictly implemented with JS magnetism in the current build, purely CSS magnetism is achieved via scaling.
*   **Gradient**: The main CTA uses a "Shimmer" effect.
    *   `bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]`
    *   `background-size: 200% 100%`
    *   Animation: Move background position infinitely.

### 5.2 The "Cosmic Card"
Used in Features, Services, and Bento Grids.
*   **State: Idle**: `border-white/10`, `bg-white/5`.
*   **State: Hover**: `border-brand-green/50`, `scale-[1.02]`.
*   **Inner Glow**: A radial gradient `div` that fades in on hover (`opacity-0` -> `opacity-100`).

### 5.3 Form Inputs (CosmicInput)
*   **Design**: Underlined style only (`border-b`). No boxes.
*   **Focus**: The bottom border turns from `white/10` to `blue-500`.
*   **Label**: Mono font, uppercase, tracking `widest`.

---

## 06. PAGE ARCHITECTURE: HOME ("THE COMMAND DECK")

### 6.1 Hero Section: Canvas Starfield Logic
The background is a custom React component `<StarField />` rendering a `<canvas>`.
*   **Particle Class**:
    *   `x, y, z`: 3D coordinates.
    *   `opacity`: Derived from Z-depth.
*   **Loop**: `requestAnimationFrame` running at 60Hz.
*   **Math**:
    *   `z -= speed` (Stars move towards screen).
    *   `if (z <= 0) z = 1000` (Reset to back).
    *   **Projection**: `px = (x * 128) / z + center_x`. This is the standard perspective projection formula.

### 6.2 The "Systems Online" Badge
*   **Element**: `span.animate-pulse`.
*   **Color**: `bg-green-500`.
*   **Purpose**: Immediate visual feedback that the site is "live."

### 6.3 Infinite Marquees
*   **Technique**: Two identical sets of logos/text.
*   **CSS Animation**: `translateX(0)` -> `translateX(-50%)` linearly.
*   **Duration**: `40s` (Slow).
*   **Mask**: `mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent)`. This fades the edges so logos don't "pop" in/out.

### 6.4 Bento Grid Layouts
*   **Grid**: CSS Grid `grid-cols-3` with `auto-rows-[450px]`.
*   **Spanning**: Every 1st and 4th item gets `col-span-2`.
*   **Visual Rhythm**: Wide -> Narrow -> Narrow -> Wide.

---

## 07. PAGE ARCHITECTURE: SERVICES ("THE HOLOGRAPHIC DECK")

### 7.1 Sticky Horizontal Scroll Explained
This is a complex UX pattern found on the Services page.
*   **Container**: `h-[300vh]` (3x viewport height).
*   **Sticky Wrapper**: `sticky top-0 h-screen overflow-hidden`.
*   **Transforms**:
    *   We map vertical scroll `[0, 1]` of the container to horizontal transform `["0%", "-66%"]`.
*   **Result**: As user scrolls DOWN, the content moves LEFT.

### 7.2 3D Icon Rotation Loops
*   **Icons**: Lucide icons (Cpu, Network, Brain).
*   **Animation**:
    ```javascript
    animate={{ rotateY: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    ```
*   **Effect**: Slow, perpetual holographic spin.

---

## 08. PAGE ARCHITECTURE: WORK ("THE COSMIC BENTO")

### 8.1 Mouse-Tracking Spotlight Shader
The most advanced shader on the site (`BentoCard.tsx`).
*   **Variables**: `mouseX`, `mouseY` (Framer Motion values).
*   **Event Listener**: `onMouseMove` updates these values relative to `currentTarget.getBoundingClientRect`.
*   **Input**:
    ```javascript
    useMotionTemplate`
      radial-gradient(
        650px circle at ${mouseX}px ${mouseY}px,
        rgba(59, 130, 246, 0.15),
        transparent 80%
      )
    `
    ```
*   **Result**: A "flashlight" effect that follows the cursor *inside* the card, revealing the border and subtle texture.

### 8.2 Hover Reveal Dynamics
*   **Image**:
    *   Default: `opacity: 0.6`, `grayscale: 50%`.
    *   Hover: `opacity: 0.5` (slightly dimmer to show text), `grayscale: 0%`.
    *   Scale: `scale(1.05)` (Zoom).
*   **Text**:
    *   Default: `text-white`.
    *   Hover: Title becomes `text-blue-100`.

### 8.3 Custom Cursor Logic
*   **Element**: Fixed `div`, `mix-blend-mode: difference`, `pointer-events-none`.
*   **Movement**: Tracks window `clientX/Y`.
*   **State**: When hovering a project link, the cursor scales up (`scale(3)`) and opacity drops (`opacity-20`), acting as a "lens."

---

## 09. PAGE ARCHITECTURE: PROCESS ("THE GOLDEN HELIX")

### 9.1 3D CSS Transformations
*   **Perspective**: Container has `perspective-[1000px]`.
*   **Rotation**:
    *   Scroll progress maps to `rotateX` (tilt) and `rotateY` (spin).
    *   Items rotate *into* view from `45deg` to `0deg`.

### 9.2 Scroll-Linked Path Drawing
*   **The Beam**: A central `div` (`w-[2px]`).
*   **Fill**: `height` is controlled by `useScroll` progress.
*   **Color**: `bg-gradient-to-b from-amber-400`.
*   **Effect**: A laser beam draws the path down the screen as you read.

### 9.3 The Amber Glow System
*   **Palette Change**: Unlike the rest of the site (Blue/Green), this page uses Amber/Gold (`#fbbf24`).
*   **Why**: Gold signifies "Value," "Refinement," and "Alchemy" (Turning data into gold).

---

## 10. PAGE ARCHITECTURE: ABOUT ("THE ORIGIN STORY")

### 10.1 Sticky Stacking Cards
*   **Concept**: A deck of cards.
*   **Logic**:
    *   Each card is a `sticky` container.
    *   `top` offset increases by `10px` per card.
    *   As new cards arrive, previous cards `scale` down to `0.8` and fade to black.
*   **Result**: A "time-travel" effect where the past recedes into the background.

### 10.2 Image Cross-Fades
*   **Component**: `AnimatePresence`.
*   **Trigger**: Based on the active index of the sticky card.
*   **Transition**: `opacity: 0` -> `1` over `1s`.

---

## 11. PAGE ARCHITECTURE: CONTACT ("THE LAUNCH")

### 11.1 Starfield Warp Speed Math
*   **Component**: Same `StarField` but configured differently?
    *   Actually, the current implementation reuses the specific `StarField` component, but the context (Contact Page) implies "initiation" or "launch."
    *   The stars allow users to feel like they are "sending" a transmission into the deep network.

### 11.2 Magnetic Button Physics (Form Submit)
*   **Button**: "Initiate Launch."
*   **State Machine**:
    1.  **Idle**: Gradient border.
    2.  **Submitting**: Text disappears, Spinner appears (`animate-spin`).
    3.  **Success**: Button transforms into a full-screen Success Card.

### 11.3 Success State Transitions
*   **Logic**: Conditional rendering.
*   **Animation**: The form unmounts (`exit={{ opacity: 0 }}`) and the Success Message mounts (`enter={{ scale: 0.9 -> 1 }}`).

---

## 12. RECREATION & MAINTENANCE GUIDE

### 12.1 Adding New Projects
To add a project to the "Cosmic Bento":
1.  Open `src/lib/data.js`.
2.  Add a new object to the `portfolio` array.
3.  **Required Fields**:
    *   `id`: Unique slug.
    *   `title`: 3-5 words.
    *   `industry`: Determines the pill color.
    *   `image`: Reference a PNG in `public/images/portfolio`.
    *   `technologies`: Array of strings (icons map automatically).

### 12.2 Tuning Animation Speeds
If the client (you) wants faster/slower scroll:
1.  Open `src/components/animations/SmoothScroll.tsx`.
2.  Modify `duration`:
    *   `1.2`: Standard "Premium".
    *   `1.5`: Current "Heavy".
    *   `2.0+`: Cinematic/Slow-motion.
3.  Modify `wheelMultiplier`:
    *   `1.0`: 1:1 Scroll.
    *   `0.5`: Half sensitivity (recommended).

### 12.3 Asset Generation Prompts
To generate consistent imagery using AI (Midjourney/DALL-E):
*   **Keyword String**: "Futuristic, Glassmorphism, UI Interface, Data Visualization, Neon Blue and Green, Dark Mode, 8k Resolution, Unreal Engine 5 render, isometric view."
*   **Forbidden**: "White backgrounds, cartoons, low poly."

---
**END OF MANUAL**
**DELTAFLOW // SYSTEM OFFLINE**
