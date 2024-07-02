import { setupServer } from 'msw/node'

import authHandlers from '@/mocks/auth-handlers.js'
import reposHandlers from '@/mocks/repos-handlers.js'
import repoHandlers from '@/mocks/repo-handlers.js'
import userHandlers from '@/mocks/user-handlers.js'
import rankHandlers from '@/mocks/rank-handlers.js'
import searchHandlers from '@/mocks/search-handlers.js'
import pointHandlers from '@/mocks/point-handlers.js'
import advertisementHandlers from '@/mocks/advertisement-handlers.js'
import translateHandlers from '@/mocks/translate-handlers.js'

const rootHandlers = [
    ...authHandlers,
    ...reposHandlers,
    ...repoHandlers,
    ...userHandlers,
    ...rankHandlers,
    ...searchHandlers,
    ...pointHandlers,
    ...advertisementHandlers,
    ...translateHandlers,
]

export const server = setupServer(...rootHandlers)
