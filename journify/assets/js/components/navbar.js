const navbar = () => {
    const navElement = document.createElement('nav');
    navElement.classList.add('navbar');

    const logo = document.createElement('a');
    logo.href = 'index.html';
    logo.classList.add('navbar-logo');
    logo.innerHTML = '<img src="assets/images/logo/journify-logo.svg" alt="Journify Logo" />';

    const menu = document.createElement('ul');
    menu.classList.add('navbar-menu');

    const pages = [
        { name: 'Dashboard', path: 'pages/dashboard.html' },
        { name: 'Calendar', path: 'pages/calendar.html' },
        { name: 'Journal', path: 'pages/journal.html' },
        { name: 'Analytics', path: 'pages/analytics.html' },
        { name: 'Export', path: 'pages/export.html' },
        { name: 'Settings', path: 'pages/settings.html' },
    ];

    pages.forEach(page => {
        const menuItem = document.createElement('li');
        menuItem.classList.add('navbar-item');
        const link = document.createElement('a');
        link.href = page.path;
        link.innerText = page.name;
        menuItem.appendChild(link);
        menu.appendChild(menuItem);
    });

    const userMenu = document.createElement('div');
    userMenu.classList.add('user-menu');
    userMenu.innerHTML = `
        <button class="user-menu-button">Profile</button>
        <div class="user-menu-dropdown">
            <a href="#" class="user-menu-item">Logout</a>
        </div>
    `;

    navElement.appendChild(logo);
    navElement.appendChild(menu);
    navElement.appendChild(userMenu);

    document.body.appendChild(navElement);
};

document.addEventListener('DOMContentLoaded', navbar);