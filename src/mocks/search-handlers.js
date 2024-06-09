import { http, HttpResponse } from 'msw'

import { BACKEND_URL } from '@/constants/config.js'

const searchHandlers = [
    http.get(`${BACKEND_URL}/api/search`, () => {
        return HttpResponse.json(
            {
                users: [
                    {
                        id: 2,
                        userName: 'ambition-kwon',
                        customName: '권혁원',
                        adLink: 'https://www.test.com/adLink',
                        cardLink: 'https://www.test.com/cardLink',
                        avatarUrl:
                            'https://avatars.githubusercontent.com/u/5442985?v=4',
                        totalPoint: 100000,
                        usedPoint: 10000,
                        remainingPoint: 90000,
                        createdAt: '2024-05-30T23:50:11.043079',
                        modifiedAt: '2024-05-30T23:51:00.08463',
                        admin: false,
                    },
                ],
                repositories: [
                    {
                        id: 6,
                        userName: 'ambition-kwon',
                        avatarUrl:
                            'https://avatars.githubusercontent.com/u/5442985?v=4',
                        repoName: 'AI_Tutor-BackEnd',
                        description:
                            'my first repository. please fork and add star my repo',
                        tags: ['tag1', 'tag2', 'tag3', 'tag4'],
                        mostLanguage: 'Java',
                        license: 'Unlicensed',
                        repositoryLink:
                            'https://github.com/ambition-kwon/AI_Tutor-BackEnd',
                        viewCount: 0,
                        totalPoint: 0,
                        lastCommitAt: '2024-01-16T08:34:03',
                    },
                    {
                        id: 5,
                        userName: 'ambition-kwon',
                        avatarUrl:
                            'https://avatars.githubusercontent.com/u/5442985?v=4',
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
                    },
                ],
            },
            { status: 200 },
        )
    }),
]

export default searchHandlers
