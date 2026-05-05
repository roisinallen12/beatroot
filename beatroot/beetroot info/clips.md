## **Clips Screen Spec**

---

## **Purpose**

Provide a central library of all clips within a song, allowing users to preview, manage, organise, and assign clips to sections using **Add to Song**.

---

## **User Actions**

* View list of clips  
* Search clips by name or instrument  
* Filter clips (this song / favourites / import audio)  
* Expand a clip to preview it  
* Play clip audio  
* Open full clip view  
* Open clip options menu  
* Enter Select mode  
* Select multiple clips  
* Delete clips  
* Add clips to sections via **Add to Song**  
* Import audio as new clips *(not required to function in Phase 1–2)*

---

## **Key Interactions**

### **Clip List**

* Displays clips in **newest-first order**  
* Each clip shows:  
  * name  
  * duration  
* Clips appear as a flat list  
* Clips that belong to any section display a **section indicator icon**  
* Clips created in the most recent recording session display a **NEW tag**

---

### **Filtering (Dropdown)**

Options:

* **From this song** → default  
* **All favourites** → across songs  
* **Import audio** → opens file picker → creates new clip *(not required to function in Phase 1–2)*

---

### **Search**

* Matches:  
  * clip name  
  * instrument (via icon)

---

### **Clip Interaction (Collapsed)**

* Tapping a clip expands a preview (accordion)  
* Only **one clip can be expanded at a time**

---

### **Expanded Clip (Preview)**

Displays:

* waveform  
* play button  
* instrument icon  
* expand/fullscreen button

User can:

* play clip (plays once, no loop)  
* scrub waveform  
* open full clip view

---

### **Clip Options Menu**

Options:

* Favourite (toggle)  
* Rename (inline)  
* Trim *(not required to function in Phase 1–2)*  
* View Recording (opens full clip screen)  
* **Add to Song**  
* Duplicate  
* Delete

---

### **Delete Interaction**

* Swipe left triggers delete confirmation  
* Swipe again confirms quick delete  
* Confirmation UI also includes buttons

If clip is used in a section:

* Options:  
  * Remove from section  
  * Delete  
  * Cancel

---

### **Select Mode**

* Activated via “Select” button

#### **Behaviour**

* Checkboxes appear next to clips  
* User selects multiple clips  
* Clip expansion is disabled

#### **Actions**

* Delete  
* **Add to Song**  
* Cancel

---

### **Add to Song**

* Opens section assignment interface  
* Selected clips are pinned at the top  
* Sections are displayed below

User can:

* Select one or multiple sections  
* Create a new section

#### **On Done**

* Clips are assigned to selected sections

#### **Navigation**

* If one section selected → open that Section  
* If multiple → open first selected Section  
* Song screen is **not opened**

---

### **Clip Relationships**

* Clips can belong to multiple sections  
* Clips are independent objects after creation

---

## **Logic**

### **Clip Creation**

* Clips are created from:  
  * full recordings  
  * bookmarks  
  * imports  
* All clips behave identically after creation

---

### **Clip Ownership**

* Clips are the **source of truth**  
* Sections store references to clips  
* Sections control:  
  * timing  
  * looping  
  * activation  
* Clips do **not** store section placement data 

---

### **Naming**

* Default names:  
  * “New Recording X”  
  * “New Bookmark X”  
* Names are editable

---

### **NEW Tag System**

* Applied to all clips created in the most recent recording session  
* Multiple clips from the same session all show NEW  
* Removed when a later recording session creates new clips 

---

### **Duplicate Logic**

* Creates an exact copy:  
  * waveform  
  * metadata (name, icon)  
* Naming:  
  * “Copy of X” or incremented variant

#### **Context Behaviour**

* Duplicated from Clips:  
  * exists only in clip library  
* Duplicated in Section context:  
  * inherits section placement

---

### **Section Independence**

* Clips screen does **not** display:  
  * ON/OFF state  
* Activation is managed only in Sections

---

## **Edit Clip / View Screen**

---

## **Purpose**

Provide a detailed view of a clip for playback and metadata control.

---

## **User Actions**

* Play clip  
* Loop clip  
* Scrub waveform  
* Rename clip  
* Change icon  
* Open options menu  
* Duplicate clip  
* Delete clip  
* Exit screen  
* Trim *(not required to function in Phase 1–2)*  
* Chords *(not required to function in Phase 1–2)*

---

## **Key Interactions**

### **Opening This Screen**

Accessible via:

* Expanded clip → expand icon  
* “View Recording”  
* “Trim” *(entry allowed but functionality not required in Phase 1–2)*

---

### **Playback**

* Play always starts from beginning  
* Loop:  
  * loops entire clip  
  * used for playback and overdubbing only  
  * does **not persist or modify clip data**

---

### **Waveform**

* Fully scrubbable  
* Supports navigation for longer clips

---

### **Icon Selector**

* Displays instrument icon  
* Tapping opens icon selection  
* Icon is used for:  
  * visual identification  
  * search

---

### **Options Menu**

Includes:

* Rename  
* Trim *(not required to function in Phase 1–2)*  
* Change Clip Icon  
* See Chords *(not required to function in Phase 1–2)*  
* **Add to Song**  
* Duplicate  
* Delete

---

### **Trim Mode**

* Entry allowed but functionality not required in Phase 1–2

Intended behaviour:

* Adjustable start/end markers  
* Two actions:  
  * Trim (overwrite)  
  * Save as new clip  
* Original clip remains unless overwritten

---

### **Chords Mode**

* Entry allowed but functionality not required in Phase 1–2

Intended behaviour:

* Chords mapped to timeline  
* Add/edit chord markers

---

## **Logic**

* Clip is the **single source of truth**  
* All edits propagate globally:  
  * Clips  
  * Sections  
  * Song

---

### **Delete Logic**

If clip is used:

* Options:  
  * Remove from section  
  * Delete  
  * Cancel

---

## **Acceptance Criteria**

* Clips display newest-first  
* Only one clip expands at a time  
* Clip preview playback works (no loop in preview)  
* Search matches name and icon  
* Filtering updates correctly  
* NEW tag appears on latest session clips  
* NEW tag is removed after subsequent recording  
* Select mode:  
  * enables multi-select  
  * disables expansion  
  * supports Delete and Add to Song  
* Add to Song:  
  * assigns clips to sections  
  * supports multi-section selection  
  * opens correct section after completion  
  * does not open Song screen  
* Duplicate creates independent clip  
* Delete:  
  * supports swipe and confirmation  
  * handles section-linked clips correctly  
* Edit Clip screen:  
  * playback starts from beginning  
  * loop works for playback only  
  * edits propagate globally  
* Non-core features (trim, chords, import):  
  * do not need to function in Phase 1–2  
  * do not block navigation or flow

