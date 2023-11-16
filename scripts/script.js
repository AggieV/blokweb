// // JavaScript Document
// console.log("Ola!");

document.addEventListener('DOMContentLoaded', function() {
  const overlayContents = document.querySelectorAll('.overlay-content');

  // Hide all overlay contents initially
  overlayContents.forEach(content => {
    content.classList.add('hide-overlay');
  });

  // ... (your existing JavaScript code for handling overlay events)
});


//hide zero state

var zeroStateButton = document.getElementById('hide-zero-state');
  zeroStateButton.addEventListener('click', function() {
  zeroStateButton.style.display = 'none';
  console.log('Button1 clicked!');
});


//sinterklaas modus

const titleElement = document.getElementById('title');
const toggleModeButton = document.getElementById('toggle-sinterklaas-modus');
const darkModeImage = document.querySelector('.dark-mode-image-hidden');
const body = document.body;
const audio = new Audio('audio/zie-ginds-komt-de-stoomboot.mp3');


toggleModeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    toggleModeButton.textContent = 'Normaal';
    body.style.backgroundImage = 'url("images/strooigoed.png")';
    audio.currentTime = 0;
    audio.play();
    audio.loop = true;
  } else {
    toggleModeButton.textContent = 'Sinterklaas Modus';
    titleElement.textContent = 'De vriendschapsreis';
    body.style.backgroundImage = 'none';
    audio.pause();
  }

});

//open overlays op landkaart

const markers = document.querySelectorAll('.marker');
const overlay = document.querySelector('.overlay');
const markerTitleElement = document.querySelector('.marker-title');
const markerImage = document.querySelector('.marker-image');
const markerText = document.querySelector('.marker-text');
const closeButton = document.querySelector('.close-button');

document.addEventListener('DOMContentLoaded', function() {
  const overlayContents = document.querySelectorAll('.overlay-content');

  // Hide all overlay contents initially
  overlayContents.forEach(content => {
    content.classList.add('hide-overlay');
  });

  // ... (your existing JavaScript code for handling overlay events)
});


markers.forEach((marker, index) => {
  marker.addEventListener('click', () => appear(index));

  marker.addEventListener('keydown', handleKeydown);

  function handleKeydown(e) {
    if(e.key == "Enter") {
      appear(index);
    }
  }


});

//close overlays op landkaart

closeButton.addEventListener('click', disappear);

function appear(markerIndex) {
  const overlayContents = document.querySelectorAll('.overlay-content');
  overlayContents.forEach(content => {
    content.style.display = 'none';
  });

  const selectedOverlayContent = document.getElementById(`marker-${markerIndex}`);
  selectedOverlayContent.style.display = 'block';
  overlay.style.display = 'block';
}

function disappear() {
  const overlayContents = document.querySelectorAll('.overlay-content');
  overlayContents.forEach(content => {
    content.style.display = 'none';
  });
  overlay.style.display = 'none';
}
  overlay.addEventListener('click', function(event) {
    if (event.target === overlay) {
      disappear();
    }
  });

//toon/verberg paasei op overlay

document.addEventListener('DOMContentLoaded', function() {
  const markerImages = document.querySelectorAll('.marker-image');
  const markerImage2s = document.querySelectorAll('.marker-image2');
  const markerSound = document.querySelector('.markerSound');

  // Add click event listener to all marker images
  markerImages.forEach(markerImage => {
    markerImage.addEventListener('click', function() {
      // Get the marker index from the custom attribute
      const markerIndex = this.dataset.markerIndex;

      // Toggle the display property of the corresponding marker-image2
      const selectedMarkerImage2 = document.querySelector(`.marker-image2[data-marker-index="${markerIndex}"]`);
      if (selectedMarkerImage2) {
        const isMarkerImage2Visible = selectedMarkerImage2.style.display === 'block';
        markerImage2s.forEach(markerImage2 => {
          markerImage2.style.display = 'none'; // Hide all marker-image2 elements
        });
        if (!isMarkerImage2Visible) {
          selectedMarkerImage2.style.display = 'block'; // Show the selected marker-image2
          markerSound.play(); // Play the sound when marker-image2 is displayed
        } else {
          markerSound.pause(); // Pause the sound when marker-image2 is hidden
          markerSound.currentTime = 0; // Reset the audio to the beginning
        }
      }
    });
  });
});


//sounds//

const buttonBommel = document.getElementById('bommelButton');
const audioBommel = document.getElementById('bommelAudio');
const buttonTomPoes = document.getElementById('tom-poesButton');
const audioTomPoes = document.getElementById('tom-poesAudio');

buttonBommel.addEventListener('click', function() {
  audioBommel.play(); // Play the sound when the button is clicked
});

buttonTomPoes.addEventListener('click', function() {
  audioTomPoes.play(); // Play the sound when the button is clicked
});