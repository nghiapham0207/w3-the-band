var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

mobileMenu.onclick = function () {
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (let index = 0; index < menuItems.length; index++) {
    const element = menuItems[index];

    element.onclick = function (event) {
        const isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('dropdown-content');
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}
