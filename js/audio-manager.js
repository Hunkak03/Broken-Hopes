/* ── AUDIO MANAGER: Background Music + Sound Effects ── */
(function(){
  'use strict';

  var AudioMgr = {
    bgMusic: null,
    bgEnabled: false,
    sfxEnabled: false,
    sfxSelect: null,
    sfxConfirm: null,
    initialized: false,

    init: function(){
      if(this.initialized) return;
      this.initialized = true;

      /* Background music — Snowdin Town: Uwa!! So Temperate♫ */
      this.bgMusic = new Audio();
      this.bgMusic.src = 'assets/audio/toby fox - UNDERTALE Soundtrack - 06 Uwa!! So Temperate♫.mp3';
      this.bgMusic.loop = true;
      this.bgMusic.volume = 0.35;
      this.bgMusic.preload = 'auto';

      /* SFX */
      this.sfxSelect = new Audio('assets/audio/select.wav');
      this.sfxSelect.volume = 0.2;
      this.sfxConfirm = new Audio('assets/audio/confirm.wav');
      this.sfxConfirm.volume = 0.25;

      /* Handle missing files gracefully */
      this.bgMusic.addEventListener('error', function(){ AudioMgr.bgMusic = null; });
      this.sfxSelect.addEventListener('error', function(){ AudioMgr.sfxSelect = null; });
      this.sfxConfirm.addEventListener('error', function(){ AudioMgr.sfxConfirm = null; });
    },

    toggleBgMusic: function(){
      if(!this.bgMusic) return this.bgEnabled = false;
      if(this.bgEnabled){
        this.bgMusic.pause();
        this.bgEnabled = false;
      } else {
        this.bgMusic.play().catch(function(){});
        this.bgEnabled = true;
      }
      return this.bgEnabled;
    },

    playSelect: function(){
      if(!this.sfxEnabled || !this.sfxSelect) return;
      var a = this.sfxSelect.cloneNode();
      a.volume = 0.2;
      a.play().catch(function(){});
    },

    playConfirm: function(){
      if(!this.sfxEnabled || !this.sfxConfirm) return;
      var a = this.sfxConfirm.cloneNode();
      a.volume = 0.25;
      a.play().catch(function(){});
    },

    toggleSfx: function(){
      this.sfxEnabled = !this.sfxEnabled;
      return this.sfxEnabled;
    }
  };

  window.AudioMgr = AudioMgr;

  /* Attach SFX to all buttons/links on hover + click */
  function attachSfxListeners(){
    document.addEventListener('mouseover', function(e){
      var btn = e.target.closest('a, button, .battle-btn, .member-chip, .rule-card');
      if(btn) AudioMgr.playSelect();
    });
    document.addEventListener('click', function(e){
      var btn = e.target.closest('a, button, .battle-btn, .member-chip');
      if(btn) AudioMgr.playConfirm();
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    AudioMgr.init();
    attachSfxListeners();
  });
})();
