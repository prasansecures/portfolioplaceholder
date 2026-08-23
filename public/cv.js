(function () {
  var sheet = document.querySelector('.sheet');

  function fit() {
    sheet.style.transform = '';
    if (window.innerWidth > 900) return;
    var w = sheet.getBoundingClientRect().width;
    if (!w) return;
    var scale = Math.min(1, (window.innerWidth - 20) / w);
    var tx = Math.max(0, (window.innerWidth - w * scale) / 2);
    sheet.style.transform = 'translateX(' + tx + 'px) scale(' + scale + ')';
  }

  window.addEventListener('resize', fit);
  setTimeout(fit, 200);

  var print = document.querySelector('[data-action="print"]');
  if (print) {
    print.addEventListener('click', function (e) {
      e.preventDefault();
      window.print();
    });
  }
})();
