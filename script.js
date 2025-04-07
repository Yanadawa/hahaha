const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 300; // adjust for navbar height
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });

    if (current && current !== window,location.hash.substring(1)) {
        history.replaceState(null, null, `#home`);
    }

    // window.addEventListener("DOMContentLoaded", () => {
    //     if (!window.location.hash) {
    //         history.replaceState(null, null, "#home");
    //     }
    // })
  });


// if using IntersectionObserver
// const observer = new IntersectionObserver(
//   entries => {
//     entries.forEach(entry => {
//       const id = entry.target.id;
//       const navLink = document.querySelector(`#link-${id}`);

//       if (entry.isIntersecting) {
//         // Highlight the nav link
//         navLinks.forEach(link => link.classList.remove('active'));
//         navLink.classList.add('active');

//         // Update URL without reloading
//         history.replaceState(null, null, `#${id}`);
//       }
//     });
//   },
//   {
//     threshold: 0.6 // Trigger when 60% of the section is visible
//   }
// );

// // Observe all sections
// sections.forEach(section => {
//   observer.observe(section);
// });