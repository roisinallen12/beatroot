// ─── Icon SVG Strings ────────────────────────────────────────────────────────

const ICONS = {
  home:    `<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 10.5L11 3l8 7.5V19a1 1 0 0 1-1 1h-4.5v-6h-5v6H4a1 1 0 0 1-1-1v-8.5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
  back:    `<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M13 17l-5-6 5-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  undo:    `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 14L4 9l5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 9h10a6 6 0 010 12h-3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  metronome: `<svg width="24" height="24" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.4328 9.64598L14.2328 4.25265C14.0275 3.33002 13.5138 2.50494 12.7764 1.9136C12.0391 1.32226 11.1221 1 10.1769 1C9.23174 1 8.31479 1.32226 7.57743 1.9136C6.84007 2.50494 6.32636 3.33002 6.12109 4.25265L1.07943 26.9426C0.971117 27.4299 0.973609 27.9352 1.08672 28.4214C1.19983 28.9075 1.42067 29.362 1.73294 29.7514C2.04521 30.1408 2.44094 30.4551 2.89092 30.6711C3.3409 30.8871 3.83363 30.9992 4.33276 30.9993H16.0228C16.5219 30.9992 17.0146 30.8871 17.4646 30.6711C17.9146 30.4551 18.3103 30.1408 18.6226 29.7514C18.9349 29.362 19.1557 28.9075 19.2688 28.4214C19.3819 27.9352 19.3844 27.4299 19.2761 26.9426L18.4028 23.0143M10.1778 25.9993L25.1778 4.33265" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  moreVertical: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="4" r="1.6" fill="currentColor"/><circle cx="9" cy="9" r="1.6" fill="currentColor"/><circle cx="9" cy="14" r="1.6" fill="currentColor"/></svg>`,
  edit:    `<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M15.5 3.5a2.121 2.121 0 013 3L7 18l-4 1 1-4 11.5-11.5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  share:   `<svg width="24" height="24" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H15C15.5304 21 16.0391 20.7893 16.4142 20.4142C16.7893 20.0391 17 19.5304 17 19V11M13 5L9 1M9 1L5 5M9 1L9 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  menu:    `<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  chevron: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 5l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  sections: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><line x1="2" y1="8" x2="11" y2="8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><line x1="2" y1="12" x2="11" y2="12" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><line x1="2" y1="16" x2="11" y2="16" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><ellipse cx="16.5" cy="16.5" rx="2.5" ry="1.8" stroke="currentColor" stroke-width="1.4"/><line x1="19" y1="16.5" x2="19" y2="9" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><line x1="14" y1="10" x2="19" y2="9" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  play: `<svg width="26" height="26" viewBox="0 0 22 22" fill="none"><path d="M6 4l13 7-13 7V4z" fill="currentColor"/></svg>`,
  expand: `<svg width="20" height="20" viewBox="0 0 22 22" fill="none"><path d="M14 4h4v4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 4l-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 18H4v-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 18l6-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  close: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M5 5l12 12M17 5L5 17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  plus: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 6v16M6 14h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  stop: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="5" y="5" width="14" height="14" fill="currentColor" rx="2"/></svg>`
};

// ─── Phase 2.1 — Central App State (in-memory only) ──────────────────────────

const appState = {
  currentView: 'lyrics',
  lyrics: {
    title: 'New Song',
    body: ''
  },
  recordingSession: {
    isRecording: false,
    startedAt: null,
    elapsedMs: 0,
    waveform: [],
    activeBookmarkStartMs: null
  },
  tempBookmarks: [],
  clips: [],
  sections: [],
  selectedClipId: null,
  selectedSectionId: null,
  expandedPreviewClipId: null,
  addToSong: {
    active: false,
    clipId: null,
    selectedSectionIds: []
  },
  sectionPlayback: {
    isPlaying: false,
    startedAt: null,
    durationMs: 0,
    rafId: null
  }
};

// ─── Clip Audio Pool ──────────────────────────────────────────────────────────
const AUDIO_POOL = [
  'assets/musicClips/clip1-bg.mp3',
  'assets/musicClips/clip1-violin.mp3',
  'assets/musicClips/clip2-guitar.mp3',
  'assets/musicClips/clip2-piano.mp3',
];

// Clip assignment index — advances each time a clip is created
let _audioAssignmentIndex = 0;

function assignAudioToClip(clip) {
  clip.audioFile = AUDIO_POOL[_audioAssignmentIndex % AUDIO_POOL.length];
  _audioAssignmentIndex++;
}

// Recording audio — separate instance, separate index, never shared with clip playback
let _recordingAudio = null;
let _recordingAudioIndex = 0;

function playRecordingAudio() {
  if (_recordingAudio) {
    _recordingAudio.pause();
    _recordingAudio.currentTime = 0;
  }
  const src = AUDIO_POOL[_recordingAudioIndex % AUDIO_POOL.length];
  _recordingAudioIndex++;
  _recordingAudio = new Audio(src);
  _recordingAudio.play();
}

function stopRecordingAudio() {
  if (_recordingAudio) {
    _recordingAudio.pause();
    _recordingAudio.currentTime = 0;
    _recordingAudio = null;
  }
}

// Clip playback audio — separate instance, always starts from beginning
let _currentAudio = null;

function playClipAudio(clip) {
  const src = clip.audioFile;
  if (!src) return;
  if (_currentAudio) {
    _currentAudio.pause();
    _currentAudio.currentTime = 0;
  }
  _currentAudio = new Audio(src);
  _currentAudio.play();
}

function stopClipAudio() {
  if (_currentAudio) {
    _currentAudio.pause();
    _currentAudio.currentTime = 0;
    _currentAudio = null;
  }
}

function normaliseTitle(title) {
  const trimmed = String(title || '').trim();
  return trimmed.length ? trimmed : 'New Song';
}

function bindLyricsView() {
  const titleInput = document.getElementById('lyrics-title-input');
  const bodyInput = document.getElementById('lyrics-body-input');
  if (!titleInput || !bodyInput) return;

  const autoGrow = () => {
    bodyInput.style.height = 'auto';
    bodyInput.style.height = `${bodyInput.scrollHeight}px`;
  };

  titleInput.value = appState.lyrics.title;
  bodyInput.value = appState.lyrics.body;
  autoGrow();

  titleInput.addEventListener('input', (e) => {
    appState.lyrics.title = e.target.value;
  });

  titleInput.addEventListener('blur', (e) => {
    const next = normaliseTitle(e.target.value);
    appState.lyrics.title = next;
    e.target.value = next;
  });

  bodyInput.addEventListener('input', (e) => {
    appState.lyrics.body = e.target.value;
    autoGrow();
  });
}

// ─── Top Nav Configs (per view) ───────────────────────────────────────────────

