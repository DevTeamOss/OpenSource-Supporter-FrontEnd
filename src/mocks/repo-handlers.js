import { http, HttpResponse } from 'msw'

import { BACKEND_URL } from '@/constants/config.js'

const repoHandlers = [
    http.get(`${BACKEND_URL}/api/repo`, () => {
        console.log('repository info requested')
        return HttpResponse.json(
            {
                id: 1,
                repoName: 'PreFlightCheck',
                description:
                    'my first repository. please fork and add star my repo',
                tags: ['tag1', 'tag2', 'tag3', 'tag4'],
                mostLanguage: 'JavaScript',
                license: 'MIT License',
                repositoryLink:
                    'https://github.com/ambition-kwon/PreFlightCheck',
                viewCount: 0,
                totalPoint: 0,
                lastCommitAt: '2023-11-01T03:40:36',
                createdAt: '2024-05-09T17:20:12.219707',
                modifiedAt: '2024-05-09T17:20:12.219707',
                supportedPointList: [],
            },
            { status: 200 },
        )
    }),
]

export default repoHandlers
