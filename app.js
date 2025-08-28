// Birthday Website JavaScript

// Application data
const birthdayData = {
  "real_photos": [
    {
      "url": "https://i.postimg.cc/kXx1Yr5g/Screenshot-2025-08-27-230900.png",
      "caption": "Special birthday moments together"
    },
    {
      "url": "https://i.postimg.cc/FRRVh8m3/Screenshot-2025-08-27-230723.png",
      "caption": "Adventures and travels"
    },
    {
      "url": "https://i.postimg.cc/GtgNcGZh/Screenshot-2025-08-27-230813.png",
      "caption": "Making memories"
    },
    {
      "url": "https://i.postimg.cc/y83q8p6q/Screenshot-2025-08-27-230832.png",
      "caption": "Beautiful moments by the water"
    }
  ],
  "birthday_messages": [
    "Your wisdom has been our guiding light through every challenge",
    "Your humor brings joy and laughter to our everyday moments",
    "Your strength gives us confidence to chase our dreams",
    "Your unconditional love makes us feel safe and cherished",
    "Your hard work and dedication inspire us every day",
    "Your patience helps us learn and grow at our own pace"
  ],
  "family_wishes": [
    {
      "name": "Sarah",
      "message": "Dad, thank you for being our rock and always believing in us. Happy Birthday!"
    },
    {
      "name": "Michael",
      "message": "The best advice, the biggest hugs, and the dad jokes – you're the complete package! Have an amazing day!"
    },
    {
      "name": "Mom",
      "message": "To my amazing husband and the best father our children could ask for – happy birthday, my love!"
    },
    {
      "name": "Emma",
      "message": "Dad, you taught me to be brave, kind, and true to myself. Thank you for everything!"
    }
  ],
  "timeline_events": [
    {
      "decade": "Early Years",
      "description": "Born with a heart full of dreams and determination"
    },
    {
      "decade": "Young Adult",
      "description": "Building the foundation for an incredible life ahead"
    },
    {
      "decade": "Family Man",
      "description": "Became the amazing husband and father we know and love"
    },
    {
      "decade": "Career Success",
      "description": "Achieved professional milestones while never forgetting what matters most"
    },
    {
      "decade": "Present Day",
      "description": "Continuing to inspire and guide us with wisdom and love"
    }
  ]
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  populateMessages();
  populateWishes();
  populateTimeline();
  setupEventListeners();
  addFloatingAnimations();
  setupImageLoading();
  
  // Auto-create sparkles after page loads
  setTimeout(createSparkles, 2000);
});

// Setup image loading with proper error handling
function setupImageLoading() {
  const photoImages = document.querySelectorAll('.photo-image');
  
  photoImages.forEach((img, index) => {
    // Set initial loading state
    img.style.opacity = '0';
    img.style.transform = 'scale(0.9)';
    img.style.transition = 'all 0.5s ease-out';
    
    // Add load event listener
    img.addEventListener('load', function() {
      setTimeout(() => {
        this.style.opacity = '1';
        this.style.transform = 'scale(1)';
        this.classList.add('loaded');
      }, index * 200); // Stagger the loading animation
    });
    
    // Add error event listener
    img.addEventListener('error', function() {
      console.log('Image failed to load:', this.src);
      this.parentElement.innerHTML = `
        <div style="
          width: 100%; 
          height: 100%; 
          background: var(--color-bg-3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          color: var(--color-text-secondary);
          font-size: var(--font-size-sm);
          text-align: center;
          padding: var(--space-16);
        ">
          <span style="font-size: 2rem; margin-bottom: var(--space-8);">📸</span>
          <span>Photo Loading...</span>
        </div>
      `;
    });
  });
}

// Populate birthday messages
function populateMessages() {
  const messagesGrid = document.getElementById('messagesGrid');
  if (messagesGrid) {
    birthdayData.birthday_messages.forEach(message => {
      const messageCard = document.createElement('div');
      messageCard.className = 'message-card';
      messageCard.innerHTML = `<p>"${message}"</p>`;
      messagesGrid.appendChild(messageCard);
    });
  }
}

// Populate existing wishes
function populateWishes() {
  const existingWishes = document.getElementById('existingWishes');
  if (existingWishes) {
    birthdayData.family_wishes.forEach(wish => {
      const wishCard = document.createElement('div');
      wishCard.className = 'wish-card';
      wishCard.innerHTML = `
        <div class="wish-author">- ${wish.name}</div>
        <p class="wish-message">${wish.message}</p>
      `;
      existingWishes.appendChild(wishCard);
    });
  }
}

// Populate timeline
function populateTimeline() {
  const timeline = document.getElementById('timeline');
  if (timeline) {
    birthdayData.timeline_events.forEach((event, index) => {
      const timelineItem = document.createElement('div');
      timelineItem.className = 'timeline-item';
      timelineItem.innerHTML = `
        <div class="timeline-content">
          <h3 class="timeline-decade">${event.decade}</h3>
          <p class="timeline-description">${event.description}</p>
        </div>
        <div class="timeline-marker"></div>
      `;
      timeline.appendChild(timelineItem);
    });
  }
}

// Setup event listeners
function setupEventListeners() {
  // Surprise button
  const surpriseBtn = document.getElementById('surpriseBtn');
  if (surpriseBtn) {
    surpriseBtn.addEventListener('click', function() {
      createConfetti();
      showTemporaryMessage('🎉 Surprise! We love you, Dad! 🎉');
    });
  }
  
  // Wish form
  const wishForm = document.getElementById('wishForm');
  if (wishForm) {
    wishForm.addEventListener('submit', handleWishSubmission);
  }
  
  // Back to top button
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      scrollToTop();
    });
  }
  
  // Enable smooth scrolling for internal links
  enableSmoothScrolling();
}