const topNavConfigs = {
  lyrics: {
    left:  `<button class="top-nav-btn" id="home-btn" aria-label="Home">${ICONS.home}</button>`,
    right: `<div class="top-nav-right"><button class="top-nav-btn" aria-label="Add photo"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 4h6l1.5 2H20a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h2.5L10 4z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="13" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/><line x1="19" y1="7" x2="19" y2="10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="17.5" y1="8.5" x2="20.5" y2="8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button></div>`
  },
  clips: {
    left:  `<span class="top-nav-title top-nav-title-large">Clips</span>`,
    right: `<div class="top-nav-right"><button class="top-nav-dropdown">From this song ${ICONS.chevron}</button></div>`
  },
  record: {
    left:  `<span></span>`,
    right: `<div class="top-nav-right"><button class="top-nav-btn" aria-label="Metronome">${ICONS.metronome}</button></div>`
  },
  sections: {
    left:  `<span class="top-nav-title top-nav-title-large">Intro</span>`,
    right: `<div class="top-nav-right top-nav-right-stack"><div class="top-nav-right-row"><button class="top-nav-btn" aria-label="Metronome">${ICONS.metronome}</button><button class="top-nav-btn" aria-label="Share">${ICONS.share}</button></div><div class="top-nav-right-row"><button class="top-nav-btn" aria-label="More">${ICONS.moreVertical}</button></div></div>`
  },
  song: {
    left:  `<div class="top-nav-left-stack"><span class="top-nav-title top-nav-title-large">New Song</span><button class="top-nav-btn" aria-label="Undo">${ICONS.undo}</button></div>`,
    right: `<div class="top-nav-right top-nav-right-stack"><div class="top-nav-right-row"><button class="top-nav-btn" aria-label="Metronome">${ICONS.metronome}</button><button class="top-nav-btn" id="export-btn" aria-label="Share">${ICONS.share}</button></div><div class="top-nav-right-row"><button class="top-nav-btn" aria-label="More">${ICONS.moreVertical}</button></div></div>`
  }
};

function updateTopNav(viewName) {
  const topNav = document.getElementById('top-nav');
  const config = topNavConfigs[viewName] || topNavConfigs.lyrics;
  topNav.innerHTML = config.left + config.right;
  bindExportModal();
}

// ─── Navigation ─────────────────────────────────────────────────────────────

const mainContent = document.getElementById('main-content');
const navItems    = document.querySelectorAll('.nav-item');
const recordBtn   = document.querySelector('.nav-record');

let recordRuntime = {
  timerIntervalId: null,
  sampleIntervalId: null,
  rafId: null,
  generatedSamplesCount: 0,
  debugBookmarkMessageTimeoutId: null,
  initialRulerVisibility: null,
  initialTickLineOpacities: null
};

const DEBUG_BOOKMARK_UI = true;

function ensureBookmarkDebugUi() {
  if (!DEBUG_BOOKMARK_UI) return null;
  const timelineCanvas = document.querySelector('.record-screen .timeline-canvas');
  if (!timelineCanvas) return null;

  let el = document.getElementById('bookmark-debug');
  if (el) return el;

  el = document.createElement('div');
  el.id = 'bookmark-debug';
  el.style.position = 'absolute';
  el.style.left = '20px';
  el.style.right = '20px';
  el.style.bottom = '12px';
  el.style.display = 'flex';
  el.style.justifyContent = 'space-between';
  el.style.gap = '12px';
  el.style.pointerEvents = 'none';
  el.style.fontSize = '13px';
  el.style.color = 'rgba(28, 28, 30, 0.65)';

  const msg = document.createElement('span');
  msg.id = 'bookmark-debug-msg';
  msg.textContent = '';

  const count = document.createElement('span');
  count.id = 'bookmark-debug-count';
  count.textContent = 'Bookmarks: 0';

  el.appendChild(msg);
  el.appendChild(count);
  timelineCanvas.appendChild(el);
  return el;
}

function ensureClipsBadge() {
  const clipsBtn = document.querySelector('#bottom-nav .nav-item[data-view="clips"]');
  if (!clipsBtn) return null;
  const pill = clipsBtn.querySelector('.nav-pill');
  if (!pill) return null;

  if (pill.style.position !== 'relative') pill.style.position = 'relative';

  let badge = document.getElementById('clips-bookmark-badge');
  if (badge) return badge;

  badge = document.createElement('span');
  badge.id = 'clips-bookmark-badge';
  badge.textContent = '';
  badge.style.position = 'absolute';
  badge.style.top = '-2px';
  badge.style.right = '-2px';
  badge.style.minWidth = '16px';
  badge.style.height = '16px';
  badge.style.padding = '0 5px';
  badge.style.borderRadius = '999px';
  badge.style.display = 'none';
  badge.style.alignItems = 'center';
  badge.style.justifyContent = 'center';
  badge.style.fontSize = '11px';
  badge.style.fontWeight = '700';
  badge.style.lineHeight = '16px';
  badge.style.textAlign = 'center';
  badge.style.color = 'white';
  badge.style.background = 'rgba(129, 176, 124, 0.95)';
  badge.style.pointerEvents = 'none';

  pill.appendChild(badge);
  return badge;
}

function updateClipsBadgeCount() {
  const badge = ensureClipsBadge();
  if (!badge) return;
  const count = appState.tempBookmarks.length;
  if (!count) {
    badge.style.display = 'none';
    badge.textContent = '';
    return;
  }
  badge.style.display = 'inline-flex';
  badge.textContent = String(count);
}

function setBookmarkDebugMessage(text) {
  if (!DEBUG_BOOKMARK_UI) return;
  const el = ensureBookmarkDebugUi();
  if (!el) return;
  const msg = document.getElementById('bookmark-debug-msg');
  if (!msg) return;
  msg.textContent = text;

  if (recordRuntime.debugBookmarkMessageTimeoutId) {
    clearTimeout(recordRuntime.debugBookmarkMessageTimeoutId);
    recordRuntime.debugBookmarkMessageTimeoutId = null;
  }
  if (text) {
    recordRuntime.debugBookmarkMessageTimeoutId = setTimeout(() => {
      const nextMsg = document.getElementById('bookmark-debug-msg');
      if (nextMsg) nextMsg.textContent = '';
      recordRuntime.debugBookmarkMessageTimeoutId = null;
    }, 900);
  }
}

function updateBookmarkDebugCount() {
  if (!DEBUG_BOOKMARK_UI) return;
  const el = ensureBookmarkDebugUi();
  if (!el) return;
  const count = document.getElementById('bookmark-debug-count');
  if (!count) return;
  count.textContent = '';
}

