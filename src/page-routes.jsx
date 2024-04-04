import { useRoutes } from 'react-router-dom'

import WelcomePage from '@/pages/welcome-page'
import MainPage from '@/pages/main-page'
import Header from '@/components/header'
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
            element: (
                <WithHeader>
                    <BasePage>
                        <MainPage />
                    </BasePage>
                </WithHeader>
            ),
        },
    ])
}

function WithHeader({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}
