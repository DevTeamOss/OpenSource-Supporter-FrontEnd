import { http, HttpResponse } from 'msw'

import { BACKEND_URL } from '@/constants/config.js'

const advertisementHandlers = [
    http.get(`${BACKEND_URL}/api/advertisement/random`, () => {
        console.log('get advertisement requested')
        return HttpResponse.json(
            {
                id: 2,
                adName: 'advertise2',
                adContent: 'http://localhost:8080',
                price: 10000,
                numberOfCalls: 1,
                numberOfSuccessfulCalls: 0,
                createdAt: '2024-05-21T14:55:09.200377',
                modifiedAt: '2024-05-21T14:55:12.711478',
            },
            { status: 200 },
        )
    }),

    http.post(`${BACKEND_URL}/api/advertisement/viewed`, () => {
        console.log('advertising completion requested')
        return HttpResponse.json(
            {
                id: 1,
                userName: 'ambition-kwon',
                adLink: 'https://www.test.com/adLink',
                cardLink: 'https://www.test.com/cardLink',
                totalPoint: 121200,
                usedPoint: 0,
                remainingPoint: 121200,
                createdAt: '2024-05-26T17:11:16.006101',
                modifiedAt: '2024-05-26T17:17:19.911148',
                repoItemList: [],
                admin: false,
            },
            { status: 200 },
        )
    }),
]

export default advertisementHandlers
