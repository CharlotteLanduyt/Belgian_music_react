import { createSlice } from '@reduxjs/toolkit'

export const introductionSlice = createSlice({
  name: 'vitrine',
  initialState: {
    value: 
        [
          {
            id: 1,
            text: "At melting spot, we believe in fostering a community of music enthusiasts passionate about Belgian talent. Engage with like-minded fans through our forums, discussions, and social media channels. Share your favorite tracks, concert experiences, and connect with others who share your love for Belgian music.",
            title: "Community",
          },
          {
            id: 2,
            text: "Discover the heartbeat of Belgium's live music scene through melting spot's concerts section. Whether you're looking for upcoming performances in your city or planning a musical adventure across Belgium, our curated listings and event details make it easy to find and attend the hottest gigs featuring Belgian artists.",
            title: "Festivals",
          },
          {
            id: 3,
            text: "Discover the heartbeat of Belgium's live music scene through melting spot's concerts section. Whether you're looking for upcoming performances in your city or planning a musical adventure across Belgium, our curated listings and event details make it easy to find and attend the hottest gigs featuring Belgian artists.",
            title: "Concerts",
          },
          {
            id: 4,
            text: "Dive deeper into the stories behind Belgium's talented musicians with melting spot's artist profiles. From emerging talents to established names, each profile offers insights into their musical journey, influences, and latest projects. Connect with the artists shaping the Belgian music scene and explore their diverse sounds and creative expressions.",
            title: "Artists",
          },
          {
            id: 5,
            text: "Learn more about melting spot and our mission to celebrate and promote Belgian music. Discover our team, our values, and why we're dedicated to showcasing the richness and diversity of Belgium's musical heritage. Join us in supporting local artists and spreading the love for Belgian music worldwide.",
            title: "About Us",
          },
        ],
  },

  reducers: {
    thisDefault: (state) => {
      return state
    }
  },
})


export const { thisDefault } = introductionSlice.actions
export default introductionSlice.reducer