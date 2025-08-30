import { Story, getStoriesByTestament } from '../data/stories'

interface NewTestamentGalleryProps {
  stories: Story[]
}

export const NewTestamentGallery = ({ stories }: NewTestamentGalleryProps) => {
  const newTestamentStories = getStoriesByTestament('new')
  
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-2xl">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <a href="/old-testament" className="text-white hover:text-blue-200 transition-colors">
              <i className="fas fa-arrow-left text-xl mr-2"></i>
              Old Testament
            </a>
            <div className="text-center flex-1">
              <h1 className="text-4xl font-bold mb-2 font-biblical">
                <i className="fas fa-cross mr-3"></i>
                New Testament Gallery
              </h1>
              <p className="text-lg opacity-90">
                The Story of Salvation - Jesus Christ and the Early Church
              </p>
            </div>
            <a href="/" className="text-white hover:text-blue-200 transition-colors">
              Back to Home
              <i className="fas fa-home text-xl ml-2"></i>
            </a>
          </div>
        </div>
      </header>



      {/* Story Statistics */}
      <section className="py-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              New Testament Collection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the life of Jesus Christ and the birth of the early Church through 17 masterpieces
              by Leonardo da Vinci, Raphael, Caravaggio, and other Renaissance masters.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-biblical-blue">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-biblical-blue mb-2">17</div>
                <div className="text-gray-600">New Testament Stories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-biblical-purple mb-2">12+</div>
                <div className="text-gray-600">Master Artists</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-biblical-gold mb-2">100%</div>
                <div className="text-gray-600">Interactive</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Testament Stories Grid */}
      <section className="py-12 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newTestamentStories.map((story) => (
              <a
                key={story.id}
                href={`/story/${story.id}`}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                  <img
                    src={story.artwork.imageUrl}
                    alt={`${story.artwork.title} by ${story.artwork.artist}`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-biblical-blue transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-biblical-purple font-semibold mb-2">
                    {story.artwork.artist}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    {story.book} {story.chapter}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {story.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {story.artwork.date}
                    </span>
                    <div className="flex items-center text-biblical-blue font-semibold">
                      <span className="text-sm">Explore Story</span>
                      <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Old Testament CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Journey with the Old Testament</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            While we prepare the New Testament stories, begin your biblical art journey 
            with the foundations of faith. Explore Creation, Noah's Ark, Moses, David, and more!
          </p>
          <a 
            href="/old-testament" 
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            <i className="fas fa-scroll mr-2"></i>
            Explore Old Testament Stories
          </a>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Biblical Art Journey - New Testament Gallery
          </p>
        </div>
      </footer>
    </div>
  )
}