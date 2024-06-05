# ProfileController

## Usage
```javascript
const profileController = useProfileController()
```
위의 코드와 같이 필요한 컴포넌트에서 컨트롤러 사용 가능


## Data

### 초기 값
```javascript
const initialState = {
    username: '',
    name: '',
    avatarUrl: '',
    remainingPoint: 0,
    totalPoint: 0,
}
```

### 데이터 객체 속성
- username: 아이디 (string)
- name: 이름 (string)
- avatarUrl: 프로필 사진 url (string)
- remainingPoint: 남은 포인트 (number)
- totalPoint: 총 포인트 (number)

### 활용 방법
```javascript
<div>아이디: {profileController.data.username}</div>
```
위의 코드와 같이 profileController.data에서 필요한 값 사용 가능


## Methods

### async function getData({ username })

#### 용도
유저의 프로필 정보 조회

#### 입력사항
- username: 해당 유저의 아이디

#### 실행 시 변화
데이터 값이 업데이트 되고, 성공 여부를 true 또는 false로 반환한다.

#### 사용법
```javascript
await userController.login({ username: '[유저 아이디]' })
```
위의 코드와 같이 getData 사용 가능
