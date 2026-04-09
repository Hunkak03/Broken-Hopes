/* ── EASTER EGGS ── */
(function(){
  'use strict';

  /* Konami Code: ↑↑↓↓←→←→BA */
  var KONAMI = [38,38,40,40,37,39,37,39,66,65];
  var konamiIdx = 0;

  document.addEventListener('keydown', function(e){
    if(e.keyCode === KONAMI[konamiIdx]){
      konamiIdx++;
      if(konamiIdx === KONAMI.length){
        konamiIdx = 0;
        triggerKonami();
      }
    } else {
      konamiIdx = 0;
    }
  });

  function triggerKonami(){
    /* Screen goes yellow, then back to normal with a flash */
    var flash = document.createElement('div');
    flash.style.cssText = 'position:fixed;inset:0;z-index:99999;background:#ffff00;animation:konamiFlash 1.5s ease forwards;pointer-events:none;';
    document.body.appendChild(flash);

    var style = document.createElement('style');
    style.textContent = '@keyframes konamiFlash{0%{opacity:0}15%{opacity:1}100%{opacity:0}}';
    document.head.appendChild(style);

    /* Spawn 50 hearts */
    for(var i = 0; i < 50; i++){
      (function(idx){
        setTimeout(function(){
          var heart = document.createElement('div');
          heart.textContent = '❤';
          heart.style.cssText =
            'position:fixed;z-index:99998;font-size:' + (24 + Math.random()*48) + 'px;' +
            'left:' + Math.random()*100 + 'vw;' +
            'top:-60px;color:' + ['#ff3333','#ffff00','#ff8800','#4455ff','#cc33ff','#33ff66'][Math.floor(Math.random()*6)] + ';' +
            'animation:konamiHeart ' + (2+Math.random()*3) + 's ease forwards;pointer-events:none;';
          document.body.appendChild(heart);
          setTimeout(function(){ heart.remove(); }, 5000);
        }, idx * 60);
      })(i);
    }

    var hStyle = document.createElement('style');
    hStyle.textContent =
      '@keyframes konamiHeart{' +
        '0%{transform:translateY(0) rotate(0deg);opacity:1}' +
        '100%{transform:translateY(110vh) rotate(' + (Math.random()>0.5?'':'-') + '720deg);opacity:0}' +
      '}';
    document.head.appendChild(hStyle);
  }

  /* Secret: Click Flowey sprite 10 times */
  (function(){
    var count = 0;
    document.addEventListener('click', function(e){
      var sprite = e.target.closest('.dialogue-sprite');
      if(sprite){
        count++;
        if(count >= 10){
          count = 0;
          sprite.style.animation = 'none';
          sprite.style.transform = 'scale(2) rotate(360deg)';
          sprite.style.transition = 'transform 1s ease';
          setTimeout(function(){
            sprite.style.transform = '';
            sprite.style.animation = '';
          }, 1200);
        }
      }
    });
  })();

  /* Secret: console message */
  console.log(
    '%c❤ BROKEN HOPES ❤\n\n' +
    '* You found the console.\n' +
    '* Stay determined.\n\n' +
    '%cTip: Try the Konami Code... ↑↑↓↓←→←→BA',
    'color:#ffff00;font-size:18px;font-weight:bold;',
    'color:#aaa;font-size:12px;'
  );
})();
