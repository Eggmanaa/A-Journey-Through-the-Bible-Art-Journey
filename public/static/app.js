// Biblical Art Journey - Interactive Features

// Global state
let currentStory = null;
let userProgress = {
  completedStories: [],
  favoriteStories: [],
  currentStory: null
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

// Main initialization function
function initializeApp() {
  loadUserProgress();
  initializeImageModals();
  initializeHotspots();
  initializeProgressTracking();
  initializeSmoothScrolling();
  initializeAccessibility();
}

// Image Modal Functions
function openImageModal(imageSrc) {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  
  if (modal && modalImage) {
    modalImage.src = imageSrc;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    
    // Add keyboard navigation
    document.addEventListener('keydown', handleModalKeydown);
  }
}

function closeImageModal() {
  const modal = document.getElementById('imageModal');
  
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
    
    // Remove keyboard navigation
    document.removeEventListener('keydown', handleModalKeydown);
  }
}

function handleModalKeydown(event) {
  if (event.key === 'Escape') {
    closeImageModal();
  }
}

function initializeImageModals() {
  // Add click handlers to all zoomable images
  const zoomableImages = document.querySelectorAll('[data-zoomable]');
  zoomableImages.forEach(img => {
    img.addEventListener('click', () => openImageModal(img.src));
    img.style.cursor = 'zoom-in';
  });
}

// Hotspot functionality for interactive artwork exploration
function initializeHotspots() {
  const hotspots = document.querySelectorAll('.hotspot');
  
  hotspots.forEach(hotspot => {
    hotspot.addEventListener('click', handleHotspotClick);
    hotspot.addEventListener('mouseenter', showHotspotTooltip);
    hotspot.addEventListener('mouseleave', hideHotspotTooltip);
  });
}

function handleHotspotClick(event) {
  const hotspot = event.target;
  const info = hotspot.dataset.info;
  const title = hotspot.dataset.title;
  
  if (info) {
    showInfoPopup(title, info, event.pageX, event.pageY);
  }
}

function showHotspotTooltip(event) {
  const hotspot = event.target;
  const tooltipText = hotspot.dataset.tooltip;
  
  if (tooltipText) {
    const tooltip = createTooltip(tooltipText);
    document.body.appendChild(tooltip);
    
    const rect = hotspot.getBoundingClientRect();
    tooltip.style.left = rect.left + rect.width / 2 + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
    
    setTimeout(() => tooltip.classList.add('show'), 10);
  }
}

function hideHotspotTooltip() {
  const tooltips = document.querySelectorAll('.tooltip');
  tooltips.forEach(tooltip => {
    tooltip.classList.remove('show');
    setTimeout(() => tooltip.remove(), 300);
  });
}

function createTooltip(text) {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.textContent = text;
  return tooltip;
}

function showInfoPopup(title, content, x, y) {
  // Create and show info popup
  const popup = document.createElement('div');
  popup.className = 'fixed bg-white rounded-lg shadow-2xl p-6 z-50 max-w-sm border border-gray-200';
  popup.style.left = Math.min(x, window.innerWidth - 250) + 'px';
  popup.style.top = Math.min(y, window.innerHeight - 200) + 'px';
  
  popup.innerHTML = `
    <div class="flex items-center justify-between mb-3">
      <h3 class="font-bold text-gray-800">${title}</h3>
      <button onclick="this.parentElement.parentElement.remove()" class="text-gray-400 hover:text-gray-600">
        <i class="fas fa-times"></i>
      </button>
    </div>
    <p class="text-gray-600">${content}</p>
  `;
  
  document.body.appendChild(popup);
  
  // Auto-close after 10 seconds
  setTimeout(() => {
    if (popup.parentElement) {
      popup.remove();
    }
  }, 10000);
}

// Progress tracking
function loadUserProgress() {
  const saved = localStorage.getItem('biblicalArtProgress');
  if (saved) {
    userProgress = { ...userProgress, ...JSON.parse(saved) };
  }
}

function saveUserProgress() {
  localStorage.setItem('biblicalArtProgress', JSON.stringify(userProgress));
}

function markStoryCompleted(storyId) {
  if (!userProgress.completedStories.includes(storyId)) {
    userProgress.completedStories.push(storyId);
    saveUserProgress();
    updateProgressDisplay();
    showCompletionBadge();
  }
}

