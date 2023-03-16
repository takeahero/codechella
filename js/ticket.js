let user = document.querySelector('#user')
let labelUser = document.querySelector('#labelUser')
let validUser = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let ticket = document.querySelector('#ticket')
let labelTicket = document.querySelector('#labelTicket')
let validTicket = false

let birthday = document.querySelector('#birthday')
let labelBirthday = document.querySelector('#labelBirthday')
let validBirthday = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

user.addEventListener('keyup', () => {
    if(user.value.length <= 3){
      labelUser.setAttribute('style', 'color: #a2302e')
      user.setAttribute('style', 'border-color: #a2302e')
      validUser = false
    } else {
      labelUser.setAttribute('style', 'color: #2ea296')
      user.setAttribute('style', 'border-color: #2ea296')
      validUser = true
    }
  })

  email.addEventListener('keyup', () => {
    if(email.value.length <= 5) {
      labelEmail.setAttribute('style', 'color: #a2302e')
      email.setAttribute('style', 'border-color: #a2302e')
      validEmail = false
    } else {
      labelEmail.setAttribute('style', 'color: #2ea296')
      email.setAttribute('style', 'border-color: #2ea296')
      validEmail = true
    }
  })

  ticket.addEventListener('change', () => {
    if(ticket.value.length <= 1) {
      labelTicket.setAttribute('style', 'color: #a2302e')
      ticket.setAttribute('style', 'border-color: #a2302e')
      validTicket = false
    } else {
      labelTicket.setAttribute('style', 'color: #2ea296')
      ticket.setAttribute('style', 'border-color: #2ea296')
      validTicket = true
    }
  })

  birthday.addEventListener('change', () => {
    if(birthday.value.length <= 1) {
      labelBirthday.setAttribute('style', 'color: #a2302e')
      birthday.setAttribute('style', 'border-color: #a2302e')
      validBirthday = false
    } else {
      labelBirthday.setAttribute('style', 'color: #2ea296')
      birthday.setAttribute('style', 'border-color: #2ea296')
      validBirthday = true
    }
  })





  
  
