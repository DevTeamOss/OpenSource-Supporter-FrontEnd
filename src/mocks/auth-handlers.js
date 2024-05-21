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
            },
            { status: 200 },
        )
    }),

    http.delete(`${BACKEND_URL}/api/auth/logout`, () => {
        console.log('logout requested')
        return HttpResponse.json({ status: 200 })
    }),
]

export default authHandlers
