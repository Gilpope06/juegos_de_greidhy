document.addEventListener('DOMContentLoaded', () => {
  const playButtons = document.querySelectorAll('.play-btn');
  const playerArea = document.getElementById('player-area');
  const gameFrame = document.getElementById('game-frame');
  const closeButton = document.getElementById('close-player');

  playButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const path = btn.dataset.path;
      gameFrame.src = path + "index.html";
      playerArea.classList.remove('hidden');
    });
  });

  closeButton.addEventListener('click', () => {
    gameFrame.src = "";
    playerArea.classList.add('hidden');
  });
});
