import { createSlice } from '@reduxjs/toolkit'

export const testimonialSlice = createSlice({
  name: 'testimonials',
  initialState: {
    value: 
        [
            {
            stars: 2,
            name: "Jeanne",
            surname: "Untel",
            testimonial: "This website is my go-to source for all things Belgian music! The concert updates and artist profiles are always spot on.",
            posted_date: "29.06.24"
            },
            {
                stars: 4,
                name: "Jeanne",
                surname: "Untel",
                testimonial: "This website is my go-to source for all things Belgian music! The concert updates and artist profiles are always spot on.",
                posted_date: "29.06.24"
            },
            {
                stars: 5,
                name: "Jeanne",
                surname: "Untel",
                testimonial: "This website is my go-to source for all things Belgian music! The concert updates and artist profiles are always spot on.",
                posted_date: "29.06.24"
            },
            {
                stars: 3,
                name: "Jeanne",
                surname: "Untel",
                testimonial: "This website is my go-to source for all things Belgian music! The concert updates and artist profiles are always spot on.",
                posted_date: "29.06.24"
            },
            {
                stars: 4,
                name: "Jeanne",
                surname: "Untel",
                testimonial: "This website is my go-to source for all things Belgian music! The concert updates and artist profiles are always spot on.",
                posted_date: "29.06.24"
            },
            {
                stars: 4,
                name: "Jeanne",
                surname: "Untel",
                testimonial: "This website is my go-to source for all things Belgian music! The concert updates and artist profiles are always spot on.",
                posted_date: "29.06.24"
            },
            {
                stars: 2,
                name: "Jeanne",
                surname: "Untel",
                testimonial: "This website is my go-to source for all things Belgian music! The concert updates and artist profiles are always spot on.",
                posted_date: "29.06.24"
            },
            {
                stars: 5,
                name: "Jeanne",
                surname: "Untel",
                testimonial: "This website is my go-to source for all things Belgian music! The concert updates and artist profiles are always spot on.",
                posted_date: "29.06.24"
            },
            {
                stars: 5,
                name: "Jeanne",
                surname: "Untel",
                testimonial: "This website is my go-to source for all things Belgian music! The concert updates and artist profiles are always spot on.",
                posted_date: "29.06.24"
            },
            {
                stars: 3,
                name: "Jeanne",
                surname: "Untel",
                testimonial: "This website is my go-to source for all things Belgian music! The concert updates and artist profiles are always spot on.",
                posted_date: "29.06.24"
            },
        ],
  },

  reducers: {
    addTesti: (state) => {
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTesti } = testimonialSlice.actions

export default testimonialSlice.reducer