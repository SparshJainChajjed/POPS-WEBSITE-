// Birthday Website JavaScript

// Application data from the provided JSON
const birthdayData = {
  "title": "HAPPY BIRTHDAY POPS!",
  "date": "Thursday, August 28, 2025",
  "photos": [
    {
      "src": "attached_image:1",
      "caption": "Birthday celebrations - making memories together!",
      "description": "Family birthday celebration with balloons and joy"
    },
    {
      "src": "attached_image:2", 
      "caption": "Adventures and travels - side by side",
      "description": "Father and son traveling together, sharing life's journey"
    },
    {
      "src": "attached_image:3",
      "caption": "Scenic moments - enjoying life's beautiful views",
      "description": "Peaceful boat trip with stunning mountain scenery"
    }
  ],
  "birthday_messages": [
    "Your wisdom has been our guiding light through every challenge",
    "Your humor brings joy and laughter to our everyday moments", 
    "Your strength gives us confidence to chase our dreams",
    "Your adventurous spirit makes every trip unforgettable",
    "Your unconditional love makes us feel safe and cherished",
    "Your patience helps us learn and grow at our own pace",
    "You turn ordinary moments into extraordinary memories"
  ],
  "family_wishes": [
    {
      "name": "Your Son",
      "message": "Pops, thank you for all the adventures we've shared and for always being there for me. From birthday celebrations to travel adventures, you make every moment special. Happy Birthday!"
    },
    {
      "name": "The Family", 
      "message": "To our amazing Pops - thank you for the laughter, the wisdom, and all the beautiful memories we've created together. Here's to many more!"
    },
    {
      "name": "Everyone Who Loves You",
      "message": "Pops, whether we're celebrating at home or exploring new places, you make everything better. Your joy is contagious and your love surrounds us always."
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
      "decade": "Adventure Seeker",
      "description": "Creating unforgettable memories through travel and exploration"
    },
    {
      "decade": "Present Day",
      "description": "Continuing to inspire us with your zest for life and endless love"
    }
  ]
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  console.log('Birthday app initializing...');
  populateMessages();
  populateWishes();
  populateTimeline();
  setupEventListeners();
  addFloatingAnimations();
  
  // Auto-create sparkles after page loads
  setTimeout(createSparkles, 2000);
  
  // Add interactive effects after a short delay
  setTimeout(addInteractiveEffects, 500);
});

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
      showTemporaryMessage('🎉 Surprise! We love you, Pops! 🎉');
      playSpecialEffect();
    });
  }
  
  // Wish form - Enhanced event handling
  const wishForm = document.getElementById('wishForm');
  if (wishForm) {
    wishForm.addEventListener('submit', function(e) {
      console.log('Form submission triggered');
      handleWishSubmission(e);
    });
    
    // Also listen for the button click directly as backup
    const submitBtn = wishForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.addEventListener('click', function(e) {
        // Let the form submission handler take care of it
        console.log('Submit button clicked');
      });
    }
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
  
  // Add photo card click interactions
  addPhotoInteractions();
}

// Add photo card interactions
function addPhotoInteractions() {
  const photoCards = document.querySelectorAll('.photo-card');
  photoCards.forEach((card, index) => {
    card.addEventListener('click', function() {
      const photo = birthdayData.photos[index];
      if (photo) {
        showPhotoDetails(photo);
      }
    });
    
    // Add hover sound effect simulation
    card.addEventListener('mouseenter', function() {
      this.style.cursor = 'pointer';
      // Add subtle animation on hover
      const icon = this.querySelector('.photo-icon');
      if (icon) {
        icon.style.transform = 'scale(1.2) rotate(5deg)';
      }
    });
    
    card.addEventListener('mouseleave', function() {
      const icon = this.querySelector('.photo-icon');
      if (icon) {
        icon.style.transform = 'scale(1) rotate(0deg)';
      }
    });
  });
}

// Show photo details when clicked
function showPhotoDetails(photo) {
  const modal = createPhotoModal(photo);
  document.body.appendChild(modal);
  
  // Show modal with animation
  setTimeout(() => {
    modal.style.opacity = '1';
    const content = modal.querySelector('.photo-modal-content');
    if (content) {
      content.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  }, 10);
  
  // Close modal on click outside or ESC
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal(modal);
    }
  });
  
  // Add escape key listener
  const escapeHandler = function(e) {
    if (e.key === 'Escape') {
      closeModal(modal);
      document.removeEventListener('keydown', escapeHandler);
    }
  };
  document.addEventListener('keydown', escapeHandler);
}

