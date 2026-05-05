# Looped – Prototype Setup (Steps 1 & 2)

This document defines the initial engineering scaffold and navigation skeleton for the **Looped** browser-based interaction design prototype.

This phase is intentionally focused on **structure, clarity, and iteration**, while UX design is still being finalised by the UX lead.

The prototype is:
- Demo-level (not production code)
- Designed to run locally in a browser on macOS
- Built using plain HTML, CSS, and JavaScript

---

## STEP 1 – Global App Structure & Setup

### Overall Goal

Create a simple, readable, and extensible project structure that:
- Supports rapid iteration
- Keeps responsibilities clearly separated
- Allows UX design to evolve independently of implementation

No JavaScript frameworks or build tools are required at this stage.

---

### Folder Structure

```
/looped-prototype
  index.html
  styles.css
  app.js
  /views
    lyrics.html
    clips.html
    record.html
    sections.html
    song.html
  /assets
    /icons
      (icons will be added later)
```

---

### File Responsibilities

#### index.html
- Main entry point for the prototype
- Contains:
  - Top navigation container
  - Main content container
  - Bottom navigation container
- Loads `styles.css` and `app.js`

#### styles.css
- Contains all styling rules
- Uses a mobile-first approach
- Focuses on layout, spacing, and visual states
- Avoids heavy animations for now

#### app.js
- Handles:
  - Bottom navigation click events
  - Active state management
  - Loading view content into the main area
- Logic should be:
  - Simple
  - Clearly commented
  - Easy to extend later

#### /views/*.html
- One file per main navigation section
- Each file contains **only** the markup for that section’s content
- No scripts or shared layout elements inside view files

---

### Global Layout Requirements

- App is constrained to a phone-like width (mobile-first)
- Vertical layout structure:
  1. Top navigation bar
  2. Main content area
  3. Fixed bottom navigation bar
- Top and bottom navigation are visible on all screens
- Main content swaps dynamically without full page reloads

---

### Top Navigation (Global)

- Visible on all screens
- Contains:
  - App name or logo (left or centre aligned)
  - Export icon on the right

#### Export Icon Behaviour
- Export icon is clickable
- Does **not** perform real export functionality
- Triggers a placeholder action such as:
  - Modal
  - Tooltip
  - Alert message
- Communicates intended future capability (e.g. export song, share, save)

---

## STEP 2 – Bottom Navigation Skeleton

### Goal

Implement the core bottom navigation pattern used in modern mobile apps (e.g. Instagram, TikTok, WhatsApp).

This step validates **navigation flow and screen identity only**.

---

### Navigation Items

The bottom navigation contains **five items**, evenly spaced:

1. Lyrics
2. Clips
3. Record
4. Sections
5. Song

#### Icons
- Icons will be supplied later
- For now, use:
  - Text labels, or
  - Simple placeholder icons or shapes

---

### Visual Requirements

- Bottom navigation is fixed to the bottom of the viewport
- Clear distinction between:
  - Active navigation item
  - Inactive navigation items
- Touch-friendly sizing for mobile interaction
- Clean, neutral aesthetic

---

### Behaviour Requirements

- Clicking a navigation item:
  - Sets that item as the active state
  - Loads the corresponding view into the main content area
- No full page reloads
- Implement with basic JavaScript only (e.g. `fetch` + `innerHTML`)
- No routing libraries or frameworks

---

### Placeholder Content for Views

Each view file (`lyrics.html`, `clips.html`, `record.html`, `sections.html`, `song.html`) should initially contain:

- A large heading with the section name
- One short line of placeholder text, for example:

  > “This is the Lyrics screen (placeholder)”

The purpose is to confirm:
- Correct navigation
- Correct screen identification

---

### Explicit Non‑Goals for This Phase

- No real audio recording
- No data storage or persistence
- No advanced animations or transitions
- No export logic

**Clarity, structure, and extensibility take priority over completeness.**
