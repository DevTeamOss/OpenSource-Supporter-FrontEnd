import { renderHook } from '@testing-library/react'

import { useRepoInfo } from '@/view-models/index.js'
import { ReduxProvider } from '@/tests/redux-provider.jsx'

describe('Repo Info View Model Test', () => {
    function createTestHook() {
        return renderHook(() => useRepoInfo(), {
            wrapper: ReduxProvider,
        })
    }

    test('뷰모델은 초기값으로 빈 객체를 갖는다', () => {
        const { result } = createTestHook()

        expect(result.current.data).toStrictEqual({})
    })

    test('레포 정보에는 모든 속성을 포함한다', async () => {
        const { result } = createTestHook()
        await result.current.getRepoInfo({ repoId: 1 })

        const properties = [
            'id',
            'repoName',
            'description',
            'tags',
            'mostLanguage',
            'license',
            'repositoryLink',
            'viewCount',
            'totalPoint',
            'lastCommitAt',
            'createdAt',
            'modifiedAt',
            'supportedPointList',
        ]

        properties.forEach((prop) => {
            expect(result.current.data).toHaveProperty(prop)
        })
    })
})
