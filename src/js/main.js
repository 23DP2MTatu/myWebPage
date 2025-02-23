const welcomeTextElement = document.getElementById('typed-text');
const loadTextElement = document.getElementById('load-text');
const catUrl = ' https://catfact.ninja/fact'
const CATFACT = document.getElementById('catFacts')
const gameContainer = document.querySelector('.game')


function typeText(text, textElement, index = 0) {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index)
        setTimeout(() => typeText(text, textElement, index + 1), 200)
    }
}

setTimeout(() => {
    typeText("Loading...", loadTextElement);
}, 500);

setTimeout(() => {
    typeText("Hello World!", welcomeTextElement);
}, 3500);

fetch(catUrl)
    .then(response => {
        return response.json();
    })
    .then(data => {
        let factCat = data.fact
        CATFACT.innerHTML = factCat
    })

const button = document.createElement('button')
button.textContent = 'Catch me!'
button.style.padding = '20px 40px'
button.style.fontSize = '16px'
button.style.cursor = 'pointer'
button.style.transition = 'all 0.5s ease'
button.style.position = 'absolute'
button.style.backgroundColor = '#eb6f22'
button.style.color = 'white'

gameContainer.appendChild(button)

function moveButton() {
    const containerRect = gameContainer.getBoundingClientRect()
    const buttonWidth = button.offsetWidth
    const buttonHeight = button.offsetHeight

    const randomX = Math.floor(Math.random() * (containerRect.width - buttonWidth))
    const randomY = Math.floor(Math.random() * (containerRect.height - buttonHeight))

    button.style.left = `${randomX}px`
    button.style.top = `${randomY}px`
}

button.addEventListener('mouseover', () => {
    moveButton()
})

button.addEventListener('click', () => {
    button.textContent = 'caught!'
    button.style.backgroundColor = '#4CAF50'
    button.style.color = 'white'
    button.style.border = 'none'
    button.style.cursor = 'default'

    setTimeout(() => {
        button.textContent = 'Catch me!'
        button.style.backgroundColor = '#eb6f22'
        button.style.cursor = 'pointer'
    }, 1000)
})

moveButton();
