// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () =>
 {
   document.body.classList.toggle("dark-mode");

};
// TODO: Register a 'click' event listener for the theme button
themeButton.addEventListener("click", toggleDarkMode);



const validateForm = () => {

  let containsErrors = false;

  let petitionInputs = document.getElementById("sign-petition").elements;

  let person = {
    name: petitionInputs[0].value , hometown: petitionInputs[1].value
  }

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }else{
      petitionInputs[i].classList.remove('error');
    }
  }
  const email = document.getElementById('email');

  if (!email.value.includes('.com')) {
    containsErrors = true;
    email.classList.add('error');
    alert('Please enter a valid email address.');
  } 
  else {
    email.classList.remove('error');
  }
  if (containsErrors == false)  {
  addSignature(person);
  for (let i = 0; i < petitionInputs.length; i++) {
    petitionInputs[i].value = "";
  }
  containsErrors = false;
  }
}






// Query for the sign now button
const signNowButton = document.querySelector('#sign-now-button');
// Define the addSignature function
const addSignature = (person) => {
  // Get the name, hometown, and email input using DOM methods
 //  let name = document.getElementById('name').value;
 // let hometown = document.getElementById('hometown').value;
 //  let email = document.getElementById('email').value;

  // Create a new paragraph element to hold the new signature
  const newSignature = document.createElement('p');

  // Format the new signature using the name, hometown, and email we collected earlier
  newSignature.textContent = ` 🖊️ ${person.name} from ${person.hometown} supports this.`;

  toggleModal(person);

  // Find the signatures section using another DOM method
  const signaturesSection = document.getElementById('signature-section');

  // Add the new signature to the signatures section
  signaturesSection.appendChild(newSignature);

  // Reset the form inputs
  document.getElementById('sign-petition').reset();
}


signNowButton.addEventListener('click', validateForm);
// Add an event listener to the sign now button that calls the addSignature function when clicked

// TODO: Complete validation form




let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction : 'ease'
};

const revealableContainers = document.querySelectorAll('.revealable');

const reveal = () => {
  let windowHeight = window.innerHeight;
  
  for (let i = 0; i < revealableContainers.length; i++){
   
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');

    } else {
      revealableContainers[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);


const toggleModal = (person) => {
  let modal = document.getElementById("thanks-modal");
  let modalContent  = document.getElementById("thanks-modal-content");
  let closeModalBtn = document.getElementById('close-modal-btn');
  modal.style.display = "flex";
  modalContent.textContent = `Thank you so much for helping the future generations! You're a hero for helping save the world to make it a better place for your children ${person.name}!`;

  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
    clearInterval(intervalId);
  });
  
let intervalId = setInterval(scaleImage, 500);
    
  
 setTimeout(() => {
    clearInterval(intervalId);
 modal.style.display = "none";
 }, 4000);
  
}

const scaleFactor = 1;
const modalImage = document.getElementById('modal-image');

function scaleImage() {
  scaleFactor = scaleFactor === 1 ? 0.8 : 1;
  modalImage.style.transform = `scale(${scaleFactor})`;
}









   



