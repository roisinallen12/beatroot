## **Lyrics Screen Spec**

---

## **Purpose**

Provide a simple, always-available space for writing and editing song lyrics as plain text, independent of audio, clips, sections, or song structure.

---

## **User Actions**

* Edit song title by tapping and typing  
* Write and edit lyrics in a continuous text field  
* Scroll through lyrics  
* Tap Home icon to return to All Songs screen  
* Open theme/display controls via top-right button  
* Navigate to other screens via bottom navigation  
* Edit lyrics while recording via overlay

---

## **Key Interactions**

---

### **Title Editing**

* Title is directly editable (no edit mode)  
* Default title:  
  * “New Song”  
  * Automatically increments (e.g. “New Song 3”) based on existing unnamed songs  
* If title is cleared:  
  * It reverts to the appropriate “New Song X”

---

### **Lyrics Editing**

* Single continuous text field (notes-style)  
* Supports:  
  * free typing  
  * line breaks  
  * scrolling  
* No formatting (plain text only)

---

### **Placeholder Behaviour**

* Placeholder text:  
  * “add lyrics, notes or chords here while you write”  
* Visible only when lyrics are empty  
* Disappears on first input  
* Reappears if all text is deleted

---

### **Auto-Save Behaviour**

* Title and lyrics save continuously while typing  
* No manual save action  
* State persists across:  
  * navigation  
  * tab switching  
  * overlays

---

### **Navigation**

#### **Home Button**

* Top-left icon  
* Navigates to All Songs screen  
* No save prompt (auto-save assumed)

---

#### **Bottom Navigation**

* Switching tabs:  
  * preserves lyrics and title  
* Returning to Lyrics:  
  * restores current text state

---

### **Theme / Display Controls**

* Opened via top-right button  
* Appears as a popup  
* Applies globally across the app

#### **Options**

1. Toggle Dynamic Display (gradient on/off)  
2. Select one of four colour themes  
3. Upload an image  
* Uploaded image:  
  * used to derive colour theme  
  * stored for export artwork  
  * not displayed on this screen

---

### **Recording Overlay Behaviour**

* Lyrics can be opened as an overlay during recording  
* Overlay:  
  * does not navigate away from recording  
  * uses the same shared lyrics state  
* User can:  
  * type  
  * scroll  
  * edit freely  
* Recording is not affected by editing

---

## **Logic**

---

### **Data Independence**

* Lyrics exist independently from:  
  * recordings  
  * clips  
  * sections  
  * song structure

---

### **State Management**

* Title defaults are assigned at song creation  
* Title auto-corrects if emptied  
* Lyrics state is shared between:  
  * Lyrics screen  
  * Recording overlay

---

### **Global Settings**

* Theme and display settings:  
  * apply across the entire app  
  * are not screen-specific

---

### **Persistence**

* All edits persist automatically without user action  
* Navigation does not reset or lose state

---

## **Acceptance Criteria**

* Title:  
  * is editable instantly  
  * defaults correctly and increments across songs  
  * cannot remain empty  
* Lyrics:  
  * behave like a standard notes app text field  
  * support typing, line breaks, and scrolling  
* Placeholder:  
  * appears only when empty  
  * disappears on input  
  * returns when cleared  
* Auto-save:  
  * persists all changes immediately  
  * survives navigation and tab switching  
* Navigation:  
  * Home button returns to All Songs  
  * returning to Lyrics restores exact state  
* Theme:  
  * changes apply globally  
  * uploaded image does not display on this screen  
* Recording overlay:  
  * reflects the same lyrics content  
  * allows full editing  
  * does not interrupt recording

