import { reposService } from '@/services/index.js'

describe('Repos Service Test', () => {
    test('GitHub 레포 리스트를 요청하면 레포 정보 객체의 배열을 받는다', async () => {
        const { data } = await reposService.callGetList()

        const properties = [
            'repoId',
            'repoName',
            'forkCount',
            'starCount',
            'lastCommitAt',
            'posted',
        ]

        data.forEach((repoInfo) => {
            properties.forEach((prop) => {
                expect(repoInfo).toHaveProperty(prop)
            })
        })
    })
})
