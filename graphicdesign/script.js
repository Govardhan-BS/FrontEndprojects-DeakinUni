document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.querySelector('.btn-login');
    const signupBtn = document.querySelector('.btn-signup');
    const stickyNote = document.querySelector('.sticky-note');

    initializeAnimations();
    buttonInteractions();
    smoothScrolling();
    navbarScroll();

    function initializeAnimations() {
        const collageElements = document.querySelectorAll('.collage-element');
        
        collageElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.5}s`;
        });

        const chartBars = document.querySelectorAll('.chart-bar');
        chartBars.forEach((bar, index) => {
            bar.style.animationDelay = `${index * 0.3}s`;
        });
    }

    function buttonInteractions() {
        if (loginBtn) {
            loginBtn.addEventListener('click', () => {
                showNotification('Login functionality coming soon!', 'info');
            });
        }

        if (signupBtn) {
            signupBtn.addEventListener('click', () => {
                showNotification('Sign up functionality coming soon!', 'info');
            });
        }

        if (stickyNote) {
            stickyNote.addEventListener('click', () => {
                showNotification('Join Now clicked! Redirecting to signup...', 'success');
                setTimeout(() => {
                    signupBtn.click();
                }, 1000);
            });
        }

        const portfolioExamples = document.querySelectorAll('.portfolio-example');
        portfolioExamples.forEach(example => {
            example.addEventListener('click', () => {
                const title = example.querySelector('p').textContent;
                showNotification(`Opening portfolio: ${title}`, 'success');
            });
        });
    }

    function smoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    function navbarScroll() {
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        });
    }

    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        const colors = {
            success: '#00b894',
            error: '#e74c3c',
            info: '#74b9ff',
            warning: '#fdcb6e'
        };
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 10px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            background: ${colors[type] || colors.info};
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            max-width: 300px;
            word-wrap: break-word;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    const stepCards = document.querySelectorAll('.step');
    stepCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            const stepTitle = card.querySelector('h3').textContent;
            showNotification(`Step ${index + 1}: ${stepTitle}`, 'info');
        });
    });

    const tableCells = document.querySelectorAll('.cell.check');
    tableCells.forEach(cell => {
        cell.addEventListener('click', () => {
            const row = cell.closest('.table-row');
            const feature = row.querySelector('.row-label').textContent;
            const column = cell.cellIndex - 1;
            const columns = ['PDF', 'Behance', 'UX', 'no-code', 'code'];
            const platform = columns[column];
            
            showNotification(`${feature} is available in ${platform}`, 'success');
        });
    });

    const comparisonTable = document.querySelector('.comparison-table');
    if (comparisonTable) {
        comparisonTable.addEventListener('click', (e) => {
            if (e.target.classList.contains('cell') && !e.target.classList.contains('check')) {
                showNotification('This feature is not available in this platform', 'warning');
            }
        });
    }

    const showcaseTitle = document.querySelector('.showcase-title');
    if (showcaseTitle) {
        showcaseTitle.addEventListener('click', () => {
            showNotification('Welcome to our portfolio showcase!', 'info');
        });
    }

    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const platform = link.querySelector('i').className.split('fa-')[1];
            showNotification(`Opening ${platform} profile...`, 'info');
        });
    });

    const footerLinks = document.querySelectorAll('.footer-section a');
    footerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const linkText = link.textContent;
            showNotification(`Navigating to ${linkText}...`, 'info');
        });
    });
});

const style = document.createElement('style');
style.textContent = `
    .collage-element {
        cursor: pointer;
        transition: transform 0.3s ease;
    }
    
    .collage-element:hover {
        transform: scale(1.1) rotate(5deg);
    }
    
    .sticky-note {
        cursor: pointer;
        transition: transform 0.3s ease;
    }
    
    .sticky-note:hover {
        transform: rotate(-5deg) scale(1.05);
    }
    
    .step {
        cursor: pointer;
    }
    
    .cell.check {
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    
    .cell.check:hover {
        background-color: #f8f9fa;
    }
    
    .portfolio-example {
        cursor: pointer;
        transition: transform 0.3s ease;
    }
    
    .portfolio-example:hover {
        transform: translateY(-5px);
    }
    
    .example-placeholder {
        transition: background-color 0.3s ease;
    }
    
    .portfolio-example:hover .example-placeholder {
        background-color: #6c5ce7;
        color: white;
    }
    
    .showcase-title {
        cursor: pointer;
        transition: color 0.3s ease;
    }
    
    .showcase-title:hover {
        color: #6c5ce7;
    }
    
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        60% {
            transform: translateY(-5px);
        }
    }
    
    .notification {
        animation: bounce 0.6s ease-in-out;
    }
`;
document.head.appendChild(style); 