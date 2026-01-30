import { createRoot } from 'react-dom/client'
import App from './App.jsx'
const root = createRoot(document.getElementById('root'))

/**
 * Challenge:
 * 
 * - Create an App component in a separate file.
 *   Import it here and render it
 * - Create a "components" folder and a Header component.
 *   Render the Header inside the App component.
 * - Follow the Travel Journal design to build the Header
 *   for our page.
 */
root.render(<App />)