function formatMmSs(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function createId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function getNextAutoNumber(prefix) {
  let max = 0;
  for (let i = 0; i < appState.clips.length; i++) {
    const name = appState.clips[i]?.name;
    if (typeof name !== 'string') continue;
    if (!name.startsWith(prefix)) continue;
    const suffix = name.slice(prefix.length).trim();
    const n = Number.parseInt(suffix, 10);
    if (Number.isFinite(n)) max = Math.max(max, n);
  }
  return max + 1;
}

function getNextAutoNumberFromPrefixes(prefixes) {
  let max = 0;
  for (let i = 0; i < appState.clips.length; i++) {
    const name = appState.clips[i]?.name;
    if (typeof name !== 'string') continue;
    for (let p = 0; p < prefixes.length; p++) {
      const prefix = prefixes[p];
      if (!name.startsWith(prefix)) continue;
      const suffix = name.slice(prefix.length).trim();
      const n = Number.parseInt(suffix, 10);
      if (Number.isFinite(n)) max = Math.max(max, n);
    }
  }
  return max + 1;
}

function setActiveBottomNav(viewName) {
  navItems.forEach(nav => nav.classList.remove('active'));
  const btn = document.querySelector(`#bottom-nav .nav-item[data-view="${viewName}"]`);
  if (btn) btn.classList.add('active');
}

function createClipsFromStoppedRecording() {
  const elapsedMs = appState.recordingSession.elapsedMs;
  const endedRecordingDurationMs = Math.max(0, Math.floor(elapsedMs));
  const bookmarks = [...appState.tempBookmarks].sort((a, b) => (a.startMs || 0) - (b.startMs || 0));
  const hasBookmarks = bookmarks.length > 0;
  const recordingNum = getNextAutoNumberFromPrefixes(['Recording', 'Full Recording', 'New Recording']);
  const bookmarkNumStart = getNextAutoNumberFromPrefixes(['Bookmark', 'New Bookmark']);
  const createdAt = Date.now();
  const sessionId = createId('session');

  const nextClips = [];
  const fullClipId = createId('clip');
  const fullClip = {
    id: fullClipId,
    sessionId,
    kind: 'full',
    name: hasBookmarks ? `Full Recording ${recordingNum}` : `Recording ${recordingNum}`,
    startMs: 0,
    endMs: endedRecordingDurationMs,
    durationMs: endedRecordingDurationMs,
    createdAt,
    isNew: true,
    isActive: false,
    source: 'recording'
  };
  assignAudioToClip(fullClip);
  nextClips.push(fullClip);

  for (let i = 0; i < bookmarks.length; i++) {
    const b = bookmarks[i];
    const startMs = Math.max(0, Math.floor(Math.min(b.startMs, b.endMs)));
    const endMs = Math.max(0, Math.floor(Math.max(b.startMs, b.endMs)));
    const durationMs = Math.max(0, endMs - startMs);
    const bookmarkClip = {
      id: createId('clip'),
      sessionId,
      kind: 'bookmark',
      parentFullClipId: fullClipId,
      name: `Bookmark ${bookmarkNumStart + i}`,
      startMs,
      endMs,
      durationMs,
      createdAt,
      isNew: true,
      isActive: false,
      source: 'bookmark'
    };
    assignAudioToClip(bookmarkClip);
    nextClips.push(bookmarkClip);
  }

  for (let i = 0; i < appState.clips.length; i++) {
    if (appState.clips[i]) appState.clips[i].isNew = false;
  }

  const createdCount = nextClips.length;
  if (createdCount === 1) {
    nextClips[0].isActive = true;
  }

  appState.clips = [...nextClips, ...appState.clips];
  appState.tempBookmarks = [];
  appState.expandedPreviewClipId = null;
  updateClipsBadgeCount();
}

function buildExpandedPreviewContents(container, clip, options) {
  const opts = options || {};
  container.style.display = 'block';
  container.style.padding = '14px 16px';

  const header = document.createElement('div');
  header.style.display = 'flex';
  header.style.alignItems = 'center';
  header.style.justifyContent = 'space-between';
  header.style.width = '100%';

  const name = document.createElement('span');
  name.className = 'clip-name';
  name.textContent = clip.name;

  if (clip.isNew) {
    const tag = document.createElement('span');
    tag.textContent = 'NEW';
    tag.style.marginLeft = '8px';
    tag.style.fontSize = '11px';
    tag.style.fontWeight = '700';
    tag.style.color = 'rgba(28, 28, 30, 0.55)';
    name.appendChild(tag);
  }

  const more = document.createElement('span');
  more.innerHTML = ICONS.moreVertical;
  more.style.color = 'rgba(28, 28, 30, 0.55)';
  more.style.display = 'inline-flex';
  more.style.alignItems = 'center';
  more.style.transform = 'rotate(90deg)';
  more.addEventListener('click', (e) => e.stopPropagation());

  header.appendChild(name);
  header.appendChild(more);
  container.appendChild(header);

  const timeline = document.createElement('div');
  timeline.style.display = 'flex';
  timeline.style.alignItems = 'center';
  timeline.style.gap = '10px';
  timeline.style.margin = '14px 0 6px 0';

  const dot = document.createElement('span');
  dot.style.width = '8px';
  dot.style.height = '8px';
  dot.style.borderRadius = '999px';
  dot.style.background = 'rgba(28, 28, 30, 0.65)';
  dot.style.flex = '0 0 auto';

  const line = document.createElement('span');
  line.style.flex = '1 1 auto';
  line.style.height = '1px';
  line.style.background = 'rgba(28, 28, 30, 0.25)';

  const dur = document.createElement('span');
  dur.textContent = formatMmSs(clip.durationMs);
  dur.style.fontSize = '12px';
  dur.style.color = 'rgba(28, 28, 30, 0.55)';
  dur.style.flex = '0 0 auto';

  timeline.appendChild(dot);
  timeline.appendChild(line);
  timeline.appendChild(dur);
  container.appendChild(timeline);

  const controls = document.createElement('div');
  controls.style.display = 'flex';
  controls.style.alignItems = 'center';
  controls.style.justifyContent = 'space-between';
  controls.style.padding = '6px 4px 2px 4px';

  const makeIconBtn = (svg, ariaLabel, onClick) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.setAttribute('aria-label', ariaLabel);
    btn.innerHTML = svg;
    btn.style.background = 'transparent';
    btn.style.border = 'none';
    btn.style.padding = '6px';
    btn.style.cursor = onClick ? 'pointer' : 'default';
    btn.style.color = 'rgba(28, 28, 30, 0.85)';
    btn.style.display = 'inline-flex';
    btn.style.alignItems = 'center';
    btn.style.justifyContent = 'center';
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (onClick) onClick();
    });
    return btn;
  };

  controls.appendChild(makeIconBtn(ICONS.sections, 'Add to Song', opts.onAddToSong));

  // Play button — plays/stops the mapped audio for this clip
  const playBtn = makeIconBtn(ICONS.play, 'Play', null);
  let isPlaying = false;
  playBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isPlaying) {
      stopClipAudio();
      playBtn.innerHTML = ICONS.play;
      isPlaying = false;
    } else {
      playClipAudio(clip);
      playBtn.innerHTML = ICONS.stop;
      isPlaying = true;
      if (_currentAudio) {
        _currentAudio.onended = () => {
          playBtn.innerHTML = ICONS.play;
          isPlaying = false;
        };
      }
    }
  });
  controls.appendChild(playBtn);
  controls.appendChild(makeIconBtn(ICONS.expand, 'Expand', null));

  container.appendChild(controls);
}

