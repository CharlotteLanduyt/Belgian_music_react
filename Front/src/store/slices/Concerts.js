import { createSlice } from '@reduxjs/toolkit'

export const concertSlice = createSlice({
  name: 'concerts',
  initialState: {
    value: 
        [
            {
                'id': 1,
                'day': "day",
                'month': "month",
                'year': "2024",
                'artist': "Artist",
                'title': "Event title",
                'place': "Concert place",
                'localisation': "localisation",
                'time': '00:00',
                'duration': '0h'
            },
            {
                'id': 2,
                'day': "day",
                'month': "month",
                'year': "2024",
                'artist': "Artist",
                'title': "Event title",
                'place': "Concert place",
                'localisation': "localisation",
                'time': '00:00',
                'duration': '0h'
            },
            {
                'id': 3,
                'day': "day",
                'month': "month",
                'year': "2024",
                'artist': "Artist",
                'title': "Event title",
                'place': "Concert place",
                'localisation': "localisation",
                'time': '00:00',
                'duration': '0h'
            },
            {
                'id': 4,
                'day': "day",
                'month': "month",
                'year': "2024",
                'artist': "Artist",
                'title': "Event title",
                'place': "Concert place",
                'localisation': "localisation",
                'time': '00:00',
                'duration': '0h'
            },
        ],
  },

  reducers: {

  },
})


export default concertSlice.reducer