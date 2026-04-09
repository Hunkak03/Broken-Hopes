/* ── FLOATING PIXEL PARTICLES ── */
(function(){
  'use strict';

  function createParticleLayer(container, count, color, size, speed){
    container = container || document.body;
    count = count || 40;
    color = color || 'rgba(255,255,0,0.3)';
    size = size || 3;
    speed = speed || 1;

    var layer = document.createElement('div');
    layer.style.cssText = 'position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;';
    container.appendChild(layer);

    for(var i = 0; i < count; i++){
      var p = document.createElement('div');
      var x = Math.random() * 100;
      var delay = Math.random() * 20;
      var dur = (15 + Math.random() * 25) / speed;
      var s = size * (0.5 + Math.random());
      p.style.cssText =
        'position:absolute;' +
        'left:' + x + '%;' +
        'bottom:-' + (5 + Math.random() * 10) + 'px;' +
        'width:' + s + 'px;' +
        'height:' + s + 'px;' +
        'background:' + color + ';' +
        'animation:pixelFloat' + i + ' ' + dur + 's ' + delay + 's linear infinite;' +
        'opacity:' + (0.15 + Math.random() * 0.35) + ';';
      layer.appendChild(p);
    }

    /* Inject keyframes */
    var style = document.createElement('style');
    style.textContent =
      '@keyframes pixelFloat' + layer.dataset.id + '{' +
        '0%{transform:translateY(0) translateX(0);opacity:0}' +
        '10%{opacity:0.4}' +
        '90%{opacity:0.4}' +
        '100%{transform:translateY(-110vh) translateX(' + (Math.random() > 0.5 ? '' : '-') + (20 + Math.random()*40) + 'px);opacity:0}' +
      '}';
    document.head.appendChild(style);
  }

  window.createParticleLayer = createParticleLayer;

  /* Auto-init */
  document.addEventListener('DOMContentLoaded', function(){
    createParticleLayer(document.body, 35, 'rgba(255,255,0,0.25)', 3, 0.7);
  });
})();
