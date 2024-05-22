import { setupServer } from 'msw/node'

import authHandlers from '@/mocks/auth-handlers.js'
import reposHandlers from '@/mocks/repos-handlers.js'
import repoHandlers from '@/mocks/repo-handlers.js'

const rootHandlers = [...authHandlers, ...reposHandlers, ...repoHandlers]

export const server = setupServer(...rootHandlers)
