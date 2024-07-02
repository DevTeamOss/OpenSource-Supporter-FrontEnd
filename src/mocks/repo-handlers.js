import { http, HttpResponse } from 'msw'

import { BACKEND_URL } from '@/constants/config.js'

const repoHandlers = [
    http.get(`${BACKEND_URL}/api/repo`, () => {
        console.log('repository info requested')
        return HttpResponse.json(
            {
                id: 1,
                repoName: 'PreFlightCheck',
                description:
                    'my first repository. please fork and add star my repo',
                tags: ['tag1', 'tag2', 'tag3', 'tag4'],
                mostLanguage: 'JavaScript',
                license: 'MIT License',
                repositoryLink:
                    'https://github.com/ambition-kwon/PreFlightCheck',
                viewCount: 0,
                totalPoint: 0,
                lastCommitAt: '2023-11-01T03:40:36',
                createdAt: '2024-05-09T17:20:12.219707',
                modifiedAt: '2024-05-09T17:20:12.219707',
                supportedPointList: [],
            },
            { status: 200 },
        )
    }),

    http.put(`${BACKEND_URL}/api/repo/view-count`, () => {
        console.log('repository info with view count requested')
        return HttpResponse.json(
            {
                id: 1,
                repoName: 'PreFlightCheck',
                description:
                    'my first repository. please fork and add star my repo',
                tags: ['tag1', 'tag2', 'tag3', 'tag4'],
                mostLanguage: 'JavaScript',
                license: 'MIT License',
                repositoryLink:
                    'https://github.com/ambition-kwon/PreFlightCheck',
                viewCount: 4,
                totalPoint: 0,
                lastCommitAt: '2023-11-01T03:40:36',
                createdAt: '2024-05-09T13:11:46.19641',
                modifiedAt: '2024-05-09T13:11:58.619132',
                supportedPointList: [],
            },
            { status: 200 },
        )
    }),

    http.post(`${BACKEND_URL}/api/repo`, () => {
        console.log('add repository requested')
        return HttpResponse.json(
            {
                id: 1,
                repoName: 'PreFlightCheck',
                description:
                    'my first repository. please fork and add star my repo',
                tags: ['tag1', 'tag2', 'tag3', 'tag4'],
                mostLanguage: 'JavaScript',
                license: 'MIT License',
                repositoryLink:
                    'https://github.com/ambition-kwon/PreFlightCheck',
                viewCount: 0,
                totalPoint: 0,
                lastCommitAt: '2023-11-01T03:40:36',
                createdAt: '2024-05-09T17:18:32.69247',
                modifiedAt: '2024-05-09T17:18:32.69247',
                supportedPointList: null,
            },
            { status: 200 },
        )
    }),

    http.delete(`${BACKEND_URL}/api/repo`, () => {
        console.log('delete repository requested')
        return HttpResponse.json({}, { status: 200 })
    }),

    http.put(`${BACKEND_URL}/api/repo`, () => {
        console.log('modify repository requested')
        return HttpResponse.json(
            {
                id: 1,
                repoName: 'PreFlightCheck',
                description:
                    'my second repository. please fork and add star my repo',
                tags: [
                    'modified tag1',
                    'modified tag2',
                    'modified tag3',
                    'modified tag4',
                ],
                mostLanguage: 'JavaScript',
                license: 'MIT License',
                repositoryLink:
                    'https://github.com/ambition-kwon/PreFlightCheck',
                viewCount: 0,
                totalPoint: 0,
                lastCommitAt: '2023-11-01T03:40:36',
                createdAt: '2024-05-09T17:20:12.219707',
                modifiedAt: '2024-05-09T17:20:54.905005',
                supportedPointList: [],
            },
            { status: 200 },
        )
    }),

    http.get(`${BACKEND_URL}/api/repo/detail`, () => {
        console.log('repository detail requested')
        return HttpResponse.json(
            {
                avatarUrl:
                    'https://avatars.githubusercontent.com/u/5442985?v=4',
                userName: 'ambition-kwon',
                repoName: 'PreFlightCheck',
                tags: ['tag1', 'tag2', 'tag3', 'tag4'],
                mostLanguage: 'JavaScript',
                license: 'MIT License',
                repositoryLink:
                    'https://github.com/ambition-kwon/PreFlightCheck',
                lastCommitAt: '2023-11-01T03:40:36',
                viewCount: 2,
                description:
                    'my first repository. please fork and add star my repo',
                readmeContent:
                    "# PreFlightCheck\n\n**2023오픈소스프로젝트**\n\n\n[프로토타입 바로가기](https://www.figma.com/proto/FHKA7XKusg2gJTw7tNCYab/CodingHoliday_PreFlightCheck?type=design&node-id=36-307&scaling=scale-down&page-id=0%3A1&starting-point-node-id=36%3A307)\n\n[피피티 바로가기](https://www.canva.com/design/DAFlVSvWag8/PR6kFJ5NJDO14f23SrzRug/view?utm_content=DAFlVSvWag8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink)\n\n\n### 배경:\n\n- 공항을 거쳐야 하는 일정이라면 공항의 상황을 먼저 파악하고 있는 것이 도움이 됩니다.\n\n- 이런 니즈를 고려해 저희 팀은 '**현재 내 도착 예정 공항의 상황은?**'이라는 주제로 프로젝트를 진행했습니다. \n\n- 탑승 당일의 날씨, 공항 혼잡도/소요 시간, 주차 정보 제공 기능을 주요 서비스로 삼았습니다. \n\n\n### 목표:\n\n1. 공항을 이용하는 사용자들의 편의에 도움을 줄 수 있는 **모바일 앱**을 개발\n2. **GitHub를 통한** 버전관리와 충돌관리, 브랜치 등의 대해 실전적으로 협업 학습\n\n\n### 일정 계획:\n\n\n### Stack:\n\n- React-Native\n- Node.js\n- Java\n- Firebase \n\n\n### 디자인:\n\n\n### 구현:\n\n**React-Native를 활용한 APP 개발**\n\n**Firebase Firestore을 이용한 DB연동** \n \n**API서버 구현**\n\n- [sever 바로가기](https://github.com/kangdaelyeol/sever?utm_source=canva&utm_medium=iframely)\n\n **주차장 정보 API**\n\n**기상청 단기 API / 기상청 초단기 API / 항공기 운항정보 API/ 공항 소요시간 API**\n\n\n\n### 사용한 Open API:\n\n- 공항 혼잡도 정보 API (한국공항공사 제공)\n- 공항 소요시간 정보 API (한국공항공사 제공)\n- 기상청 초단기 예보 API (기상청 제공)\n- 기상청 단기 예보 API (기상청 제공)\n- 기상청 중기 예보 API (기상청 제공)\n- 국내 항공운항정보 API (국토교통부 제공)\n- 전국공항 실시간 주차 정보 API (한국공항공사 제공)\n\n\n\n### 사용 라이브러리:\n\n- @react-navigation/native\n- react-native-screens\n- react-native-safe-area-context\n- @react-navigation/native-stack\n- react-native-vector-icons\n- firebase\n- axios\n- react-native-calendars\n- react-native-modal-datetime-picker \n- @react-native-community/datetimepicker\n- react-native-config\n\n\n\n### 프로그램:\n\n- Watchman\n",
                weeklyCommitList: [
                    2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                ],
                totalCommits: 28,
                totalStars: 2,
                totalPullRequests: 15,
                totalIssues: 12,
                totalContributions: 4,
                rank: 'C+',
                chatgptAnalysis:
                    '주어진 정보에 따르면, 레포지토리 소유자는 총 4개의 레포지토리에 기여하였고, 해당 레포지토리의 total commits는 28회, total pull requests는 15회, total issues는 12회이며, total stars는 2개 입니다. 또한, 해당 레포지토리의 첫 번째 주부터 최근 주까지의 주간 커밋 수는 52주 전부터 0, 0, 0,... , 0, 0 입니다.\n\n해당 레포지토리는 2023 오픈소스 프로젝트이며, 목표는 모바일 앱을 개발하여 공항 이용자들의 편의를 돕고, GitHub를 통한 버전 및 충돌 관리와 협업에 실전적으로 학습하는 것입니다. 사용된 기술 스택은 React-Native, Node.js, Java, Firebase이며, 디자인과 구현에 대한 내용도 포함되어 있습니다. 또한, 다양한 Open API와 라이브러리를 사용하였습니다.\n\n하지만, 현재 레포지토리의 커밋 수가 매우 낮고, 주차별 커밋 수가 0에 가까운 것을 감안할 때, 해당 레포지토리에 대한 투자 가치는 현재는 높지 않아 보입니다.\n\n결론: 현재 레포지토리에 대한 투자 가치는 낮을 것으로 보입니다.',
            },
            { status: 200 },
        )
    }),
]

export default repoHandlers
