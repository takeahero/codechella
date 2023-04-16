const userInput = document.querySelector("#user");
const labelUser = document.querySelector("#labelUser");
const valueUser = userInput.value;

const emailInput = document.querySelector("#email");
const labelEmail = document.querySelector("#labelEmail");
const valueEmail = emailInput.value;

const birthdayInput = document.querySelector("#birthday");
const labelBirthday = document.querySelector("#labelBirthday");
const valueBirthday = birthdayInput.value;

const sector = document.querySelector('#sector');
const labelSector = document.querySelector('#labelSector');
const valueSector = sector.value;
let validSector = false;

const ticket = document.querySelector('#ticket');
const labelTicket = document.querySelector('#labelTicket');
const valueTicket = ticket.value;
let validTicket = false;

const form = document.getElementById("form");

const btnEnviar = document.querySelector('.form-btn button');

userInput.addEventListener("blur", function() {
    const valueUserValidate = userInput.value;


    if (/^[A-Za-z ]+$/.test(valueUserValidate)) {
        document.querySelector(".name-error-msg").style.display = "none";
        labelUser.setAttribute('style', 'color: #2ea296');
        userInput.setAttribute('style', 'border-color: #2ea296');
    } else {
        document.querySelector(".name-error-msg").style.display = "block";
        labelUser.setAttribute('style', 'color: #a2302e');
        userInput.setAttribute('style', 'border-color: #a2302e');   
    }
});

emailInput.addEventListener("blur", function() {
    const valueEmailValidate = emailInput.value;

    if (/^\S+@\S+\.\S+$/.test(valueEmailValidate)) {
        emailInput.setCustomValidity("");
        labelEmail.setAttribute('style', 'color: #2ea296');
        emailInput.setAttribute('style', 'border-color: #2ea296');
    } else {
        emailInput.setCustomValidity("Por favor, informe um e-mail válido.");
        labelEmail.setAttribute('style', 'color: #a2302e');
        emailInput.setAttribute('style', 'border-color: #a2302e');
    }
});

sector.addEventListener('change', () => {
    if(sector.value.length <= 1) {
        labelSector.setAttribute('style', 'color: #a2302e');
        sector.setAttribute('style', 'border-color: #a2302e');
        validSector = false;
    } else {
        labelSector.setAttribute('style', 'color: #2ea296');
        sector.setAttribute('style', 'border-color: #2ea296');
        validSector = true;
    }
})

ticket.addEventListener('change', () => {
    if(ticket.value.length <= 1) {
        labelTicket.setAttribute('style', 'color: #a2302e');
        ticket.setAttribute('style', 'border-color: #a2302e');
        validTicket = false;
    } else {
        labelTicket.setAttribute('style', 'color: #2ea296');
        ticket.setAttribute('style', 'border-color: #2ea296');
        validTicket = true;
    }
})

birthdayInput.addEventListener ("change", function() {
    const ageGap = Date.now() - new Date(birthdayInput.value);
    const birthDate = new Date(ageGap);
    const age = Math.abs(birthDate.getUTCFullYear() - 1970);
  
    if (age < 13) {
        labelBirthday.setAttribute('style', 'color: #a2302e');
        birthdayInput.setAttribute('style', 'border-color: #a2302e');
    } else if (age >= 13 && age < 16) {
        labelBirthday.setAttribute('style', 'color: #a29c2e');
        birthdayInput.setAttribute('style', 'border-color: #a29c2e');
    } else {
        labelBirthday.setAttribute('style', 'color: #2ea296');
        birthdayInput.setAttribute('style', 'border-color: #2ea296');
    }
})

btnEnviar.addEventListener('click', function(event) {
  event.preventDefault();

    const userInfo = {
        "nome": userInput.value,
        "email": emailInput.value,
        "setor": sector.value,
        "tipoIngresso": ticket.value,
        "dataNascimento": birthdayInput.value
    }

    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    
    window.location.href = 'confirma-ingresso.html';

})

