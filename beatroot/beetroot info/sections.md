## **Sections Screen Spec**

---

## **Purpose**

Allow users to combine clips into a musical section, control playback behaviour, and build layered ideas using timing, looping, and activation.

---

## **User Actions**

* View section clips  
* Toggle clips ON/OFF  
* Expand clip preview  
* Play section  
* Loop section playback  
* Scrub section timeline  
* Add clips to section  
* Select multiple clips  
* Move clips to sections (via Add to Song flow)  
* Delete/remove clips  
* Reorder clips visually  
* Align clip timing within section  
* Set loop behaviour per clip  
* Record into section (overdub-style)  
* Rename section  
* Navigate between sections  
* Duplicate section  
* Delete section

---

## **Key Interactions**

---

### **Section Structure**

A section contains:

* Top: list of clips (inputs)  
* Bottom: section timeline (output)

---

### **Section Length**

* Section length is determined by:  
  * the latest end time of any **active (ON) clip**  
  * includes:  
    * clip offset  
    * clip duration  
    * loop behaviour

#### **Manual Override**

* Adjusting section length modifies **playback boundaries only**  
* Does not affect clip data  
* Any clipped/hidden regions are **non-destructive visual constraints**

---

### **Playback**

* Play starts from current playhead  
* Only **active (ON) clips** are heard

#### **Loop**

* Loops entire section playback

#### **Timeline Interaction**

* Tap or drag to move playhead  
* Scrubbing is supported

---

### **Section Waveform**

* Not a rendered audio mix  
* Displays:  
  * unified waveform  
  * visual highlights of clip activity  
  * indicator of active clip count

---

### **Clips in Section**

Each clip shows:

* icon  
* name  
* expandable preview  
* Clips are ordered:  
  * active clips first  
  * inactive clips below

---

### **Clip ON/OFF Behaviour**

* Tap icon to toggle

#### **ON**

* Included in playback  
* Reflected in waveform

#### **OFF**

* Muted  
* Moves below active clips  
* Retains:  
  * timing  
  * loop settings

---

### **Clip Preview (Expanded)**

* Shows waveform, play, expand controls  
* Matches Clips screen behaviour  
* Edits affect clip globally  
* If clip exists in multiple sections:  
  * show warning

---

### **Clip Alignment (Timing System)**

* Adjusts clip position within section timeline

#### **Interaction**

* Enter alignment mode (in-place)  
* User shifts clip timing

#### **Result**

* Playback position changes  
* Waveform updates accordingly

---

### **Loop Behaviour (Per Clip)**

#### **Loop OFF**

* Plays once

#### **Loop ON**

* Repeats to fill section

#### **Manual Loop Count**

* Overrides auto looping  
* Plays fixed number of repetitions

#### **Scope Rule**

* Loop settings are **section-specific**  
* Do not modify clip data  
* Looping in clip view is playback-only 

---

### **Multi-Clip Timing**

* Clips can:  
  * overlap  
  * start at different times  
  * loop independently

---

### **Recording Inside Section (Overdub)**

* Press record:  
  * section begins looping  
  * recording overlays on loop

#### **On Stop**

* Clips are created in a single batch:  
  * always 1 full recording clip  
  * plus bookmark clips (if any)

#### **Activation Rules**

* If **no bookmarks** (1 clip created):  
  * clip is added to section **ON**  
* If **bookmarks exist** (multiple clips created):  
  * all created clips are added **OFF**  
* Applies global activation rule consistently 

#### **Additional Behaviour**

* All new clips:  
  * are added to this section  
  * display NEW tag  
  * briefly glow for feedback

---

### **Select Mode**

* Activated via “Select”

#### **Behaviour**

* Checkboxes appear  
* Clip expansion disabled

#### **Actions**

* Delete  
* Move

---

### **Move (Select Mode)**

* Opens **Add to Song** flow

#### **Behaviour**

* Selected clips are passed into Add to Song  
* User selects target section(s)

#### **Result**

* Clips are assigned to selected sections  
* Original section membership remains unless explicitly removed

---

### **Delete (Select Mode)**

Confirmation options:

* Remove from section  
* Delete clip  
* Cancel

---

### **Reordering Clips**

* Drag handle to reorder  
* Affects visual order only  
* Does not affect timing

---

### **Adding Clips to Section**

Entry points:

* Empty section template  
* Add clips action

#### **Behaviour**

* Opens Clips screen in **select mode**  
* User selects clips  
* On Done:  
  * clips are immediately added to current section

---

### **Section Navigation**

* Left/right arrows beside section name

#### **Behaviour**

* Moves between sections in song order

#### **Edge Case**

* If only one section:  
  * next view shows empty section template

---

### **Empty Section Template**

* No waveform  
* Prompt:  
  * “Add clips to create a new section”  
* Tapping:  
  * opens Clips screen in select mode

---

### **Section Naming**

* Default: “New Section X”  
* Keyboard opens on creation  
* Suggested names:  
  * Intro  
  * Verse  
  * Chorus  
* Editable at any time

---

### **Section Menu**

Options:

* Rename section  
* Rearrange section (opens Song view)  
* Duplicate section  
* Delete section

---

### **Section Deletion**

* Deletes section only  
* Clips remain in clip library  
* Section references are removed

---

## **Logic**

---

### **Data Model**

* Clips are the **source of truth**  
* Sections:  
  * store references to clips  
  * control playback behaviour:  
    * timing  
    * looping  
    * activation  
* Clips do **not** store section placement data 

---

### **Non-Destructive System**

* Section edits do not modify clips  
* Timing, looping, activation are contextual only

---

### **Activation Scope**

* ON/OFF exists only within Sections  
* Clips screen does not reflect activation

---

### **Recording Flow Integration**

* Recording in section:  
  * creates clips  
  * adds to section  
  * applies activation rule based on clip count

---

### **NEW Tag**

* Applied to clips from latest recording session  
* Removed when a newer session creates clips 

---

## **Acceptance Criteria**

* Section length reflects latest active clip end  
* Manual length override does not modify clip data  
* Playback:  
  * only active clips are heard  
  * scrubbing works correctly  
  * loop playback functions  
* Clip behaviour:  
  * ON/OFF toggles correctly  
  * OFF clips move below active  
  * alignment updates timing correctly  
  * loop settings behave per section  
* Recording:  
  * creates clips on stop only  
  * no bookmarks → clip added ON  
  * bookmarks → all clips added OFF  
  * clips receive NEW tag  
  * clips appear in section immediately  
* Add clips:  
  * opens Clips screen in select mode  
  * adds clips on Done  
* Move:  
  * opens Add to Song flow  
  * assigns clips to selected sections  
* Select mode:  
  * disables expansion  
  * enables multi-actions  
* Reordering:  
  * changes visual order only  
* Navigation:  
  * section switching works  
  * empty state behaves correctly  
* Deletion:  
  * removing from section does not delete clip  
  * deleting section preserves clips

