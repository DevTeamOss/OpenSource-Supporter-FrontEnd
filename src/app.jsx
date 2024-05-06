import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from '@/store'
import PageRoutes from '@/page-routes'

import '@/assets/scss/basic.scss'

export default function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <PageRoutes />
            </Provider>
        </BrowserRouter>
    )
}
