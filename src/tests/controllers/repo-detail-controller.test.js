import { renderHook } from '@testing-library/react'

import { useRepoDetailController } from '@/controllers/index.js'
import { ReduxProvider } from '@/tests/redux-provider.jsx'

describe('Repo Detail Controller Test', () => {
    function createTestHook() {
        return renderHook(() => useRepoDetailController(), {
            wrapper: ReduxProvider,
        })
    }

    test('컨트롤러는 선언 시 초기값으로 id는 null, data는 빈 객체를 갖는다', () => {
        const { result } = createTestHook()

        expect(result.current.id).toStrictEqual(null)
        expect(result.current.data).toStrictEqual({})
    })

    test('레포를 선택하면 컨트롤러는 id 값으로 선택한 레포의 id 값을 갖는다', () => {
        const { result, rerender } = createTestHook()

        expect(result.current.id).toStrictEqual(null)

        result.current.selectRepo(99)
        rerender()

        expect(result.current.id).toBe(99)
    })

    test('레포 상세 정보에는 모든 속성을 포함한다', async () => {
        const { result, rerender } = createTestHook()
        result.current.selectRepo(7)
        rerender()

        expect(result.current.id).toBe(7)

        await result.current.getData()
        rerender()

        const properties = [
            'avatarUrl',
            'username',
            'repoName',
            'tags',
            'mostLanguage',
            'license',
            'repositoryLink',
            'lastCommitAt',
            'viewCount',
            'description',
            'readmeContent',
            'weeklyCommitList',
            'totalCommits',
            'totalStars',
            'totalPullRequests',
            'totalIssues',
            'totalContributions',
            'rank',
            'chatgptAnalysis',
        ]

        properties.forEach((prop) => {
            expect(result.current.data).toHaveProperty(prop)
        })
    })
})
