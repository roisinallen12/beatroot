# context.md

## **Implementation Safety Rules**

Before any code is written:

1. The AI must propose changes first  
2. The AI must list affected files  
3. The AI must wait for approval

Never skip this step.

---

## **Audio Safety Rule (CRITICAL)**

Before implementing any change:

The AI must evaluate:

👉 Will this change affect future audio or recording implementation?

If:

* YES  
* POSSIBLY  
* or UNCLEAR

Then the AI must:

* explain the risk clearly  
* ask a question  
* wait for confirmation before proceeding

This prevents breaking Phase 3 later.

---

## **Beginner Explanation Rule**

Assume the user does NOT have strong coding experience.

When explaining:

* use simple language  
* avoid jargon where possible  
* explain what things do, not just how

Keep explanations short but clear.

---

## **Guided Build Rule**

The AI must actively guide the build:

At each step it must:

* state the current increment  
* explain what is happening  
* suggest the next increment after completion

The user should never have to guess what comes next.

## **Spec Usage Rule**

Do NOT read all spec files at once.

For each increment:

1. Identify which screen or feature is being worked on  
2. Load ONLY the relevant spec file(s)

Examples:

* Lyrics work → read lyrics.md  
* Recording work → read recording.md  
* Clips work → read clips.md  
* Sections work → read sections.md  
* Song work → read song.md

If unsure which spec is relevant:

* ask before proceeding

Do NOT:

* reprocess all spec files repeatedly  
* combine unrelated specs  
* guess behaviour without checking the relevant spec

## **UI Accuracy Rule (CRITICAL — Phase 1 Priority)**

During Phase 1 (Frame), the AI must treat the screenshots in the `screens` file as the **primary source of truth for UI layout and visuals**.

### **Requirements**

* The AI MUST reference the `screens` file for the current screen being built  
* The UI must match the screenshot as closely as possible

This includes:

* layout structure  
* spacing between elements  
* alignment  
* sizing and proportions  
* positioning of buttons and text  
* visual hierarchy

---

### **Spacing & Layout Precision (HIGH PRIORITY)**

* Spacing must be visually consistent with the screenshot  
* Do NOT approximate spacing or “eyeball” layout  
* Do NOT rely on assumptions or generic padding values  
* Replicate:  
  * margins  
  * gaps between elements  
  * relative positioning

If exact values are unclear:

* infer them carefully from the screenshot  
* prioritise visual accuracy over convenience

---

### **What NOT to do**

* Do not redesign or “improve” the layout  
* Do not simplify spacing or structure  
* Do not introduce new layout patterns  
* Do not compress or expand UI elements arbitrarily

---

### **Priority Order for Phase 1**

1. Screenshot (`screens` file) → visual truth  
2. Spec → interaction and structure  
3. Everything else → secondary

---

### **Failure Condition**

If the UI does not visually match the screenshot:

* it is considered incorrect  
* even if the logic or structure is correct

---

### **Goal**

The built UI should be **visually indistinguishable from the screenshot at a glance**, especially in spacing, alignment, and layout.

## Looped Prototype — Context

Looped is a songwriting mobile APP for capturing rough musical ideas quickly.

The app helps a songwriter:

* write lyrics  
* record rough audio ideas  
* bookmark useful moments while recording  
* turn recordings/bookmarks into clips  
* organise clips into song sections  
* arrange sections into a song structure

\#\# Goal

Build a working prototype using minimal credits.

Focus on:

\* small increments  
\* stable state  
\* no rework  
\* no over-generation

## **Desired Feel**

The app should feel:

* simple  
* calm  
* lightweight  
* musical  
* fast to use  
* low-friction  
* mobile-first

The user should feel like they can capture an idea without managing files, menus, or technical audio settings.

Prioritise:

* clarity over complexity  
* fast capture over perfection  
* obvious state changes  
* minimal controls on screen at once

---

## **Prototype Goal**

The first goal is not full audio production.

The first goal is to prove this flow:

Lyrics  
→ Record  
→ Bookmark useful moments  
→ Stop  
→ Clips are created  
→ Add clip to section  
→ Section shows the musical idea

---

## **Clarification Rule**

Before implementing anything:

If any instruction is unclear, conflicting, or risky, ask me a question first.

Do not guess.

Ask only the minimum number of questions needed to continue.

---

## **Review Before Change Rule**

Before editing code:

1. Explain what files you plan to change  
2. Explain what behaviour you plan to add/change  
3. Keep it brief  
4. Wait for my confirmation before making changes

