import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    spentPoints: 0,
    paypalPoints: 0,
    advertisementPoints: 0,
    sponsoredPoints: 0,
    monthlySpentPointsPercentage: 0,
    monthlyPaypalPointsPercentage: 0,
    monthlyAdvertisementPointsPercentage: 0,
    monthlySponsoredPointsPercentage: 0,
}

export const pointSlice = createSlice({
    name: 'point',
    initialState,
    reducers: {
        set: (state, action) => {
            return { ...action.payload }
        },
    },
})

export default pointSlice.reducer
