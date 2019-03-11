document.addEventListener('DOMContentLoaded', function () {
  let wrapper = document.getElementById('wrapper');
  let topLayer = wrapper.querySelector('.top');
  let handle = wrapper.querySelector('.handle');
  let skew = 0;
  let delta = 0;

  if (wrapper.className.indexOf('skewed') != -1) {
    skew = 1000;
  }

  function positionHandler(e) {
    if ((e.clientX) && (e.clientY)) {
      delta = (e.clientX - window.innerWidth / 2) * 0.5;
      handle.style.left = e.clientX + delta + 'px';
      topLayer.style.width = e.clientX + skew + delta + 'px';

    } else if (e.targetTouches) {
      delta = (e.targetTouches[0].clientX - window.innerWidth / 2) * 0.5;
      handle.style.left = e.targetTouches[0].clientX + delta + 'px';
      topLayer.style.width = e.targetTouches[0].clientX + skew + delta + 'px';
      e.preventDefault();
    }
  };

  wrapper.addEventListener('mousemove', positionHandler, false);
  wrapper.addEventListener('touchstart', positionHandler, false);
  wrapper.addEventListener('touchmove', positionHandler, false);

});
