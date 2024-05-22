import { setupServer } from 'msw/node'

import authHandlers from '@/mocks/auth-handlers.js'
import reposHandlers from '@/mocks/repos-handlers.js'

const rootHandlers = [...authHandlers, ...reposHandlers]

export const server = setupServer(...rootHandlers)
