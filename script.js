const sidebar = document.querySelector('.sidebar');
const menuItems = document.querySelectorAll('.menu-item');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {

    if (sidebar.className === 'sidebar')
        sidebar.classList.add('open');
    else
    sidebar.classList.remove('open');
});

menuItems.forEach(menuItem => {

    menuItem.addEventListener('click', () => {

        menuItems.forEach(menuItem => {
            menuItem.classList.remove('active');            
        });

        menuItem.classList.add('active');

    });

});

