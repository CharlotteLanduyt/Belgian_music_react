import { createSlice } from '@reduxjs/toolkit'

export const concertSlice = createSlice({
  name: 'concerts',
  initialState: {
    value: 
        [
            {
                'id': 1,
                'day': "17",
                'month': "january",
                'year': "2024",
                'artiste': "Angele",
                'title': "Era Tour",
                'place': "Ancienne Belgique",
                'location': "Bruxelles",
                'time': '18:00',
                'duration': '2h'
            },
            {
                'id': 2,
                'day': "18",
                'month': "february",
                'year': "2024",
                'artiste': "Angele",
                'title': "Era Tour",
                'place': "Ancienne Belgique",
                'location': "Bruxelles",
                'time': '18:00',
                'duration': '2h'
            },
            {
                'id': 3,
                'day': "19",
                'month': "april",
                'year': "2024",
                'artiste': "Angele",
                'title': "Era Tour",
                'place': "Ancienne Belgique",
                'location': "Bruxelles",
                'time': '18:00',
                'duration': '2h'
            },
            {
                'id': 4,
                'day': "20",
                'month': "july",
                'year': "2024",
                'artiste': "Angele",
                'title': "Era Tour",
                'place': "Ancienne Belgique",
                'location': "Bruxelles",
                'time': '18:00',
                'duration': '2h'
            },
        ],
  },

  reducers: {

  },
})


export default concertSlice.reducer