function toggleFavoriteStory(storyId) {
  const index = userProgress.favoriteStories.indexOf(storyId);
  if (index > -1) {
    userProgress.favoriteStories.splice(index, 1);
  } else {
    userProgress.favoriteStories.push(storyId);
  }
  saveUserProgress();
  updateFavoriteButtons();
}

function updateProgressDisplay() {
  const progressBars = document.querySelectorAll('.progress-bar');
  const totalStories = document.querySelectorAll('[data-story-id]').length;
  const completedCount = userProgress.completedStories.length;
  const percentage = totalStories > 0 ? (completedCount / totalStories) * 100 : 0;
  
  progressBars.forEach(bar => {
    bar.style.width = percentage + '%';
  });
  
  // Update progress text
  const progressTexts = document.querySelectorAll('.progress-text');
  progressTexts.forEach(text => {
    text.textContent = `${completedCount} of ${totalStories} stories completed`;
  });
}

function showCompletionBadge() {
  const badge = document.createElement('div');
  badge.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-bounce';
  badge.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Story Completed!';
  
  document.body.appendChild(badge);
  
  setTimeout(() => {
    badge.style.animation = 'fadeOut 0.5s ease-out';
    setTimeout(() => badge.remove(), 500);
  }, 3000);
}

function updateFavoriteButtons() {
  const favoriteButtons = document.querySelectorAll('[data-favorite-btn]');
  favoriteButtons.forEach(btn => {
    const storyId = btn.dataset.storyId;
    const isFavorite = userProgress.favoriteStories.includes(storyId);
    
    btn.innerHTML = isFavorite 
      ? '<i class="fas fa-heart text-red-500"></i>' 
      : '<i class="far fa-heart text-gray-400"></i>';
  });
}

function initializeProgressTracking() {
  // Mark story as viewed when scrolled to bottom
  let hasMarkedComplete = false;
  
  window.addEventListener('scroll', () => {
    if (hasMarkedComplete) return;
    
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    if (scrollPosition >= documentHeight - 100) {
      const storyId = document.body.dataset.storyId;
      if (storyId) {
        markStoryCompleted(storyId);
        hasMarkedComplete = true;
      }
    }
  });
  
  updateProgressDisplay();
  updateFavoriteButtons();
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
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

// Accessibility improvements
function initializeAccessibility() {
  // Add skip links
  addSkipLinks();
  
  // Enhance keyboard navigation
  enhanceKeyboardNavigation();
  
  // Add ARIA labels where needed
  addAriaLabels();
  
  // High contrast mode detection
  detectHighContrast();
}

function addSkipLinks() {
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded';
  
  document.body.insertBefore(skipLink, document.body.firstChild);
}

function enhanceKeyboardNavigation() {
  // Add keyboard support to interactive elements
  const interactiveElements = document.querySelectorAll('.hotspot, [data-zoomable]');
  
  interactiveElements.forEach(element => {
    if (!element.hasAttribute('tabindex')) {
      element.setAttribute('tabindex', '0');
    }
    
    element.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        element.click();
      }
    });
  });
}

function addAriaLabels() {
  // Add ARIA labels to images without alt text
  const images = document.querySelectorAll('img:not([alt])');
  images.forEach(img => {
    img.setAttribute('alt', 'Biblical artwork illustration');
  });
  
  // Add ARIA labels to interactive elements
  const hotspots = document.querySelectorAll('.hotspot');
  hotspots.forEach(hotspot => {
    if (!hotspot.hasAttribute('aria-label')) {
      hotspot.setAttribute('aria-label', 'Interactive artwork detail');
    }
  });
}

function detectHighContrast() {
  // Detect if user prefers high contrast
  if (window.matchMedia('(prefers-contrast: high)').matches) {
    document.body.classList.add('high-contrast');
  }
}

// Interactive activities
function initializeActivities() {
  // Matching game for Noah's Ark
  initializeMatchingGame();
  
  // Color picker for coat of many colors
  initializeColorPicker();
  
  // Timeline interactions
  initializeTimeline();
}

