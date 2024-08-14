
const dog1 = document.getElementById("dog1");
const dog2 = document.getElementById("dog2");
const result = document.getElementById("result");
const subtitle = document.getElementById("subtitle");
const startGameButton = document.getElementById("start-game");
const betAmountInput = document.getElementById("bet-amount");
const gameContainer = document.querySelector('.game-container');
const menuContainer = document.querySelector('.menu-container');
const bloodEffect = document.getElementById("blood-effect");


const happySound = document.getElementById("happy-sound");
const attackSound = document.getElementById("attack-sound");
const attackSound2 = document.getElementById("attack-sound2");

let isEvil = Math.random() < 0.5;
let goodDog = isEvil ? dog2 : dog1;
let evilDog = isEvil ? dog1 : dog2;

dog1.style.pointerEvents = "none";
dog2.style.pointerEvents = "none";

function startGame() {
    result.textContent = "";
    result.style.color = "#333";
    subtitle.textContent = "";
    subtitle.style.display = "none";

    gameContainer.style.display = "block";
    menuContainer.style.display = "none";
    
    dog1.style.pointerEvents = "auto";
    dog2.style.pointerEvents = "auto";
    
    isEvil = Math.random() < 0.5;
    goodDog = isEvil ? dog2 : dog1;
    evilDog = isEvil ? dog1 : dog2;

    dog1.style.animation = "enterFromLeft 1s ease-out forwards";
    dog2.style.animation = "enterFromRight 1s ease-out forwards";

    setTimeout(() => {
        dog1.style.animation = "idle 3s infinite";
        dog2.style.animation = "idle 3s infinite";
    }, 1000);
}

dog1.addEventListener("click", () => handleClick(dog1));
dog2.addEventListener("click", () => handleClick(dog2));
startGameButton.addEventListener("click", startGame);

function handleClick(dog) {
    const animationDuration = 500;

    if (dog === goodDog) {
        happySound.play();
    } else {
        attackSound.play();
        attackSound2.play();
    }

    if (dog === goodDog) {
        if (dog === dog1) {
            dog.style.animation = "goodDanceLeft 1s forwards";
        } else {
            dog.style.animation = "goodDanceRight 1s forwards";
        }
        bloodEffect.classList.remove("show");

        const goodDogPhrases = [
            "Yay! You petted the good doggo! I'm so happy!",
            "Woof! You clicked me! Best day ever!",
            "Aww, you clicked me! Now I’m wagging my tail!",
            "Ruff! You found the bestest pup and made my day!",
            "Oh boy! You clicked the goodest doggo! I’m wagging with joy!",
            "Thanks for the click! I’m a happy pup now!",
            "Yippee! You clicked me! I’m the happiest doggo!",
            "Bark! You’re awesome for clicking the good dog!",
            "I’m a happy pupper because of you! Woof!",
            "You clicked me? That makes me the happiest doggo around!"
        ];

        const randomGoodDogPhrase = goodDogPhrases[Math.floor(Math.random() * goodDogPhrases.length)];

        setTimeout(() => {
            subtitle.textContent = randomGoodDogPhrase;
            subtitle.style.display = "block";
        }, animationDuration);
    } else {
        if (dog === dog1) {
            dog.style.animation = "evilAttackLeft 0.5s forwards";
        } else {
            dog.style.animation = "evilAttackRight 0.5s forwards";
        }
        showBloodEffect();

        const evilDogPhrases = [
            "Ruh-Roh! You've unleashed the chaos!",
            "Oops! You found the evil doggo!",
            "Yikes! The dark side of the pup!",
            "Big oof! The dog was not happy!",
            "Doge's wrath is real. Run!"
        ];

        const randomEvilDogPhrase = evilDogPhrases[Math.floor(Math.random() * evilDogPhrases.length)];

        setTimeout(() => {
            subtitle.textContent = randomEvilDogPhrase;
            subtitle.style.display = "block";
        }, animationDuration);
    }

    dog1.style.pointerEvents = "none";
    dog2.style.pointerEvents = "none";
}

function showBloodEffect() {
    for (let i = 0; i < 5; i++) {
        let bloodSplatter = document.createElement("div");
        bloodSplatter.className = "blood-splatter";
        bloodSplatter.style.width = `${Math.random() * 150 + 100}px`;
        bloodSplatter.style.height = bloodSplatter.style.width;
        bloodSplatter.style.top = `${Math.random() * 100}vh`;
        bloodSplatter.style.left = `${Math.random() * 100}vw`;
        bloodSplatter.style.background = `rgba(255, 0, 0, ${Math.random() * 0.5 + 0.5})`;
        bloodEffect.appendChild(bloodSplatter);
        
        setTimeout(() => {
            bloodEffect.removeChild(bloodSplatter);
        }, 1000);
    }

    bloodEffect.classList.add('show');
}
