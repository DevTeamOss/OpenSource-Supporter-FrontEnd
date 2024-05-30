import axios from 'axios'

import { BACKEND_URL } from '@/constants/config.js'
import { store } from '@/store/index.js'

const client = axios.create({
    baseURL: BACKEND_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '69420',
    },
    transformRequest: [
        (data) => {
            return JSON.stringify(data)
        },

        (data, headers) => {
            const { accessToken } = store.getState().user
            if (accessToken) {
                headers.Authorization = `Bearer ${accessToken}`
            }

            return data
        },
    ],
})

export default client
