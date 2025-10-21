// Fungsi untuk Menu Hamburger
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    if (hamburgerButton && navLinks) {
        hamburgerButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});


// Inisialisasi Swiper untuk Hero Section (hanya jika ada slider di halaman)
const heroSlider = document.querySelector('.hero-slider');
if (heroSlider) {
    const swiper = new Swiper('.hero-slider', {
        direction: 'vertical',
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
    });
}


// Inisialisasi AOS (Animasi saat Scroll)
AOS.init({
    duration: 800, // Durasi animasi dalam milidetik
    once: true,    // Animasi hanya berjalan sekali
});