import { rankService } from '@/services/index.js'

describe('Rank Service Test', () => {
    test('유저의 랭킹 정보를 요청하면 필요한 속성값을 포함한 객체를 받는다', async () => {
        const { data } = await rankService.callGetMyRank()

        const properties = [
            'username',
            'name',
            'rank',
            'avatarUrl',
            'usedPoint',
            'topPercent',
        ]

        properties.forEach((prop) => {
            expect(data).toHaveProperty(prop)
        })
    })
})
