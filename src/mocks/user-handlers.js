import { http, HttpResponse } from 'msw'
import { BACKEND_URL } from '@/constants/config.js'

const userHandlers = [
    http.get(`${BACKEND_URL}/api/user`, () => {
        return HttpResponse.json(
            {
                id: 2,
                userName: 'ambition-kwon',
                customName: '권혁원',
                adLink: 'https://www.test.com/adLink',
                cardLink: 'https://www.test.com/cardLink',
                avatarUrl:
                    'https://avatars.githubusercontent.com/u/5442985?v=4',
                totalPoint: 100000,
                usedPoint: 10000,
                remainingPoint: 90000,
                createdAt: '2024-05-30T23:50:11.043079',
                modifiedAt: '2024-05-30T23:51:00.08463',
                admin: false,
            },
            { status: 200 },
        )
    }),
]

export default userHandlers
