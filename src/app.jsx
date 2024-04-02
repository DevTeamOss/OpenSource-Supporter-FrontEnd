import { BrowserRouter } from 'react-router-dom'

import PageRoutes from '@/page-routes'

import '@/assets/scss/basic.scss'

export default function App() {
    return (
        <BrowserRouter>
            <PageRoutes />
        </BrowserRouter>
    )
}
