import { renderHook } from '@testing-library/react'

import { useUserController } from '@/controllers/index.js'
import { ReduxProvider } from '@/tests/redux-provider.jsx'

const initialState = {
    username: 'guest',
    name: 'guest-user',
    email: '',
    avatarUrl: '',
    accessToken: '',
    remainingPoint: 0,
    totalPoint: 0,
    adLink: '',
    cardLink: '',
}

describe('User Controller Test', () => {
    function createTestHook() {
        return renderHook(() => useUserController(), { wrapper: ReduxProvider })
    }

    test('유저 컨트롤러는 선언 시 초기값을 갖는다', () => {
        const { result } = createTestHook()

        expect(result.current.data).toStrictEqual(initialState)
    })

    test('로그인에 성공하면 isLoggedIn이 true가 된다', async () => {
        const { result } = createTestHook()
        await result.current.login({ code: 'cec6f9d35b782d7cb31b' })

        expect(result.current.isLoggedIn).toBe(true)
    })

    test('로그아웃에 성공하면 isLoggedIn이 false가 된다', async () => {
        const { result } = createTestHook()
        await result.current.login({ code: 'cec6f9d35b782d7cb31b' })

        expect(result.current.isLoggedIn).toBe(true)

        await result.current.logout()

        expect(result.current.isLoggedIn).toBe(false)
    })

    test('탈퇴를 하면 자동으로 로그아웃 된다', async () => {
        const { result } = createTestHook()
        await result.current.login({ code: 'cec6f9d35b782d7cb31b' })

        expect(result.current.isLoggedIn).toBe(true)

        await result.current.withdraw()

        expect(result.current.isLoggedIn).toBe(false)
    })
})