function initializeMatchingGame() {
  const gameContainer = document.getElementById('matching-game');
  if (!gameContainer) return;
  
  const animals = ['lion', 'elephant', 'giraffe', 'zebra', 'tiger', 'bear'];
  let selectedCards = [];
  let matches = 0;
  
  // Create game board
  const gameBoard = document.createElement('div');
  gameBoard.className = 'grid grid-cols-4 gap-4 max-w-md mx-auto';
  
  // Create pairs of animal cards
  const cards = [...animals, ...animals].sort(() => Math.random() - 0.5);
  
  cards.forEach((animal, index) => {
    const card = document.createElement('div');
    card.className = 'bg-blue-100 rounded-lg p-4 cursor-pointer hover:bg-blue-200 transition-colors flex items-center justify-center h-20';
    card.dataset.animal = animal;
    card.dataset.index = index;
    card.innerHTML = '<i class="fas fa-question text-2xl text-blue-600"></i>';
    
    card.addEventListener('click', () => handleCardClick(card));
    gameBoard.appendChild(card);
  });
  
  gameContainer.appendChild(gameBoard);
  
  function handleCardClick(card) {
    if (card.classList.contains('flipped') || selectedCards.length >= 2) return;
    
    // Flip card
    card.classList.add('flipped', 'bg-green-100');
    card.innerHTML = `<span class="text-2xl">${getAnimalEmoji(card.dataset.animal)}</span>`;
    selectedCards.push(card);
    
    if (selectedCards.length === 2) {
      setTimeout(checkMatch, 1000);
    }
  }
  
  function checkMatch() {
    const [card1, card2] = selectedCards;
    
    if (card1.dataset.animal === card2.dataset.animal) {
      // Match found
      card1.classList.add('bg-green-200');
      card2.classList.add('bg-green-200');
      matches++;
      
      if (matches === animals.length) {
        showGameComplete();
      }
    } else {
      // No match
      card1.classList.remove('flipped', 'bg-green-100');
      card2.classList.remove('flipped', 'bg-green-100');
      card1.innerHTML = '<i class="fas fa-question text-2xl text-blue-600"></i>';
      card2.innerHTML = '<i class="fas fa-question text-2xl text-blue-600"></i>';
    }
    
    selectedCards = [];
  }
  
  function getAnimalEmoji(animal) {
    const emojis = {
      lion: '🦁', elephant: '🐘', giraffe: '🦒', 
      zebra: '🦓', tiger: '🐅', bear: '🐻'
    };
    return emojis[animal] || '🐾';
  }
  
  function showGameComplete() {
    const celebration = document.createElement('div');
    celebration.className = 'text-center mt-4 p-4 bg-yellow-100 rounded-lg';
    celebration.innerHTML = `
      <i class="fas fa-trophy text-3xl text-yellow-600 mb-2"></i>
      <h3 class="text-lg font-bold text-gray-800">Congratulations!</h3>
      <p class="text-gray-600">You helped all the animals find their pairs for the ark!</p>
    `;
    gameContainer.appendChild(celebration);
  }
}

function initializeColorPicker() {
  const colorPicker = document.getElementById('color-picker');
  if (!colorPicker) return;
  
  const coat = document.getElementById('josephs-coat');
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57', '#FF9FF3', '#54A0FF'];
  
  colors.forEach(color => {
    const colorBtn = document.createElement('button');
    colorBtn.className = 'w-8 h-8 rounded-full border-2 border-gray-300 hover:border-gray-600 transition-colors';
    colorBtn.style.backgroundColor = color;
    colorBtn.addEventListener('click', () => addColorToCoat(color));
    colorPicker.appendChild(colorBtn);
  });
  
  function addColorToCoat(color) {
    if (coat) {
      const colorPatch = document.createElement('div');
      colorPatch.className = 'inline-block w-6 h-6 m-1 rounded';
      colorPatch.style.backgroundColor = color;
      coat.appendChild(colorPatch);
    }
  }
}

function initializeTimeline() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  timelineItems.forEach(item => {
    item.addEventListener('click', () => {
      const content = item.querySelector('.timeline-content');
      content.classList.toggle('hidden');
      
      const icon = item.querySelector('.timeline-icon');
      icon.classList.toggle('text-blue-600');
      icon.classList.toggle('text-gray-400');
    });
  });
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// Performance optimizations
const debouncedScroll = debounce(() => {
  // Handle scroll events
}, 100);

const throttledResize = throttle(() => {
  // Handle resize events
}, 250);

// Event listeners
window.addEventListener('scroll', debouncedScroll);
window.addEventListener('resize', throttledResize);

// Export functions for global use
window.openImageModal = openImageModal;
window.closeImageModal = closeImageModal;
window.markStoryCompleted = markStoryCompleted;
window.toggleFavoriteStory = toggleFavoriteStory;