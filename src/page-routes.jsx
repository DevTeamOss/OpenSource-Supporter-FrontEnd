import { useRoutes } from 'react-router-dom'

import WelcomePage from '@/pages/welcome-page'

const PATH = {
    WELCOME: '/',
}

export default function PageRoutes() {
    return useRoutes([
        {
            path: PATH.WELCOME,
            element: <WelcomePage />,
        },
    ])
}
