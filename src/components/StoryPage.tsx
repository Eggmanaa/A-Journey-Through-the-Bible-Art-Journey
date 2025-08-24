import { Story, getNextStory, getPreviousStory } from '../data/stories'

interface StoryPageProps {
  story: Story
}

export const StoryPage = ({ story }: StoryPageProps) => {
  const nextStory = getNextStory(story.id)
  const previousStory = getPreviousStory(story.id)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href={story.testament === 'old' ? '/old-testament' : '/new-testament'} 
               className="text-gray-600 hover:text-biblical-blue transition-colors">
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Gallery
            </a>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-800">{story.title}</h1>
              <p className="text-sm text-gray-500">{story.book} {story.chapter}</p>
            </div>
            <div className="text-right">
              <span className="text-sm text-gray-500">Story {story.sequence}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Story Section */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Story Text */}
              <div>
                <div className="mb-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${ 
                    story.testament === 'old' 
                      ? 'bg-amber-100 text-amber-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {story.testament === 'old' ? 'Old Testament' : 'New Testament'}
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-800 mb-4">The Story Unfolds</h2>
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                  {story.narrative.split('\\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Quick Summary Card */}
              <div className="lg:sticky lg:top-24">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Story Summary</h3>
                  <p className="text-gray-700 mb-4">{story.summary}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <i className="fas fa-book text-biblical-blue mr-2"></i>
                      <span><strong>Book:</strong> {story.book} {story.chapter}</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-list-ol text-biblical-green mr-2"></i>
                      <span><strong>Sequence:</strong> Story #{story.sequence}</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-clock text-biblical-gold mr-2"></i>
                      <span><strong>Reading Time:</strong> 5-8 minutes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Masterpiece Showcase */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              <i className="fas fa-palette mr-3 text-biblical-gold"></i>
              Masterpiece Showcase
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Large Artwork Display */}
              <div className="lg:col-span-2">
                <div className="relative group">
                  <img 
                    src={story.artwork.imageUrl} 
                    alt={story.artwork.title}
                    class="w-full rounded-lg shadow-xl hover:shadow-2xl transition-shadow cursor-zoom-in"
                    onclick={`openImageModal('${story.artwork.imageUrl}', '${story.artwork.title}')`}
                  />
                  <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    <i className="fas fa-search-plus mr-1"></i>
                    Click to zoom
                  </div>
                </div>
                
                {/* Image Hotspots Demo */}
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center p-3 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                    <i className="fas fa-eye mr-2"></i>
                    Look Closer Details
                  </button>
                  <button className="flex items-center justify-center p-3 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                    <i className="fas fa-info-circle mr-2"></i>
                    Hidden Symbols
                  </button>
                </div>
              </div>

              {/* Artwork Information */}
              <div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Artwork Details</h3>
                  <div className="space-y-3">
                    <div>
                      <strong className="text-gray-700">Title:</strong>
                      <p className="text-gray-600 italic">"{story.artwork.title}"</p>
                    </div>
                    <div>
                      <strong className="text-gray-700">Artist:</strong>
                      <p className="text-gray-600">{story.artwork.artist}</p>
                    </div>
                    <div>
                      <strong className="text-gray-700">Date:</strong>
                      <p className="text-gray-600">{story.artwork.date}</p>
                    </div>
                    <div>
                      <strong className="text-gray-700">Medium:</strong>
                      <p className="text-gray-600">{story.artwork.medium}</p>
                    </div>
                    <div>
                      <strong className="text-gray-700">Location:</strong>
                      <p className="text-gray-600">{story.artwork.location}</p>
                    </div>
                  </div>
                  
                  {story.artwork.downloadUrl && (
                    <a 
                      href={story.artwork.downloadUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-4 inline-block w-full text-center bg-biblical-blue text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <i className="fas fa-download mr-2"></i>
                      Download High-Res Image
                    </a>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Curator's Insights */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              <i className="fas fa-graduation-cap mr-3 text-biblical-purple"></i>
              Curator's Insights
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <i className="fas fa-palette mr-2 text-biblical-gold"></i>
                  About the Art
                </h3>
                <p className="text-gray-700 mb-6">{story.curatorInsights.aboutArt}</p>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <i className="fas fa-user-circle mr-2 text-biblical-green"></i>
                  About the Artist
                </h3>
                <p className="text-gray-700">{story.curatorInsights.aboutArtist}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <i className="fas fa-history mr-2 text-biblical-blue"></i>
                  Historical Context
                </h3>
                <p className="text-gray-700 mb-6">{story.curatorInsights.historicalContext}</p>
                
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Techniques Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {story.curatorInsights.techniques.map((technique, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                          {technique}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Symbolism:</h4>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      {story.curatorInsights.symbolism.map((symbol, index) => (
                        <li key={index}>{symbol}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Art Adventure */}
          <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              <i className="fas fa-puzzle-piece mr-3 text-biblical-red"></i>
              Interactive Art Adventure
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Look Closer */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                  <i className="fas fa-search-plus mr-2"></i>
                  Look Closer
                </h3>
                <ul className="space-y-2">
                  {story.activities.lookCloser.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-eye text-blue-600 mr-2 mt-1 flex-shrink-0"></i>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Creative Activity */}
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                  <i className="fas fa-palette mr-2"></i>
                  Creative Spark
                </h3>
                <p className="text-gray-700">{story.activities.creativeActivity}</p>
              </div>
            </div>

            {/* Discussion Questions */}
            <div className="mt-8 bg-purple-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                <i className="fas fa-comments mr-2"></i>
                Story Time Discussion
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {story.activities.discussionQuestions.map((question, index) => (
                  <div key={index} className="flex items-start">
                    <i className="fas fa-question-circle text-purple-600 mr-2 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-700">{question}</span>
                  </div>
                ))}
              </div>
            </div>


          </section>

          {/* Navigation */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-between">
              {previousStory ? (
                <a href={`/story/${previousStory.id}`} 
                   className="flex items-center text-biblical-blue hover:text-blue-700 transition-colors">
                  <i className="fas fa-arrow-left mr-2"></i>
                  <div className="text-left">
                    <div className="text-sm text-gray-500">Previous Story</div>
                    <div className="font-semibold">{previousStory.title}</div>
                  </div>
                </a>
              ) : (
                <div></div>
              )}

              <a href={story.testament === 'old' ? '/old-testament' : '/new-testament'} 
                 className="text-center">
                <div className="bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-lg transition-colors">
                  <i className="fas fa-th-large text-gray-600 text-xl"></i>
                  <div className="text-sm text-gray-600 mt-1">Gallery</div>
                </div>
              </a>

              {nextStory ? (
                <a href={`/story/${nextStory.id}`} 
                   className="flex items-center text-biblical-blue hover:text-blue-700 transition-colors">
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Next Story</div>
                    <div className="font-semibold">{nextStory.title}</div>
                  </div>
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
              ) : (
                <div></div>
              )}
            </div>
          </section>
        </div>
      </div>

      {/* Enhanced Image Modal with Zoom and Pan */}
      <div id="imageModal" class="fixed inset-0 bg-black bg-opacity-90 z-50 hidden items-center justify-center">
        <div class="relative w-full h-full flex items-center justify-center">
          {/* Close button */}
          <button 
            onclick="closeImageModal()" 
            class="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 z-60 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
          >
            <i class="fas fa-times"></i>
          </button>
          
          {/* Zoom controls */}
          <div class="absolute top-4 left-4 flex flex-col space-y-2 z-60">
            <button 
              onclick="zoomIn()" 
              class="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all"
              title="Zoom In"
            >
              <i class="fas fa-plus"></i>
            </button>
            <button 
              onclick="zoomOut()" 
              class="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all"
              title="Zoom Out"
            >
              <i class="fas fa-minus"></i>
            </button>
            <button 
              onclick="resetZoom()" 
              class="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all"
              title="Reset View"
            >
              <i class="fas fa-expand-arrows-alt"></i>
            </button>
          </div>
          
          {/* Image container */}
          <div id="imageContainer" class="w-full h-full overflow-hidden flex items-center justify-center">
            <img 
              id="modalImage" 
              src="" 
              alt="" 
              class="max-w-none h-auto cursor-grab transition-transform duration-200 ease-out"
              style="transform-origin: center center;"
              draggable="false"
            />
          </div>
          
          {/* Image info */}
          <div id="imageInfo" class="absolute bottom-4 left-4 right-4 text-center">
            <div class="bg-black bg-opacity-50 text-white p-3 rounded-lg">
              <h3 id="imageTitle" class="font-bold text-lg mb-1"></h3>
              <p class="text-sm opacity-90">Click and drag to pan • Use zoom controls or mouse wheel • ESC to close</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}