function openLoginForm(role) {
    document.getElementById('loginFormTitle').innerText = role + ' Login';
    document.getElementById('loginForm').style.display = 'block';
}

function closeLoginForm() {
    document.getElementById('loginForm').style.display = 'none';
}
