## **Song Screen Spec**

---

## **Purpose**

Provide a high-level view of the full song timeline, allowing users to play back the song across sections, navigate structure, create sections, and manage section arrangement.

---

## **User Actions**

* Play / pause song  
* Scrub song timeline  
* Zoom waveform in/out  
* Tap to focus a section  
* Navigate between sections  
* Enter section editing  
* Add new section  
* Enter arrange mode  
* Reorder sections  
* Duplicate sections  
* Delete sections  
* Undo actions *(not required to function in early phases)*  
* Enter section creation mode (split recording)

---

## **Key Interactions**

---

### **Song Timeline**

* Displays a full-length waveform  
* Represents:  
  * stitched section structure (visual only, not rendered audio)  
* Shows:  
  * section boundaries  
  * section segments  
* Bottom indicators:  
  * left: number of sections  
  * right: total song length

---

### **Playback**

* Play starts from current playhead  
* Scrubbing:  
  * tap or drag anywhere on waveform  
* Playback:  
  * plays sections sequentially  
  * sections do not overlap

---

### **Zoom Behaviour**

* Controlled by slider

Zoom levels:

* full song view  
* multi-section view  
* single-section focus

#### **Focused Section State**

When one section is fully visible:

* section becomes focused  
* UI updates:  
  * “Edit \[Section Name\]” button appears  
  * section menu appears

---

### **Section Focus**

* Tap section:  
  * moves playhead to section start  
  * focuses section (if zoom allows)  
* Only one section can be focused at a time

---

### **Edit Section**

* Visible when one section is fully in view  
* Action:  
  * opens Sections screen for that section

---

### **Add Section**

* Button positioned next to play

#### **Options**

1. **Create New Section**  
   * Creates empty section after current section  
   * Slight zoom adjustment for feedback  
2. **Create Section from Playhead**  
   * Available only when:  
     * 1 section exists  
     * that section contains 1 clip  
   * Enters Section Creation Mode

---

### **Section Creation Mode (Split Recording)**

#### **Entry Condition**

* Song contains:  
  * 1 section  
  * 1 clip

---

#### **Entry UI**

* Waveform zooms out  
* Top bar:  
  * Cancel  
  * Create Sections  
* Instruction:  
  👉 “Tap to start a section, tap again to adjust its end” 

---

#### **Creating Sections**

* First tap:  
  * creates section from tap → end of song  
  * displays:  
    * highlighted section block  
    * trim handles  
    * ghost clip label  
* Additional taps:  
  * adjust end position of active section

---

#### **Multiple Sections**

* User can create multiple sections  
* Tapping a section:  
  * selects it  
  * activates its trim handles

---

#### **Editing Sections in Mode**

* Drag handles to refine boundaries  
* Tap sections to switch focus

---

#### **Deleting Sections in Mode**

* Delete button removes active section

---

#### **Ghost Preview**

* Each section displays:  
  * semi-transparent clip label  
  * indicates derived clip

---

#### **Completion**

* Tap “Create Sections”

System:

* Creates:  
  * multiple sections  
  * one **derived clip per section**  
* Derived clips:  
  * are independent clips  
  * do not retain link to original clip  
  * are added to their respective sections  
  * are set **ON**  
* Original clip remains unchanged  
* Mode exits

---

#### **Exit Behaviour**

* Mode is available only when:  
  * 1 section \+ 1 clip state exists  
* Becomes unavailable once:  
  * multiple sections or clips exist

---

### **Arrange Mode**

#### **Entry**

* Button left of play

#### **UI Changes**

* Sections shrink (\~30%)  
* Drag handles appear  
* Bottom drop zones:  
  * left: Duplicate  
  * right: Delete

---

#### **Actions**

**Reorder**

* Drag section to new position

**Delete**

* Drag to delete zone  
* OR use delete action

**Duplicate**

* Drag to duplicate zone  
* OR use duplicate action

---

#### **Multi-Select**

* Tap multiple sections to select

---

#### **Exit**

* Cancel or Done

---

### **Section Menu**

Available when a section is focused:

* Rename section  
* Rearrange section (opens arrange mode)  
* Duplicate section  
* Delete section

---

### **Undo**

* Available in top-left  
* Reverts:  
  * section creation  
  * reorder  
  * duplication  
  * deletion  
* Does not restore deleted recordings  
* Not required to function in early phases

---

## **Logic**

---

### **Data Model**

* Song \= linear arrangement of sections  
* Sections:  
  * do not overlap  
  * contain references to clips  
* Clips are the **source of truth**  
* Song and section operations do not modify clip data 

---

### **Section Behaviour**

* Sections define:  
  * structure  
  * playback order  
* Sections do not affect:  
  * clip audio  
  * clip content

---

### **Split Recording Output**

* Creates new clips per section  
* Each clip is:  
  * independent  
  * assigned to one section  
  * active (ON)

---

### **Non-Destructive System**

* Splitting does not modify original clip  
* Song arrangement does not modify clips

---

### **Navigation Flow**

* Editing a section opens Sections screen  
* Changes in Sections reflect immediately in Song

---

## **Acceptance Criteria**

* Song timeline clearly represents section structure  
* Playback reflects section order accurately  
* Scrubbing updates playhead correctly  
* Zoom transitions smoothly  
* Section focus:  
  * activates correct UI  
  * shows edit controls  
* Add Section:  
  * creates empty section correctly  
  * enters creation mode when valid  
* Section Creation Mode:  
  * creates visible section blocks  
  * allows boundary adjustment  
  * displays ghost previews  
  * generates correct sections and clips  
  * assigns clips correctly (ON)  
* Arrange Mode:  
  * supports reorder  
  * supports delete and duplicate  
  * supports multi-select  
* Undo:  
  * reverses structural actions  
  * does not restore deleted recordings  
* Section operations:  
  * do not modify clip data  
  * maintain non-destructive behaviour

