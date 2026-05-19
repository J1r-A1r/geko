import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./i18n.js"
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

createRoot(document.getElementById('root')).render(
  <I18nextProvider>
    <Provider store={store}>
    <App />
    </Provider>
  </I18nextProvider>
)
