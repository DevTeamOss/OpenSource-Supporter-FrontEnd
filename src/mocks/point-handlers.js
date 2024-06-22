import { http, HttpResponse } from 'msw'

import { BACKEND_URL } from '@/constants/config.js'

const pointHandlers = [
    http.get(`${BACKEND_URL}/api/point/summary`, () => {
        console.log('get point summary requested')
        return HttpResponse.json(
            {
                spentPoints: 900,
                paypalPoints: 100000,
                advertisementPoints: 0,
                sponsoredPoints: 0,
                monthlySpentPointsPercentage: 0,
                monthlyPaypalPointsPercentage: 0,
                monthlyAdvertisementPointsPercentage: 0,
                monthlySponsoredPointsPercentage: 0,
            },
            { status: 200 },
        )
    }),

    http.post(`${BACKEND_URL}/api/point/charge`, () => {
        console.log('point charge requested')
        return HttpResponse.json(
            {
                id: 1,
                userName: 'ambition-kwon',
                adLink: 'https://www.test.com/adLink',
                cardLink: 'https://www.test.com/cardLink',
                totalPoint: 101200,
                usedPoint: 0,
                remainingPoint: 101200,
                createdAt: '2024-05-26T17:11:16.006101',
                modifiedAt: '2024-05-26T17:15:48.848638',
                repoItemList: [],
                admin: false,
            },
            { status: 200 },
        )
    }),
]

export default pointHandlers
