function flashLightning() {
  const lightning = document.querySelector('.lightning');
  if (!lightning) return;

  // Flicker sequence (mimics real thunder)
  lightning.style.transition = "opacity 0.1s ease-in-out";

  lightning.style.opacity = "1";
  setTimeout(() => { lightning.style.opacity = "0"; }, 100);
  setTimeout(() => { lightning.style.opacity = "1"; }, 200);
  setTimeout(() => { lightning.style.opacity = "0"; }, 300);
  setTimeout(() => { lightning.style.opacity = "1"; }, 400);
  setTimeout(() => { lightning.style.opacity = "0"; }, 600);
}

// Run every 5–8 seconds randomly
setInterval(flashLightning, Math.floor(Math.random() * 3000) + 5000);

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    hamburger.addEventListener('click', () => {
        navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
    });
});

function join() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}
function channel() {
    window.open('https://www.youtube.com/@androzengamerz8893', '_blank');
}