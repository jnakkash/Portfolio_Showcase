// Dropdown Functionality
const dropdownBtns = document.querySelectorAll('.dropdown-btn');

dropdownBtns.forEach(button => {
    button.addEventListener('click', function() {
        const content = this.nextElementSibling;
        this.parentElement.classList.toggle('active');
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});