function createSectionShell() {
  const prefix = 'New Section';
  let max = 0;
  for (let i = 0; i < appState.sections.length; i++) {
    const s = appState.sections[i];
    if (!s || typeof s.name !== 'string') continue;
    if (!s.name.startsWith(prefix)) continue;
    const suffix = s.name.slice(prefix.length).trim();
    const num = Number.parseInt(suffix, 10);
    if (Number.isFinite(num)) max = Math.max(max, num);
  }
  const section = {
    id: createId('section'),
    name: `${prefix} ${max + 1}`,
    createdAt: Date.now(),
    clipIds: [],
    activeClipIds: []
  };
  appState.sections.push(section);
  return section;
}

function applyAddToSongTopNav() {
  const topNav = document.getElementById('top-nav');
  if (!topNav) return;
  topNav.innerHTML = `
    <span class="top-nav-title top-nav-title-large">Add to song</span>
    <div class="top-nav-right">
      <button class="top-nav-btn" id="ats-close-btn" aria-label="Close">${ICONS.close}</button>
    </div>
  `;
  const btn = document.getElementById('ats-close-btn');
  if (btn) btn.addEventListener('click', exitAddToSongMode);
}

function enterAddToSongMode(clipId) {
  appState.addToSong.active = true;
  appState.addToSong.clipId = clipId;
  appState.addToSong.selectedSectionIds = appState.sections
    .filter(s => Array.isArray(s.clipIds) && s.clipIds.includes(clipId))
    .map(s => s.id);
  applyAddToSongTopNav();
  renderClipsView();
}

function exitAddToSongMode() {
  appState.addToSong.active = false;
  appState.addToSong.clipId = null;
  appState.addToSong.selectedSectionIds = [];
  updateTopNav('clips');
  renderClipsView();
}

function confirmAddToSong() {
  const clipId = appState.addToSong.clipId;
  const selectedIds = appState.addToSong.selectedSectionIds.slice();
  if (!clipId || selectedIds.length === 0) return;

  for (let i = 0; i < selectedIds.length; i++) {
    const section = appState.sections.find(s => s.id === selectedIds[i]);
    if (!section) continue;
    if (!Array.isArray(section.clipIds)) section.clipIds = [];
    if (!Array.isArray(section.activeClipIds)) section.activeClipIds = [];
    if (!section.clipIds.includes(clipId)) section.clipIds.push(clipId);
    if (!section.activeClipIds.includes(clipId)) section.activeClipIds.push(clipId);
  }

  const focusId = selectedIds[0] || null;
  appState.selectedSectionId = focusId;

  appState.addToSong.active = false;
  appState.addToSong.clipId = null;
  appState.addToSong.selectedSectionIds = [];

  setActiveBottomNav('sections');
  loadView('sections');
}

function toggleSectionSelection(sectionId) {
  const list = appState.addToSong.selectedSectionIds;
  const idx = list.indexOf(sectionId);
  if (idx === -1) {
    list.push(sectionId);
  } else {
    list.splice(idx, 1);
  }
  renderAddToSongMode();
}

function renderAddToSongMode() {
  const list = document.querySelector('.clips-view .clip-list');
  if (!list) return;

  const prevTrack = list.querySelector('.ats-sections-track');
  const prevScrollLeft = prevTrack ? prevTrack.scrollLeft : 0;

  list.innerHTML = '';

  const container = document.createElement('div');
  container.className = 'add-to-song-mode';

  const clip = appState.clips.find(c => c.id === appState.addToSong.clipId);
  if (clip) {
    const pinned = document.createElement('div');
    pinned.className = 'clip-row ats-pinned-clip';
    buildExpandedPreviewContents(pinned, clip, { onAddToSong: null });
    container.appendChild(pinned);
  }

  const sectionsArea = document.createElement('div');
  sectionsArea.className = 'ats-sections-area';

  const track = document.createElement('div');
  track.className = 'ats-sections-track';

  const hasSections = Array.isArray(appState.sections) && appState.sections.length > 0;

  if (!hasSections) {
    const empty = document.createElement('div');
    empty.className = 'ats-empty-card';
    empty.setAttribute('role', 'button');
    empty.tabIndex = 0;

    const plus = document.createElement('span');
    plus.className = 'ats-plus';
    plus.innerHTML = ICONS.plus;

    const text = document.createElement('span');
    text.className = 'ats-empty-text';
    text.textContent = 'Add this clip to your song';

    empty.appendChild(plus);
    empty.appendChild(text);

    const handleCreate = () => {
      const section = createSectionShell();
      appState.addToSong.selectedSectionIds.push(section.id);
      renderAddToSongMode();
    };
    empty.addEventListener('click', handleCreate);
    empty.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleCreate();
      }
    });

    track.appendChild(empty);
  } else {
    const pinnedClip = appState.clips.find(c => c.id === appState.addToSong.clipId);

    appState.sections.forEach(section => {
      const isSelected = appState.addToSong.selectedSectionIds.indexOf(section.id) !== -1;

      const card = document.createElement('div');
      card.className = 'ats-section-card' + (isSelected ? ' is-selected' : '');
      card.setAttribute('role', 'button');
      card.tabIndex = 0;

      const titleRow = document.createElement('div');
      titleRow.className = 'ats-section-title-row';

      const title = document.createElement('div');
      title.className = 'ats-section-title';
      title.textContent = section.name || 'Section';
      titleRow.appendChild(title);

      if (isSelected) {
        const badge = document.createElement('div');
        badge.className = 'ats-selected-badge';
        badge.textContent = '✓ Clip added';
        titleRow.appendChild(badge);
      }

      const body = document.createElement('div');
      body.className = 'ats-section-body';

      if (pinnedClip && isSelected) {
        const pill = document.createElement('div');
        pill.className = 'ats-clip-pill';

        const dot = document.createElement('span');
        dot.className = 'ats-clip-pill-dot';

        const pillName = document.createElement('span');
        pillName.className = 'ats-clip-pill-name';
        pillName.textContent = pinnedClip.name;

        pill.appendChild(dot);
        pill.appendChild(pillName);
        body.appendChild(pill);
      }

      const count = document.createElement('div');
      count.className = 'ats-section-count';
      const n = Array.isArray(section.clipIds) ? section.clipIds.length : 0;
      count.textContent = `${n} clip${n === 1 ? '' : 's'}`;

      card.appendChild(titleRow);
      card.appendChild(body);
      card.appendChild(count);

      const onToggle = () => toggleSectionSelection(section.id);
      card.addEventListener('click', onToggle);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle();
        }
      });

      track.appendChild(card);
    });

    const addCard = document.createElement('div');
    addCard.className = 'ats-add-section-card';
    addCard.setAttribute('role', 'button');
    addCard.tabIndex = 0;

    const addPlus = document.createElement('span');
    addPlus.className = 'ats-plus';
    addPlus.innerHTML = ICONS.plus;

    const addLabel = document.createElement('span');
    addLabel.className = 'ats-add-label';
    addLabel.textContent = 'Create a new section';

    addCard.appendChild(addPlus);
    addCard.appendChild(addLabel);

    const handleAdd = () => {
      const section = createSectionShell();
      appState.addToSong.selectedSectionIds.push(section.id);
      renderAddToSongMode();
    };
    addCard.addEventListener('click', handleAdd);
    addCard.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleAdd();
      }
    });

    track.appendChild(addCard);
  }

  sectionsArea.appendChild(track);
  container.appendChild(sectionsArea);

  const selectionCount = appState.addToSong.selectedSectionIds.length;
  const done = document.createElement('button');
  done.type = 'button';
  done.className = 'ats-done-btn' + (selectionCount > 0 ? ' is-enabled' : '');
  done.textContent = 'Done';
  done.disabled = selectionCount === 0;
  done.addEventListener('click', () => {
    if (done.disabled) return;
    confirmAddToSong();
  });
  container.appendChild(done);

  list.appendChild(container);

  if (prevScrollLeft > 0) {
    const newTrack = list.querySelector('.ats-sections-track');
    if (newTrack) newTrack.scrollLeft = prevScrollLeft;
  }
}

