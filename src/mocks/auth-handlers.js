import { http, HttpResponse } from 'msw'

import { BACKEND_URL } from '@/constants/config.js'

const authHandlers = [
    http.get(`${BACKEND_URL}/api/auth/login`, () => {
        console.log('login requested')
        return HttpResponse.json(
            {
                userName: 'ambition-kwon',
                customName: '권혁원',
                email: 'prince5390@gmail.com',
                avatarUrl:
                    'https://avatars.githubusercontent.com/u/5442985?v=4',
                accessToken: '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',
                remainingPoint: 100,
                totalPoint: 1000,
                adLink: 'https://www.test.com/adLink',
                cardLink: 'https://www.test.com/cardLink',
            },
            { status: 200 },
        )
    }),

    http.delete(`${BACKEND_URL}/api/auth/logout`, () => {
        console.log('logout requested')
        return HttpResponse.json({}, { status: 200 })
    }),

    http.delete(`${BACKEND_URL}/api/auth/withdrawal`, () => {
        console.log('withdraw requested')
        return HttpResponse.json({}, { status: 200 })
    }),

    http.get(`${BACKEND_URL}/api/auth/refresh`, () => {
        console.log('login requested')
        return HttpResponse.json(
            {
                id: 3,
                userName: 'ambition-kwon',
                customName: '권혁원',
                adLink: 'https://www.test.com/adLink',
                cardLink: 'https://www.test.com/cardLink',
                avatarUrl:
                    'https://avatars.githubusercontent.com/u/5442985?v=4',
                totalPoint: 100399,
                usedPoint: 0,
                remainingPoint: 100399,
                createdAt: '2024-06-10T17:51:09.413847',
                modifiedAt: '2024-06-10T18:08:37.854542',
                admin: false,
            },
            { status: 200 },
        )
    }),
]

export default authHandlers