// Create confetti effect
function createConfetti() {
  const confettiContainer = document.getElementById('confetti');
  if (!confettiContainer) return;
  
  // Clear existing confetti
  confettiContainer.innerHTML = '';
  
  // Create 50 confetti pieces
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-piece';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.animationDelay = Math.random() * 2 + 's';
    confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
    confettiContainer.appendChild(confetti);
  }
  
  // Remove confetti after animation
  setTimeout(() => {
    if (confettiContainer) {
      confettiContainer.innerHTML = '';
    }
  }, 5000);
}

// Handle wish form submission
function handleWishSubmission(e) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const name = formData.get('name');
  const message = formData.get('message');
  
  if (name && message) {
    const existingWishes = document.getElementById('existingWishes');
    if (existingWishes) {
      // Add new wish to the existing wishes
      const wishCard = document.createElement('div');
      wishCard.className = 'wish-card';
      wishCard.innerHTML = `
        <div class="wish-author">- ${name}</div>
        <p class="wish-message">${message}</p>
      `;
      
      // Add with animation
      wishCard.style.opacity = '0';
      wishCard.style.transform = 'translateY(20px)';
      existingWishes.appendChild(wishCard);
      
      // Animate in
      setTimeout(() => {
        wishCard.style.transition = 'all 0.3s ease-out';
        wishCard.style.opacity = '1';
        wishCard.style.transform = 'translateY(0)';
      }, 100);
    }
    
    // Reset form
    e.target.reset();
    
    // Show success message
    showSuccessMessage();
  }
}

// Show success message
function showSuccessMessage() {
  const wishForm = document.getElementById('wishForm');
  if (!wishForm) return;
  
  let successMsg = wishForm.querySelector('.success-message');
  if (!successMsg) {
    successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.textContent = 'Your birthday wish has been added! 🎂';
    wishForm.appendChild(successMsg);
  }
  
  successMsg.classList.add('show');
  
  setTimeout(() => {
    successMsg.classList.remove('show');
  }, 3000);
}

// Show temporary message (for surprise button)
function showTemporaryMessage(message) {
  const tempMsg = document.createElement('div');
  tempMsg.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--color-primary);
    color: var(--color-btn-primary-text);
    padding: var(--space-20);
    border-radius: var(--radius-lg);
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-semibold);
    text-align: center;
    box-shadow: var(--shadow-lg);
    z-index: 1001;
    opacity: 0;
    transition: all 0.3s ease-out;
    max-width: 90%;
    word-wrap: break-word;
  `;
  tempMsg.textContent = message;
  
  document.body.appendChild(tempMsg);
  
  // Show the message
  setTimeout(() => {
    tempMsg.style.opacity = '1';
    tempMsg.style.transform = 'translate(-50%, -50%) scale(1.05)';
  }, 100);
  
  // Hide the message
  setTimeout(() => {
    tempMsg.style.opacity = '0';
    tempMsg.style.transform = 'translate(-50%, -50%) scale(0.95)';
  }, 2500);
  
  // Remove the message
  setTimeout(() => {
    if (document.body.contains(tempMsg)) {
      document.body.removeChild(tempMsg);
    }
  }, 3000);
}

// Scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Enable smooth scrolling
function enableSmoothScrolling() {
  // Add smooth scrolling to all internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Add floating animations to decorative elements
function addFloatingAnimations() {
  const decorations = document.querySelector('.birthday-decorations');
  if (decorations) {
    decorations.classList.add('floating');
  }
  
  // Add intersection observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe all cards and sections for scroll animations
  const animatedElements = document.querySelectorAll('.photo-card, .message-card, .wish-card, .timeline-item');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
  });
}

// Add some interactive hover effects
function addInteractiveEffects() {
  // Add click effect to photo cards
  document.querySelectorAll('.photo-card').forEach(card => {
    card.addEventListener('click', function() {
      this.style.transform = 'translateY(-5px) scale(0.98)';
      setTimeout(() => {
        this.style.transform = 'translateY(-5px) scale(1)';
      }, 150);
    });
  });
  
  // Add click effect to message cards
  document.querySelectorAll('.message-card').forEach(card => {
    card.addEventListener('click', function() {
      this.style.transform = 'translateX(5px) scale(0.98)';
      setTimeout(() => {
        this.style.transform = 'translateX(5px) scale(1)';
      }, 150);
    });
  });
}

// Auto-generate some birthday sparkles
function createSparkles() {
  const sparkleContainer = document.createElement('div');
  sparkleContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 999;
    overflow: hidden;
  `;
  
  for (let i = 0; i < 10; i++) {
    const sparkle = document.createElement('div');
    sparkle.textContent = '✨';
    sparkle.style.cssText = `
      position: absolute;
      font-size: 20px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: sparkle ${2 + Math.random() * 2}s ease-in-out infinite;
      animation-delay: ${Math.random() * 2}s;
    `;
    sparkleContainer.appendChild(sparkle);
  }
  
  document.body.appendChild(sparkleContainer);
  
  // Remove sparkles after 10 seconds
  setTimeout(() => {
    if (document.body.contains(sparkleContainer)) {
      document.body.removeChild(sparkleContainer);
    }
  }, 10000);
}

// Wait for DOM to be fully loaded, then add interactive effects
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(addInteractiveEffects, 500);
});
