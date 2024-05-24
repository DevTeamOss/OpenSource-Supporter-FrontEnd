# RepoInfoController

## Usage
```javascript
const repoInfoController = repoInfoController()
```
위의 코드와 같이 필요한 컴포넌트에서 컨트롤러 사용 가능


## Data

### 초기 값
```javascript
const initialState = {}
```

### 데이터 객체 속성
- id: 레포지토리 인덱스 값 (number)
- repoName: 레포지토리 이름 (string)
- description: 레포지토리 설명 (string)
- tags: 태그를 담은 배열 (string[])
- mostLanguage: 레포지토리 코드에 가장 많이 포함된 프로그래밍 언어 (string)
- license: 라이센스 (string)
- viewCount: 조회 수 (number)
- totalPoint: 받은 포인트의 총합 (number)
- lastCommitAt: 마지막 커밋일자 (Date)
- createdAt: 등록일자 (Date)
- modifiedAt: 수정일자 (Date)
- supportedPointList: 받은 포인트에 대한 정보를 담은 배열 (Object[])

### 활용 방법
```javascript
<div>
    <div>레포지토리 이름: {repoInfoController.data.repoName}</div>
    <div>설명: {repoInfoController.data.description}</div>
    <div>
        {repoInfoController.data.tags.map((tag) => (<div>{tag}</div>))}
    </div>
</div>
```
위의 코드와 같이 repoInfoController.data에서 필요한 값 사용 가능


## Methods

### async function getRepoInfo({ id })

#### 용도
입력한 인덱스 값을 가지는 레포지토리 정보 요청

#### 입력사항
- id: 레포지토리 인덱스 값 (number)

#### 실행 시 변화
데이터 값이 업데이트 된다.

#### 사용법
```javascript
await repoInfoController.getRepoInfo({ id: '[레포지토리 인덱스 값]'})
```
위의 코드와 같이 getRepoInfo 사용 가능


### async function getInfoWithViewCount({ id })

#### 용도
입력한 인덱스 값을 가지는 레포지토리 정보와 함께 조회수 증가 요청

#### 입력사항
- id: 레포지토리 인덱스 값 (number)

#### 실행 시 변화
데이터 값이 업데이트 된다.

#### 사용법
```javascript
await repoInfoController.getInfoWithViewCount({ id: '[레포지토리 인덱스 값]'})
```
위의 코드와 같이 getInfoWithViewCount 사용 가능