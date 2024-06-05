import { userService } from '@/services/user-service.js'

describe('User Service Test', () => {
    test('유저 정보를 요청하면 필요한 속성 값들을 포함한 객체를 받는다', async () => {
        const { data } = await userService.callGetInfo({
            username: 'ambition-kwon',
        })

        const properties = [
            'username',
            'name',
            'avatarUrl',
            'totalPoint',
            'remainingPoint',
        ]

        properties.forEach((prop) => {
            expect(data).toHaveProperty(prop)
        })
    })

    test('서포터 카드 정보를 요청하면 필요한 속성 값들을 포함한 객체를 받는다', async () => {
        const { data } = await userService.callGetCardInfo({
            username: 'ambition-kwon',
        })

        const properties = ['username', 'totalDonated', 'donatedRepoNames']

        properties.forEach((prop) => {
            expect(data).toHaveProperty(prop)
        })
    })
})
