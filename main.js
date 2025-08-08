document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
            const mobileMenuToggle = document.getElementById('navToggle');
            const navMenu = document.getElementById('navMenu');

            mobileMenuToggle.addEventListener('click', function () {
                navMenu.classList.toggle('active');
                this.querySelector('i').classList.toggle('.fa-chevron-down');
                this.querySelector('i').classList.toggle('fa-times');
            });
        });



    // Load footer
    fetch("footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });

});



   // Mobile menu toggle
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        const overlay = document.getElementById('overlay');
        
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
        
        overlay.addEventListener('click', () => {
            navMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
        
        // Close menu when clicking on links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                overlay.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });


             // Set active link based on current page
        document.addEventListener('DOMContentLoaded', function() {
            const currentPage = location.pathname.split('/').pop();
            const navLinks = document.querySelectorAll('.nav-link');
            
            navLinks.forEach(link => {
                const linkPage = link.getAttribute('href');
                if (linkPage === currentPage) {
                    link.classList.add('active');
                }
            });
        });



