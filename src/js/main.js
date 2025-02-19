const textElement = document.getElementById('typed-text');
const text = "test123123123";
const catUrl = 'https://catfact.ninja/fact'
const CATFACT = document.getElementById('catFacts')

let index = 0;

function typeText() {
    if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 200);
    }
}

typeText();

fetch(catUrl)
    .then(response => {
        return response.json();
    })
    .then(data => {
        let factCat = data.fact
        CATFACT.innerHTML = factCat
    })

