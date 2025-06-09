document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple validation (in a real app, you would check against a database)
    if(username && password) {
        // Show loading state
        const btn = document.querySelector('.login-btn');
        btn.innerHTML = '<span class="btn-text">Authenticating</span><span class="btn-icon">[...]</span>';
        btn.style.opacity = '0.8';
        btn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Redirect to dashboard after successful login
            window.location.href = 'index1.html';
        }, 1500);
    } else {
        alert('Please enter both username and password');
    }
});