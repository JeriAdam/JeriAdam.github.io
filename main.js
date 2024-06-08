const btn = document.getElementById("SubmitBtn");
const h3 = document.getElementsByTagName('h3');
const p = document.getElementsByTagName('p');
const h1 = document.getElementsByTagName('h1');
const h4 = document.getElementsByTagName('h4');

btn.addEventListener("click", () =>{
    validateBooking();
});

function validateEmailInput() {
    const emailInput = document.getElementById('email').value;
    const feedbackElement = document.getElementById('emailFeedback');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var test = false;
    if (emailRegex.test(emailInput)) {
      feedbackElement.textContent = ""; 
      test = true;
    } else {
      feedbackElement.textContent = "Please enter a valid email address.";
    }
    return test;
  }

  function validateNameInput(){
    const nameInput = document.getElementById('name').value;
    const feedbackElement = document.getElementById('nameFeedback');
    var test = false;
    if (containsNumbers(nameInput) || nameInput.trim().length === 0){
        test = false;
        feedbackElement.textContent = "Please enter a valid name.";
    }else{
        test = true;
        feedbackElement.textContent = "";
    }
    return test;
  }
  function validateLocationInput(){
    const locationInput = document.getElementById('loactionFeedback').value;
    const feedbackElement = document.getElementById('locationFeedback');
    const inHome = document.getElementById('inHome').value;
    var test = false;
    if (inHome === 'Yes' && locationInput.length === 0){
        feedbackElement.textContent = "Please enter your location.";
    }else{
        test = true;
        feedbackElement.textContent = "";
    }
    return test;
    }

  function validateBooking(){
    if(validateNameInput() && validateEmailInput() && validateLocationInput()){
        alert("Appointment booked successfully!");
    }else{
        alert("one of your inputs is either incorrect or missing");
    }
  }

  function containsNumbers(str) {
    return /\d/.test(str);
}

const toggleBtn = document.querySelector(".toggle-btn"),
  lockIcon = document.querySelector(".icon i");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");

  if(toggleBtn.classList.contains("active")) {
  lockIcon.classList.replace("fa-moon", "fa-sun");
  } else
 lockIcon.classList.replace("fa-sun", "fa-moon");
})

function changeColor(){
    let nightMode = true;
    toggleBtn.addEventListener("click", () => {
        if(nightMode == true){
            document.body.style.backgroundColor = '#e6fff5';
            for (let i = 0; i < h3.length; i++) {
                h3[i].style.color = '#4d4d4d';
            }
            for (let i = 0; i < 5; i++) {
                p[i].style.color = '#333333';
            }
            for (let i = 0; i < h1.length; i++) {
                h1[i].style.color = '#4d4dff';
            }
            for (let i = 0; i < h4.length; i++) {
                if(i < 3 || i == h4.length - 1){
                    h4[i].style.color = '#4d4d4d';
                }
                
            }
        }else{
            document.body.style.backgroundColor ='#333333';
            for (let i = 0; i < h3.length; i++) {
                h3[i].style.color = 'white';
            }
            for (let i = 0; i < 5; i++) {
                p[i].style.color = 'white';
            }
            for (let i = 0; i < h1.length; i++) {
                h1[i].style.color = '#87CEEB';
            }
            for (let i = 0; i < h4.length; i++) {
                if(i < 3 || i == h4.length - 1){
                    h4[i].style.color = 'white';
                }
            }
        }
        nightMode = !nightMode;
    });
    
}
changeColor();
