document.addEventListener('DOMContentLoaded', function () {
    var showFormBtn = document.getElementById('showFormBtn');
    var closeFormBtn = document.getElementById('closeFormBtn');
    var popupForm = document.getElementById('popupForm');

    showFormBtn.addEventListener('click', function () {
        popupForm.style.display = 'block';
    });

    closeFormBtn.addEventListener('click', function () {
        popupForm.style.display = 'none';
    });

    // Close the form if the user clicks outside of it
    window.addEventListener('click', function (event) {
        if (event.target === popupForm) {
            popupForm.style.display = 'none';
        }
    });
});
