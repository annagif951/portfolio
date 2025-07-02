document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
};
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
const toggle = document.getElementById('toggle-theme');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

const words = ["websites", "graphics", "user experiences"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      current = words[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      current = words[i].substring(0, j--);
    }

    document.getElementById("typed-text").textContent = current;

    if (j === words[i].length) isDeleting = true;
    if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 50 : 150);
  }
}
type();
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}
