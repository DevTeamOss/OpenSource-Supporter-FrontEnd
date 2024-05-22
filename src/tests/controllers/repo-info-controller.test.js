import { renderHook } from '@testing-library/react'

import { useRepoInfoController } from '@/controllers/index.js'
import { ReduxProvider } from '@/tests/redux-provider.jsx'

describe('Repo Info Controller Test', () => {
    function createTestHook() {
        return renderHook(() => useRepoInfoController(), {
            wrapper: ReduxProvider,
        })
    }

    test('컨트롤러는 초기값으로 빈 객체를 갖는다', () => {
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
