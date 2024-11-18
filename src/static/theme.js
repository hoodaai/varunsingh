document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');

    // Initial theme load from localStorage
    if (localStorage.getItem('theme') === 'dark') {
        html.classList.add('dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        html.classList.remove('dark');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }

    // Toggle theme and icon on button click
    themeToggle.addEventListener('click', () => {
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        } else {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
    });
});


/*
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const menuText = document.getElementById('menu-text');
    const menuIcon = document.getElementById('menu-icon');

    menuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('hidden');

        if (mobileNav.classList.contains('hidden')) {
            // Reset to hamburger icon
            menuText.textContent = 'Menu';
            menuIcon.innerHTML = `
                <span class="block w-6 h-0.5 bg-primary-deepGreen"></span>
                <span class="block w-6 h-0.5 bg-primary-deepGreen mt-1"></span>
                <span class="block w-6 h-0.5 bg-primary-deepGreen mt-1"></span>`;
        } else {
            // Create "X" icon
            menuText.textContent = 'Close';
            menuIcon.innerHTML = `
                <span class="block w-6 h-0.5 bg-primary-deepGreen transform rotate-45 absolute ease-in-out"></span>
                <span class="block w-6 h-0.5 bg-primary-deepGreen transform rotate-45 absolute ease-in-out"></span>`;
        }
    });
});
*/
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const overlayNav = document.getElementById("overlay-nav");
    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");
  
    let menuOpen = false;
  
    menuToggle.addEventListener("click", () => {
      overlayNav.classList.toggle("hidden");
      menuOpen = !menuOpen;
  
      // Rotate lines for the X icon effect
      if (menuOpen) {
        line1.style.transform = "rotate(45deg) translateY(5px)";
        line2.style.opacity = "0";
        line3.style.transform = "rotate(-45deg) translateY(-5px)";
      } else {
        line1.style.transform = "rotate(0)";
        line2.style.opacity = "1";
        line3.style.transform = "rotate(0)";
      }
    });
  });

  


/*
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const menuText = document.getElementById('menu-text');
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');

    menuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('hidden');

        if (mobileNav.classList.contains('hidden')) {
            // Reset to hamburger icon
            menuText.textContent = 'Menu';
            line1.classList.remove('rotate-45', 'translate-y-1.5');
            line2.classList.remove('-rotate-45', '-translate-y-1.5');
        } else {
            // Change to "X" icon
            menuText.textContent = 'Close';
            line1.classList.add('rotate-45', 'translate-y-1.5');
            line2.classList.add('-rotate-45', '-translate-y-1.5');
        }
    });
});*/


