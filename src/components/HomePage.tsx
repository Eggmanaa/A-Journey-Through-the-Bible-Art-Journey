export const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-biblical-purple to-biblical-blue text-white shadow-2xl">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 font-biblical">
              <i className="fas fa-palette mr-4"></i>
              Biblical Art Journey
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover 30 amazing Bible stories through the world's greatest masterpieces. 
              A faith-filled adventure combining art, history, and timeless truths.
            </p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Where Faith Meets Art
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                For centuries, the greatest artists have brought Bible stories to life through 
                their masterpieces. Now your young explorer can journey through these sacred 
                narratives, discovering both timeless faith and artistic genius.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-biblical-green text-xl mr-3"></i>
                  <span className="text-gray-700">30 carefully selected Bible stories</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-biblical-green text-xl mr-3"></i>
                  <span className="text-gray-700">Famous artworks by master painters</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-biblical-green text-xl mr-3"></i>
                  <span className="text-gray-700">Interactive activities and discussions</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-biblical-green text-xl mr-3"></i>
                  <span className="text-gray-700">Perfect for one-on-one teaching</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-Creation_of_Adam%28Sistine_Chapel_ceiling%29.jpg/800px-Michelangelo_-Creation_of_Adam%28Sistine_Chapel_ceiling%29.jpg" 
                alt="The Creation of Adam by Michelangelo"
                className="rounded-lg shadow-2xl max-w-full h-auto"
              />
              <p className="text-sm text-gray-500 mt-2 italic">
                "The Creation of Adam" by Michelangelo - Where our journey begins
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Navigation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Choose Your Gallery
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Old Testament */}
            <a 
              href="/old-testament" 
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="h-64 bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <i className="fas fa-scroll text-white text-6xl group-hover:scale-110 transition-transform"></i>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Old Testament Gallery</h3>
                <p className="text-gray-600 mb-6">
                  Journey from Creation to the Prophets. Explore the foundations of faith 
                  through 13+ powerful stories of God's relationship with humanity.
                </p>
                <div className="flex items-center text-biblical-blue font-semibold">
                  <span>Explore Stories</span>
                  <i className="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
                </div>
              </div>
            </a>

            {/* New Testament */}
            <a 
              href="/new-testament" 
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <i className="fas fa-cross text-white text-6xl group-hover:scale-110 transition-transform"></i>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">New Testament Gallery</h3>
                <p className="text-gray-600 mb-6">
                  Follow Jesus' life and the early Church. Discover 17+ stories of hope, 
                  salvation, and the greatest love story ever told.
                </p>
                <div className="flex items-center text-biblical-purple font-semibold">
                  <span>Explore Stories</span>
                  <i className="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Interactive Learning Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-biblical-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-search-plus text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Zoom & Explore</h3>
              <p className="text-gray-600">
                Get up close with famous artworks. Click hotspots to discover hidden details, 
                symbols, and artistic techniques that bring stories to life.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-biblical-green rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-palette text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Creative Activities</h3>
              <p className="text-gray-600">
                Hands-on art projects, acting exercises, and creative challenges that help 
                children connect personally with each biblical story.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-biblical-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-comments text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Discussion Guides</h3>
              <p className="text-gray-600">
                Thoughtful questions and conversation starters perfect for one-on-one 
                teaching moments that deepen understanding and faith.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-biblical-purple to-biblical-blue text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin the Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Start with the Old Testament to follow the chronological story, or jump directly 
            to the New Testament to explore Jesus' life and ministry.
          </p>
          <div className="space-x-4">
            <a 
              href="/old-testament" 
              className="inline-block bg-white text-biblical-purple px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Start with Creation
            </a>
            <a 
              href="/new-testament" 
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-biblical-purple transition-colors"
            >
              Begin with Jesus
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Biblical Art Journey. A curated guide for young explorers combining faith, art, and history.
          </p>
        </div>
      </footer>
    </div>
  )
}