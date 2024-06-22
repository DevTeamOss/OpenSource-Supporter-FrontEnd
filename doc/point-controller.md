# PointController

## Usage
```javascript
const pointController = usePointController()
```
위의 코드와 같이 필요한 컴포넌트에서 컨트롤러 사용 가능


## Data

### 초기 값
```javascript
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
```

### 데이터 객체 속성
- spentPoints: 후원한 포인트 (number),
- paypalPoints: 페이팔로 충전한 포인트 (number),
- advertisementPoints: 광고 시청으로 얻은 포인트 (number),
- sponsoredPoints: 후원받은 포인트 (number),
- monthlySpentPointsPercentage: 한 달 전과의 후원한 포인트 변화 (number),
- monthlyPaypalPointsPercentage: 한 달 전과의 페이팔로 충전한 포인트 변화 (number),
- monthlyAdvertisementPointsPercentage: 한 달 전과의 광고 시청으로 얻은 포인트 변화 (number),
- monthlySponsoredPointsPercentage: 한 달 전과의 후원받은 포인트 변화 (number),

### 활용 방법
```javascript
<div>후원한 포인트: {pointController.data.spentPoints}</div>
```
위의 코드와 같이 pointController.data에서 필요한 값 사용 가능


## Methods

### async function getSummary()

#### 용도
포인트 요약 정보 조회

#### 입력사항
없음

#### 실행 시 변화
데이터 값이 업데이트 되고, 성공 여부를 true 또는 false로 반환한다.

#### 사용법
```javascript
await pointController.getSummary()
```
위의 코드와 같이 getSummary 사용 가능


### async function chargePoint({ amount })

#### 용도
포인트 충전

#### 입력사항
- amount: 충전할 포인트의 양 (number)

#### 실행 시 변화
없음

#### 사용법
```javascript
await pointController.chargePoint({ amount: ['충전할 포인트의 양'] })
```
위의 코드와 같이 chargePoint 사용 가능
