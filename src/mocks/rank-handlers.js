import { http, HttpResponse } from 'msw'
import { BACKEND_URL } from '@/constants/config.js'

const rankHandlers = [
    http.get(`${BACKEND_URL}/api/rank/myRank`, () => {
        console.log('my rank info requested')
        return HttpResponse.json(
            {
                rank: 1,
                userName: 'ambition-kwon',
                customName: '권혁원',
                avatarUrl:
                    'https://avatars.githubusercontent.com/u/5442985?v=4',
                usedPoint: 10000,
                topPercent: 50,
            },
            { status: 200 },
        )
    }),

    http.get(`${BACKEND_URL}/api/rank/userRank`, () => {
        console.log('user rank list requested')
        return HttpResponse.json(
            {
                hasNextPage: false,
                data: [
                    {
                        rank: 1,
                        userName: 'ambition-kwon',
                        customName: '권혁원',
                        avatarUrl:
                            'https://avatars.githubusercontent.com/u/5442985?v=4',
                        usedPoint: 10000,
                    },
                    {
                        rank: 2,
                        userName: 'khanna01',
                        customName: '김한나',
                        avatarUrl:
                            'https://avatars.githubusercontent.com/u/79962121?v=4',
                        usedPoint: 0,
                    },
                ],
            },
            { status: 200 },
        )
    }),
]

export default rankHandlers
