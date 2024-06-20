import { authService } from '@/services/index.js'

describe('Auth Service Test', () => {
    test('로그인 요청을 하면 유저 정보와 액세스 토큰 값을 받는다', async () => {
        const { data } = await authService.callLogin({
            code: 'cec6f9d35b782d7cb31b',
        })

        const properties = [
            'username',
            'name',
            'email',
            'avatarUrl',
            'remainingPoint',
            'totalPoint',
            'accessToken',
            'adLink',
            'cardLink',
        ]

        properties.forEach((prop) => {
            expect(data).toHaveProperty(prop)
        })
    })

    test('로그아웃에 성공하면 상태값으로 200을 받는다', async () => {
        const { status } = await authService.callLogout()

        expect(status).toBe(200)
    })

    test('탈퇴에 성공하면 상태값으로 200을 받는다', async () => {
        const { status } = await authService.callWithdraw()

        expect(status).toBe(200)
    })

    test('새로고침을 하면 액세스 토큰을 이용해 유저 정보를 받는다', async () => {
        const { data } = await authService.callRefresh()

        const properties = [
            'username',
            'name',
            'email',
            'avatarUrl',
            'remainingPoint',
            'totalPoint',
            'adLink',
            'cardLink',
        ]

        properties.forEach((prop) => {
            expect(data).toHaveProperty(prop)
        })
    })
})
