const cardNumber = document.getElementById("cardNumber")
const cardHolder = document.getElementById("cardHolder")
const mounthExpires = document.getElementById("mounthExpires")
const yearExpires = document.getElementById("yearExpires")
const frontCard = document.querySelector(".front__card")
const backCard = document.querySelector(".back__card")
const cardContainer = document.querySelector(".card")
const cvv = document.getElementById("cvv")

const cardNumberText = document.getElementById("cardNumberText")
const cardHolderText = document.getElementById("cardHolderText")
const mounthExpiresText = document.getElementById("mounthExpiresText")
const yearExpiresText = document.getElementById("yearExpiresText")
const cvvText = document.getElementById("cvvText")

frontCard.style.display = 'flex'

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

    event.target.value == '' ? cardNumberText.innerHTML = "XXXX-XXXX-XXXX-XXXX" : cardNumberText.innerHTML = event.target.value
});

cardHolder.addEventListener("input", function(event) {
    event.target.value == '' ? cardHolderText.innerHTML = "XXXX XXXX" : cardHolderText.innerHTML = event.target.value
})

mounthExpires.addEventListener("change", function (event) {
    event.target.value == '' ? mounthExpiresText.innerHTML = 'XX' : mounthExpiresText.innerHTML = event.target.value
})

yearExpires.addEventListener("change", function (event) {
    event.target.value == '' ? yearExpiresText.innerHTML = 'XX' : yearExpiresText.innerHTML = event.target.value
})

cvv.addEventListener("input", function(event) {
    event.target.value = event.target.value.replace(/\D/g, '');

    event.target.value == '' ? cvvText.innerHTML = 'XXX' : cvvText.innerHTML = event.target.value
})

function rotateCard() {
    cardContainer.style.animation = 'rotate-card .5s ease'
    let storageCardPosition = frontCard.style.display === 'flex' ? "frontCard" : "backCard"
    console.log(storageCardPosition)
    frontCard.style.display = 'none'
    backCard.style.display = 'none'
    setTimeout(() => {
        if (storageCardPosition === 'frontCard') {
            backCard.style.display = 'flex'
        } else {          
            frontCard.style.display = 'flex'
        }
    }, 200)
    setTimeout(() => {
        cardContainer.style.animation = 'none'
    }, 490)
}

cardContainer.addEventListener("click", rotateCard)


cvv.addEventListener('focus', function() { if(frontCard.style.display === 'flex') rotateCard()})

cardNumber.addEventListener('focus', () => { if(backCard.style.display === 'flex') rotateCard()})
cardHolder.addEventListener('focus', () => { if(backCard.style.display === 'flex') rotateCard()})
mounthExpires.addEventListener('focus', () => { if(backCard.style.display === 'flex') rotateCard()})
yearExpires.addEventListener('focus', () => { if(backCard.style.display === 'flex') rotateCard()})