/* ── GALLERY CAROUSEL ── */
(function(){
  'use strict';

  /*
   * ADD YOUR IMAGES:
   * Put images in: assets/images/gallery/
   * Then add entries to the GALLERY array below.
   *
   * Example:
   *   { src: 'assets/images/gallery/screenshot1.png', caption: 'Our Roblox Game' }
   */
  var GALLERY = [
    { src: 'assets/images/gallery/flowey-sheet.png',   caption: 'Flowey — El primero en saludarte' },
    { src: 'assets/images/gallery/sans-sheet.png',      caption: 'Sans — Heh. You thought.' },
    { src: 'assets/images/gallery/toriel-sheet.png',    caption: 'Toriel — La Madre del Subsuelo' },
    { src: 'assets/images/gallery/battle-ui-sheet.png', caption: 'Battle UI — El sistema de combate' },
    { src: 'assets/images/gallery/mettaton-sheet.png',  caption: 'Mettaton EX — ¡Brilla con fuerza!' },
  ];

  /* Allow admin override */
  if(window.GALLERY_OVERRIDE){
    GALLERY = window.GALLERY_OVERRIDE;
  }

  function initGallery(){
    var wrap = document.getElementById('gallery-carousel');
    if(!wrap) return;
    var slides = document.getElementById('gallery-slides');
    if(!slides) return;
    var dots = document.getElementById('gallery-dots');

    if(!GALLERY.length){
      wrap.innerHTML = '<p style="text-align:center;color:#444;font-size:.5rem;font-style:italic;padding:40px 0;">* Gallery empty — add images to assets/images/gallery/</p>';
      return;
    }

    /* Build slides */
    slides.innerHTML = '';
    GALLERY.forEach(function(img, i){
      var slide = document.createElement('div');
      slide.className = 'gal-slide';
      slide.style.cssText = 'min-width:100%;text-align:center;padding:20px;';
      slide.innerHTML =
        '<img src="' + img.src + '" alt="' + (img.caption||'') + '" ' +
          'style="max-width:90vw;max-height:420px;width:auto;height:auto;display:block;margin:0 auto 16px;border:4px solid #fff;box-shadow:4px 4px 0 rgba(255,255,255,.15);image-rendering:pixelated;" ' +
          'onerror="this.onerror=null;this.style.border=\'4px dashed #333\';this.style.minHeight=\'200px\';this.alt=\'* Imagen no encontrada: ' + img.src + '\'">' +
        '<p style="font-size:.5rem;color:#aaa;margin-top:8px;">' + (img.caption||'') + '</p>';
      slides.appendChild(slide);
    });

    /* Build dots */
    if(dots){
      dots.innerHTML = '';
      GALLERY.forEach(function(_, i){
        var dot = document.createElement('button');
        dot.className = 'gal-dot' + (i===0 ? ' gal-dot-active' : '');
        dot.setAttribute('data-idx', i);
        dot.onclick = function(){ goToSlide(i); };
        dots.appendChild(dot);
      });
    }

    /* Nav buttons */
    var prevBtn = document.getElementById('gal-prev');
    var nextBtn = document.getElementById('gal-next');
    if(prevBtn) prevBtn.onclick = function(){ goToSlide(currentIdx - 1); };
    if(nextBtn) nextBtn.onclick = function(){ goToSlide(currentIdx + 1); };

    currentIdx = 0;
    updateCarousel();
  }

  var currentIdx = 0;
  function goToSlide(idx){
    if(idx < 0) idx = GALLERY.length - 1;
    if(idx >= GALLERY.length) idx = 0;
    currentIdx = idx;
    updateCarousel();
  }

  function updateCarousel(){
    var slides = document.getElementById('gallery-slides');
    if(slides) slides.style.transform = 'translateX(-' + (currentIdx * 100) + '%)';
    document.querySelectorAll('.gal-dot').forEach(function(d, i){
      d.classList.toggle('gal-dot-active', i === currentIdx);
    });
  }

  window.initGallery = initGallery;
  document.addEventListener('DOMContentLoaded', function(){
    setTimeout(initGallery, 200);
  });
})();
