import { renderHook } from '@testing-library/react'

import { useProfileController } from '@/controllers/index.js'
import { ReduxProvider } from '@/tests/redux-provider.jsx'

const initialState = {
    username: '',
    name: '',
    avatarUrl: '',
    remainingPoint: 0,
    totalPoint: 0,
}

describe('Profile Controller Test', () => {
    function createTestHook() {
        return renderHook(() => useProfileController(), {
            wrapper: ReduxProvider,
        })
    }

    test('프로필 컨트롤러는 선언 시 초기값을 갖는다', () => {
        const { result } = createTestHook()

        expect(result.current.data).toStrictEqual(initialState)
    })

    test('프로필 정보에는 필요한 모든 속성을 포함한다', async () => {
        const { result } = createTestHook()
        await result.current.getData()

        const properties = [
            'username',
            'name',
            'avatarUrl',
            'totalPoint',
            'remainingPoint',
        ]

        properties.forEach((prop) => {
            expect(result.current.data).toHaveProperty(prop)
        })
    })
})
