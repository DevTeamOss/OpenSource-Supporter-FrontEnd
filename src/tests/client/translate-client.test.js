import { translateClient } from '@/client/index.js'

describe('Translate Client Test', () => {
    test('콘텐츠 번역을 요청하면 번역된 텍스트를 받는다', async () => {
        const { data } = await translateClient.callTranslate({
            language: 'japanese',
            text: "# PreFlightCheck\n\n**2023오픈소스프로젝트**\n\n\n[프로토타입 바로가기](https://www.figma.com/proto/FHKA7XKusg2gJTw7tNCYab/CodingHoliday_PreFlightCheck?type=design&node-id=36-307&scaling=scale-down&page-id=0%3A1&starting-point-node-id=36%3A307)\n\n[피피티 바로가기](https://www.canva.com/design/DAFlVSvWag8/PR6kFJ5NJDO14f23SrzRug/view?utm_content=DAFlVSvWag8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink)\n\n\n### 배경:\n\n- 공항을 거쳐야 하는 일정이라면 공항의 상황을 먼저 파악하고 있는 것이 도움이 됩니다.\n\n- 이런 니즈를 고려해 저희 팀은 '**현재 내 도착 예정 공항의 상황은?**'이라는 주제로 프로젝트를 진행했습니다. \n\n- 탑승 당일의 날씨, 공항 혼잡도/소요 시간, 주차 정보 제공 기능을 주요 서비스로 삼았습니다. \n\n\n### 목표:\n\n1. 공항을 이용하는 사용자들의 편의에 도움을 줄 수 있는 **모바일 앱**을 개발\n2. **GitHub를 통한** 버전관리와 충돌관리, 브랜치 등의 대해 실전적으로 협업 학습\n\n\n### 일정 계획:\n\n\n### Stack:\n\n- React-Native\n- Node.js\n- Java\n- Firebase \n\n\n### 디자인:\n\n\n### 구현:\n\n**React-Native를 활용한 APP 개발**\n\n**Firebase Firestore을 이용한 DB연동** \n \n**API서버 구현**\n\n- [sever 바로가기](https://github.com/kangdaelyeol/sever?utm_source=canva&utm_medium=iframely)\n\n **주차장 정보 API**\n\n**기상청 단기 API / 기상청 초단기 API / 항공기 운항정보 API/ 공항 소요시간 API**\n\n\n\n### 사용한 Open API:\n\n- 공항 혼잡도 정보 API (한국공항공사 제공)\n- 공항 소요시간 정보 API (한국공항공사 제공)\n- 기상청 초단기 예보 API (기상청 제공)\n- 기상청 단기 예보 API (기상청 제공)\n- 기상청 중기 예보 API (기상청 제공)\n- 국내 항공운항정보 API (국토교통부 제공)\n- 전국공항 실시간 주차 정보 API (한국공항공사 제공)\n\n\n\n### 사용 라이브러리:\n\n- @react-navigation/native\n- react-native-screens\n- react-native-safe-area-context\n- @react-navigation/native-stack\n- react-native-vector-icons\n- firebase\n- axios\n- react-native-calendars\n- react-native-modal-datetime-picker \n- @react-native-community/datetimepicker\n- react-native-config\n\n\n\n### 프로그램:\n\n- Watchman\n",
        })

        expect(data).toBeTypeOf('string')
    })
})
