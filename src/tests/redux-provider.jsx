import { Provider } from 'react-redux'
import { store } from '@/store/index.js'

export function ReduxProvider({ children }) {
    return <Provider store={store}>{children}</Provider>
}