// Create photo modal
function createPhotoModal(photo) {
  const modal = document.createElement('div');
  modal.className = 'photo-modal';
  
  const modalContent = document.createElement('div');
  modalContent.className = 'photo-modal-content';
  modalContent.style.transform = 'translate(-50%, -50%) scale(0.9)';
  
  modalContent.innerHTML = `
    <button class="close-modal" aria-label="Close modal">×</button>
    <div style="margin-bottom: var(--space-20);">
      <div style="width: 200px; height: 200px; margin: 0 auto var(--space-16); background: var(--color-bg-3); border-radius: var(--radius-base); display: flex; align-items: center; justify-content: center; font-size: 4rem;">
        📸
      </div>
    </div>
    <h3 style="margin-bottom: var(--space-16); color: var(--color-text); font-size: var(--font-size-2xl);">${photo.caption}</h3>
    <p style="color: var(--color-text-secondary); font-size: var(--font-size-lg); line-height: var(--line-height-normal); max-width: 400px; margin: 0 auto;">${photo.description}</p>
    <div style="margin-top: var(--space-20);">
      <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); font-style: italic;">Family memories are the treasures that last forever ❤️</p>
    </div>
  `;
  
  // Add close button functionality
  const closeBtn = modalContent.querySelector('.close-modal');
  closeBtn.addEventListener('click', () => {
    closeModal(modal);
  });
  
  modal.appendChild(modalContent);
  return modal;
}

// Close modal
function closeModal(modal) {
  modal.style.opacity = '0';
  const content = modal.querySelector('.photo-modal-content');
  if (content) {
    content.style.transform = 'translate(-50%, -50%) scale(0.9)';
  }
  
  setTimeout(() => {
    if (document.body.contains(modal)) {
      document.body.removeChild(modal);
    }
  }, 300);
}

// Create confetti effect
function createConfetti() {
  const confettiContainer = document.getElementById('confetti');
  if (!confettiContainer) return;
  
  // Clear existing confetti
  confettiContainer.innerHTML = '';
  
  // Create 60 confetti pieces for more spectacular effect
  for (let i = 0; i < 60; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-piece';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.animationDelay = Math.random() * 2 + 's';
    confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
    
    // Add some variety to confetti shapes
    if (Math.random() > 0.7) {
      confetti.style.borderRadius = '0';
      confetti.style.width = '8px';
      confetti.style.height = '12px';
    }
    
    confettiContainer.appendChild(confetti);
  }
  
  // Remove confetti after animation
  setTimeout(() => {
    if (confettiContainer) {
      confettiContainer.innerHTML = '';
    }
  }, 6000);
}

// Handle wish form submission - FIXED VERSION
function handleWishSubmission(e) {
  e.preventDefault();
  console.log('handleWishSubmission called');
  
  const form = e.target;
  const nameInput = form.querySelector('#wishName');
  const messageInput = form.querySelector('#wishMessage');
  
  if (!nameInput || !messageInput) {
    console.error('Form inputs not found');
    return;
  }
  
  const name = nameInput.value.trim();
  const message = messageInput.value.trim();
  
  console.log('Form data:', { name, message });
  
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
      wishCard.style.transition = 'all 0.3s ease-out';
      
      // Insert at the beginning so it's visible
      existingWishes.insertBefore(wishCard, existingWishes.firstChild);
      
      // Animate in
      setTimeout(() => {
        wishCard.style.opacity = '1';
        wishCard.style.transform = 'translateY(0)';
      }, 100);
      
      console.log('New wish added to DOM');
    }
    
    // Reset form
    form.reset();
    
    // Show success message
    showSuccessMessage();
    
    // Create celebratory effect
    createMiniConfetti();
    
    // Scroll to show the new wish
    setTimeout(() => {
      const existingWishesSection = document.getElementById('existingWishes');
      if (existingWishesSection) {
        existingWishesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 500);
  } else {
    console.log('Form validation failed - missing name or message');
  }
}

// Create mini confetti for wish submission
function createMiniConfetti() {
  const confettiContainer = document.getElementById('confetti');
  if (!confettiContainer) return;
  
  for (let i = 0; i < 25; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-piece';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.animationDelay = Math.random() * 1 + 's';
    confetti.style.animationDuration = (Math.random() * 1 + 1.5) + 's';
    confettiContainer.appendChild(confetti);
  }
  
  setTimeout(() => {
    const pieces = confettiContainer.querySelectorAll('.confetti-piece');
    pieces.forEach(piece => {
      if (confettiContainer.contains(piece)) {
        confettiContainer.removeChild(piece);
      }
    });
  }, 3500);
}

