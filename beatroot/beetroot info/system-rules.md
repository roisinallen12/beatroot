## **Consistency & System Rules**

---

## **1\. Core Data Model (Single Source of Truth)**

### **Clip**

* Fundamental unit of audio  
* Source of truth  
* All edits (trim, chords, rename, icon) propagate everywhere the clip is used  
* Clips are fully independent objects once created

### **Section**

* Arrangement layer  
* Contains references to clips  
* Controls:  
  * timing (offset)  
  * ON/OFF state  
  * looping (per clip)

### **Song**

* Linear arrangement of sections  
* Sections do not overlap  
* Playback and structural arrangement only  
* Does not modify clip data

---

## **2\. Clip Creation System**

### **Recording Output**

When recording ends:

* Always create:  
  * 1 full recording clip  
* If bookmarks exist:  
  * create 1 clip per completed bookmark  
  * if a bookmark is still open:  
    * auto-close it at stop time  
    * include it as a clip

### **Important Distinction**

During recording:

* Bookmarks are temporary markers  
* Clips badge reflects bookmark count only

After recording stops:

* All clips are created simultaneously:  
  * full recording clip  
  * bookmark clips

---

## **3\. Clip Activation Rule (Global)**

Clip activation is determined only by the number of clips created in a recording session.

* 1 clip created → clip is ON  
* 2 or more clips created → all clips are OFF

This applies consistently across:

* global recording  
* recording inside sections  
* overdubbing

### **Overdubbing Clarification**

* Overdub recording follows the same activation rule:  
  * 1 clip → ON  
  * multiple clips → OFF

---

## **4\. NEW Tag System**

* NEW is applied per recording session  
* All clips created in the same session receive NEW

### **Removal Rule**

* NEW is removed when a later recording session creates new clips

---

## **5\. Section Length Rules**

### **Default Behaviour**

* Section length equals the end time of the latest active (ON) clip  
* Includes:  
  * clip offsets  
  * loop behaviour

### **Manual Override**

If user adjusts section length:

* Manual length becomes authoritative  
* Overrides automatic calculation

### **Important**

* Adjusting section length modifies playback boundaries only  
* Does not affect clip data  
* Clips may extend beyond section length  
* Excess regions are visually constrained only

---

## **6\. Looping Rules**

### **A. Section-Level Looping (Primary)**

Per clip inside a section:

* Loop OFF → plays once  
* Loop ON → repeats to fill section  
* Manual loop count → overrides auto-fill

### **Constraint**

* Looping must resolve within section bounds  
* Cannot create undefined or infinite section length

### **Scope Clarification**

* Loop settings in Sections are contextual  
* Do not modify clip data  
* Looping in clip view is for playback and overdubbing only (non-persistent)

### **B. Overdubbing Looping**

When recording:

From Section:

* Section loops  
* Recording overlays on loop

From Clip:

* Clip loops  
* Recording overlays on loop

### **After Recording**

* Apply Clip Activation Rule  
* All created clips:  
  * added to current context  
  * receive NEW tag

---

## **7\. Derived Clips (Split Recording)**

When using Section Creation Mode:

* System creates:  
  * one new clip per section

### **Rules**

* Derived clips are fully independent  
* No link to original recording is retained  
* Original clip remains unchanged

---

## **8\. Add to Song (Clip → Section Assignment)**

“Add to Song” is a temporary assignment mode

### **Behaviour**

* Selected clips are pinned at top  
* Section layout appears below

User can:

* tap sections to toggle inclusion  
* create new section

### **Confirmation**

On “Done”:

* clips are assigned to selected sections

### **Navigation**

* If one section selected → open that section  
* If multiple → open first selected section  
* Do not open Song screen after this action

---

## **9\. Active / Inactive Scope**

* Clips screen → no ON/OFF state  
* Sections screen → ON/OFF state exists  
* Song screen → no ON/OFF state

---

## **10\. Undo System (Global)**

Undo appears across the app

### **Can Undo**

* section changes  
* clip placement  
* arrangement  
* deletions (non-recording)

### **Cannot Undo**

* recording creation  
* raw audio capture

---

## **11\. Recording → Section → Song Flow**

### **Recording Inside Section**

* Creates clips  
* Adds them to the section  
* Activation follows global rule

### **Song Behaviour**

* Updates immediately  
* Reflects section changes in real time

---

## **12\. Visual Hierarchy**

* Clips → atomic units  
* Sections → layered combinations  
* Song → linear structure

---

## **13\. Interaction Consistency**

* Select mode behaves consistently across Clips and Sections  
* “Add to Song” always means assigning clips to sections  
* “Arrange” refers only to section ordering

---

## **14\. Non-Destructive System Rules**

* Clips are never destroyed by:  
  * section edits  
  * song edits  
* Splitting:  
  * creates new clips only  
* Original audio is always preserved

