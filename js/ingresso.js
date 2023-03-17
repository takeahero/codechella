const userInput = document.querySelector("#user");
const labelUser = document.querySelector("#labelUser");

const emailInput = document.querySelector("#email");
const labelEmail = document.querySelector("#labelEmail");

const birthdayInput = document.querySelector("#birthday");
const labelBirthday = document.querySelector("#labelBirthday");

const sector = document.querySelector('#sector');
const labelSector = document.querySelector('#labelSector');
let validSector = false;

const ticket = document.querySelector('#ticket');
const labelTicket = document.querySelector('#labelTicket');
let validTicket = false;

userInput.addEventListener("blur", function() {
    const user = userInput.value;

    if (/^[A-Za-z ]+$/.test(user)) {
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
  const email = emailInput.value;

    if (/^\S+@\S+\.\S+$/.test(email)) {
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
