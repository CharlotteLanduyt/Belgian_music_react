import { configureStore } from '@reduxjs/toolkit'

// slices
import testimonialSlice from './slices/Testimonials'
import concertSlice from './slices/Concerts'
import vitrineSlice from './slices/Vitrine'

export default configureStore({
  reducer: {
    testimonials: testimonialSlice,
    concerts: concertSlice,
    vitrine: vitrineSlice,
  },
})