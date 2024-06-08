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

    test('랭크 리스트를 요청하면 랭크 정보 객체의 배열을 받고 사용할 수 있도록 가공한다', async () => {
        const { data } = await rankService.callGetRankList({ page: 0 })

        const properties = [
            'username',
            'name',
            'avatarUrl',
            'rank',
            'usedPoint',
            'tier',
        ]

        data.list.forEach((rankInfo) => {
            properties.forEach((prop) => {
                expect(rankInfo).toHaveProperty(prop)
            })
        })
    })
})
