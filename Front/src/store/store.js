import { configureStore } from '@reduxjs/toolkit'

// slices
import testimonialSlice from './slices/Testimonials'
import concertSlice from './slices/Concerts'
import introductionSlice from './slices/Introduction'

export default configureStore({
  reducer: {
    testimonials: testimonialSlice,
    concerts: concertSlice,
    vitrine: introductionSlice,
  },
})