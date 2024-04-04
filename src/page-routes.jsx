import { useRoutes } from 'react-router-dom'

import WelcomePage from '@/pages/welcome-page'
import BasePage from '@/pages/base-page'

const PATH = {
    WELCOME: '/',
    MAIN: '/main',
}

export default function PageRoutes() {
    return useRoutes([
        {
            path: PATH.WELCOME,
            element: <WelcomePage />,
        },
        {
            path: PATH.MAIN,
            element: <BasePage>Main Page</BasePage>,
        },
    ])
}
