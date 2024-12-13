

        document.getElementById('burgerMenuBtn').addEventListener('click', function () {
            var sidebar = document.getElementById('sidebar');
            var mainContent = document.getElementById('mainContent');
            
            if (sidebar.style.transform === 'translateX(0px)') {
                sidebar.style.transform = 'translateX(-250px)';
                mainContent.style.marginLeft = '0';
            } else {
                sidebar.style.transform = 'translateX(0)';
                mainContent.style.marginLeft = '250px';
            }
        });
