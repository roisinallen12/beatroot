## **Recording Screen Spec** 

---

## **Purpose**

Capture a live recording, allow the user to mark useful moments as bookmarks, and convert the recording into clips when recording stops.

---

## **User Actions**

* Tap record button to enter Recording screen and immediately begin recording  
* Tap record button again to stop recording  
* Tap anywhere on the recording waveform to start a bookmark  
* Tap again to end the active bookmark  
* Scrub backward on the waveform to listen to earlier audio  
* Tap “Continue recording →” to jump back to live recording  
* Tap Lyrics icon to open editable lyrics overlay  
* Tap visible waveform strip beside lyrics overlay to continue bookmarking  
* Close lyrics overlay with chevron

---

## **Key Interactions**

### **Recording State**

* User cannot access this screen unless recording is active  
* Recording starts immediately when the screen opens  
* Centre playhead remains fixed during recording  
* Waveform reflects recorded audio amplitude in real time  
* Record button displays active recording state  
* Bottom navigation is disabled except for Lyrics  
* User cannot navigate to Clips, Sections, or Song while recording

---

### **Bookmarking**

* Bookmarking is tap-on / tap-off  
* Only one active bookmark can exist at a time

#### **During recording**

* First tap starts a bookmark at the current playhead position  
* Second tap ends the bookmark  
* Active bookmark region is displayed in green  
* Bookmarks are **temporary markers only during recording**  
* No clips are created during recording  
* The Clips icon in the bottom navigation:  
  * Displays a badge count  
  * Increments immediately when a bookmark is completed  
  * Reflects the number of completed bookmarks in the current session

#### **At recording stop**

* All bookmarks are converted into clips  
* If a bookmark is still open when recording stops:  
  * it is automatically closed at the current playhead position  
  * it is included as a clip

---

### **Scrubbing During Recording**

* Scrubbing backward pauses live recording  
* User can scrub back to the beginning of the current recording  
* A “Continue recording →” button appears  
* If playback reaches the end of the recorded audio:  
  * recording resumes automatically  
* If a bookmark is active while scrubbing:  
  * it continues seamlessly into resumed live recording  
  * it becomes a single continuous bookmark

---

### **Lyrics Overlay**

* Lyrics overlay slides in from the left as a page  
* It covers most of the waveform but leaves at least 60px visible on the right  
* Lyrics remain fully editable  
* Recording continues uninterrupted  
* Tapping the exposed waveform strip still allows bookmarking

---

### **Save / Return Behaviour**

When recording stops:

* The system creates clips **in a single batch**:  
  * always one full recording clip  
  * plus one clip per completed bookmark (if any exist)  
* Naming:  
  * Full recording: “New Recording X”  
  * Bookmark clips: “New Bookmark X”  
  * Numbering continues across the song  
* All clips created in the session receive the **NEW tag**

---

## **Logic**

### **Clip Creation**

* Clips are created **only when recording stops**  
* Bookmarks are not persisted as clips during recording  
* Creation rules:  
  * Always create 1 full recording clip  
  * If bookmarks exist:  
    * create 1 clip per completed bookmark  
  * Open bookmarks are auto-closed and included

---

### **Clip Activation (Global Rule)**

* If the recording session produces **1 clip**:  
  * that clip is **ON**  
* If the recording session produces **2 or more clips**:  
  * all clips are **OFF**  
* This rule applies regardless of where recording was started

---

### **Destination After Stop**

* If recording started from the global record button:  
  * All created clips are added to Clips  
  * No section is assigned  
  * User is navigated to Clips  
* If recording started from a Section:  
  * All created clips are added to that Section  
  * User returns to the same Section

---

### **Section Context Behaviour**

When recording into a Section:

* All clips are added to the section  
* Activation follows global rule:  
  * 1 clip → ON  
  * 2+ clips → all OFF  
* Newly created clips:  
  * display NEW tag  
  * briefly glow for feedback

---

### **Relationship Between Recording and Bookmarks**

* After creation, all clips are independent  
* Bookmark clips do not retain a link to the full recording  
* Bookmarks do not persist after recording ends

---

### **Navigation Constraints**

* User cannot leave the Recording screen while recording is active  
* Only the Lyrics overlay is allowed during recording  
* Stopping recording is the only way to exit

---

## **Acceptance Criteria**

* Recording begins immediately on entering the screen  
* User cannot navigate away except by stopping recording  
* Centre playhead remains fixed during recording  
* Waveform updates consistently with recording  
* Bookmarking:  
  * Tap once starts a bookmark  
  * Tap again ends it  
  * Only one active bookmark exists  
  * Active bookmark displays visually  
* During recording:  
  * No clips are created  
  * Bookmark count increments immediately in Clips icon badge  
* On stop:  
  * Full recording clip is always created  
  * Bookmark clips are created if bookmarks exist  
  * Open bookmarks are auto-closed and included  
* Clip activation:  
  * 1 clip → ON  
  * 2+ clips → all OFF  
* Scrubbing:  
  * Pauses recording  
  * Shows “Continue recording →”  
  * Resumes recording automatically at end  
* Bookmark continuity:  
  * Active bookmark continues correctly across scrubbing  
* Lyrics overlay:  
  * Opens without interrupting recording  
  * Allows editing  
  * Preserves recording state  
  * Allows bookmarking via exposed waveform  
* Navigation after stop:  
  * Global recording → user lands on Clips  
  * Section recording → user returns to same Section  
* Clips:  
  * Are named correctly  
  * Receive NEW tag  
  * Are created only after recording stops

