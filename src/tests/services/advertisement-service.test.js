import { advertisementService } from '@/services/index.js'

describe('Advertisement Service Test', () => {
    test('광고를 요청하면 광고의 정보를 담은 객체를 받는다', async () => {
        const { data } = await advertisementService.callGetAdvertisement()

        const properties = ['id', 'url', 'videoLength']

        properties.forEach((prop) => {
            expect(data).toHaveProperty(prop)
        })
    })

    test('광고 시청 완료 콜을 보내면 포인트가 증가한 유저의 정보 객체를 받는다', async () => {
        const { data } = await advertisementService.callComplete({
            username: 'ambition-kwon',
            adId: 1,
        })

        const properties = [
            'id',
            'username',
            'adLink',
            'cardLink',
            'totalPoint',
            'usedPoint',
            'remainingPoint',
            'createdAt',
            'modifiedAt',
            'repoItemList',
            'admin',
        ]
    })
})
