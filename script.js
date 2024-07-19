function showSection(sectionId) {
    const sections = document.querySelectorAll('.login-section, .admin-section, .user-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function login(role) {
    const username = document.querySelector(`#${role}Username`).value;
    const password = document.querySelector(`#${role}Password`).value;

    if (username === 'user123' && password === '123') {
        if (role === 'admin') {
            window.location.href = 'admin.html';
        } else if (role === 'user') {
            window.location.href = 'user.html';
        }
        return false;
    } else {
        alert('Incorrect username or password');
        return false;
    }
}