// Show success message
function showSuccessMessage() {
  const wishForm = document.getElementById('wishForm');
  if (!wishForm) return;
  
  let successMsg = wishForm.querySelector('.success-message');
  if (!successMsg) {
    successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.textContent = 'Your birthday wish for Pops has been added! 🎂✨';
    wishForm.appendChild(successMsg);
  }
  
  successMsg.classList.add('show');
  
  setTimeout(() => {
    successMsg.classList.remove('show');
  }, 4000);
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
    padding: var(--space-20) var(--space-24);
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
    border: 2px solid var(--color-primary-hover);
  `;
  tempMsg.textContent = message;
  
  document.body.appendChild(tempMsg);
  
  // Show the message with bounce effect
  setTimeout(() => {
    tempMsg.style.opacity = '1';
    tempMsg.style.transform = 'translate(-50%, -50%) scale(1.05)';
  }, 100);
  
  // Add pulse effect
  setTimeout(() => {
    tempMsg.style.transform = 'translate(-50%, -50%) scale(1)';
  }, 200);
  
  // Hide the message
  setTimeout(() => {
    tempMsg.style.opacity = '0';
    tempMsg.style.transform = 'translate(-50%, -50%) scale(0.95)';
  }, 3000);
  
  // Remove the message
  setTimeout(() => {
    if (document.body.contains(tempMsg)) {
      document.body.removeChild(tempMsg);
    }
  }, 3500);
}

// Special effect for surprise button
function playSpecialEffect() {
  // Add extra sparkle burst
  setTimeout(() => {
    createExtraSparkles();
  }, 500);
  
  // Make the title dance
  const title = document.querySelector('.birthday-title');
  if (title) {
    title.style.animation = 'none';
    setTimeout(() => {
      title.style.animation = 'bounce 0.5s ease-in-out 3, glow 2s ease-in-out infinite alternate';
    }, 10);
  }
}

// Create extra sparkles for special effects
function createExtraSparkles() {
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
  
  for (let i = 0; i < 25; i++) {
    const sparkle = document.createElement('div');
    sparkle.textContent = '✨';
    sparkle.style.cssText = `
      position: absolute;
      font-size: ${15 + Math.random() * 10}px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: sparkle ${1.5 + Math.random() * 1.5}s ease-in-out infinite;
      animation-delay: ${Math.random() * 1}s;
    `;
    sparkleContainer.appendChild(sparkle);
  }
  
  document.body.appendChild(sparkleContainer);
  
  // Remove sparkles after animation
  setTimeout(() => {
    if (document.body.contains(sparkleContainer)) {
      document.body.removeChild(sparkleContainer);
    }
  }, 5000);
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

// Add interactive hover effects
function addInteractiveEffects() {
  // Add enhanced click effects to message cards
  document.querySelectorAll('.message-card').forEach(card => {
    card.addEventListener('click', function() {
      this.style.transform = 'translateX(5px) scale(0.98)';
      setTimeout(() => {
        this.style.transform = 'translateX(5px) scale(1)';
      }, 150);
      
      // Add a little heart animation
      const heart = document.createElement('div');
      heart.textContent = '💖';
      heart.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 20px;
        opacity: 0;
        animation: heartPop 1s ease-out;
        pointer-events: none;
      `;
      
      const style = document.createElement('style');
      style.textContent = `
        @keyframes heartPop {
          0% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0; transform: scale(1) translateY(-20px); }
        }
      `;
      document.head.appendChild(style);
      
      this.style.position = 'relative';
      this.appendChild(heart);
      
      setTimeout(() => {
        if (this.contains(heart)) {
          this.removeChild(heart);
        }
        if (document.head.contains(style)) {
          document.head.removeChild(style);
        }
      }, 1000);
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
  
  for (let i = 0; i < 20; i++) {
    const sparkle = document.createElement('div');
    sparkle.textContent = '✨';
    sparkle.style.cssText = `
      position: absolute;
      font-size: ${18 + Math.random() * 8}px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: sparkle ${2 + Math.random() * 2}s ease-in-out infinite;
      animation-delay: ${Math.random() * 2}s;
    `;
    sparkleContainer.appendChild(sparkle);
  }
  
  document.body.appendChild(sparkleContainer);
  
  // Remove sparkles after animation cycle
  setTimeout(() => {
    if (document.body.contains(sparkleContainer)) {
      document.body.removeChild(sparkleContainer);
    }
  }, 12000);
}

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
  // Press 'S' for surprise
  if (e.key.toLowerCase() === 's' && !e.ctrlKey && !e.altKey && !e.metaKey) {
    const activeElement = document.activeElement;
    if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
      const surpriseBtn = document.getElementById('surpriseBtn');
      if (surpriseBtn) {
        surpriseBtn.click();
      }
    }
  }
});
