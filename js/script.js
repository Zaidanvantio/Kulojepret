// Temukan elemen HTML yang kita butuhkan
const hamburgerButton = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

// Tambahkan "pendengar acara" pada tombol hamburger
hamburgerButton.addEventListener('click', () => {
    // Setiap kali tombol diklik, toggle class 'active' pada menu
    navLinks.classList.toggle('active');

    // Kode untuk hamburger menu Anda sudah ada di sini...

// Tambahkan ini di paling bawah
AOS.init();
});

// Inisialisasi Swiper untuk Hero Section
const heroSwiper = new Swiper('.hero-slider', {
    direction: 'vertical',
    loop: true,
    // allowTouchMove: false, <-- Baris ini bisa dihapus
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
});