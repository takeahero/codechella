const ticketInfo = JSON.parse(localStorage.getItem("userInfo"));
console.log(ticketInfo);

const infoDiv = document.getElementById("userInfoPrint");
    
    infoDiv.innerHTML += `
        <h3  id="cardholderName" class="cardholder-name"> ${ticketInfo.nome}</h3>
        <p  id="ticketType" class="ticket-details"> ${ticketInfo.tipoIngresso}</p>
        <p  id="sector" class="ticket-details"> ${ticketInfo.setor}</p>
    `;
