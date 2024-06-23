import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faEye } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import ReactApexChart from 'react-apexcharts'
import moment from 'moment'

import { useUserController } from '@/controllers/index.js'
import { useTranslate } from '@/hooks/use-translate.js'
import TagChip from '@/components/tag-chip.jsx'

import Spinner from '@/assets/img/spinner.svg'

export default function Detail01({ info, close, next }) {
    const userController = useUserController()
    const description = useTranslate()
    const analysis = useTranslate()
    const readme = useTranslate()

    const [languageList, setLanguageList] = useState({
        description: 'default',
        readme: 'default',
        analysis: 'default',
    })

    const [isOpen, setIsOpen] = useState({
        description: false,
        readme: false,
        analysis: false,
    })

    const state = {
        series: [
            {
                name: 'Repository Graph',
                data: info.weeklyCommitList,
            },
        ],
        options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false,
                },
                background: 'transparent',
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'straight',
                colors: ['#19EB21'],
                width: 1,
            },
            markers: {
                size: 2,
                colors: ['#1ED6FF'],
                strokeColors: '#1ED6FF80',
                strokeWidth: 1,
            },
            tooltip: {
                enabled: false,
            },
            grid: {
                show: true,
                borderColor: '#444444',
                strokeDashArray: 0,
                yaxis: {
                    lines: {
                        show: true,
                    },
                },
            },
            xaxis: {
                title: {
                    text: 'Week',
                    style: {
                        color: '#cccccc',
                        fontSize: '12px',
                        fontWeight: 600,
                    },
                },
                labels: {
                    show: true,
                    style: {
                        colors: '#cccccc',
                        fontSize: '11px',
                        fontWeight: 400,
                    },
                },
                categories: info.weeklyCommitList,
            },
            yaxis: {
                title: {
                    text: 'Commit Count',
                    rotate: -90,
                    offsetX: 0,
                    offsetY: 0,
                    style: {
                        color: '#cccccc',
                        fontSize: '10px',
                        fontWeight: 600,
                    },
                },
                labels: {
                    show: true,
                    style: {
                        colors: '#cccccc',
                        fontSize: '12px',
                        fontWeight: 400,
                    },
                    offsetX: 0,
                    offsetY: 0,
                },
            },
        },
    }

    const languages = [
        'English',
        'Korean',
        'French',
        'Japanese',
        'Arabic',
        'Chinese',
        'Spanish',
        'Hindi',
        'Russian',
    ]

    function navigateGithub() {
        window.open(info.repositoryLink, '_blank')
    }

    useEffect(() => {
        description.setOrigin(info.description)
        analysis.setOrigin(info.chatgptAnalysis)
        readme.setOrigin(info.readmeContent)
    }, [info])

    return (
        <div className="detail01-container">
            <div className="detail01-header">
                <img
                    className="profile-img"
                    src={info.avatarUrl}
                    alt={info.username}
                />
                <div className="detail01-header-box">
                    <div className="title-left-box">
                        <div className="repository-title">
                            {info.username}’s{' '}
                            <span className="repoName">{info.repoName}</span>
                        </div>
                        <div className="tag-box">
                            {(info.tags || []).map((tag) => (
                                <TagChip>{tag}</TagChip>
                            ))}
                        </div>
                    </div>
                    <div className="title-right-box">
                        <div className="view-count-box">
                            <FontAwesomeIcon icon={faEye} />
                            <div className="view-count-text">
                                {info.viewCount}
                            </div>
                        </div>
                        <div className="repository-info-box">
                            <div className="repository-info-section">
                                <div className="language-circle" />
                                {info.mostLanguage}
                            </div>
                            <div className="repository-info-section">/</div>
                            <div className="repository-info-section">
                                {info.license}
                            </div>
                            <div className="repository-info-section">/</div>
                            <div className="repository-info-section">
                                {moment(info.lastCommitAt).fromNow()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="detail01-body">
                <div className="repository-description-container">
                    <div className="repository-description-header">
                        <div className="title-text">Description</div>
                        <div className="btn-group">
                            <div
                                className="language-select-btn"
                                onClick={() =>
                                    setIsOpen((prev) => ({
                                        ...prev,
                                        description: !prev.description,
                                    }))
                                }
                            >
                                {languageList.description === 'default'
                                    ? 'Language'
                                    : languageList.description}
                                <span className="arrow-btn">
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </span>
                                {isOpen.description && (
                                    <div className="option-box">
                                        {languages.map((language, ind) => (
                                            <div
                                                className="option"
                                                onClick={(e) =>
                                                    setLanguageList((prev) => ({
                                                        ...prev,
                                                        description:
                                                            e.target.innerText,
                                                    }))
                                                }
                                            >
                                                {language}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div
                                className="translate-btn"
                                onClick={() =>
                                    description.changeLanguage(
                                        languageList.description,
                                    )
                                }
                            >
                                {description.isLoading ? (
                                    <img
                                        className="btn-spinner"
                                        src={Spinner}
                                        alt="loading"
                                    />
                                ) : (
                                    'Translate'
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="repository-description-body">
                        <div className="repository-description-box">
                            {description.data}
                        </div>
                    </div>
                </div>
                <div className="quantitative-analysis-chart-container">
                    <div className="quantitative-analysis-chart-header">
                        <div className="title-text">
                            Repository owner’s Quantitative Analysis
                        </div>
                    </div>
                    <div className="quantitative-analysis-chart-body">
                        <div className="quantitative-analysis-chart-box">
                            <div className="info-box">
                                <div className="info-title">
                                    Total Commits(Last Year)
                                </div>
                                <div className="info-text">
                                    {info.totalCommits}
                                </div>
                            </div>
                            <div className="info-box">
                                <div className="info-title">Total Stars</div>
                                <div className="info-text">
                                    {info.totalStars}
                                </div>
                            </div>
                            <div className="info-box">
                                <div className="info-title">
                                    Total Pull Requests
                                </div>
                                <div className="info-text">
                                    {info.totalPullRequests}
                                </div>
                            </div>
                            <div className="info-box">
                                <div className="info-title">Total Issues</div>
                                <div className="info-text">
                                    {info.totalIssues}
                                </div>
                            </div>
                            <div className="info-box">
                                <div className="info-title">
                                    Total Contributed(Last Year)
                                </div>
                                <div className="info-text">
                                    {info.totalContributions}
                                </div>
                            </div>
                            <div className="info-box">
                                <div className="info-title">Ranks</div>
                                <div className="info-text rank">
                                    {info.rank}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="graph-content-container">
                    <div className="graph-content-header">
                        <div className="title-text">
                            Weekly commit count graph of the repository
                        </div>
                    </div>
                    <div className="graph-content-body">
                        <ReactApexChart
                            className="apexchart"
                            options={state.options}
                            series={state.series}
                            type="line"
                            height={300}
                        />
                    </div>
                </div>
                <div className="quantitative-analysis-content-container">
                    <div className="quantitative-analysis-content-header">
                        <div className="title-text">
                            Qualitative Analysis(Using ChatGPT)
                        </div>
                        <div className="btn-group">
                            <div
                                className="language-select-btn"
                                onClick={() =>
                                    setIsOpen((prev) => ({
                                        ...prev,
                                        analysis: !prev.analysis,
                                    }))
                                }
                            >
                                {languageList.analysis === 'default'
                                    ? 'Language'
                                    : languageList.analysis}
                                <span className="arrow-btn">
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </span>
                                {isOpen.analysis && (
                                    <div className="option-box">
                                        {languages.map((language, ind) => (
                                            <div
                                                className="option"
                                                onClick={(e) =>
                                                    setLanguageList((prev) => ({
                                                        ...prev,
                                                        analysis:
                                                            e.target.innerText,
                                                    }))
                                                }
                                            >
                                                {language}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div
                                className="translate-btn"
                                onClick={() =>
                                    analysis.changeLanguage(
                                        languageList.analysis,
                                    )
                                }
                            >
                                {analysis.isLoading ? (
                                    <img
                                        className="btn-spinner"
                                        src={Spinner}
                                        alt="loading"
                                    />
                                ) : (
                                    'Translate'
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="quantitative-analysis-content-body">
                        <div className="quantitative-analysis-content-box">
                            <ReactMarkdown
                                children={analysis.data}
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeRaw]}
                                components={{
                                    code({
                                        node,
                                        inline,
                                        className,
                                        children,
                                        ...props
                                    }) {
                                        const match = /language-(\w+)/.exec(
                                            className || '',
                                        )
                                        return !inline && match ? (
                                            <SyntaxHighlighter
                                                style={github}
                                                language={match[1]}
                                                PreTag="div"
                                                {...props}
                                            >
                                                {String(children).replace(
                                                    /\n$/,
                                                    '',
                                                )}
                                            </SyntaxHighlighter>
                                        ) : (
                                            <code
                                                className={className}
                                                {...props}
                                            >
                                                {children}
                                            </code>
                                        )
                                    },
                                }}
                                className="readme"
                            />
                        </div>
                    </div>
                </div>
                <div className="repository-readme-container">
                    <div className="repository-readme-header">
                        <div className="title-text">README.md</div>
                        <div className="btn-group">
                            <div
                                className="language-select-btn"
                                onClick={() =>
                                    setIsOpen((prev) => ({
                                        ...prev,
                                        readme: !prev.readme,
                                    }))
                                }
                            >
                                {languageList.readme === 'default'
                                    ? 'Language'
                                    : languageList.readme}
                                <span className="arrow-btn">
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </span>
                                {isOpen.readme && (
                                    <div className="option-box">
                                        {languages.map((language, ind) => (
                                            <div
                                                className="option"
                                                onClick={(e) =>
                                                    setLanguageList((prev) => ({
                                                        ...prev,
                                                        readme: e.target
                                                            .innerText,
                                                    }))
                                                }
                                            >
                                                {language}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div
                                className="translate-btn"
                                onClick={() =>
                                    readme.changeLanguage(languageList.readme)
                                }
                            >
                                {readme.isLoading ? (
                                    <img
                                        className="btn-spinner"
                                        src={Spinner}
                                        alt="loading"
                                    />
                                ) : (
                                    'Translate'
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="repository-readme-body">
                        <div className="repository-readme-box">
                            <ReactMarkdown
                                children={readme.data}
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeRaw]}
                                components={{
                                    code({
                                        node,
                                        inline,
                                        className,
                                        children,
                                        ...props
                                    }) {
                                        const match = /language-(\w+)/.exec(
                                            className || '',
                                        )
                                        return !inline && match ? (
                                            <SyntaxHighlighter
                                                style={github}
                                                language={match[1]}
                                                PreTag="div"
                                                {...props}
                                            >
                                                {String(children).replace(
                                                    /\n$/,
                                                    '',
                                                )}
                                            </SyntaxHighlighter>
                                        ) : (
                                            <code
                                                className={className}
                                                {...props}
                                            >
                                                {children}
                                            </code>
                                        )
                                    },
                                }}
                                className="readme"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="detail01-footer">
                <div className="btn-group">
                    <div className="close-btn" onClick={close}>
                        Close
                    </div>
                </div>
                <div className="btn-group">
                    <div
                        className="navigate-github-btn"
                        onClick={navigateGithub}
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="github-icon"
                        />
                        Navigate to Github
                    </div>
                    {userController.isLoggedIn &&
                        userController.data.username !== info.username && (
                            <div
                                className="point-sponsorship-btn"
                                onClick={next}
                            >
                                Point sponsorship
                            </div>
                        )}
                </div>
            </div>
        </div>
    )
}
