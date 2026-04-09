/* ── DISCORD SERVER STATS (Manual via Admin Panel) ── */
(function(){
  'use strict';

  var STORAGE_KEY = 'bh_discord_stats';

  function getStats(){
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || null;
    } catch(e) { return null; }
  }

  function renderStatsBar(){
    var bar = document.getElementById('discord-stats-bar');
    if(!bar) return;

    var data = getStats();
    var totalEl = bar.querySelector('.ds-total');
    var onlineEl = bar.querySelector('.ds-online');
    var boostsEl = bar.querySelector('.ds-boosts');

    if(data && (data.total > 0 || data.online > 0 || data.boosts > 0)){
      if(totalEl && window.animateCounter) window.animateCounter(totalEl, data.total, 2000, '', '');
      else if(totalEl) totalEl.textContent = (data.total || 0).toLocaleString();

      if(onlineEl && window.animateCounter) window.animateCounter(onlineEl, data.online, 1500, '', '');
      else if(onlineEl) onlineEl.textContent = (data.online || 0).toLocaleString();

      if(boostsEl && window.animateCounter) window.animateCounter(boostsEl, data.boosts, 1200, '', '');
      else if(boostsEl) boostsEl.textContent = (data.boosts || 0).toLocaleString();
    }

    bar.classList.add('ds-loaded');
  }

  /* Expose for admin panel to call after saving */
  window.refreshDiscordStats = renderStatsBar;

  /* Expose for manual console override */
  window.setDiscordStatsManual = function(total, online, boosts){
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      total: total || 0,
      online: online || 0,
      boosts: boosts || 0
    }));
    renderStatsBar();
  };

  document.addEventListener('DOMContentLoaded', function(){
    renderStatsBar();
  });
})();
