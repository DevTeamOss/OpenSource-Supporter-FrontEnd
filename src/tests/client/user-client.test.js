import { userClient } from '@/client/user-client.js'

describe('User Client Test', () => {
    test('유저 정보를 요청하면 필요한 속성 값들을 포함한 객체를 받는다', async () => {
        const { data } = await userClient.callGetInfo({
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
        const { data } = await userClient.callGetCardInfo({
            username: 'ambition-kwon',
        })

        const properties = ['username', 'totalDonated', 'donatedRepoNames']

        properties.forEach((prop) => {
            expect(data).toHaveProperty(prop)
        })
    })
})
