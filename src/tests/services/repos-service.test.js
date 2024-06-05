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

    test('유저의 후원받는 레포 리스트를 요청하면 레포 정보 객체의 배열을 받는다', async () => {
        const { data } = await reposService.callGetSupportedList({
            username: 'ambition-kwon',
        })

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
        ]

        data.forEach((repoInfo) => {
            properties.forEach((prop) => {
                expect(repoInfo).toHaveProperty(prop)
            })
        })
    })

    test('유저가 후원하는 레포 리스트를 요청하면 레포 정보 객체의 배열을 받는다', async () => {
        const { data } = await reposService.callGetSupportingList({
            username: 'ambition-kwon',
        })

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
        ]

        data.forEach((repoInfo) => {
            properties.forEach((prop) => {
                expect(repoInfo).toHaveProperty(prop)
            })
        })
    })
})
