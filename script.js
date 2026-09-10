document.addEventListener('DOMContentLoaded', () => {

    // 1. Sticky Header Scroll Effect
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars-staggered');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars-staggered');
        }
    });

    // Close mobile menu on nav link click
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars-staggered');
        });
    });

    // 3. Active Link Highlight on Scroll (Intersection Observer)
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // 4. Copy Payment Number Logic
    const copyBtn = document.getElementById('copy-btn');
    const paymentNumInput = document.getElementById('payment-number');
    const copyTooltip = document.getElementById('copy-tooltip');

    copyBtn.addEventListener('click', () => {
        // Select & copy text
        paymentNumInput.select();
        paymentNumInput.setSelectionRange(0, 99999); // For mobile devices
        
        navigator.clipboard.writeText(paymentNumInput.value)
            .then(() => {
                // Show tooltip
                copyTooltip.classList.add('show');
                
                // Change copy icon to checkmark
                const icon = copyBtn.querySelector('i');
                icon.className = 'fa-solid fa-check';
                icon.style.color = '#10b981';

                // Revert after 2 seconds
                setTimeout(() => {
                    copyTooltip.classList.remove('show');
                    icon.className = 'fa-regular fa-copy';
                    icon.style.color = '';
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    });

    // 5. Portfolio Filter Tab Switching
    const filterTabs = document.querySelectorAll('.portfolio-tab');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active classes
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const filterValue = tab.getAttribute('data-filter');

            portfolioCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.style.display = 'flex';
                    // Trigger fade-in animation
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300); // match transition speed
                }
            });
        });
    });

    // 6. Interactive Pricing Calculator
    const projectTypeSelect = document.getElementById('project-type');
    const quantityInput = document.getElementById('quantity');
    const expressCheckbox = document.getElementById('express-delivery');
    const expressCostInfo = document.getElementById('express-cost-info');
    const customSfxCheckbox = document.getElementById('custom-sfx');
    
    const totalPriceDisplay = document.getElementById('total-price');
    const breakdownBaseDisplay = document.getElementById('breakdown-base');
    const breakdownAddonsDisplay = document.getElementById('breakdown-addons');
    const calcBookingBtn = document.getElementById('calc-booking-btn');

    function calculateEstimate() {
        const baseCostPerUnit = parseInt(projectTypeSelect.value);
        let quantity = parseInt(quantityInput.value);
        
        // Bounds safety check for typed value (falls back to 1 for calculations but doesn't override input text immediately)
        if (isNaN(quantity) || quantity < 1) {
            quantity = 1;
        } else if (quantity > 99) {
            quantity = 99;
        }

        // Express delivery costs: ₹200 for reels, ₹400 for collab campaigns, ₹1000 for albums
        let expressCostPerUnit = 0;
        if (expressCheckbox.checked) {
            if (baseCostPerUnit === 600) {
                expressCostPerUnit = 200;
                expressCostInfo.textContent = '+₹200 per video';
            } else if (baseCostPerUnit === 1500) {
                expressCostPerUnit = 400;
                expressCostInfo.textContent = '+₹400 per campaign';
            } else {
                expressCostPerUnit = 1000;
                expressCostInfo.textContent = '+₹1000 per video';
            }
        } else {
            // just update description based on select type
            if (baseCostPerUnit === 600) {
                expressCostInfo.textContent = '+₹200 per video';
            } else if (baseCostPerUnit === 1500) {
                expressCostInfo.textContent = '+₹400 per campaign';
            } else {
                expressCostInfo.textContent = '+₹1000 per video';
            }
        }

        // Custom Sound FX costs: ₹150 per video
        const sfxCostPerUnit = customSfxCheckbox.checked ? 150 : 0;

        const baseTotal = baseCostPerUnit * quantity;
        const addonsTotal = (expressCostPerUnit + sfxCostPerUnit) * quantity;
        const finalTotal = baseTotal + addonsTotal;

        // Animate rolling number effect
        animatePrice(finalTotal);

        // Update Breakdown
        breakdownBaseDisplay.textContent = `₹${baseTotal}`;
        breakdownAddonsDisplay.textContent = `₹${addonsTotal}`;

        // Update Booking CTA href dynamically
        const selectedOption = projectTypeSelect.options[projectTypeSelect.selectedIndex];
        const selectedOptionText = selectedOption ? selectedOption.getAttribute('data-name') : 'Project';
        
        let detailsText = '';
        if (baseCostPerUnit === 1500) {
            detailsText = `Hi Bikash! I want to collaborate for a Paid Promotion / Brand Collab (${quantity} campaign).`;
        } else {
            detailsText = `Hi Bikash, I want to book ${quantity} x ${selectedOptionText}(s).`;
        }
        
        const addonsList = [];
        if (expressCheckbox.checked) addonsList.push("Express Delivery (24-48h)");
        if (customSfxCheckbox.checked) addonsList.push("Custom Premium SFX");
        
        if (addonsList.length > 0) {
            detailsText += ` Options: ${addonsList.join(', ')}.`;
        }
        detailsText += ` Estimated total: ₹${finalTotal}. Let's discuss details!`;

        const encodedMessage = encodeURIComponent(detailsText);
        calcBookingBtn.href = `https://wa.me/919360870164?text=${encodedMessage}`;
    }

    let priceAnimationInterval;
    function animatePrice(targetPrice) {
        clearInterval(priceAnimationInterval);
        const currentPrice = parseInt(totalPriceDisplay.textContent.replace('₹', ''));
        const difference = targetPrice - currentPrice;
        
        if (difference === 0) return;
        
        const duration = 250; // ms
        const steps = 15;
        const stepTime = duration / steps;
        const increment = difference / steps;
        
        let currentStep = 0;
        priceAnimationInterval = setInterval(() => {
            currentStep++;
            const newPrice = Math.round(currentPrice + (increment * currentStep));
            totalPriceDisplay.textContent = `₹${newPrice}`;
            
            if (currentStep >= steps) {
                clearInterval(priceAnimationInterval);
                totalPriceDisplay.textContent = `₹${targetPrice}`;
            }
        }, stepTime);
    }

    // Validate quantity constraints on blur (focus out)
    if (quantityInput) {
        quantityInput.addEventListener('blur', () => {
            let val = parseInt(quantityInput.value);
            if (isNaN(val) || val < 1) val = 1;
            if (val > 99) val = 99;
            quantityInput.value = val;
            calculateEstimate();
        });
    }

    // Custom Select Dropdown Controller
    const selectWrapper = document.getElementById('format-select-wrapper');
    const selectTrigger = document.getElementById('format-trigger');
    const selectOptions = document.querySelectorAll('.custom-option');
    const triggerText = selectTrigger ? selectTrigger.querySelector('.trigger-text') : null;

    if (selectTrigger && selectWrapper && triggerText) {
        selectTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            selectWrapper.classList.toggle('open');
        });

        selectOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // Get values
                const val = option.getAttribute('data-value');
                const optionText = option.querySelector('.option-title').textContent.trim();
                const optionPriceText = option.querySelector('.option-price').textContent.trim();
                
                // Set hidden select values
                projectTypeSelect.value = val;
                
                // Update trigger label
                triggerText.textContent = `${optionText} (${optionPriceText})`;
                
                // Update active state in list
                selectOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                
                // Close wrapper
                selectWrapper.classList.remove('open');
                
                // Fire estimate recalculations
                projectTypeSelect.dispatchEvent(new Event('change'));
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            selectWrapper.classList.remove('open');
        });
    }

    // Attach Event Listeners for calculator
    projectTypeSelect.addEventListener('change', calculateEstimate);
    quantityInput.addEventListener('input', calculateEstimate);
    expressCheckbox.addEventListener('change', calculateEstimate);
    customSfxCheckbox.addEventListener('change', calculateEstimate);

    // Initial Calculate
    calculateEstimate();

    // 7. Video Showreel Modal Simulation
    const modal = document.getElementById('video-modal');
    const modalClose = document.getElementById('modal-close');
    const simulatedPlayer = document.getElementById('simulated-player');
    const playerTitle = document.getElementById('player-title');
    const playerBadge = document.getElementById('player-badge');
    const playerPlayBtn = document.getElementById('player-play-btn');
    const playerPlayTrigger = document.getElementById('player-play-trigger');
    const progressBarFill = document.getElementById('progress-bar-fill');
    const playerTimeDisplay = document.getElementById('player-time');
    const canvas = document.getElementById('player-canvas');
    
    let isPlaying = false;
    let videoDuration = 30; // simulated duration in seconds
    let currentVideoTime = 0;
    let playerTimerInterval;

    function openModal(title, category) {
        modal.classList.add('active');
        playerTitle.textContent = title;
        let badgeLabel = 'Short Reel';
        if (category === 'album') badgeLabel = 'Video Album';
        else if (category === 'collab') badgeLabel = 'Brand Collab';
        playerBadge.textContent = badgeLabel;
        videoDuration = category === 'album' ? 90 : 30; // Albums are longer, reels/collabs are shorter
        
        // Reset player state
        isPlaying = false;
        currentVideoTime = 0;
        updatePlayerUI();
        
        // Setup initial background visuals in canvas
        generateCanvasVisuals(category);
    }

    function closeModal() {
        modal.classList.remove('active');
        pauseVideo();
    }

    function togglePlay() {
        if (isPlaying) {
            pauseVideo();
        } else {
            playVideo();
        }
    }

    function playVideo() {
        isPlaying = true;
        updatePlayerUI();
        
        // Start timeline progress
        playerTimerInterval = setInterval(() => {
            currentVideoTime += 0.1;
            if (currentVideoTime >= videoDuration) {
                currentVideoTime = 0; // Loop
            }
            updateTimelineProgress();
        }, 100);

        // Add speed and active glow wave to player backgrounds
        canvas.querySelectorAll('.glow-wave, .glow-wave-two').forEach(wave => {
            wave.style.animationPlayState = 'running';
        });
    }

    function pauseVideo() {
        isPlaying = false;
        updatePlayerUI();
        clearInterval(playerTimerInterval);
        
        // Freeze active glow waves
        canvas.querySelectorAll('.glow-wave, .glow-wave-two').forEach(wave => {
            wave.style.animationPlayState = 'paused';
        });
    }

    function updatePlayerUI() {
        const playIcon = '<i class="fa-solid fa-play"></i>';
        const pauseIcon = '<i class="fa-solid fa-pause"></i>';
        
        if (isPlaying) {
            playerPlayBtn.innerHTML = pauseIcon;
            playerPlayTrigger.style.opacity = '0';
            playerPlayTrigger.style.pointerEvents = 'none';
        } else {
            playerPlayBtn.innerHTML = playIcon;
            playerPlayTrigger.style.opacity = '1';
            playerPlayTrigger.style.pointerEvents = 'all';
        }
        updateTimelineProgress();
    }

    function updateTimelineProgress() {
        const percent = (currentVideoTime / videoDuration) * 100;
        progressBarFill.style.width = `${percent}%`;
        
        // Format times
        const formatTime = (time) => {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60).toString().padStart(2, '0');
            return `${minutes}:${seconds}`;
        };
        
        playerTimeDisplay.textContent = `${formatTime(currentVideoTime)} / ${formatTime(videoDuration)}`;
    }

    function generateCanvasVisuals(category) {
        // Clear any old dynamically generated dots
        const existingDots = canvas.querySelectorAll('.canvas-graphic');
        existingDots.forEach(dot => dot.remove());

        // Create interactive moving dots depending on video category
        const dotCount = category === 'album' ? 12 : 25;
        let color = '#7c3aed';
        if (category === 'reel') color = '#06b6d4';
        else if (category === 'collab') color = '#10b981';
        
        for (let i = 0; i < dotCount; i++) {
            const graphic = document.createElement('div');
            graphic.className = 'canvas-graphic';
            graphic.style.position = 'absolute';
            
            // Random positions
            graphic.style.left = `${Math.random() * 90 + 5}%`;
            graphic.style.top = `${Math.random() * 80 + 10}%`;
            
            // Size & Visuals
            const size = Math.random() * 40 + 10;
            graphic.style.width = `${size}px`;
            graphic.style.height = `${size}px`;
            graphic.style.borderRadius = '50%';
            graphic.style.backgroundColor = color;
            graphic.style.filter = 'blur(15px)';
            graphic.style.opacity = '0.15';
            graphic.style.transition = 'all 2s ease';
            
            canvas.appendChild(graphic);

            // Subtle wander animations
            setInterval(() => {
                if (isPlaying) {
                    graphic.style.left = `${Math.random() * 90 + 5}%`;
                    graphic.style.top = `${Math.random() * 80 + 10}%`;
                    graphic.style.transform = `scale(${Math.random() * 1.5 + 0.5})`;
                }
            }, 3000);
        }
    }

    // Attach Click Events to Portfolio Cards
    portfolioCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').textContent;
            const category = card.getAttribute('data-category');
            openModal(title, category);
        });
    });

    // Close and Play interactions
    modalClose.addEventListener('click', closeModal);
    document.querySelector('.modal-backdrop').addEventListener('click', closeModal);
    playerPlayBtn.addEventListener('click', togglePlay);
    playerPlayTrigger.addEventListener('click', playVideo);

    // Keyboard ESC to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});

// Global Stepper functions for inline HTML events
window.decrementQty = function() {
    const qtyInput = document.getElementById('quantity');
    if (qtyInput) {
        const val = parseInt(qtyInput.value) || 1;
        if (val > 1) {
            qtyInput.value = val - 1;
            qtyInput.dispatchEvent(new Event('input'));
        }
    }
};

window.incrementQty = function() {
    const qtyInput = document.getElementById('quantity');
    if (qtyInput) {
        const val = parseInt(qtyInput.value) || 1;
        if (val < 99) {
            qtyInput.value = val + 1;
            qtyInput.dispatchEvent(new Event('input'));
        }
    }
};
