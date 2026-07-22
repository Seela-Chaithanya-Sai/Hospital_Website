/*=====================================
        HAMBURGER MENU
=====================================*/

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/*=====================================
     CLOSE MENU AFTER CLICK
=====================================*/

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


/*=====================================
     APPOINTMENT BOOKING
=====================================*/

const appointmentForm = document.querySelector(".appointment-form");

appointmentForm.addEventListener("submit", function(e){

    e.preventDefault();

    const patientName = document.querySelector('input[type="text"]').value;

    alert(
` Appointment Booked Successfully!

Thank you, ${patientName}.

Your appointment request has been received by Mediva Hospital.

Our scheduling team will contact you shortly to confirm your appointment.

We wish you good health!`
    );

    appointmentForm.reset();

});


/*=====================================
      STICKY HEADER SHADOW
=====================================*/

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 20){

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";

    }

    else{

        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";

    }

});