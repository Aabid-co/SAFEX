// OSH Education Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            this.classList.toggle('active');
        });
    }

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            if (navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
                mobileMenuToggle.classList.remove('active');
            }
        });
    });

    // Footer links smooth scrolling
    const footerLinks = document.querySelectorAll('.footer-links a[href^="#"]');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
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

    // Course Enrollment Modal
    const courseButtons = document.querySelectorAll('.course-btn');
    const enrollmentModal = document.getElementById('enrollmentModal');
    const modalClose = document.querySelector('.modal-close');
    const modalCancel = document.querySelector('.modal-cancel');
    const modalBackdrop = document.querySelector('.modal-backdrop');
    const selectedCourseInput = document.getElementById('selectedCourse');

    // Ensure all course buttons have proper event listeners
    courseButtons.forEach((button, index) => {
        // Make sure each button has a data-course attribute
        if (!button.getAttribute('data-course')) {
            // Fallback: get course name from the card
            const courseCard = button.closest('.course-card');
            const courseTitle = courseCard ? courseCard.querySelector('h3').textContent : `Course ${index + 1}`;
            button.setAttribute('data-course', courseTitle);
        }
        
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const courseName = this.getAttribute('data-course');
            if (selectedCourseInput) {
                selectedCourseInput.value = courseName;
            }
            showModal(enrollmentModal);
        });
    });

    function showModal(modal) {
        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            // Focus on first input for accessibility
            const firstInput = modal.querySelector('input[type="text"]');
            if (firstInput) {
                setTimeout(() => firstInput.focus(), 100);
            }
        }
    }

    function hideModal(modal) {
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    }

    if (modalClose) {
        modalClose.addEventListener('click', () => hideModal(enrollmentModal));
    }

    if (modalCancel) {
        modalCancel.addEventListener('click', () => hideModal(enrollmentModal));
    }

    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', () => hideModal(enrollmentModal));
    }

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && enrollmentModal && !enrollmentModal.classList.contains('hidden')) {
            hideModal(enrollmentModal);
        }
    });

    // Contact Form Validation and Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous errors
            clearErrors();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            let isValid = true;
            
            // Validate name
            if (!data.name || data.name.trim().length < 2) {
                showError('nameError', 'Please enter a valid name (at least 2 characters)');
                isValid = false;
            }
            
            // Validate email
            if (!data.email || !isValidEmail(data.email)) {
                showError('emailError', 'Please enter a valid email address');
                isValid = false;
            }
            
            // Validate message
            if (!data.message || data.message.trim().length < 10) {
                showError('messageError', 'Please enter a message (at least 10 characters)');
                isValid = false;
            }
            
            if (isValid) {
                // Simulate form submission
                submitContactForm(data);
            } else {
                // Scroll to first error
                const firstError = document.querySelector('.error-message.show');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });
    }

    // Enrollment Form Validation and Submission
    const enrollmentForm = document.getElementById('enrollmentForm');
    if (enrollmentForm) {
        enrollmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            let isValid = true;
            let errorMessage = '';
            
            // Validate name
            if (!data.name || data.name.trim().length < 2) {
                errorMessage += 'Please enter a valid name (at least 2 characters)\n';
                isValid = false;
            }
            
            // Validate email
            if (!data.email || !isValidEmail(data.email)) {
                errorMessage += 'Please enter a valid email address\n';
                isValid = false;
            }
            
            if (!isValid) {
                alert('Please correct the following errors:\n\n' + errorMessage);
                return;
            }
            
            // If valid, submit the form
            submitEnrollmentForm(data);
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('show');
            
            // Add red border to the associated input
            const input = errorElement.previousElementSibling;
            if (input && input.classList.contains('form-control')) {
                input.style.borderColor = 'var(--color-error)';
            }
        }
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(element => {
            element.classList.remove('show');
            element.textContent = '';
            
            // Remove red border from associated input
            const input = element.previousElementSibling;
            if (input && input.classList.contains('form-control')) {
                input.style.borderColor = '';
            }
        });
    }

    function submitContactForm(data) {
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Simulate API call
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you within 24 hours.');
            contactForm.reset();
            clearErrors();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 1500);
    }

    function submitEnrollmentForm(data) {
        // Show loading state
        const submitButton = enrollmentForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Submitting...';
        submitButton.disabled = true;

        // Simulate API call
        setTimeout(() => {
            alert(`Thank you for your interest in "${data.course}"! We will contact you soon with course details and enrollment information.`);
            enrollmentForm.reset();
            hideModal(enrollmentModal);
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 1500);
    }

    // Safety Tips Rotation
    const safetyTips = [
        "Always conduct a workplace risk assessment before starting any new task. Identify potential hazards and implement appropriate control measures to ensure worker safety.",
        "Proper use of Personal Protective Equipment (PPE) can prevent up to 85% of workplace injuries. Ensure all equipment is properly fitted, maintained, and replaced when necessary.",
        "The hierarchy of controls should always be followed: Elimination, Substitution, Engineering controls, Administrative controls, and PPE as the last line of defense.",
        "Regular safety training and refresher courses keep safety awareness high and help prevent complacency in the workplace.",
        "Near-miss reporting is crucial for preventing accidents. Every near-miss is an opportunity to improve safety systems before an actual incident occurs.",
        "Emergency evacuation routes should be clearly marked, well-lit, and regularly practiced. All employees should know at least two exit routes from their work area.",
        "Proper lifting technique can prevent back injuries: Keep your back straight, lift with your legs, and avoid twisting while carrying loads.",
        "Chemical safety requires proper storage, labeling, and handling procedures. Always read Safety Data Sheets (SDS) before working with hazardous materials."
    ];

    const dailyTipElement = document.getElementById('daily-tip');
    if (dailyTipElement) {
        let currentTipIndex = 0;
        
        function rotateTip() {
            dailyTipElement.style.opacity = '0';
            setTimeout(() => {
                currentTipIndex = (currentTipIndex + 1) % safetyTips.length;
                dailyTipElement.textContent = safetyTips[currentTipIndex];
                dailyTipElement.style.opacity = '1';
            }, 300);
        }
        
        // Rotate tip every 8 seconds
        setInterval(rotateTip, 8000);
        
        // Add transition effect
        dailyTipElement.style.transition = 'opacity 0.3s ease-in-out';
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add shadow when scrolling
        if (scrollTop > 0) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });

    // Real-time form validation
    const formInputs = document.querySelectorAll('.form-control');
    formInputs.forEach(input => {
        // Add focus effects
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
            // Clear error state on focus
            this.style.borderColor = '';
            const errorElement = this.parentElement.querySelector('.error-message');
            if (errorElement) {
                errorElement.classList.remove('show');
            }
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
        
        // Real-time validation
        input.addEventListener('input', function() {
            const errorElement = this.parentElement.querySelector('.error-message');
            if (!errorElement) return;
            
            let isValid = true;
            let errorMessage = '';
            
            if (this.type === 'email' && this.value) {
                if (!isValidEmail(this.value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid email address';
                }
            }
            
            if (this.hasAttribute('required') && !this.value.trim()) {
                isValid = false;
                errorMessage = 'This field is required';
            }
            
            if (this.name === 'name' && this.value && this.value.trim().length < 2) {
                isValid = false;
                errorMessage = 'Name must be at least 2 characters';
            }
            
            if (this.name === 'message' && this.value && this.value.trim().length < 10) {
                isValid = false;
                errorMessage = 'Message must be at least 10 characters';
            }
            
            if (!isValid) {
                this.style.borderColor = 'var(--color-error)';
                errorElement.textContent = errorMessage;
                errorElement.classList.add('show');
            } else {
                this.style.borderColor = 'var(--color-success)';
                errorElement.classList.remove('show');
            }
        });
        
        // Add character counter for textarea
        if (input.tagName === 'TEXTAREA') {
            const maxLength = 500;
            input.setAttribute('maxlength', maxLength);
            
            const counter = document.createElement('div');
            counter.className = 'char-counter';
            counter.style.cssText = 'font-size: 12px; color: var(--color-text-secondary); text-align: right; margin-top: 4px;';
            input.parentElement.appendChild(counter);
            
            function updateCounter() {
                const remaining = maxLength - input.value.length;
                counter.textContent = `${remaining} characters remaining`;
                
                if (remaining < 50) {
                    counter.style.color = 'var(--color-warning)';
                } else if (remaining < 20) {
                    counter.style.color = 'var(--color-error)';
                } else {
                    counter.style.color = 'var(--color-text-secondary)';
                }
            }
            
            input.addEventListener('input', updateCounter);
            updateCounter();
        }
    });

    // Intersection Observer for animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.course-card, .resource-category, .testimonial-card, .about-feature, .feature-item');
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(element);
    });

    // Counter animation for statistics
    function animateCounter(element, target, suffix, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target.toLocaleString() + suffix;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start).toLocaleString() + suffix;
            }
        }, 16);
    }

    // Animate counters when statistics section comes into view
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(statNumber => {
                    const text = statNumber.textContent;
                    const number = parseInt(text.replace(/[^\d]/g, ''));
                    const suffix = text.replace(/[\d,]/g, '');
                    
                    statNumber.textContent = '0' + suffix;
                    setTimeout(() => {
                        animateCounter(statNumber, number, suffix);
                    }, 200);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statisticsSection = document.querySelector('.statistics');
    if (statisticsSection) {
        statsObserver.observe(statisticsSection);
    }

    // Resource links click tracking
    const resourceLinks = document.querySelectorAll('.resource-link');
    resourceLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const resourceName = this.textContent;
            
            // Simulate resource download or view
            alert(`Opening: ${resourceName}\n\nThis would normally download or open the resource file.`);
            
            // In a real application, you would track this event
            console.log(`Resource accessed: ${resourceName}`);
        });
    });

    // Accessibility enhancements
    document.addEventListener('keydown', function(e) {
        // Skip to main content with Alt+S
        if (e.altKey && e.key === 's') {
            e.preventDefault();
            const mainContent = document.querySelector('#home');
            if (mainContent) {
                mainContent.focus();
                mainContent.scrollIntoView();
            }
        }
    });

    // Add skip link for screen readers
    const skipLink = document.createElement('a');
    skipLink.href = '#home';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--color-primary);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    console.log('OSH Education website loaded successfully!');
});