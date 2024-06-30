import { http, HttpResponse } from 'msw'
import { BACKEND_URL } from '@/constants/config.js'

const translateHandlers = [
    http.post(`${BACKEND_URL}/api/translate`, () => {
        console.log('translation requested')
        return HttpResponse.json(
            `# PreFlightCheck

**2023 Open Source Project**


[Prototype Link](https://www.figma.com/proto/FHKA7XKusg2gJTw7tNCYab/CodingHoliday_PreFlightCheck?type=design&node-id=36-307&scaling=scale-down&page-id=0%3A1&starting-point-node-id=36%3A307)

[Presentation Link](https://www.canva.com/design/DAFlVSvWag8/PR6kFJ5NJDO14f23SrzRug/view?utm_content=DAFlVSvWag8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink)


### Background:

- If you have a schedule that involves going through an airport, it is helpful to first understand the situation at the airport.

- Considering this need, our team proceeded with the project under the theme '**What is the current situation at my scheduled arrival airport?**'.

- We focused on providing features such as weather on the day of boarding, airport congestion/duration, and parking information as key services.


### Goals:

1. Develop a **mobile app** to aid users who use airports 
2. Learn practical collaboration through **version control and conflict management using GitHub**


### Schedule:

### Stack:

- React-Native
- Node.js
- Java
- Firebase 


### Design:


### Implementation:

**App development using React-Native**

**DB connection using Firebase Firestore** 
 
**API server implementation**

- [Go to server](https://github.com/kangdaelyeol/sever?utm_source=canva&utm_medium=iframely)

 **Parking information API**

**KMA short-term API / KMA very short-term API / Flight operation information API / Airport duration API**


### Used Open APIs:

- Airport congestion information API (Provided by Korea Airports Corporation)
- Airport duration information API (Provided by Korea Airports Corporation)
- KMA very short-term forecast API (Provided by Korea Meteorological Administration)
- KMA short-term forecast API (Provided by Korea Meteorological Administration)
- KMA mid-term forecast API (Provided by Korea Meteorological Administration)
- Domestic flight operation information API (Provided by Ministry of Land, Infrastructure and Transport)
- Real-time parking information for airports nationwide API (Provided by Korea Airports Corporation)


### Used Libraries:

- @react-navigation/native
- react-native-screens
- react-native-safe-area-context
- @react-navigation/native-stack
- react-native-vector-icons
- firebase
- axios
- react-native-calendars
- react-native-modal-datetime-picker 
- @react-native-community/datetimepicker
- react-native-config


### Programs:

- Watchman`,
            { status: 200 },
        )
    }),
]

export default translateHandlers
