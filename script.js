// script.js

// Smooth scroll back to top button (optional feature)
document.addEventListener('DOMContentLoaded', () => {
  // Create the button
  const btn = document.createElement('button');
  btn.id = 'toTop';
  btn.innerText = '↑';
  document.body.appendChild(btn);

  // Show/hide on scroll
  window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 200 ? 'block' : 'none';
  });

  // Scroll smoothly to top
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Hook up the postcode form
  const form = document.querySelector('.hero__form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const postcode = form.querySelector('.hero__input').value.trim();
    if (!postcode) {
      alert('Please enter a postcode!');
      return;
    }
    // For now just log it (or you could redirect / fetch results)
    console.log('Searching for food near:', postcode);
    form.reset();
    alert(`Searching for food near: ${postcode}`);
  });
});
