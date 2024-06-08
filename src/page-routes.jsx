import { useRoutes } from 'react-router-dom'

import WelcomePage from '@/pages/welcome-page'
import GithubAuthPage from '@/pages/github-auth-page'
import MainPage from '@/pages/main-page'
import SearchPage from './pages/search-page'
import ProfilePage from '@/pages/profile-page'
import Header from '@/components/header'
import BasePage from '@/pages/base-page'
import RankingPage from '@/pages/ranking-page'
import AdvertisementPage from '@/pages/advertisement-page'
import SupporterCardPage from '@/pages/supporter-card-page'
import PointPage from '@/pages/point-page'

const PATH = {
    WELCOME: '/',
    GITHUB_AUTH: '/github-auth',
    MAIN: '/main',
    PROFILE: '/profile/:username',
    SEARCH: '/search',
    RANKING: '/ranking',
    ADVERTISEMENT: '/advertisement',
    SUPPORTERCARD: '/supportercard',
    POINT: '/point',
}

export default function PageRoutes() {
    return useRoutes([
        {
            path: PATH.WELCOME,
            element: <WelcomePage />,
        },
        {
            path: PATH.GITHUB_AUTH,
            element: <GithubAuthPage />,
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
        {
            path: PATH.RANKING,
            element: (
                <WithHeader>
                    <BasePage>
                        <RankingPage />
                    </BasePage>
                </WithHeader>
            ),
        },
        {
            path: PATH.ADVERTISEMENT,
            element: <AdvertisementPage />,
        },
        {
            path: PATH.SUPPORTERCARD,
            element: <SupporterCardPage />,
        },
        {
            path: PATH.POINT,
            element: (
                <WithHeader>
                    <BasePage>
                        <PointPage />
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
