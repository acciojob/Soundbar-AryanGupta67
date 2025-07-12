// List of sound file names (without extension)
const sounds = ['sound1', 'sound2', 'sound3']; // Make sure sounds/sound1.mp3 etc. exist

// Create style
const style = document.createElement("style");
style.textContent = `
  #buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 20px;
  }
  .btn, .stop {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #3498db;
    color: white;
  }
  .stop {
    background-color: red;
  }
`;
document.head.appendChild(style);

// Create buttons container
const container = document.createElement("section");
container.id = "buttons";
document.body.appendChild(container);

// Create sound buttons and audio elements
sounds.forEach(sound => {
  const button = document.createElement("button");
  button.className = "btn";
  button.textContent = sound;
  button.addEventListener("click", () => {
    stopSounds();
    const audio = document.getElementById(sound);
    audio.play();
  });

  const audio = document.createElement("audio");
  audio.id = sound;
  audio.src = `sounds/${sound}.mp3`; // must be in sounds/ directory

  container.appendChild(button);
  document.body.appendChild(audio);
});

// Create Stop button
const stopButton = document.createElement("button");
stopButton.className = "stop";
stopButton.textContent = "Stop";
stopButton.addEventListener("click", stopSounds);
container.appendChild(stopButton);

// Stop all audio
function stopSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}

