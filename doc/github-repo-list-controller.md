# GithubRepoListController

## Usage
```javascript
const githubRepoListController = useGithubRepoListController()
```
위의 코드와 같이 필요한 컴포넌트에서 컨트롤러 사용 가능


## Data

### 초기 값
```javascript
const initialState = []
```

### 데이터 객체 속성
- repoId: 레포지토리 인덱스 값 (number)
- repoName: 레포지토리 이름 (string)
- forkCount: 포크 수 (number)
- starCount: 스타 수 (number)
- lastCommitAt: 마지막 커밋일자 (Date)
- posted: 등록 여부 (boolean)

위의 속성들을 포함하는 데이터 객체의 배열

### 활용 방법
```javascript
{githubRepoListController.map((info) => {
    return (
        <div>
            <div>레포지토리 이름: {info.name}</div>
            <div>등록 여부: {info.posted ? '등록 됨' : '등록되지 않음'}</div>
        </div>
    )
})}
```
위의 코드와 같이 githubRepoListController.data에서 필요한 값 사용 가능


## Methods

### async function getList()

#### 용도
유저의 GitHub 계정에 등록된 public 레포지토리의 목록을 요청

#### 입력사항
없음

#### 실행 시 변화
데이터 배열이 업데이트 된다.

#### 사용법
```javascript
await githubRepoListController.getList()
```
위의 코드와 같이 getList 사용 가능


### async function addRepository({ username, repoName, description, tags })

#### 용도
OpenSource Supporter에 레포지토리 등록

#### 입력사항
- username: 유저의 아이디 (string)
- repoName: 레포지토리 이름 (string)
- description: 레포지토리 설명 (string)
- tags: 태그를 담은 배열 (string[])

#### 실행 시 변화
없음

#### 사용법
```javascript
await githubRepoListController.addRepository({
    username: '[유저의 아이디]',
    repoName: '[레포지토리 이름]',
    desciption: '[레포지토리 설명]',
    tags: ['[태그1]', '[태그2]', '[태그3]'],
})
```
위의 코드와 같이 addRepository 사용 가능


### async function deleteRepository({ repoId })

#### 입력사항
- repoId: 레포지토리의 인덱스 값 (number)

#### 실행 시 변화
없음

#### 사용법
```javascript
await githubRepoListController.deleteRepository({ repoId: '[레포지토리의 인덱스 값]' })
```
위의 코드와 같이 deleteRepository 사용 가능


### async function modifyRepository({ repoId, description, tags })

#### 용도
OpenSource Supporter에 등록된 레포지토리 정보 수정

#### 입력사항
- repoId: 레포지토리 인덱스 값 (number)
- description: 레포지토리 설명 (string)
- tags: 태그를 담은 배열 (string[])

#### 실행 시 변화
없음

#### 사용법
```javascript
await githubRepoListController.modifyRepository({
    repoId: '[레포지토리 인덱스 값]',
    desciption: '[레포지토리 설명]',
    tags: ['[태그1]', '[태그2]', '[태그3]'],
})
```
위의 코드와 같이 modifyRepository 사용 가능