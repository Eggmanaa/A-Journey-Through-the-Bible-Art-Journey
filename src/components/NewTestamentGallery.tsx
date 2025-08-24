import { Story } from '../data/stories'

interface NewTestamentGalleryProps {
  stories: Story[]
}

export const NewTestamentGallery = ({ stories }: NewTestamentGalleryProps) => {
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

      {/* Progress Bar */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Your Progress</span>
            <span className="text-biblical-blue font-semibold">0 of {stories.length} stories completed</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-biblical-blue h-2 rounded-full" style="width: 0%"></div>
          </div>
        </div>
      </div>

      {/* Coming Soon Notice */}
      <section className="py-8 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-biblical-blue">
            <div className="flex items-center">
              <i className="fas fa-info-circle text-biblical-blue text-2xl mr-4"></i>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">New Testament Stories Coming Soon!</h3>
                <p className="text-gray-600">
                  The New Testament gallery featuring Jesus' life, ministry, crucifixion, resurrection, 
                  and the early Church is currently being prepared. These 17+ stories will include 
                  masterpieces from Leonardo da Vinci, Raphael, and other Renaissance masters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder Stories Preview */}
      <section className="py-12 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Preview: Coming New Testament Stories
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Preview cards for upcoming stories */}
            {[
              {
                title: "The Annunciation",
                artist: "Leonardo da Vinci",
                book: "Luke 1",
                description: "The angel Gabriel announces to Mary that she will bear the Son of God."
              },
              {
                title: "The Nativity",
                artist: "Gerard van Honthorst",
                book: "Luke 2",
                description: "The birth of Jesus Christ in Bethlehem, bringing light to the world."
              },
              {
                title: "The Baptism of Christ",
                artist: "Andrea del Verrocchio",
                book: "Matthew 3",
                description: "John the Baptist baptizes Jesus in the Jordan River."
              },
              {
                title: "The Last Supper",
                artist: "Leonardo da Vinci",
                book: "Matthew 26",
                description: "Jesus shares the Passover meal with his disciples before his crucifixion."
              },
              {
                title: "The Crucifixion",
                artist: "Diego Velázquez",
                book: "John 19",
                description: "Jesus gives his life on the cross for the salvation of humanity."
              },
              {
                title: "The Resurrection",
                artist: "Piero della Francesca",
                book: "Matthew 28",
                description: "Christ rises from the dead, conquering sin and death forever."
              }
            ].map((story, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden opacity-75"
              >
                {/* Placeholder Image */}
                <div className="h-48 bg-gradient-to-br from-blue-200 to-purple-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <i className="fas fa-image text-4xl mb-2 opacity-50"></i>
                    <p className="text-sm font-medium">Coming Soon</p>
                  </div>
                </div>

                {/* Story Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-biblical-blue bg-blue-100 px-2 py-1 rounded">
                      {story.book}
                    </span>
                    <i className="fas fa-lock text-gray-400"></i>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {story.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {story.description}
                  </p>

                  {/* Artwork Info */}
                  <div className="border-t pt-4">
                    <p className="text-xs text-gray-500 mb-1">Featured Artwork:</p>
                    <p className="text-sm font-medium text-gray-700">
                      By {story.artist}
                    </p>
                  </div>
                </div>
              </div>
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

      {/* Newsletter Signup for Updates */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Get Notified When New Testament Stories Arrive
            </h2>
            <p className="text-gray-600 mb-8">
              Be the first to know when we launch the complete New Testament gallery 
              with interactive features and beautiful artwork.
            </p>
            <div className="flex max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-biblical-blue"
              />
              <button className="bg-biblical-blue text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors">
                <i className="fas fa-bell"></i>
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              We'll only send updates about new content. No spam, promise!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Biblical Art Journey - New Testament Gallery (Coming Soon)
          </p>
        </div>
      </footer>
    </div>
  )
}