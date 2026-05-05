# plan.md

# **Looped Build Plan**

Looped is built in 3 major phases.

Each phase is broken into small increments.

Do not complete a whole phase at once. Complete one increment, test it, then continue.

---

# **Phase 1 — Frame**

Goal: build the visual and navigation structure only.

No recording logic.  
No clip logic.  
No real audio.

## **Increment 1.1 — App Shell**

* Confirm `index.html` contains the app shell  
* Keep top nav, main content area, bottom nav  
* Do not move everything into one file

## **Increment 1.2 — View Loading**

* Load `/views/lyrics.html`  
* Load `/views/record.html`  
* Load `/views/clips.html`  
* Load `/views/sections.html`  
* Load `/views/song.html`

## **Increment 1.3 — Navigation State**

* Bottom nav switches views  
* Active tab updates  
* Record button opens Recording view  
* Top nav updates per view

## **Increment 1.4 — Screen Layouts**

* Build static screen layouts from screenshots  
* No behaviour yet  
* Use placeholder/fake content only

## **Increment 1.5 — Frame Review**

* Check layout consistency  
* Check mobile sizing  
* Check scroll behaviour  
* Stop and report before Phase 2

---

# **Phase 2 — Logic With Fake Audio**

Goal: make the app behave correctly using fake audio and fake waveform data.

Do not implement real microphone recording yet.

## **Increment 2.1 — Central App State**

Create a single app state object for:

* current view  
* lyrics  
* recording session  
* temporary bookmarks  
* clips  
* sections  
* selected clip  
* selected section

## **Increment 2.2 — Lyrics Logic**

* title editing  
* lyrics editing  
* in-memory persistence across navigation

## **Increment 2.3 — Fake Recording Session**

* record view starts fake session  
* fake timer runs  
* fake waveform appears  
* stop button ends session

## **Increment 2.4 — Bookmark Logic**

* tap waveform once \= start bookmark  
* tap again \= end bookmark  
* bookmarks are temporary during recording  
* badge reflects completed bookmark count

## **Increment 2.5 — Clip Creation on Stop**

On stop:

* create full recording clip  
* create bookmark clips if bookmarks exist  
* auto-close open bookmark  
* apply activation rule:  
  * 1 clip \= ON  
  * 2+ clips \= all OFF

## **Increment 2.6 — Clips Screen Logic**

* render clips newest-first  
* show NEW tag  
* expand one clip at a time  
* fake waveform preview

## **Increment 2.7 — Add to Song / Section Assignment**

* Add to Song means assign clip to section  
* create/select section  
* after Done, open first selected Section

## **Increment 2.8 — Section Logic**

* show clips assigned to section  
* toggle ON/OFF  
* OFF clips stay in section but muted/inactive  
* section length is based on active clips

## **Increment 2.9 — Mock Playback**

* fake playback state  
* play active section clips visually  
* no real audio

## **Increment 2.10 — Logic Review**

* confirm full fake flow works:  
  Lyrics → Record → Bookmark → Stop → Clips → Add to Section → Section  
* stop and report before Phase 3

---

# **Phase 3 — Real Audio**

Goal: replace fake recording/playback internals with real browser audio.

Do not redesign the UI or state model.

## **Increment 3.1 — Audio Interface**

Create an audio service/interface that matches the fake recording flow:

* start()  
* stop()  
* getDuration()  
* getWaveformData()  
* createClipFromRange()  
* playClip()

## **Increment 3.2 — Microphone Permission**

* request browser microphone access  
* handle denied permission  
* do not change clip logic

## **Increment 3.3 — Real Recording**

* capture audio  
* save full recording as audio Blob/URL  
* keep same clip object shape

## **Increment 3.4 — Real Bookmark Ranges**

* use real timestamps  
* convert bookmarks into clip ranges  
* preserve existing clip creation rules

## **Increment 3.5 — Real Clip Playback**

* play full recording clips  
* play bookmark clips  
* keep Clips screen behaviour unchanged

## **Increment 3.6 — Real Section Playback**

* play active clips in section  
* respect ON/OFF  
* keep fake section logic structure where possible

## **Increment 3.7 — Audio Review**

* confirm real audio works without breaking:  
  * clips  
  * sections  
  * Add to Song  
  * navigation