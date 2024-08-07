import { http, HttpResponse } from 'msw'

import { BACKEND_URL } from '@/constants/config.js'

const reposHandlers = [
    http.get(`${BACKEND_URL}/api/repos/modal`, () => {
        console.log('github repository list requested')
        return HttpResponse.json(
            [
                {
                    repoId: null,
                    repoName: 'AI_Tutor-BackEnd',
                    forkCount: 0,
                    starCount: 1,
                    lastCommitAt: '2024-01-16T08:34:03',
                    posted: false,
                },
                {
                    repoId: null,
                    repoName: 'Together-FrontEnd',
                    forkCount: 0,
                    starCount: 0,
                    lastCommitAt: '2023-11-22T22:29:36',
                    posted: false,
                },
                {
                    repoId: 1,
                    repoName: 'PreFlightCheck',
                    forkCount: 0,
                    starCount: 0,
                    lastCommitAt: '2023-11-01T03:40:36',
                    posted: true,
                },
                {
                    repoId: null,
                    repoName: 'SlideShow',
                    forkCount: 0,
                    starCount: 0,
                    lastCommitAt: '2023-11-22T22:33:41',
                    posted: false,
                },
                {
                    repoId: null,
                    repoName: 'DeliveryManagement',
                    forkCount: 0,
                    starCount: 0,
                    lastCommitAt: '2023-06-13T06:14:30',
                    posted: false,
                },
                {
                    repoId: null,
                    repoName: 'blog',
                    forkCount: 0,
                    starCount: 0,
                    lastCommitAt: '2023-04-24T07:28:42',
                    posted: false,
                },
                {
                    repoId: null,
                    repoName: 'opensource-class',
                    forkCount: 0,
                    starCount: 0,
                    lastCommitAt: '2023-04-23T21:30:00',
                    posted: false,
                },
                {
                    repoId: null,
                    repoName: 'linux',
                    forkCount: 0,
                    starCount: 0,
                    lastCommitAt: '2023-03-30T23:23:39',
                    posted: false,
                },
                {
                    repoId: null,
                    repoName: 'react',
                    forkCount: 0,
                    starCount: 0,
                    lastCommitAt: '2023-03-31T04:48:11',
                    posted: false,
                },
                {
                    repoId: null,
                    repoName: 'Converter',
                    forkCount: 0,
                    starCount: 0,
                    lastCommitAt: '2023-02-16T05:48:54',
                    posted: false,
                },
                {
                    repoId: null,
                    repoName: 'NumberGame',
                    forkCount: 0,
                    starCount: 0,
                    lastCommitAt: '2023-02-14T04:26:19',
                    posted: false,
                },
                {
                    repoId: null,
                    repoName: 'ambition-kwon.github.io',
                    forkCount: 0,
                    starCount: 0,
                    lastCommitAt: '2022-12-16T16:52:49',
                    posted: false,
                },
                {
                    repoId: null,
                    repoName: 'KAKAOTRACK_basic_web_development',
                    forkCount: 0,
                    starCount: 0,
                    lastCommitAt: '2022-12-16T11:35:56',
                    posted: false,
                },
                {
                    repoId: null,
                    repoName: 'flutter-study',
                    forkCount: 0,
                    starCount: 0,
                    lastCommitAt: '2022-09-15T16:32:20',
                    posted: false,
                },
            ],
            { status: 200 },
        )
    }),

    http.get(`${BACKEND_URL}/api/repos/supported`, () => {
        console.log('supported list requested')
        return HttpResponse.json(
            [
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
            { status: 200 },
        )
    }),

    http.get(`${BACKEND_URL}/api/repos/supporting`, () => {
        console.log('supporting list requested')
        return HttpResponse.json(
            [
                {
                    id: 3,
                    userName: 'khanna01',
                    avatarUrl:
                        'https://avatars.githubusercontent.com/u/79962121?v=4',
                    repoName: 'hoonsman_ft',
                    description:
                        'my first repository. please fork and add star my repo',
                    tags: ['tag1', 'tag2', 'tag3', 'tag4'],
                    mostLanguage: 'JavaScript',
                    license: 'Unlicensed',
                    repositoryLink: 'https://github.com/khanna01/hoonsman_ft',
                    viewCount: 0,
                    totalPoint: 3000,
                    lastCommitAt: '2024-01-25T00:30:09',
                },
                {
                    id: 4,
                    userName: 'khanna01',
                    avatarUrl:
                        'https://avatars.githubusercontent.com/u/79962121?v=4',
                    repoName: 'realhoonsman',
                    description:
                        'my first repository. please fork and add star my repo',
                    tags: ['tag1', 'tag2', 'tag3', 'tag4'],
                    mostLanguage: 'JavaScript',
                    license: 'Unlicensed',
                    repositoryLink: 'https://github.com/khanna01/realhoonsman',
                    viewCount: 0,
                    totalPoint: 4000,
                    lastCommitAt: '2024-01-19T01:16:02',
                },
                {
                    id: 2,
                    userName: 'khanna01',
                    avatarUrl:
                        'https://avatars.githubusercontent.com/u/79962121?v=4',
                    repoName: 'basicweb',
                    description:
                        'my first repository. please fork and add star my repo',
                    tags: ['tag1', 'tag2', 'tag3', 'tag4'],
                    mostLanguage: 'JavaScript',
                    license: 'Unlicensed',
                    repositoryLink: 'https://github.com/khanna01/basicweb',
                    viewCount: 0,
                    totalPoint: 2000,
                    lastCommitAt: '2023-12-11T05:20:51',
                },
            ],
            { status: 200 },
        )
    }),
]

export default reposHandlers
