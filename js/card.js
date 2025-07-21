 (function() {
  const cards = document.querySelectorAll('.card');
  const carousel = document.querySelector('.carousel');
  let current = 0;
  let interval;

  function rotateCards() {
    cards.forEach(card => card.className = 'card');

    const prev = (current - 1 + cards.length) % cards.length;
    const next = (current + 1) % cards.length;

    cards[current].classList.add('active');
    cards[prev].classList.add('left');
    cards[next].classList.add('right');

    current = next;
  }

  function startRotation() {
    interval = setInterval(rotateCards, 3000);
  }

  function stopRotation() {
    clearInterval(interval);
  }

  // Start rotating
  startRotation();

  


   cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    if (card.classList.contains('active')) stopRotation();
  });
  card.addEventListener('mouseleave', () => {
    if (card.classList.contains('active')) startRotation();
  });
});

 }).call(this);