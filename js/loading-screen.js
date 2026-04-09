/* ── LOADING SCREEN ── */
(function(){
  'use strict';

  var overlay = document.createElement('div');
  overlay.id = 'loading-screen';
  overlay.innerHTML =
    '<div class="ls-inner">' +
      '<div class="ls-flowey">' +
        '<img src="assets/images/gallery/flowey-sheet.png" alt="Flowey" style="width:100%;height:100%;image-rendering:pixelated;object-fit:contain;animation:lsGrow 1.5s ease forwards;transform-origin:center bottom;opacity:0;">' +
      '</div>' +
      '<div class="ls-text" id="ls-typewriter"></div>' +
    '</div>';

  var style = document.createElement('style');
  style.textContent =
    '#loading-screen{' +
      'position:fixed;inset:0;z-index:100000;background:#000;' +
      'display:flex;align-items:center;justify-content:center;' +
      'transition:opacity 0.6s ease, visibility 0.6s ease;' +
    '}' +
    '#loading-screen.ls-hide{opacity:0;visibility:hidden;pointer-events:none;}' +
    '.ls-inner{text-align:center;}' +
    '.ls-flowey{width:220px;height:220px;margin:0 auto 32px;}' +
    '@keyframes lsGrow{0%{transform:scale(0) translateY(30px);opacity:0}60%{transform:scale(1.1) translateY(-5px);opacity:1}100%{transform:scale(1) translateY(0);opacity:1}}' +
    '.ls-text{font-family:"Press Start 2P",monospace;font-size:.65rem;color:#ffff00;letter-spacing:.1em;min-height:2em;}' +
    '@keyframes lsFadeOut{0%{opacity:1}100%{opacity:0}}';
  document.head.appendChild(style);
  document.body.appendChild(overlay);

  /* Typewriter */
  var lsText = document.getElementById('ls-typewriter');
  var lsMsg = '* Stay Determined...';
  var lsIdx = 0;
  function lsType(){
    if(lsIdx < lsMsg.length){
      lsText.textContent += lsMsg[lsIdx];
      lsIdx++;
      setTimeout(lsType, 55);
    } else {
      setTimeout(hideLoading, 600);
    }
  }
  setTimeout(lsType, 400);

  function hideLoading(){
    overlay.classList.add('ls-hide');
    setTimeout(function(){ overlay.remove(); }, 700);
  }

  /* Safety: hide after 8s no matter what */
  setTimeout(hideLoading, 8000);
})();
