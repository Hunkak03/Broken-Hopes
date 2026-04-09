/* ── ANIMATED NUMBER COUNTERS ── */
(function(){
  'use strict';

  function animateCounter(el, target, duration, prefix, suffix){
    prefix = prefix || '';
    suffix = suffix || '';
    duration = duration || 1800;
    const start = performance.now();
    const from = 0;

    function tick(now){
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(from + (target - from) * eased);
      el.textContent = prefix + current.toLocaleString() + suffix;
      if(progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  window.animateCounter = animateCounter;

  /* Auto-init counters with [data-counter] attribute */
  function initCounters(){
    document.querySelectorAll('[data-counter]').forEach(function(el){
      var target = parseInt(el.getAttribute('data-counter'), 10);
      if(isNaN(target)) return;
      var prefix = el.getAttribute('data-prefix') || '';
      var suffix = el.getAttribute('data-suffix') || '';
      var duration = parseInt(el.getAttribute('data-duration'), 10) || 1800;
      var triggered = false;

      var observer = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting && !triggered){
          triggered = true;
          animateCounter(el, target, duration, prefix, suffix);
          observer.unobserve(el);
        }
      }, { threshold: 0.5 });
      observer.observe(el);
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initCounters);
  } else {
    initCounters();
  }
})();
