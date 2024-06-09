import { searchService } from '@/services/search-service.js'

describe('Search Service Test', () => {
    test('키워드를 입력하고 검색을 요청하면 유저 정보 배열과 레포 정보 배열을 받는다', async () => {
        const { data } = await searchService.callSearch({ keyword: 'ambition' })

        const userProperties = ['username', 'name', 'avatarUrl']
        const repoProperties = [
            'username',
            'avatarUrl',
            'repoName',
            'description',
            'tags',
            'mostLanguage',
            'license',
            'lastCommitAt',
        ]

        const { users, repositories } = data

        users.forEach((user) => {
            userProperties.forEach((prop) => {
                expect(user).toHaveProperty(prop)
            })
        })

        repositories.forEach((repo) => {
            repoProperties.forEach((prop) => {
                expect(repo).toHaveProperty(prop)
            })
        })
    })
})
