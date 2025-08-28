// Birthday Website JavaScript

const birthdayData = {
  birthday_messages: [
    "Your wisdom has been our guiding light through every challenge",
    "Your humor brings joy and laughter to our everyday moments",
    "Your strength gives us confidence to chase our dreams",
    "Your adventurous spirit makes every trip unforgettable",
    "Your unconditional love makes us feel safe and cherished",
    "Your patience helps us learn and grow at our own pace",
    "You turn ordinary moments into extraordinary memories"
  ],
  family_wishes: [
    {
      name: "Your Son",
      message: "Pops, thank you for all the adventures we've shared and for always being there for me. From birthday celebrations to travel adventures, you make every moment special. Happy Birthday!"
    },
    {
      name: "The Family",
      message: "To our amazing Pops - thank you for the laughter, the wisdom, and all the beautiful memories we've created together. Here's to many more!"
    },
    {
      name: "Everyone Who Loves You",
      message: "Pops, whether we're celebrating at home or exploring new places, you make everything better. Your joy is contagious and your love surrounds us always."
    }
  ],
  timeline_events: [
    {
      decade: "Early Years",
      description: "Born with a heart full of dreams and determination"
    },
    {
      decade: "Young Adult",
      description: "Building the foundation for an incredible life ahead"
    },
    {
      decade: "Family Man",
      description: "Became the amazing husband and father we know and love"
    },
    {
      decade: "Adventure Seeker",
      description: "Creating unforgettable memories through travel and exploration"
    },
    {
      decade: "Present Day",
      description: "Continuing to inspire us with your zest for life and endless love"
    }
  ]
};

// Messages
const messagesGrid = document.getElementById('messagesGrid');
birthdayData.birthday_messages.forEach(message => {
  const card = document.createElement('div');
  card.classList.add('message-card');
  card.textContent = message;
  messagesGrid.appendChild(card);
});

// Wishes
const existingWishes = document.getElementById('existingWishes');
birthdayData.family_wishes.forEach(wish => {
  const wishDiv = document.createElement('div');
  wishDiv.classList.add('message-card');
  wishDiv.innerHTML = `<strong>${wish.name}:</strong> ${wish.message}`;
  existingWishes.appendChild(wishDiv);
});
document.getElementById('wishForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('wishName').value.trim();
  const message = document.getElementById('wishMessage').value.trim();
  if(name && message) {
    const wishDiv = document.createElement('div');
    wishDiv.classList.add('message-card');
    wishDiv.innerHTML = `<strong>${name}:</strong> ${message}`;
    existingWishes.appendChild(wishDiv);
    document.getElementById('wishForm').reset();
  }
});

// Timeline
const timeline = document.getElementById('timeline');
birthdayData.timeline_events.forEach(event => {
  const eventDiv = document.createElement('div');
  eventDiv.className = 'timeline-event';
  eventDiv.innerHTML = `<div class="timeline-decade">${event.decade}</div>
    <div class="timeline-desc">${event.description}</div>`;
  timeline.appendChild(eventDiv);
});

// Surprise Button Animation (example: confetti effect)
document.getElementById('surpriseBtn').addEventListener('click', function() {
  const confetti = document.getElementById('confetti');
  for(let i=0;i<40;i++){
    const span=document.createElement('span');
    span.textContent='🎉';
    span.style.position='absolute';
    span.style.top=Math.random()*80+'%';
    span.style.left=Math.random()*95+'%';
    span.style.fontSize=(Math.random()*1.5+1)+'rem';
    span.style.transform=`rotate(${Math.random()*360}deg)`;
    confetti.appendChild(span);
    setTimeout(()=>confetti.removeChild(span),2600+Math.random()*800);
  }
});
