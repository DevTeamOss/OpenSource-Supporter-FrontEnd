import { BrowserRouter } from 'react-router-dom'

import PageRoutes from '@/page-routes'
import Header from '@/components/header'

import '@/assets/scss/basic.scss'

export default function App() {
    return (
        <BrowserRouter>
            <PageRoutes />
        </BrowserRouter>
    )
}
