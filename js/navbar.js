    
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.header-right ul li').forEach(item => {
            item.addEventListener('click', () => {
                document.querySelectorAll('.header-right ul li').forEach(item => item.classList.remove('active'));
                item.classList.add('active');
            });
        });
    });