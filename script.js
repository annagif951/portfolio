document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle logic
  const toggle = document.getElementById('toggle-theme');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });
  }

  // Restore theme from localStorage
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }

  // Scroll to top button logic
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });
    scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Typed text animation
  const words = ["websites", "graphics", "user experiences"];
  let i = 0, j = 0, current = "", isDeleting = false;

  function type() {
    if (i < words.length) {
      if (!isDeleting && j <= words[i].length) {
        current = words[i].substring(0, j++);
      } else if (isDeleting && j >= 0) {
        current = words[i].substring(0, j--);
      }

      const typedText = document.getElementById("typed-text");
      if (typedText) {
        typedText.textContent = current;
      }

      if (j === words[i].length) isDeleting = true;
      if (j === 0 && isDeleting) {
        isDeleting = false;
        i = (i + 1) % words.length;
      }

      setTimeout(type, isDeleting ? 50 : 150);
    }
  }
  type();

  // Optional: Remove duplicate darkModeToggle logic or unify with above if needed
  const darkModeToggle = document.getElementById('darkModeToggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });
  }
});


