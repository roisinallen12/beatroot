# build-log.md

This file records what actually happens during the build.

Use it to keep the project accurate when the original plan changes.

---

## Current Phase  
Phase 2 — Core Logic

## Current Increment  
2.6 — Clips Preview Logic (complete)

## Completed  
- 1.1 — App Shell
- 1.2 — View Loading
- 1.3 — Navigation State
- 2.4 — Bookmark Logic
- 2.5 — Clip Creation on Stop
- 2.6 — Clips Preview Logic

## Decisions Made  
- Treat Increment 1.1, 1.2, and 1.3 as already implemented (no rollback).

## Deviations From Plan  
- None yet

## Bugs / Issues Found  
- None yet

## Next Step  
- Complete Phase 1.4

---

## Phase 2.4 — Bookmark Logic
- Implemented: Tap-on / tap-off bookmarking during recording.
- Behaviours:
  - First tap starts a bookmark, second tap ends it.
  - Only one active bookmark at a time.
  - If recording stops while a bookmark is open, it is auto-closed.
  - Active and completed bookmarks appear on the waveform as green-tinted bars with start/end markers that scroll with the waveform.
  - Bookmark count shows as a small green badge on the Clips tab.
- Decisions:
  - Bookmarks stored as time ranges, not pixel positions.
  - A diagnostic flag was left in place for future debugging.

## Phase 2.5 — Clip Creation on Stop
- Implemented: Turning a recording session into clips when Stop is pressed.
- Behaviours:
  - Always creates one full recording clip.
  - Creates one clip per completed bookmark, in chronological order.
  - Newest session appears first; bookmark clips are grouped visually under their full recording (most recent bookmark on top, full recording below).
  - New clips get the NEW tag; older clips lose NEW.
  - Activation rule is stored but not shown yet: 1 clip → active, 2+ clips → all inactive.
  - After stopping, the app navigates to Clips.
- Decisions:
  - Clips remain a flat list; grouping is visual only.
  - Naming: “Full Recording X” when bookmarks exist, otherwise “Recording X”; bookmarks named “Bookmark Y”.
  - No sections, playback, real audio, or Add to Song yet.

## Phase 2.6 — Clips Preview Logic
- Implemented: Inline preview inside the Clips library.
- Behaviours:
  - Tapping a clip expands its preview; tapping again collapses it.
  - Only one preview open at a time.
  - Preview shows the clip name, a simple timeline with a dot and duration, and three controls: Add to Song, Play, Expand.
- Decisions:
  - This is the library preview, not the full Edit Clip screen.
  - All preview controls are visible but inactive in this phase.
