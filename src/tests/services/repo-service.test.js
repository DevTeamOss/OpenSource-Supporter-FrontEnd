import { repoService } from '@/services/index.js'

describe('Repo Service Test', () => {
    test('단일 레포에 대한 정보를 요청하면 모든 속성 값을 포함하는 정보를 받는다', async () => {
        const { data } = await repoService.callGetInfo({ id: 1 })

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
            expect(data).toHaveProperty(prop)
        })
    })

    test('특정 레포의 조회수를 올리는 요청을 하면 조회수가 증가한 레포의 정보를 받는다', async () => {
        const { data } = await repoService.callGetInfoWithViewCount({ id: 1 })

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
            expect(data).toHaveProperty(prop)
        })
    })

    test('레포 등록 요청을 보내면 추가된 레포의 정보를 받는다', async () => {
        const { data } = await repoService.callAddRepository({
            username: 'ambition-kwon',
            repoName: 'PreFlightCheck',
            description:
                'my first repository. please fork and add star my repo',
            tags: ['tag1', 'tag2', 'tag3', 'tag4'],
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
            'createdAt',
            'modifiedAt',
            'supportedPointList',
        ]

        properties.forEach((prop) => {
            expect(data).toHaveProperty(prop)
        })
    })

    test('레포 삭제 요청을 하면 상태 값 200을 받는다', async () => {
        const { status } = await repoService.callDeleteRepository({ repoId: 1 })

        expect(status).toBe(200)
    })

    test('레포 수정 요청을 하면 수정된 레포의 정보를 받는다', async () => {
        const { data } = await repoService.callModifyRepository({
            repoId: 1,
            description:
                'my second repository. please fork and add star my repo',
            tags: [
                'modified tag1',
                'modified tag2',
                'modified tag3',
                'modified tag4',
            ],
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
            'createdAt',
            'modifiedAt',
            'supportedPointList',
        ]

        properties.forEach((prop) => {
            expect(data).toHaveProperty(prop)
        })
    })
})
