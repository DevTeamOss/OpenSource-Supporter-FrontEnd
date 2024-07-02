# RepoDetailController

## Usage
```javascript
const repoDetailController = useRepoDetailController()
```
위의 코드와 같이 필요한 컴포넌트에서 컨트롤러 사용 가능


## Data

### 초기 값
```javascript
const initialState = null    // id

const [info, setInfo] = useState({})    // data
```

### 데이터 객체 속성
- avatarUrl: 레포지토리 소유자의 프로필 사진 url (string)
- username: 레포지토리 소유자의 아이디 (string)
- repoName: 레포지토리 이름 (string)
- tags: 태그를 담은 배열 (string[])
- mostLanguage: 레포지토리 코드에 가장 많이 포함된 프로그래밍 언어 (string)
- license: 라이센스 (string)
- repositoryLink: 레포지토리 깃허브 페이지 url (string)
- lastCommitAt: 마지막 커밋일자 (Date)
- viewCount: 조회 수 (number)
- description: 레포지토리 설명 (string)
- readmeContent: 레포지토리의 README.md 내용 (string)
- weeklyCommitList: 52주간의 주 단위 커밋 수의 배열 (number[])
- totalCommits: 레포지토리 소유자가 작년에 커밋한 횟수 (number)
- totalStars: 레포지토리 소유자가 부여한 스타의 수 (number)
- totalPullRequests: 레포지토리 소유자가 해결한 풀 리퀘스트 수 (number)
- totalIssues: 레포지토리 소유자가 해결한 이슈 수 (number)
- totalContributions: 레포지토리 소유자가 작년에 기여한 횟수 (number)
- rank: 레포지토리 소유자의 깃허브 활동에 따른 등급 (string)
- chatgptAnalysis: 해당 레포지토리에 대한 chatGPT 분석 결과 (string)

### 활용 방법
```javascript
<div>
    <div>레포지토리 이름: {repoDetailController.data.repoName}</div>
    <div>설명: {repoDetailController.data.description}</div>
    <div>
        {repoDetailController.data.tags.map((tag) => (<div>{tag}</div>))}
    </div>
</div>
```
위의 코드와 같이 repoDetailController.data에서 필요한 값 사용 가능


## Methods

### function selectRepo(id)

#### 용도
상세 정보를 조회할 레포지토리의 id 선택

#### 입력사항
- id: 레포지토리 인덱스 값 (number)

#### 실행 시 변화
컨트롤러의 id 값이 선택한 레포지토리의 id 값으로 업데이트 된다.

#### 사용법
```javascript
repoDetailController.reset('[레포지토리 인덱스 값]')
```
위의 코드와 같이 reset 사용 가능


### function reset()

#### 용도
컨트롤러의 id 값을 초기값인 null로 변경

#### 입력사항
없음

#### 실행 시 변화
컨트롤러의 id 값이 null로 업데이트 된다.

#### 사용법
```javascript
repoDetailController.selectRepo('[레포지토리 인덱스 값]')
```
위의 코드와 같이 selectRepo 사용 가능


### async function getData()

#### 용도
컨트롤러 id 값에 해당되는 레포지토리 상세 정보 요청

#### 입력사항
없음

#### 실행 시 변화
데이터 값이 업데이트 되고, 성공 여부를 true 또는 false로 반환

#### 사용법
```javascript
await repoDetailController.getData()
```
위의 코드와 같이 getData 사용 가능


### async function support(amount)

#### 용도
컨트롤러 id 값에 해당되는 레포지토리에 포인트 후원

#### 입력사항
- amount: 후원할 포인트의 양 (number)

#### 실행 시 변화
성공 여부를 true 또는 false로 반환

#### 사용법
```javascript
await repoDetailController.amount('[후원할 포인트의 양]')
```
위의 코드와 같이 support 사용 가능