function getSectionDurationMs(section) {
  if (!section || !Array.isArray(section.activeClipIds)) return 0;
  return section.activeClipIds.reduce((max, cid) => {
    const clip = appState.clips.find(c => c.id === cid);
    return clip ? Math.max(max, clip.durationMs) : max;
  }, 0);
}

function stopSectionPlayback() {
  if (appState.sectionPlayback.rafId) {
    cancelAnimationFrame(appState.sectionPlayback.rafId);
    appState.sectionPlayback.rafId = null;
  }
  appState.sectionPlayback.isPlaying = false;
  appState.sectionPlayback.startedAt = null;
  const playhead = document.querySelector('.section-playhead');
  if (playhead) playhead.style.left = '0%';
  const playBtn = document.querySelector('.playback-btn[aria-label="Play"]');
  if (playBtn) playBtn.innerHTML = ICONS.play;
  const durEl = document.querySelector('.duration-label');
  if (durEl) {
    let section = appState.sections.find(s => s.id === appState.selectedSectionId);
    if (!section && appState.sections.length > 0) section = appState.sections[0];
    const maxMs = getSectionDurationMs(section);
    const totalSec = Math.floor(maxMs / 1000);
    durEl.textContent = `${Math.floor(totalSec / 60)}:${String(totalSec % 60).padStart(2, '0')}`;
  }
}

function tickSectionPlayback() {
  if (!appState.sectionPlayback.isPlaying) return;
  const elapsed = performance.now() - appState.sectionPlayback.startedAt;

  let section = appState.sections.find(s => s.id === appState.selectedSectionId);
  if (!section && appState.sections.length > 0) section = appState.sections[0];
  const currentActiveDurationMs = getSectionDurationMs(section);

  if (currentActiveDurationMs === 0) {
    const durEl = document.querySelector('.duration-label');
    if (durEl) durEl.textContent = '0:00';
    stopSectionPlayback();
    return;
  }

  const displayedElapsedMs = Math.min(elapsed, currentActiveDurationMs);
  const progress = Math.min(1, displayedElapsedMs / currentActiveDurationMs);
  const displayedSec = Math.floor(displayedElapsedMs / 1000);

  const playhead = document.querySelector('.section-playhead');
  if (playhead) playhead.style.left = (progress * 100) + '%';
  const durEl = document.querySelector('.duration-label');
  if (durEl) durEl.textContent = `${Math.floor(displayedSec / 60)}:${String(displayedSec % 60).padStart(2, '0')}`;

  if (elapsed >= currentActiveDurationMs) {
    stopSectionPlayback();
    return;
  }
  appState.sectionPlayback.rafId = requestAnimationFrame(tickSectionPlayback);
}

function startSectionPlayback() {
  let section = appState.sections.find(s => s.id === appState.selectedSectionId);
  if (!section && appState.sections.length > 0) section = appState.sections[0];
  const durationMs = getSectionDurationMs(section);
  if (!durationMs) return;
  appState.sectionPlayback.isPlaying = true;
  appState.sectionPlayback.startedAt = performance.now();
  appState.sectionPlayback.durationMs = durationMs;
  const playBtn = document.querySelector('.playback-btn[aria-label="Play"]');
  if (playBtn) playBtn.innerHTML = ICONS.stop;
  tickSectionPlayback();
}

function toggleSectionClip(sectionId, clipId) {
  const section = appState.sections.find(s => s.id === sectionId);
  if (!section) return;
  if (!Array.isArray(section.activeClipIds)) section.activeClipIds = [];
  const idx = section.activeClipIds.indexOf(clipId);
  if (idx === -1) {
    section.activeClipIds.push(clipId);
  } else {
    section.activeClipIds.splice(idx, 1);
  }
  bindSectionsView();
}

