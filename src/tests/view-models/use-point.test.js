import { renderHook } from '@testing-library/react'

import { usePoint } from '@/view-models/index.js'
import { ReduxProvider } from '@/tests/redux-provider.jsx'

const initialState = {
    spentPoints: 0,
    paypalPoints: 0,
    advertisementPoints: 0,
    sponsoredPoints: 0,
    monthlySpentPointsPercentage: 0,
    monthlyPaypalPointsPercentage: 0,
    monthlyAdvertisementPointsPercentage: 0,
    monthlySponsoredPointsPercentage: 0,
}

describe('Point View Model Test', () => {
    function createTestHook() {
        return renderHook(() => usePoint(), {
            wrapper: ReduxProvider,
        })
    }

    test('포인트 뷰모델은 선언 시 초기값을 갖는다', () => {
        const { result } = createTestHook()

        expect(result.current.data).toStrictEqual(initialState)
    })

    test('포인트 정보에는 필요한 모든 속성을 포함한다', async () => {
        const { result } = createTestHook()
        await result.current.getSummary()

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
            expect(result.current.data).toHaveProperty(prop)
        })
    })
})
