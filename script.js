function toggleDarkMode() {
    const html = document.getElementById('html');
    html.classList.toggle('dark-mode');
  }
  
  document.querySelector('.toggle-btn').addEventListener('click', toggleDarkMode);
  