import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faEye } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import TagChip from '@/components/tag-chip.jsx'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import ReactApexChart from 'react-apexcharts'

export default function Detail01({ close, next }) {
    const [languageList, setLanguageList] = useState({
        description: 'default',
        readme: 'default',
        analysis: 'default',
    })
    const [readMeContent, setReadMeContent] = useState('')
    const [analysisContent, setAnalysisContent] = useState(
        'Welcome to our repository, a vibrant hub of\n' +
            '                                    groundbreaking projects designed to ignite\n' +
            '                                    imagination and inspire innovation. Immerse yourself\n' +
            '                                    in a world where technology meets creativity, where\n' +
            '                                    every line of code represents a step towards a\n' +
            '                                    brighter future. From AI-driven solutions to elegant\n' +
            '                                    web applications, each project is a testament to our\n' +
            '                                    dedication to excellence and our passion for pushing\n' +
            '                                    boundaries. Join us on this journey of discovery,\n' +
            '                                    collaboration, and endless possibilities. Together,\n' +
            "                                    let's build something remarkable.Welcome to our\n" +
            '                                    repository, a vibrant hub of groundbreaking projects\n' +
            '                                    designed to ignite imagination and inspire\n' +
            '                                    innovation. Immerse yourself in a world where\n' +
            '                                    technology meets creativity, where every line of\n' +
            '                                    code represents a step towards a brighter future.\n' +
            '                                    From AI-driven solutions to elegant web\n' +
            '                                    applications, each project is a testament to our\n' +
            '                                    dedication to excellence and our passion for pushing\n' +
            '                                    boundaries. Join us on this journey of discovery,\n' +
            '                                    collaboration, and endless possibilities. Together,\n' +
            "                                    let's build something remarkable.",
    )
    const [isOpen, setIsOpen] = useState({
        description: false,
        readme: false,
        analysis: false,
    })

    const state = {
        series: [
            {
                name: 'Repository Graph',
                data: Array.from({ length: 52 }, () =>
                    Math.floor(Math.random() * 100),
                ),
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
                categories: Array.from({ length: 52 }, (_, i) => i + 1),
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

    function decodeBase64(str) {
        const base64Decoded = atob(str)
        const utf8Decoder = new TextDecoder('utf-8')
        const utf8Decoded = utf8Decoder.decode(
            new Uint8Array(
                [...base64Decoded].map((char) => char.charCodeAt(0)),
            ),
        )
        return utf8Decoded
    }

    async function fetchData(markdown) {
        try {
            const response = await fetch(markdown)
            const data = await response.json()
            if (data.content) {
                const decodedContent = decodeBase64(data.content)
                setReadMeContent(decodedContent)
                console.log(decodedContent)
            }
        } catch (error) {
            console.error('Error fetching the data', error)
        }
    }

    function navigateGithub() {
        window.location.href = 'https://github.com'
    }

    useEffect(() => {
        fetchData(
            'https://api.github.com/repos/anuraghazra/github-readme-stats/contents/readme.md',
        ).then()
    }, [])

    return (
        <div className="detail01-container">
            <div className="detail01-header">
                <div className="profile-img" />
                <div className="detail01-header-box">
                    <div className="title-left-box">
                        <div className="repository-title">
                            ambition-kwon’s{' '}
                            <span className="repoName">PreFlightCheck</span>
                        </div>
                        <div className="tag-box">
                            <TagChip>#test</TagChip>
                            <TagChip>#opensource</TagChip>
                            <TagChip>#project</TagChip>
                            <TagChip>#test</TagChip>
                            <TagChip>#opensource</TagChip>
                            <TagChip>#project</TagChip>
                            <TagChip>#test</TagChip>
                            <TagChip>#opensource</TagChip>
                            <TagChip>#project</TagChip>
                        </div>
                    </div>
                    <div className="title-right-box">
                        <div className="view-count-box">
                            <FontAwesomeIcon icon={faEye} />
                            <div className="view-count-text">834</div>
                        </div>
                        <div className="repository-info-box">
                            <div className="repository-info-section">
                                <div className="language-circle" />
                                Python
                            </div>
                            <div className="repository-info-section">/</div>
                            <div className="repository-info-section">
                                GPL-3.0 license
                            </div>
                            <div className="repository-info-section">/</div>
                            <div className="repository-info-section">
                                Updated last week
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
                            <div className="translate-btn">Translate</div>
                        </div>
                    </div>
                    <div className="repository-description-body">
                        <div className="repository-description-box">
                            Welcome to our repository, a vibrant hub of
                            groundbreaking projects designed to ignite
                            imagination and inspire innovation. Immerse yourself
                            in a world where technology meets creativity, where
                            every line of code represents a step towards a
                            brighter future. From AI-driven solutions to elegant
                            web applications, each project is a testament to our
                            dedication to excellence and our passion for pushing
                            boundaries. Join us on this journey of discovery,
                            collaboration, and endless possibilities. Together,
                            let's build something remarkable.
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
                                <div className="info-text">2103</div>
                            </div>
                            <div className="info-box">
                                <div className="info-title">Total Stars</div>
                                <div className="info-text">1393</div>
                            </div>
                            <div className="info-box">
                                <div className="info-title">
                                    Total Pull Requests
                                </div>
                                <div className="info-text">423</div>
                            </div>
                            <div className="info-box">
                                <div className="info-title">Total Issues</div>
                                <div className="info-text">85</div>
                            </div>
                            <div className="info-box">
                                <div className="info-title">
                                    Total Contributed(Last Year)
                                </div>
                                <div className="info-text">13</div>
                            </div>
                            <div className="info-box">
                                <div className="info-title">Ranks</div>
                                <div className="info-text rank">A+</div>
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
                            <div className="translate-btn">Translate</div>
                        </div>
                    </div>
                    <div className="quantitative-analysis-content-body">
                        <div className="quantitative-analysis-content-box">
                            <ReactMarkdown
                                children={analysisContent}
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
                                className="analysis"
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
                            <div className="translate-btn">Translate</div>
                        </div>
                    </div>
                    <div className="repository-readme-body">
                        <div className="repository-readme-box">
                            <ReactMarkdown
                                children={readMeContent}
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
                    <div className="point-sponsorship-btn" onClick={next}>
                        Point sponsorship
                    </div>
                </div>
            </div>
        </div>
    )
}
