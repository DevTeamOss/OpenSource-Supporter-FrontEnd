import { server } from '@/mocks/server.js'
import { cleanup } from '@testing-library/react'

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

afterEach(() => {
    cleanup()
    server.resetHandlers()
})

afterAll(() => server.close())
