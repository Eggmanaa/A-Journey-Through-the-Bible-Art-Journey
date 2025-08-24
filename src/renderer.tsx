import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title || 'Biblical Art Journey - Learning Through Masterpieces'}</title>
        <meta name="description" content="Interactive Biblical art curriculum for grade school students. Explore 30 biblical stories through famous masterpieces with engaging activities and insights." />
        
        {/* Tailwind CSS */}
        <script src="https://cdn.tailwindcss.com"></script>
        
        {/* Font Awesome Icons */}
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        
        {/* Chart.js for progress tracking */}
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        
        {/* Custom Styles */}
        <link href="/static/style.css" rel="stylesheet" />
        
        {/* Custom Tailwind Config */}
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    biblical: {
                      gold: '#D4AF37',
                      'gold-light': '#E8C547',
                      'gold-dark': '#B8941F',
                      purple: '#6B46C1',
                      'purple-light': '#8B5CF6',
                      'purple-dark': '#553C9A',
                      blue: '#1E40AF',
                      'blue-light': '#3B82F6',
                      'blue-dark': '#1E3A8A',
                      green: '#059669',
                      'green-light': '#10B981',
                      'green-dark': '#047857',
                      red: '#DC2626',
                      'red-light': '#EF4444',
                      'red-dark': '#B91C1C',
                      cream: '#FEF7ED',
                      warm: '#FBBF24',
                      earth: '#A3A3A3'
                    }
                  },
                  fontFamily: {
                    'serif': ['Georgia', 'serif'],
                    'biblical': ['Cinzel', 'serif']
                  },
                  backgroundImage: {
                    'sistine-hero': "url('https://smarthistory.org/wp-content/uploads/2021/09/Sistine_ceiling.jpg')"
                  }
                }
              }
            }
          `
        }} />
      </head>
      <body class="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
        <div id="app">{children}</div>
        
        {/* Main JavaScript */}
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
})
