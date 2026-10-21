
/* ================= FLOATING HEARTS ================= */

const heartsContainer = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("div");

    const hearts = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "💓",
        "💘",
        "🌸"
    ];

    heart.className = "heart";

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 500);



/* ================= SCROLL ================= */

function scrollToSection(id) {

    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });

}



/* ================= SURPRISES ================= */

const surpriseTitle =
    document.getElementById("surpriseTitle");

const surpriseText =
    document.getElementById("surpriseText");

const surpriseEmoji =
    document.getElementById("surpriseEmoji");

const surpriseBox =
    document.getElementById("surpriseBox");


function openSurprise(number) {

    if (number === 1) {

        surpriseEmoji.innerHTML = "💌";

        surpriseTitle.innerHTML =
            "A Secret Message For You";

        surpriseText.innerHTML =
            "If I had to choose my favorite person again, " +
            "I would still choose you. Every single time. ❤️";

    }


    if (number === 2) {

        surpriseEmoji.innerHTML = "🥹";

        surpriseTitle.innerHTML =
            "You Are My Safe Place";

        surpriseText.innerHTML =
            "No matter how difficult life becomes, " +
            "I hope we always find our way back to each other. " +
            "You are precious to me. 🫶";

    }


    if (number === 3) {

        surpriseEmoji.innerHTML = "🎁";

        surpriseTitle.innerHTML =
            "My Birthday Promise";

        surpriseText.innerHTML =
            "I promise to keep making memories with you, " +
            "to laugh with you, support you and love you " +
            "through every chapter of our lives. 💍❤️";

    }


    if (number === 4) {

        surpriseEmoji.innerHTML = "❤️";

        surpriseTitle.innerHTML =
            "My Forever Surprise";

        surpriseText.innerHTML =
            "Happy Birthday Ahmed! " +
            "You are not just a birthday wish. " +
            "You are one of my biggest prayers. " +
            "May Allah keep you happy and keep us together " +
            "with love, peace and countless beautiful memories. " +
            "I love you. Forever. ❤️";

        celebrate();

    }

    surpriseBox.style.transform = "scale(0.8)";

    setTimeout(() => {
        surpriseBox.style.transform = "scale(1)";
    }, 150);

}



/* ================= MUSIC ================= */

const music =
    document.getElementById("birthdayMusic");

let musicPlaying = false;


function toggleMusic() {

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

    } else {

        music.play();

        musicPlaying = true;

    }

}



/* ================= CONFETTI ================= */

function celebrate() {

    for (let i = 0; i < 80; i++) {

        const confetti =
            document.createElement("div");

        confetti.innerHTML = "❤️";

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "%";

        confetti.style.top =
            "-30px";

        confetti.style.fontSize =
            (15 + Math.random() * 25) + "px";

        confetti.style.zIndex = "9999";

        confetti.style.pointerEvents = "none";

        confetti.style.transition =
            "transform 3s linear, opacity 3s";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.style.transform =
                `translateY(${window.innerHeight + 100}px) rotate(720deg)`;

            confetti.style.opacity = "0";

        }, 50);

        setTimeout(() => {

            confetti.remove();

        }, 3500);

    }

}
