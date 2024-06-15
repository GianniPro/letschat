document.querySelector('.settings-icon').addEventListener('click', function() {
    document.querySelector('.settings-modal').style.display = 'block';
});

document.querySelector('.settings-modal button').addEventListener('click', function() {
    document.querySelector('.settings-modal').style.display = 'none';
    // Add logic to save settings and apply theme/color changes
});
