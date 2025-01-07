import { renderHook } from '@testing-library/react'

import { useGithubRepoList } from '@/view-models/index.js'
import { ReduxProvider } from '@/tests/redux-provider.jsx'

describe('GitHub Repo List View Model Test', () => {
    function createTestHook() {
        return renderHook(() => useGithubRepoList(), {
            wrapper: ReduxProvider,
        })
    }

    test('뷰모델은 초기값으로 빈 배열을 갖는다', () => {
        const { result } = createTestHook()

        expect(result.current.data).toStrictEqual([])
    })

    test('레포 목록에 포함된 모든 객체는 필요한 모든 속성을 포함하고 있다', async () => {
        const { result } = createTestHook()
        await result.current.getList()

        const properties = [
            'repoId',
            'repoName',
            'forkCount',
            'starCount',
            'lastCommitAt',
            'posted',
        ]

        Object(result.current.data).forEach((repoData) => {
            properties.forEach((prop) => {
                expect(repoData).toHaveProperty(prop)
            })
        })
    })
})