function bindSongView() {
  const songTimeline = document.querySelector('.song-timeline');
  const inner = document.querySelector('.song-timeline-inner');
  const ruler = document.querySelector('.song-time-ruler');
  const metaSpans = document.querySelectorAll('.song-meta span');
  if (!inner || !songTimeline) return;

  // Clean up previous renders
  inner.querySelectorAll('.song-section-strip').forEach(el => el.remove());
  const prevCard = songTimeline.querySelector('.song-empty-card');
  if (prevCard) prevCard.remove();

  const sections = appState.sections;

  if (!sections || sections.length === 0) {
    if (ruler) ruler.style.display = 'none';

    const card = document.createElement('div');
    card.className = 'song-empty-card';
    card.addEventListener('click', () => {
      setActiveBottomNav('clips');
      loadView('clips');
    });

    const content = document.createElement('div');
    content.className = 'song-empty-card-content';

    const icon = document.createElement('span');
    icon.className = 'song-empty-card-icon';
    icon.innerHTML = `<svg width="28" height="28" viewBox="0 0 22 22" fill="none">
      <line x1="3" y1="9" x2="3" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <line x1="7" y1="6" x2="7" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <line x1="11" y1="3" x2="11" y2="19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <line x1="15" y1="6" x2="15" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <line x1="19" y1="9" x2="19" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`;

    const label = document.createElement('span');
    label.className = 'song-empty-card-label';
    label.textContent = 'Add clips to your song';

    content.appendChild(icon);
    content.appendChild(label);
    card.appendChild(content);
    songTimeline.appendChild(card);

    if (metaSpans[0]) metaSpans[0].textContent = '0 sections';
    if (metaSpans[1]) metaSpans[1].textContent = '0:00';
    return;
  }

  if (ruler) ruler.style.display = '';

  const staticBars = [30,55,75,90,70,85,95,80,70,85,95,80,65,75,85,70,55,65,45,30,40,55,70,85,95,80,65,75,90,80,70,55,45,35,25];

  sections.forEach(section => {
    const strip = document.createElement('div');
    strip.className = 'song-section-strip';
    strip.style.cursor = 'pointer';

    const label = document.createElement('div');
    label.className = 'song-section-label';
    label.textContent = section.name;

    const wave = document.createElement('div');
    wave.className = 'song-section-wave';

    const waveform = document.createElement('div');
    waveform.className = 'waveform';
    staticBars.forEach(h => {
      const span = document.createElement('span');
      span.style.height = h + '%';
      waveform.appendChild(span);
    });

    wave.appendChild(waveform);
    strip.appendChild(label);
    strip.appendChild(wave);

    strip.addEventListener('click', () => {
      appState.selectedSectionId = section.id;
      setActiveBottomNav('sections');
      loadView('sections');
    });

    inner.appendChild(strip);
  });

  const totalMs = sections.reduce((sum, s) => sum + getSectionDurationMs(s), 0);
  const count = sections.length;
  if (metaSpans[0]) metaSpans[0].textContent = `${count} section${count === 1 ? '' : 's'}`;
  if (metaSpans[1]) metaSpans[1].textContent = formatMmSs(totalMs);
}

