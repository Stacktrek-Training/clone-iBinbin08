import React from 'react'
import ReactDOM from 'react-dom/client'


import ContentSeparator from './components/Sidebar'
import NavbarWithDropdown from './components/Navbar'

import './assets/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavbarWithDropdown />
    <ContentSeparator />
  </React.StrictMode>,
)
