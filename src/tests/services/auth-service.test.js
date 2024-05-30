import { authService } from '@/services/index.js'

describe('Auth Service Test', () => {
    test('로그인 요청을 하면 유저 정보와 액세스 토큰 값을 받는다', async () => {
        const { data } = await authService.callLogin({
            code: 'cec6f9d35b782d7cb31b',
        })

        const properties = [
            'userName',
            'customName',
            'email',
            'avatarUrl',
            'remainingPoint',
            'totalPoint',
            'accessToken',
        ]

        properties.forEach((prop) => {
            expect(data).toHaveProperty(prop)
        })
    })
})
