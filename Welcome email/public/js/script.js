document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('subscriptionForm');
    const emailInput = document.getElementById('emailInput');
    const messageDiv = document.getElementById('message');
    const submitBtn = form.querySelector('button[type="submit"]');

    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = `message ${type}`;
        messageDiv.style.display = 'block';
        
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function setLoadingState(isLoading) {
        submitBtn.disabled = isLoading;
        submitBtn.textContent = isLoading ? 'Sending...' : 'Subscribe';
    }

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        if (!email) {
            showMessage('Please enter your email address.', 'error');
            return;
        }
        
        if (!validateEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        setLoadingState(true);
        
        try {
            const response = await fetch('/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email })
            });
            
            const data = await response.json();
            
            if (data.success) {
                showMessage(data.message, 'success');
                emailInput.value = '';
            } else {
                showMessage(data.message || 'Failed to subscribe. Please try again.', 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            showMessage('Network error. Please check your connection and try again.', 'error');
        } finally {
            setLoadingState(false);
        }
    });

    emailInput.addEventListener('input', function() {
        if (messageDiv.style.display === 'block') {
            messageDiv.style.display = 'none';
        }
    });
}); 