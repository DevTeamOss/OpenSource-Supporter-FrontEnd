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

    http.get(`${BACKEND_URL}/api/point/spent`, () => {
        console.log('spent point list requested')
        return HttpResponse.json(
            {
                hasNextPage: true,
                data: [
                    {
                        date: '2024-06-10T15:43:14.027105',
                        point: -1000,
                        description: 'khanna01 / basicweb',
                        status: 'COMPLETED',
                    },
                    {
                        date: '2024-05-30T23:51:00.08189',
                        point: -4000,
                        description: 'khanna01 / realhoonsman',
                        status: 'COMPLETED',
                    },
                    {
                        date: '2024-05-30T23:50:55.683531',
                        point: -3000,
                        description: 'khanna01 / hoonsman_ft',
                        status: 'COMPLETED',
                    },
                ],
            },
            { status: 200 },
        )
    }),

    http.get(`${BACKEND_URL}/api/point/earned`, () => {
        console.log('earned point list requested')
        return HttpResponse.json(
            {
                hasNextPage: true,
                data: [
                    {
                        date: '2024-06-10T16:20:42.351894',
                        point: 300,
                        description:
                            'ambition-kwon has sponsored the basicweb repository',
                        status: 'COMPLETED',
                    },
                    {
                        date: '2024-06-10T16:20:38.876349',
                        point: 400,
                        description:
                            'ambition-kwon has sponsored the basicweb repository',
                        status: 'COMPLETED',
                    },
                    {
                        date: '2024-06-10T16:20:35.731493',
                        point: 500,
                        description:
                            'ambition-kwon has sponsored the basicweb repository',
                        status: 'COMPLETED',
                    },
                    {
                        date: '2024-06-10T16:20:30.354903',
                        point: 1000,
                        description:
                            'ambition-kwon has sponsored the basicweb repository',
                        status: 'COMPLETED',
                    },
                ],
            },
            { status: 200 },
        )
    }),
]

export default pointHandlers