function bindSectionsView() {
  const timeRuler = document.querySelector('.section-time-ruler');
  if (timeRuler) timeRuler.remove();

  let section = appState.sections.find(s => s.id === appState.selectedSectionId);
  if (!section && appState.sections.length > 0) section = appState.sections[0];

  const navTitle = document.querySelector('#top-nav .top-nav-title');
  if (navTitle && section) navTitle.textContent = section.name;

  const list = document.querySelector('.recording-list');
  if (!list) return;
  list.innerHTML = '';

  const clipIds = section && Array.isArray(section.clipIds) ? section.clipIds : [];
  const activeClipIds = section && Array.isArray(section.activeClipIds) ? section.activeClipIds : [];

  if (clipIds.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'recording-row';
    empty.style.color = 'var(--color-text-muted)';
    empty.style.justifyContent = 'center';
    empty.textContent = section ? 'No clips assigned' : 'No sections yet';
    list.appendChild(empty);
  } else {
    const sortedClipIds = clipIds.slice().sort((a, b) => {
      return (activeClipIds.includes(b) ? 1 : 0) - (activeClipIds.includes(a) ? 1 : 0);
    });
    sortedClipIds.forEach(cid => {
      const clip = appState.clips.find(c => c.id === cid);
      if (!clip) return;

      const isActive = activeClipIds.includes(cid);

      const row = document.createElement('div');
      row.className = 'recording-row';
      row.style.opacity = isActive ? '1' : '0.35';
      row.style.cursor = 'pointer';

      const icon = document.createElement('div');
      icon.className = 'recording-icon';
      icon.innerHTML = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><ellipse cx="11" cy="14" rx="5" ry="3.5" stroke="currentColor" stroke-width="1.4"/><path d="M6 14V9a5 5 0 0110 0v5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><line x1="11" y1="4" x2="11" y2="6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><line x1="7" y1="6" x2="8.5" y2="7.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><line x1="15" y1="6" x2="13.5" y2="7.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`;

      const name = document.createElement('span');
      name.className = 'recording-name';
      name.textContent = clip.name;

      row.appendChild(icon);
      row.appendChild(name);

      row.addEventListener('click', () => toggleSectionClip(section.id, cid));

      list.appendChild(row);
    });
  }

  const trackLabel = document.querySelector('.section-track-label');
  if (trackLabel && section) trackLabel.textContent = section.name;

  const countEl = document.querySelector('.section-clip-count');
  if (countEl) {
    const n = clipIds.length;
    countEl.textContent = `${n} clip${n === 1 ? '' : 's'}`;
  }

  const maxMs = getSectionDurationMs(section);
  const totalSec = Math.floor(maxMs / 1000);
  const durText = `${Math.floor(totalSec / 60)}:${String(totalSec % 60).padStart(2, '0')}`;
  const durEl = document.querySelector('.duration-label');
  if (durEl) durEl.textContent = durText;

  const waveform = document.querySelector('.waveform');
  if (waveform) waveform.style.visibility = activeClipIds.length === 0 ? 'hidden' : 'visible';

  const track = document.querySelector('.section-track');
  if (track && !track.querySelector('.section-playhead')) {
    const playhead = document.createElement('div');
    playhead.className = 'section-playhead';
    track.appendChild(playhead);
  }

  const playBtn = document.querySelector('.playback-btn[aria-label="Play"]');
  if (playBtn && !playBtn.dataset.playBound) {
    playBtn.dataset.playBound = '1';
    playBtn.addEventListener('click', () => {
      if (appState.sectionPlayback.isPlaying) {
        stopSectionPlayback();
      } else {
        startSectionPlayback();
      }
    });
  }
}

function renderClipsView() {
  if (appState.addToSong && appState.addToSong.active) {
    renderAddToSongMode();
    return;
  }

  const list = document.querySelector('.clips-view .clip-list');
  if (!list) return;
  list.innerHTML = '';

  const sessionOrder = [];
  const groupsBySessionId = new Map();
  const orphanClips = [];

  appState.clips.forEach(clip => {
    if (!clip) return;
    if (!clip.sessionId) {
      orphanClips.push(clip);
      return;
    }
    if (!groupsBySessionId.has(clip.sessionId)) {
      groupsBySessionId.set(clip.sessionId, { full: null, bookmarks: [] });
      sessionOrder.push(clip.sessionId);
    }
    const group = groupsBySessionId.get(clip.sessionId);
    if (clip.kind === 'full' && !group.full) {
      group.full = clip;
      return;
    }
    if (clip.kind === 'bookmark') {
      group.bookmarks.push(clip);
      return;
    }
    orphanClips.push(clip);
  });

  const renderRow = (clip) => {
    const isExpanded = appState.expandedPreviewClipId === clip.id;

    const row = document.createElement('div');
    row.className = 'clip-row';
    row.style.cursor = 'pointer';

    if (clip.kind === 'bookmark') {
      row.style.paddingLeft = '12px';
    }

    if (isExpanded) {
      buildExpandedPreviewContents(row, clip, {
        onAddToSong: () => enterAddToSongMode(clip.id)
      });
    } else {
      const name = document.createElement('span');
      name.className = 'clip-name';
      name.textContent = clip.name;

      if (clip.isNew) {
        const tag = document.createElement('span');
        tag.textContent = 'NEW';
        tag.style.marginLeft = '8px';
        tag.style.fontSize = '11px';
        tag.style.fontWeight = '700';
        tag.style.color = 'rgba(28, 28, 30, 0.55)';
        name.appendChild(tag);
      }

      const duration = document.createElement('span');
      duration.className = 'clip-duration';
      duration.textContent = formatMmSs(clip.durationMs);

      row.appendChild(name);
      row.appendChild(duration);
    }

    row.addEventListener('click', () => {
      stopClipAudio();
      appState.expandedPreviewClipId = isExpanded ? null : clip.id;
      renderClipsView();
    });

    list.appendChild(row);
  };

  sessionOrder.forEach(sessionId => {
    const group = groupsBySessionId.get(sessionId);
    if (!group) return;
    group.bookmarks
      .sort((a, b) => (b.startMs || 0) - (a.startMs || 0))
      .forEach(renderRow);
    if (group.full) renderRow(group.full);
  });

  orphanClips.forEach(renderRow);
}

function setRecordDomRulerVisible(isVisible) {
  const timeRuler = document.querySelector('.record-screen .time-ruler');
  const tickLines = document.querySelectorAll('.record-screen .timeline-canvas .tick-line');

  if (timeRuler) {
    if (recordRuntime.initialRulerVisibility == null) {
      recordRuntime.initialRulerVisibility = timeRuler.style.visibility || '';
    }
    timeRuler.style.visibility = isVisible ? (recordRuntime.initialRulerVisibility || '') : 'hidden';
  }

  if (tickLines && tickLines.length) {
    if (recordRuntime.initialTickLineOpacities == null) {
      recordRuntime.initialTickLineOpacities = Array.from(tickLines).map(el => el.style.opacity || '');
    }
    tickLines.forEach((el, idx) => {
      el.style.opacity = isVisible ? (recordRuntime.initialTickLineOpacities[idx] || '') : '0';
    });
  }
}

function stopFakeRecordingSession() {
  if (recordRuntime.timerIntervalId) {
    clearInterval(recordRuntime.timerIntervalId);
    recordRuntime.timerIntervalId = null;
  }
  if (recordRuntime.sampleIntervalId) {
    clearInterval(recordRuntime.sampleIntervalId);
    recordRuntime.sampleIntervalId = null;
  }
  if (recordRuntime.rafId) {
    cancelAnimationFrame(recordRuntime.rafId);
    recordRuntime.rafId = null;
  }

  if (appState.recordingSession.activeBookmarkStartMs != null) {
    const startMs = appState.recordingSession.activeBookmarkStartMs;
    const endMs = appState.recordingSession.elapsedMs;
    if (endMs >= startMs) {
      appState.tempBookmarks.push({ startMs, endMs });
    } else {
      appState.tempBookmarks.push({ startMs: endMs, endMs: startMs });
    }
    appState.recordingSession.activeBookmarkStartMs = null;
    console.log('[bookmark] auto-close on stop', { startMs, endMs });
    console.log('[bookmark] tempBookmarks', appState.tempBookmarks);
    updateBookmarkDebugCount();
    updateClipsBadgeCount();
  }

  appState.recordingSession.isRecording = false;
  stopRecordingAudio();
}

function startFakeRecordingSession() {
  stopFakeRecordingSession();

  appState.recordingSession.isRecording = true;
  appState.recordingSession.startedAt = Date.now();
  appState.recordingSession.elapsedMs = 0;
  appState.recordingSession.waveform = [];
  appState.recordingSession.activeBookmarkStartMs = null;
  appState.tempBookmarks = [];
  setRecordDomRulerVisible(false);

  // Play audio to simulate recording
  playRecordingAudio();

  ensureBookmarkDebugUi();
  updateBookmarkDebugCount();
  updateClipsBadgeCount();
  recordRuntime.generatedSamplesCount = 0;
}

function drawFakeWaveform(canvas, samples, elapsedMs, msPerSample, sampleGapPx) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  setRecordDomRulerVisible(false);

  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  const centerX = Math.floor(w / 2);
  const midY = Math.floor(h / 2);
  const barWidth = 2;
  const gap = sampleGapPx;
  const maxBarHeight = Math.max(10, Math.floor(h * 0.55));

  const rulerPxPerSecond = (1000 / msPerSample) * gap;
  const elapsedSec = elapsedMs / 1000;

  ctx.strokeStyle = 'rgba(28, 28, 30, 0.10)';
  ctx.fillStyle = 'rgba(28, 28, 30, 0.35)';
  ctx.lineWidth = 1;

  const labelY = 18;

  ctx.font = '12px -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'rgba(28, 28, 30, 0.45)';

  const labelOffsetPx = 4;

  const secsLeft = Math.ceil(centerX / rulerPxPerSecond) + 2;
  const secsRight = Math.ceil((w - centerX) / rulerPxPerSecond) + 2;
  const minS = Math.max(0, Math.floor(elapsedSec) - secsLeft);
  const maxS = Math.floor(elapsedSec) + secsRight;

  for (let s = minS; s <= maxS; s++) {
    const x = centerX + (s - elapsedSec) * rulerPxPerSecond;
    if (x < 0) continue;
    if (x > w) continue;

    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();

    ctx.fillText(formatMmSs(s * 1000), x + labelOffsetPx, labelY);
  }

  const subSampleShiftPx = ((elapsedMs % msPerSample) / msPerSample) * gap;

  const isTimeInRange = (tMs, range) => {
    if (!range) return false;
    const a = Math.min(range.startMs, range.endMs);
    const b = Math.max(range.startMs, range.endMs);
    return tMs >= a && tMs <= b;
  };

  const isBarBookmarked = (tMs) => {
    if (appState.recordingSession.activeBookmarkStartMs != null) {
      if (isTimeInRange(tMs, { startMs: appState.recordingSession.activeBookmarkStartMs, endMs: elapsedMs })) {
        return true;
      }
    }
    for (let i = 0; i < appState.tempBookmarks.length; i++) {
      if (isTimeInRange(tMs, appState.tempBookmarks[i])) return true;
    }
    return false;
  };

  const normalBarColor = 'rgba(28, 28, 30, 0.35)';
  const bookmarkedBarColor = 'rgba(129, 176, 124, 0.45)';

  for (let i = 0; i < samples.length; i++) {
    const amp = samples[i];
    const barHeight = Math.max(2, Math.floor(amp * maxBarHeight));
    const x = centerX - i * gap - subSampleShiftPx;
    if (x < 0) break;

    const tMs = elapsedMs - i * msPerSample;
    ctx.fillStyle = isBarBookmarked(tMs) ? bookmarkedBarColor : normalBarColor;
    ctx.fillRect(x - (barWidth / 2), midY - (barHeight / 2), barWidth, barHeight);
  }

  const pxPerMs = gap / msPerSample;
  const drawMarker = (markerMs, color) => {
    const x = centerX + (markerMs - elapsedMs) * pxPerMs;
    if (x < 0 || x > w) return;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();

    const r = 7;
    ctx.beginPath();
    ctx.arc(x, 0 + r, r, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x, h - r, r, 0, Math.PI * 2);
    ctx.fill();
  };

  const completedMarkerColor = 'rgba(129, 176, 124, 0.75)';
  for (let i = 0; i < appState.tempBookmarks.length; i++) {
    const b = appState.tempBookmarks[i];
    if (!b) continue;
    drawMarker(b.startMs, completedMarkerColor);
    drawMarker(b.endMs, completedMarkerColor);
  }
  if (appState.recordingSession.activeBookmarkStartMs != null) {
    const activeMarkerColor = 'rgba(129, 176, 124, 0.85)';
    drawMarker(appState.recordingSession.activeBookmarkStartMs, activeMarkerColor);
  }
}

function bindRecordView() {
  const timelineCanvas = document.querySelector('.record-screen .timeline-canvas');
  const canvas = document.querySelector('.record-screen .recording-canvas');
  if (!timelineCanvas || !canvas) return;

  const msPerSample = 70;
  const sampleGapPx = 6;

  setRecordDomRulerVisible(false);

  if (!timelineCanvas.dataset.bookmarkBound) {
    timelineCanvas.dataset.bookmarkBound = '1';
    console.log('[bookmark] bound');
    timelineCanvas.addEventListener('click', () => {
      console.log('[bookmark] timeline clicked');
      if (!appState.recordingSession.isRecording) return;
      const nowMs = appState.recordingSession.elapsedMs;
      const startMs = appState.recordingSession.activeBookmarkStartMs;
      if (startMs == null) {
        appState.recordingSession.activeBookmarkStartMs = nowMs;
        console.log('[bookmark] start', { startMs: nowMs });
        console.log('[bookmark] tempBookmarks', appState.tempBookmarks);
        updateBookmarkDebugCount();
        updateClipsBadgeCount();
        return;
      }

      if (nowMs >= startMs) {
        appState.tempBookmarks.push({ startMs, endMs: nowMs });
      } else {
        appState.tempBookmarks.push({ startMs: nowMs, endMs: startMs });
      }
      appState.recordingSession.activeBookmarkStartMs = null;
      console.log('[bookmark] end', { startMs, endMs: nowMs });
      console.log('[bookmark] tempBookmarks', appState.tempBookmarks);
      updateBookmarkDebugCount();
      updateClipsBadgeCount();
    });
  }

  const resizeCanvas = () => {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const nextW = Math.max(1, Math.floor(rect.width * dpr));
    const nextH = Math.max(1, Math.floor(rect.height * dpr));
    if (canvas.width !== nextW || canvas.height !== nextH) {
      canvas.width = nextW;
      canvas.height = nextH;
    }
  };

  resizeCanvas();

  const maxSamples = () => {
    return Math.max(1, Math.floor((canvas.width / 2) / sampleGapPx) - 2);
  };

  const tick = () => {
    if (!appState.recordingSession.isRecording) return;
    resizeCanvas();
    appState.recordingSession.elapsedMs = Date.now() - appState.recordingSession.startedAt;

    const expectedSamples = Math.floor(appState.recordingSession.elapsedMs / msPerSample);
    while (recordRuntime.generatedSamplesCount < expectedSamples) {
      const raw = 0.15 + Math.random() * 0.85;
      const prev = appState.recordingSession.waveform[0];
      const amp = (typeof prev === 'number') ? (prev * 0.7 + raw * 0.3) : raw;
      appState.recordingSession.waveform.unshift(amp);
      recordRuntime.generatedSamplesCount += 1;

      const cap = maxSamples();
      if (appState.recordingSession.waveform.length > cap) {
        appState.recordingSession.waveform.length = cap;
      }
    }

    drawFakeWaveform(
      canvas,
      appState.recordingSession.waveform,
      appState.recordingSession.elapsedMs,
      msPerSample,
      sampleGapPx
    );
    recordRuntime.rafId = requestAnimationFrame(tick);
  };

  recordRuntime.rafId = requestAnimationFrame(tick);
}

function loadView(viewName) {
  if (viewName !== 'sections') stopSectionPlayback();
  if (appState.currentView === 'record' && viewName !== 'record') {
    stopFakeRecordingSession();
  }
  if (viewName !== 'clips' && appState.addToSong && appState.addToSong.active) {
    appState.addToSong.active = false;
    appState.addToSong.clipId = null;
    appState.addToSong.selectedSectionIds = [];
  }
  fetch(`views/${viewName}.html`, { cache: 'no-store' })
    .then(response => {
      if (!response.ok) throw new Error(`Could not load view: ${viewName}`);
      return response.text();
    })
    .then(html => {
      mainContent.innerHTML = html;
      const appEl = document.getElementById('app');
      if (appEl) appEl.dataset.view = viewName;
      appState.currentView = viewName;
      updateTopNav(viewName);
      if (viewName === 'clips' && appState.addToSong && appState.addToSong.active) {
        applyAddToSongTopNav();
      }
      if (viewName === 'lyrics') bindLyricsView();
      if (viewName === 'clips') renderClipsView();
      if (viewName === 'record') {
        setRecordDomRulerVisible(false);
        if (appState.recordingSession.isRecording) bindRecordView();
      }
      if (viewName === 'sections') bindSectionsView();
      if (viewName === 'song') bindSongView();
    })
    .catch(error => {
      mainContent.innerHTML = `<p class="view-placeholder" style="padding:24px 20px">Error loading view: ${error.message}</p>`;
    });
}

// Regular nav items — active pill moves between these
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(nav => nav.classList.remove('active'));
    item.classList.add('active');
    loadView(item.dataset.view);
  });
});

// Record button — no active pill
recordBtn.addEventListener('click', () => {
  navItems.forEach(nav => nav.classList.remove('active'));
  if (appState.currentView !== 'record') {
    loadView('record');
    startFakeRecordingSession();
    return;
  }

  if (appState.recordingSession.isRecording) {
    stopFakeRecordingSession();
    createClipsFromStoppedRecording();
    appState.expandedPreviewClipId = null;
    setActiveBottomNav('clips');
    loadView('clips');
  } else {
    startFakeRecordingSession();
    bindRecordView();
  }
});

// ─── Export Modal ────────────────────────────────────────────────────────────

const exportModal   = document.getElementById('export-modal');
const modalClose    = document.getElementById('modal-close');
const modalBackdrop = exportModal.querySelector('.modal-backdrop');

function bindExportModal() {
  const btn = document.getElementById('export-btn');
  if (btn) btn.addEventListener('click', () => exportModal.classList.remove('hidden'));
}

function closeModal() {
  exportModal.classList.add('hidden');
}

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

// ─── Initialise ──────────────────────────────────────────────────────────────

loadView('lyrics');
