/* global variables */
const mobileMenuItemShop = document.querySelector('.mobile-menu-item-shop');
const mobileMenuItemPages = document.querySelector('.mobile-menu-item-pages');
const menu = document.querySelector('.mobile-menu');

/* Menu Close & Open starts */
function closeMenu() {
    menu.style.display = 'none';
    mobileMenuItemShop.style.display = 'none';
    mobileMenuItemPages.style.display = 'none';
};

function openMenu() {
    menu.style.display = 'block';
};
/* Menu Close & Open ends */

/* Mobile Menu Item Shop starts */

function openShop() {
    menu.style.display = 'none';
    mobileMenuItemShop.style.display = 'block';
};

function closeShop() {
    mobileMenuItemShop.style.display = 'none';
    menu.style.display = 'block';
};
/* Mobile Menu Item Shop ends */

/* Mobile Menu Item Pages starts */

function openPages() {
    menu.style.display = 'none';
    mobileMenuItemShop.style.display = 'none';
    mobileMenuItemPages.style.display = 'block';
};

function closePages() {
    mobileMenuItemPages.style.display = 'none';
    menu.style.display = 'block';
};
/* Mobile Menu Item Shop ends */