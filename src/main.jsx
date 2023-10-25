import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router'
import Authprovider from './Components/Auth/Authprovider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <Authprovider>
        <RouterProvider router={router}></RouterProvider>
      </Authprovider>
    </React.StrictMode>,
  </div>
)
