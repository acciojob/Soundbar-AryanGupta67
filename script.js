const sounds = ['sound1', 'sound2', 'sound3']; // Replace with actual file names (without .mp3)
const buttonsContainer = document.getElementById('buttons');

// Create and append sound buttons
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.textContent = sound;
  btn.addEventListener('click', () => {
    stopSounds();
    const audio = document.getElementById(sound);
    audio.play();
  });

  // Create corresponding audio element
  const audio = document.createElement('audio');
  audio.id = sound;
  audio.src = `sounds/${sound}.mp3`;

  buttonsContainer.appendChild(btn);
  document.body.appendChild(audio); // Keep audio in DOM
});

// Add Stop button
const stopBtn = document.createElement('button');
stopBtn.className = 'stop';
stopBtn.textContent = 'Stop';
stopBtn.addEventListener('click', stopSounds);
buttonsContainer.appendChild(stopBtn);

// Function to stop all sounds
function stopSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}

