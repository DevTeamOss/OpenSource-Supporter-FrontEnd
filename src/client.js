import axios from 'axios'

import { BACKEND_URL } from '@/constants/config.js'

const client = axios.create({
    baseURL: BACKEND_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '69420',
    },
})

export default client
