import { useGithubRepoListController } from '@/controllers/index.js'
import SelectionRepository from '@/components/selection-repository'


export default function Stage01({ select }) {
    const githubRepoListController = useGithubRepoListController()

    return (
        <div className="stage01-container">
            <div className="stage01-header">
                <div className="profile-img" />
                <div className="selection-description">user's Repository</div>
            </div>
            <div className="stage01-body">
                {githubRepoListController.data.map((data, ind) => <SelectionRepository key={ind} select={select} data={data} />)}
            </div>
        </div>
    )
}
