/* ========================================
   SENIRAMA KEMBANG KAWAT
   JavaScript
======================================== */


/* 1. MOBILE NAVIGATION */

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {

    menuToggle.addEventListener('click', function () {

        navMenu.classList.toggle('active');

        // Mengubah ikon menu
        if (navMenu.classList.contains('active')) {
            menuToggle.innerHTML = '&times;';
        } else {
            menuToggle.innerHTML = '&#9776;';
        }

    });

    // Menutup menu setelah salah satu link diklik
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(function (link) {

        link.addEventListener('click', function () {

            navMenu.classList.remove('active');
            menuToggle.innerHTML = '&#9776;';

        });

    });

}


/* 2. PRODUCT CATEGORY FILTER */

const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(function (button) {

    button.addEventListener('click', function () {

        // Mengambil kategori yang dipilih
        const selectedCategory = button.getAttribute('data-filter');

        // Menghapus status aktif dari semua tombol
        filterButtons.forEach(function (btn) {
            btn.classList.remove('active');
        });

        // Memberikan status aktif pada tombol yang dipilih
        button.classList.add('active');

        // Menampilkan produk sesuai kategori
        productCards.forEach(function (card) {

            const productCategory = card.getAttribute('data-category');

            if (
                selectedCategory === 'all' ||
                selectedCategory === productCategory
            ) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }

        });

    });

});


/* 3. CLOSE MOBILE MENU WHEN CLICKING OUTSIDE */

document.addEventListener('click', function (event) {

    if (!menuToggle || !navMenu) {
        return;
    }

    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (
        !clickedInsideMenu &&
        !clickedToggle &&
        navMenu.classList.contains('active')
    ) {
        navMenu.classList.remove('active');
        menuToggle.innerHTML = '&#9776;';
    }

});


/* 4. SCROLL TO TOP WHEN PAGE RELOADS */

window.addEventListener('load', function () {

    window.scrollTo(0, 0);

});


/* 5. FOOTER COPYRIGHT YEAR */

const copyrightYear = document.querySelector('#copyright-year');

if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
}


console.log('Senirama Kembang Kawat website berhasil dijalankan!');