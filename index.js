
document.addEventListener('keydown', function(event) {
  if (event.key === 'g') {
    const header = document.querySelector('header');
    header.style.backgroundColor = 'limegreen';
  }
});
