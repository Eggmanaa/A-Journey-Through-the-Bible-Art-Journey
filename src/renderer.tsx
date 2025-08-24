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
                      purple: '#6B46C1',
                      blue: '#1E40AF',
                      green: '#059669',
                      red: '#DC2626'
                    }
                  },
                  fontFamily: {
                    'serif': ['Georgia', 'serif'],
                    'biblical': ['Cinzel', 'serif']
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
