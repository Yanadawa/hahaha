const sections = document.querySelectorAll('.content-section');
const navLinks = document.querySelectorAll('#navbar a');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const navLink = document.querySelector(`#link-${id}`);

      if (entry.isIntersecting) {
        // Highlight the nav link
        navLinks.forEach(link => link.classList.remove('active'));
        navLink.classList.add('active');

        // Update URL without reloading
        history.replaceState(null, null, `#${id}`);
      }
    });
  },
  {
    threshold: 0.6 // Trigger when 60% of the section is visible
  }
);

// Observe all sections
sections.forEach(section => {
  observer.observe(section);
});
