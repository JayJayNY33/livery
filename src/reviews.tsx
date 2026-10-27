import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReviewsPage from './ReviewsPage'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReviewsPage />
  </StrictMode>,
)