Do not apply changes until I confirm.

---

## **Approval Language**

Only proceed when I say something like:

* "yes"  
* "approved"  
* "go ahead"  
* "implement it"

If I say:

* "what do you think?"  
* "is this right?"  
* "should we?"  
  then discuss only. Do not implement.

\---

\#  Credit Usage Rules (CRITICAL)

Always optimise for lowest token usage.

1\. Never ask for full files unless necessary  
2\. Prefer partial edits over full rewrites  
3\. Only work on ONE increment at a time  
4\. Stop after completing each increment  
5\. Do not analyse the entire codebase repeatedly  
6\. Do not restate specs or context unless needed  
7\. Avoid long explanations — prefer short, direct outputs

—

\#  Incremental Build System

The build is done in:

Phase → Increment → Stop → Test → Save → Next

Rules:

\* Only implement ONE increment per request  
\* After each increment:

  \* STOP  
  \* explain what changed briefly  
  \* tell me what to test  
  \* suggest the next increment  
\* Do NOT continue automatically

\---

\#  Version Control Rule (VERY IMPORTANT)

After EVERY successful increment:

You must remind:

 "Save a new version of your files now before continuing"

User will:

\* duplicate files OR  
\* commit version

Never skip this reminder.

\---

\#  Navigation Rule

When I say:

\* "ok next"  
\* "this is good"  
\* "continue"

You must:

1\. Confirm current increment is complete  
2\. State the NEXT increment clearly  
3\. ONLY move to the next implement and DO NOT BEGIN IMPLEMENTATION begin before review. 

\---

\#  Phase Structure

\#\# Phase 1 — Frame

UI \+ navigation only

\#\# Phase 2 — Logic

Fake recording, clips, sections

\#\# Phase 3 — Audio

Real recording \+ playback

\---

\#  Core Build Rules

1\. Bookmarks are temporary during recording  
2\. Clips are created only when recording stops  
3\. Always create:

   \* 1 full recording clip  
   \* bookmark clips if they exist  
4\. Clip activation:

   \* 1 clip → ON  
   \* 2+ clips → ALL OFF  
5\. Global record → go to Clips  
6\. Section record → return to Section  
7\. “Add to Song” \= assign to section

\---

\#  Architecture Rules

\* index.html \= app shell  
\* app.js \= state \+ logic  
\* views \= UI only  
\* logic must NOT live inside views

IMPORTANT:  
Keep recording logic separate from audio implementation.

Fake recording (Phase 2\) must be replaceable in Phase 3\.

\---

\# 🚫 Do Not Do

\* Do not implement multiple increments at once  
\* Do not rewrite existing files unnecessarily  
\* Do not introduce new features  
\* Do not refactor everything mid-build  
\* Do not optimise prematurely

\---

\#  Build Tracking

Use:

\* plan.md → intended path  
\* build-log.md → actual progress

If something changes:

\* update build-log.md  
\* do NOT silently change behaviour

\---

\#  Output Format Rules (for AI)

When implementing:

1\. Make minimal necessary changes  
2\. Show only changed sections of code (unless full file is required)  
3\. Keep explanations under 5 lines  
4\. Always end with:

   \* what to test  
   \* reminder to save version  
   \* next increment

\---

\#  Source Priority

1\. context.md (this file)  
2\. build rules  
3\. spec files  
4\. screenshots  
5\. old prototype (reference only)

\#\# Living Build Process

The build plan is allowed to change as implementation reveals issues.

When the plan changes:  
\- do not silently improvise  
\- update \`build-log.md\`  
\- explain what changed  
\- explain why  
\- say whether \`plan.md\` or \`context.md\` needs updating

\`context.md\` contains stable product/build rules.  
\`plan.md\` contains the intended route.  
\`build-log.md\` contains the actual route taken during development.  
Old prototype

This file is a previous prototype.

IMPORTANT:

* It is NOT the source of truth  
* It contains mixed logic and UI in one file  
* It may conflict with the current spec

Use it ONLY for:

* interaction reference  
* visual behaviour  
* understanding flows

Do NOT copy its structure or logic directly.  
The current spec \+ build rules override anything in this file.

Compare the old prototype with the current spec and build rules.

1. Identify useful interaction patterns worth preserving  
2. Identify behaviours that conflict with the current system  
3. Do NOT suggest new features  
4. ONLY extract interaction patterns that support implementation of audio and recording functionality later. 