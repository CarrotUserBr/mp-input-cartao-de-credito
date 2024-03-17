const cardNumber = document.getElementById("cardNumber")
const cardNumberText = document.getElementById("cardNumberText")
const cardHolder = document.getElementById("cardHolder")
const cardHolderText = document.getElementById("cardHolderText")
const mounthExpires = document.getElementById("mounthExpires")
const mounthExpiresText = document.getElementById("mounthExpiresText")
const yearExpires = document.getElementById("yearExpires")
const yearExpiresText = document.getElementById("yearExpiresText")


cardNumber.addEventListener("input", function(event) {
    let cardNumberValue = event.target.value.replace(/\D/g, '');
    let formattedValue = ''

    for (let i = 0; i < cardNumberValue.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedValue += "-"
        } 
        formattedValue += cardNumberValue[i]
    }

    event.target.value = formattedValue

    cardNumberText.innerHTML = event.target.value
});

cardHolder.addEventListener("input", function() {
    let cardHolderValue = cardHolder.value

    cardHolderText.innerHTML = cardHolderValue
})

mounthExpires.addEventListener("change", function (event) {
    let mounthExpiresValue = mounthExpires.value

    mounthExpiresText.innerHTML = mounthExpiresValue
})

yearExpires.addEventListener("change", function (event) {

    yearExpiresText.innerHTML = event.target.value
})