import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/react'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

const PUBLISHABLE_KEY = import.meta.env.VITE_PUBLISHABLE_KEY

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} appearance={{variables: {colorPrimary: '#D44535'}}}>
      <Provider store={store}>
        <App />
      </Provider>
    </ClerkProvider>
  </BrowserRouter>,
)
