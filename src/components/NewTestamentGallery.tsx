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

      {/* New Testament Stories Grid */}
      <section className="py-12 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newTestamentStories.map((story, index) => (
              <a 
                key={story.id}
                href={`/story/${story.id}`} 
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Story Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={story.artwork.imageUrl} 
                    alt={story.artwork.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-biblical-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {story.sequence}
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>

                {/* Story Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-biblical-blue bg-blue-100 px-2 py-1 rounded">
                      {story.book} {story.chapter}
                    </span>
                    <div className="flex items-center text-gray-400">
                      <i className="fas fa-clock mr-1 text-xs"></i>
                      <span className="text-xs">5-10 min</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-biblical-blue transition-colors">
                    {story.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {story.summary}
                  </p>

                  {/* Artwork Info */}
                  <div className="border-t pt-4">
                    <p className="text-xs text-gray-500 mb-1">Featured Artwork:</p>
                    <p className="text-sm font-medium text-gray-700">
                      "{story.artwork.title}" by {story.artwork.artist}
                    </p>
                    <p className="text-xs text-gray-500">{story.artwork.date}</p>
                  </div>

                  {/* Interactive Elements Indicator */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t">
                    <div className="flex space-x-2">
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded flex items-center">
                        <i className="fas fa-expand mr-1"></i>
                        View
                      </span>
                      <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded flex items-center">
                        <i className="fas fa-palette mr-1"></i>
                        Activity
                      </span>
                      <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded flex items-center">
                        <i className="fas fa-comments mr-1"></i>
                        Discuss
                      </span>
                    </div>
                    <i className="fas fa-arrow-right text-biblical-blue group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation to Old Testament */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Explore the Foundations of Faith</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Continue your journey with the Old Testament stories. 
            Discover Creation, Noah's Ark, Moses, David, and the foundations that led to Christ's coming.
          </p>
          <a 
            href="/old-testament" 
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            <i className="fas fa-scroll mr-2"></i>
            Explore Old Testament Gallery
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