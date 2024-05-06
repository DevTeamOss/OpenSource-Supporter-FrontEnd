import { useRoutes } from 'react-router-dom'

import WelcomePage from '@/pages/welcome-page'
import MainPage from '@/pages/main-page'
import ProfilePage from '@/pages/profile-page'
import Header from '@/components/header'
import BasePage from '@/pages/base-page'
import SearchPage from './pages/search-page'

const PATH = {
    WELCOME: '/',
    MAIN: '/main',
    PROFILE: '/profile',
    SEARCH: '/search'
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
        {
            path: PATH.PROFILE,
            element: (
                <WithHeader>
                    <ProfilePage />
                </WithHeader>
            ),
        },
        {
            path: PATH.SEARCH,
            element: (
                <WithHeader>
                    <BasePage>
                        <SearchPage />
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
