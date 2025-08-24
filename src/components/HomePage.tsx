export const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Header with Sistine Chapel Background */}
      <header class="relative min-h-screen bg-sistine-hero bg-cover bg-center bg-no-repeat">
        {/* Overlay for better text readability */}
        <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
        
        {/* Content */}
        <div class="relative z-10 flex items-center justify-center min-h-screen">
          <div class="container mx-auto px-6 py-16 text-center">
            <div class="max-w-4xl mx-auto">
              <h1 class="text-6xl md:text-7xl font-bold mb-6 font-biblical text-white drop-shadow-2xl">
                <i class="fas fa-palette mr-4 text-biblical-gold"></i>
                Biblical Art Journey
              </h1>
              <p class="text-2xl md:text-3xl text-white/90 mb-8 leading-relaxed drop-shadow-lg font-serif">
                Discover sacred stories through the world's greatest masterpieces
              </p>
              <p class="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
                A faith-filled adventure combining biblical narratives, Renaissance art, 
                and interactive learning for young explorers.
              </p>
              
              {/* CTA Buttons */}
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/old-testament" 
                  class="inline-block bg-biblical-gold hover:bg-biblical-gold-dark text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  <i class="fas fa-scroll mr-2"></i>
                  Begin the Journey
                </a>
                <a 
                  href="#features" 
                  class="inline-block border-2 border-white text-white hover:bg-white hover:text-biblical-blue px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-xl"
                >
                  Learn More
                  <i class="fas fa-arrow-down ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <i class="fas fa-chevron-down text-2xl opacity-70"></i>
        </div>
      </header>

      {/* Features Preview Section */}
      <section id="features" class="py-20 bg-gradient-to-b from-biblical-cream to-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-5xl font-bold text-gray-800 mb-6 font-biblical">
              Where Faith Meets Art
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              For centuries, the greatest artists have brought Bible stories to life through 
              their masterpieces. Experience these sacred narratives through interactive learning.
            </p>
          </div>
          
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="space-y-8">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-biblical-gold rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                  <i class="fas fa-book-open text-white text-lg"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-800 mb-3">Biblical Narratives</h3>
                  <p class="text-gray-600 text-lg">Carefully crafted retellings of 30 pivotal Bible stories, designed for young learners and one-on-one teaching moments.</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-biblical-purple rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                  <i class="fas fa-palette text-white text-lg"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-800 mb-3">Renaissance Masterpieces</h3>
                  <p class="text-gray-600 text-lg">High-resolution artworks by Michelangelo, Rembrandt, Caravaggio, and other master artists with interactive zoom capabilities.</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-biblical-blue rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                  <i class="fas fa-hands text-white text-lg"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-800 mb-3">Interactive Activities</h3>
                  <p class="text-gray-600 text-lg">Engaging discussion questions, creative projects, and observation exercises that make learning memorable and meaningful.</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-biblical-green rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                  <i class="fas fa-user-graduate text-white text-lg"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-800 mb-3">Educational Excellence</h3>
                  <p class="text-gray-600 text-lg">Curator insights, art history context, and age-appropriate learning objectives crafted by educational experts.</p>
                </div>
              </div>
            </div>
            
            <div class="text-center lg:text-right">
              <div class="relative inline-block">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Creaci%C3%B3n_de_Ad%C3%A1n.jpg/800px-Creaci%C3%B3n_de_Ad%C3%A1n.jpg" 
                  alt="The Creation of Adam by Michelangelo"
                  class="rounded-xl shadow-2xl max-w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute -bottom-4 -right-4 bg-biblical-gold text-white p-4 rounded-full shadow-xl">
                  <i class="fas fa-search-plus text-2xl"></i>
                </div>
              </div>
              <p class="text-sm text-gray-500 mt-4 italic">
                "The Creation of Adam" by Michelangelo - Interactive zoom available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Navigation */}
      <section class="py-20 bg-gradient-to-b from-gray-50 to-biblical-cream">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-5xl font-bold text-gray-800 mb-6 font-biblical">
              Choose Your Gallery
            </h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">
              Begin your journey through sacred history with interactive stories and masterpiece artwork.
            </p>
          </div>
          <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Old Testament */}
            <a 
              href="/old-testament" 
              class="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3 hover:rotate-1"
            >
              <div class="h-80 bg-gradient-to-br from-biblical-gold via-biblical-warm to-biblical-gold-dark flex items-center justify-center relative overflow-hidden">
                <div class="absolute inset-0 bg-black/10"></div>
                <i class="fas fa-scroll text-white text-7xl group-hover:scale-125 transition-transform duration-500 relative z-10 drop-shadow-lg"></i>
                <div class="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-semibold">
                  13 Stories Ready
                </div>
              </div>
              <div class="p-8">
                <h3 class="text-3xl font-bold text-gray-800 mb-4 font-biblical">Old Testament Gallery</h3>
                <p class="text-gray-600 mb-6 text-lg leading-relaxed">
                  Journey from Creation to the Prophets. Explore the foundations of faith 
                  through powerful stories of God's relationship with humanity.
                </p>
                <div class="flex items-center text-biblical-gold font-bold text-lg">
                  <span>Begin the Journey</span>
                  <i class="fas fa-arrow-right ml-3 group-hover:translate-x-2 transition-transform duration-300"></i>
                </div>
              </div>
            </a>

            {/* New Testament */}
            <a 
              href="/new-testament" 
              class="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3 hover:-rotate-1"
            >
              <div class="h-80 bg-gradient-to-br from-biblical-blue via-biblical-blue-light to-biblical-purple flex items-center justify-center relative overflow-hidden">
                <div class="absolute inset-0 bg-black/10"></div>
                <i class="fas fa-cross text-white text-7xl group-hover:scale-125 transition-transform duration-500 relative z-10 drop-shadow-lg"></i>
                <div class="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-semibold">
                  17 Stories Ready
                </div>
              </div>
              <div class="p-8">
                <h3 class="text-3xl font-bold text-gray-800 mb-4 font-biblical">New Testament Gallery</h3>
                <p class="text-gray-600 mb-6 text-lg leading-relaxed">
                  Follow Jesus' life and the early Church. Discover stories of hope, 
                  salvation, and the greatest love story ever told.
                </p>
                <div class="flex items-center text-biblical-blue font-bold text-lg">
                  <span>Enter the Gallery</span>
                  <i class="fas fa-arrow-right ml-3 group-hover:translate-x-2 transition-transform duration-300"></i>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Learning Features */}
      <section class="py-20 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-5xl font-bold text-gray-800 mb-6 font-biblical">
              Interactive Learning Features
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Engaging tools designed to make biblical art education memorable, meaningful, and fun.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-12">
            <div class="text-center group">
              <div class="w-24 h-24 bg-gradient-to-br from-biblical-gold to-biblical-gold-dark rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <i class="fas fa-search-plus text-white text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-6">Zoom & Explore</h3>
              <p class="text-gray-600 text-lg leading-relaxed">
                Get up close with famous artworks using our enhanced zoom feature. 
                Pan and explore every detail of Renaissance masterpieces.
              </p>
            </div>
            
            <div class="text-center group">
              <div class="w-24 h-24 bg-gradient-to-br from-biblical-green to-biblical-green-dark rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <i class="fas fa-palette text-white text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-6">Creative Activities</h3>
              <p class="text-gray-600 text-lg leading-relaxed">
                Hands-on art projects, acting exercises, and creative challenges that help 
                children connect personally with each biblical story.
              </p>
            </div>
            
            <div class="text-center group">
              <div class="w-24 h-24 bg-gradient-to-br from-biblical-blue to-biblical-blue-dark rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <i class="fas fa-comments text-white text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-6">Discussion Guides</h3>
              <p class="text-gray-600 text-lg leading-relaxed">
                Thoughtful questions and conversation starters perfect for one-on-one 
                teaching moments that deepen understanding and faith.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section class="py-20 bg-gradient-to-r from-biblical-purple via-biblical-blue to-biblical-purple-dark text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="container mx-auto px-6 text-center relative z-10">
          <h2 class="text-5xl font-bold mb-8 font-biblical">Ready to Begin the Journey?</h2>
          <p class="text-2xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Begin your journey through all 30 biblical stories from Creation to the New Heaven and Earth—
            beautifully crafted interactive experiences are now complete.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/old-testament" 
              class="inline-block bg-biblical-gold hover:bg-biblical-gold-dark text-black px-10 py-5 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <i class="fas fa-scroll mr-3"></i>
              Start with Creation
            </a>
            <a 
              href="/new-testament" 
              class="inline-block border-2 border-white text-white hover:bg-white hover:text-biblical-purple px-10 py-5 rounded-lg font-bold text-xl transition-all duration-300 shadow-xl"
            >
              <i class="fas fa-cross mr-3"></i>
              Explore New Testament
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="bg-gray-900 text-white py-12">
        <div class="container mx-auto px-6">
          <div class="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 class="text-2xl font-bold mb-4 font-biblical text-biblical-gold">Biblical Art Journey</h3>
              <p class="text-gray-400 leading-relaxed">
                A curated guide for young explorers combining faith, art, and history through 
                interactive masterpiece experiences.
              </p>
            </div>
            <div>
              <h4 class="text-lg font-bold mb-4">Quick Links</h4>
              <ul class="space-y-2">
                <li><a href="/old-testament" class="text-gray-400 hover:text-biblical-gold transition-colors">Old Testament</a></li>
                <li><a href="/new-testament" class="text-gray-400 hover:text-biblical-gold transition-colors">New Testament</a></li>
                <li><a href="#features" class="text-gray-400 hover:text-biblical-gold transition-colors">Features</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-bold mb-4">Educational Focus</h4>
              <ul class="space-y-2 text-gray-400">
                <li>One-on-One Teaching</li>
                <li>Interactive Art Exploration</li>
                <li>Biblical Literacy</li>
                <li>Creative Activities</li>
              </ul>
            </div>
          </div>
          <div class="border-t border-gray-700 mt-8 pt-8 text-center">
            <p class="text-gray-500">
              © 2024 Biblical Art Journey. Inspiring young minds through sacred art and timeless stories.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}