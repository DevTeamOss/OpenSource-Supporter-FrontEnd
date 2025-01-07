import { renderHook } from '@testing-library/react'

import { useProfileRepoList } from '@/view-models/index.js'
import { ReduxProvider } from '@/tests/redux-provider.jsx'

const initialState = {
    username: '',
    name: '',
    avatarUrl: '',
    remainingPoint: 0,
    totalPoint: 0,
}

describe('Profile View Model Test', () => {
    function createTestHook() {
        return renderHook(() => useProfile(), {
            wrapper: ReduxProvider,
        })
    }

    test('프로필 뷰모델은 선언 시 초기값을 갖는다', () => {
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
