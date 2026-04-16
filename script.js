function updateClock() {
  const clock = document.getElementById('clock');
  if (!clock) return;
  clock.textContent = new Date().toLocaleString();
}

setInterval(updateClock, 1000);
updateClock();
