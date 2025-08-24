import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { cors } from 'hono/cors'
import { renderer } from './renderer'
import { HomePage } from './components/HomePage'
import { OldTestamentGallery } from './components/OldTestamentGallery'
import { NewTestamentGallery } from './components/NewTestamentGallery'
import { StoryPage } from './components/StoryPage'
import { storiesData } from './data/stories'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Apply renderer to all routes
app.use(renderer)

// Routes
app.get('/', (c) => {
  return c.render(<HomePage />, { title: 'Biblical Art Journey - Home' })
})

app.get('/old-testament', (c) => {
  const oldTestamentStories = storiesData.filter(story => story.testament === 'old')
  return c.render(<OldTestamentGallery stories={oldTestamentStories} />, { 
    title: 'Old Testament Gallery - Biblical Art Journey' 
  })
})

app.get('/new-testament', (c) => {
  const newTestamentStories = storiesData.filter(story => story.testament === 'new')
  return c.render(<NewTestamentGallery stories={newTestamentStories} />, { 
    title: 'New Testament Gallery - Biblical Art Journey' 
  })
})

app.get('/story/:id', (c) => {
  const storyId = c.req.param('id')
  const story = storiesData.find(s => s.id === storyId)
  
  if (!story) {
    return c.notFound()
  }
  
  return c.render(<StoryPage story={story} />, { 
    title: `${story.title} - Biblical Art Journey` 
  })
})

// API Routes for interactive features
app.get('/api/stories', (c) => {
  return c.json(storiesData)
})

app.get('/api/story/:id', (c) => {
  const storyId = c.req.param('id')
  const story = storiesData.find(s => s.id === storyId)
  
  if (!story) {
    return c.json({ error: 'Story not found' }, 404)
  }
  
  return c.json(story)
})

// Progress tracking API
app.get('/api/progress', (c) => {
  // In a real app, this would come from a database
  const progress = {
    totalStories: storiesData.length,
    completedStories: 0,
    currentStory: 'creation-of-adam',
    favoriteStories: []
  }
  return c.json(progress)
})

export default app
