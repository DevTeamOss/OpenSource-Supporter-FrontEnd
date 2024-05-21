import { setupServer } from 'msw/node'

import authHandlers from '@/mocks/auth-handlers.js'

const rootHandlers = [...authHandlers]

export const server = setupServer(...rootHandlers)
