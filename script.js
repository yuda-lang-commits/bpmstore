
// Ganti background dari tombol
function gantiBackground(gambar) {
    document.body.style.backgroundImage = "url('" + gambar + "')";
}


// Upload background dari file
function uploadBackground(event) {
    const file = event.target.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        document.body.style.backgroundImage = "url('" + url + "')";
    }
}

// Animasi saat scroll
window.addEventListener("scroll", function() {
    let scroll = window.scrollY;

    // Parallax
    document.getElementById("parallax").style.transform =
        "translateY(" + scroll * 0.5 + "px)";

    // Fade animation
    const elements = document.querySelectorAll(".fade");
    elements.forEach(el => {
        const posisi = el.getBoundingClientRect().top;
        const tinggiLayar = window.innerHeight;

        if (posisi < tinggiLayar - 100) {
            el.classList.add("show");
        }
    });
});

window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

let lastScroll = 0;

window.addEventListener("scroll", function() {
    let scroll = window.scrollY;
    const navbar = document.querySelector(".navbar");

    // ======================
    // AUTO HIDE NAVBAR
    // ======================
    if (scroll > lastScroll && scroll > 100) {
        // scroll ke bawah → sembunyikan
        navbar.classList.add("hide");
    } else {
        // scroll ke atas → tampilkan
        navbar.classList.remove("hide");
    }

    lastScroll = scroll;

    // ======================
    // PARALLAX
    // ======================
    const parallax = document.getElementById("parallax");
    if (parallax) {
        parallax.style.transform = "translateY(" + scroll * 0.5 + "px)";
    }

    // ======================
    // FADE ANIMATION
    // ======================
    const elements = document.querySelectorAll(".fade");
    elements.forEach(el => {
        const posisi = el.getBoundingClientRect().top;
        const tinggiLayar = window.innerHeight;

        if (posisi < tinggiLayar - 100) {
            el.classList.add("show");
        }
    });

    // ======================
    // NAVBAR BLUR EFFECT
    // ======================
    if (scroll > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach(img => {
    img.addEventListener("click", function() {
        lightbox.style.display = "block";
        lightboxImg.src = this.src;
    });
});

function tutupLightbox() {
    lightbox.style.display = "none";
}

const cards = document.querySelectorAll(".menu-card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const posisi = card.getBoundingClientRect().top;
        const tinggiLayar = window.innerHeight;

        if (posisi < tinggiLayar - 300 && posisi > 0) {
            // Muncul
            card.classList.add("show");
        } else {
            // Hilang (turun kembali)
            card.classList.remove("show");
        }
    });
});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const posisi = el.getBoundingClientRect().top;
        const tinggiLayar = window.innerHeight;

        if (posisi < tinggiLayar - 100 && posisi > 0) {
            el.classList.add("show");
        } else {
            el.classList.remove("show");
        }
    });
});
window.addEventListener("scroll", () => {

    // REVEAL
    document.querySelectorAll(".reveal").forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            el.classList.add("show");
        } else {
            el.classList.remove("show");
        }
    });

});
