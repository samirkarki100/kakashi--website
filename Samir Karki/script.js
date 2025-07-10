window.addEventListener('DOMContentLoaded', function() {
    var banner = document.getElementById('welcome-banner');
    banner.classList.add('show');
    banner.style.display = 'block';
    setTimeout(function() {
        banner.classList.remove('show');
        setTimeout(function() {
            banner.style.display = 'none';
        }, 600); // match the CSS transition
    }, 3000);

    // Jutsu input function
    var jutsuBtn = document.getElementById('jutsu-btn');
    if (jutsuBtn) {
        jutsuBtn.addEventListener('click', function() {
            var input = document.getElementById('jutsu-input').value.trim();
            var result = document.getElementById('jutsu-result');
            if (input) {
                result.textContent = 'Your favorite jutsu is: ' + input + '!';
                localStorage.setItem('favoriteJutsu', input);
            } else {
                result.textContent = 'Please enter a jutsu.';
            }
        });
    }
}); 