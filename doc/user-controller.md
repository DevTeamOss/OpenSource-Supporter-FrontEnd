# UserController

## Usage
```javascript
const userController = useUserController()
```
위의 코드와 같이 필요한 컴포넌트에서 컨트롤러 사용 가능


## Data

### 초기 값
```javascript
const initialState = {
    username: 'guest',
    name: 'guest-user',
    email: '',
    avatarUrl: '',
    accessToken: '',
    remainingPoint: 0,
    totalPoint: 0,
}
```

### 데이터 객체 속성
- username: 아이디 (string)
- name: 이름 (string)
- email: 이메일 주소 (string)
- avatarUrl: 프로필 사진 url (string)
- accessToken: 액세스 토큰 값 (string)
- remainingPoint: 남은 포인트 (number)
- totalPoint: 총 포인트 (number)
- adLink: 광고 시청 페이지 링크 (string)
- cardLink: 서포터 카드 링크 (string)

### 활용 방법
```javascript
<div>아이디: {userController.data.username}</div>
```
위의 코드와 같이 userController.data에서 필요한 값 사용 가능


## Methods

### async function login({ code })

#### 용도
유저 로그인

#### 입력사항
- code: GitHub에서 보내준 일회성 토큰 값 (string)

#### 실행 시 변화
데이터 값이 업데이트 되고, 성공 여부를 true 또는 false로 반환한다.

#### 사용법
```javascript
await userController.login({ code: '[토큰 값]' })
```
위의 코드와 같이 login 사용 가능


### async function logout()

#### 용도
유저 로그아웃

#### 입력사항
없음

#### 실행 시 변화
데이터가 초기 값으로 변경된다.

#### 사용법
```javascript
await userController.logout()
```
위의 코드와 같이 logout 사용 가능


### async function withdraw()

#### 용도
유저 탈퇴

#### 입력사항
없음

#### 실행 시 변화
데이터가 초기 값으로 변경된다.

#### 사용법
```javascript
await userController.withdraw()
```
위의 코드와 같이 withdraw 사용 가능