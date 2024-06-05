import { http, HttpResponse } from 'msw'
import { BACKEND_URL } from '@/constants/config.js'

const rankHandlers = [
    http.get(`${BACKEND_URL}/api/rank/myRank`, () => {
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
]

export default rankHandlers
