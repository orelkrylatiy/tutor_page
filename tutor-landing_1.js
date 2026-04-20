document.addEventListener('DOMContentLoaded', () => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

  const track = document.getElementById('revTrack');
  const prevBtn = document.getElementById('revPrev');
  const nextBtn = document.getElementById('revNext');

  if (!track || !prevBtn || !nextBtn) return;

  const cards = Array.from(track.querySelectorAll('.review-card'));
  let cur = 0;

  function visibleCount() {
    return window.innerWidth <= 860 ? 1 : 3;
  }

  function setWidths() {
    const vis = visibleCount();
    const gap = 16;
    const w = (track.parentElement.offsetWidth - gap * (vis - 1)) / vis;
    cards.forEach(c => {
      c.style.width = w + 'px';
      c.style.minWidth = w + 'px';
    });
  }

  function slide() {
    const gap = 16;
    const w = parseFloat(cards[0].style.width || 0);
    track.style.transform = `translateX(-${cur * (w + gap)}px)`;
  }

  nextBtn.onclick = () => {
    const max = cards.length - visibleCount();
    cur = cur < max ? cur + 1 : 0;
    slide();
  };

  prevBtn.onclick = () => {
    const max = cards.length - visibleCount();
    cur = cur > 0 ? cur - 1 : max;
    slide();
  };

  window.addEventListener('resize', () => {
    cur = 0;
    setWidths();
    slide();
  });

  setWidths();
  slide();
});
