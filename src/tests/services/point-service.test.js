import { pointService } from '@/services/index.js'

describe('Point Service Test', () => {
    test('유저 포인트 요약 정보를 요청하면 필요한 속성들을 포함한 객체를 받는다', async () => {
        const { data } = await pointService.callGetSummary()

        const properties = [
            'spentPoints',
            'paypalPoints',
            'advertisementPoints',
            'sponsoredPoints',
            'monthlySpentPointsPercentage',
            'monthlyPaypalPointsPercentage',
            'monthlyAdvertisementPointsPercentage',
            'monthlySponsoredPointsPercentage',
        ]

        properties.forEach((prop) => {
            expect(data).toHaveProperty(prop)
        })
    })

    test('포인트 충전에 성공하면 상태값으로 200을 받는다', async () => {
        const { status } = await pointService.callCharge({ price: 100000 })

        expect(status).toBe(200)
    })

    test('사용한 포인트 목록을 요청하면 필요한 정보를 포함하는 객체의 배열을 받는다', async () => {
        const { data } = await pointService.callGetSpentList({ page: 0 })

        const properties = ['date', 'point', 'description', 'status']

        data.data.forEach((info) => {
            properties.forEach((prop) => {
                expect(info).toHaveProperty(prop)
            })
        })
    })

    test('얻은 포인트 목록을 요청하면 필요한 정보를 포함하는 객체의 배열을 받는다', async () => {
        const { data } = await pointService.callGetEarnedList({ page: 0 })

        const properties = ['date', 'point', 'description', 'status']

        data.data.forEach((info) => {
            properties.forEach((prop) => {
                expect(info).toHaveProperty(prop)
            })
        })
    })
})
