import { useGithubRepoListController } from '@/controllers/index.js'
import SelectionRepository from '@/components/selection-repository'

export default function Stage01({ nextStage }) {
    const githubRepoListController = useGithubRepoListController()

    console.log(githubRepoListController.data) // 레포 리스트에 뭐가 들어가는지 확인  // 구현하고 삭제하기

    return (
        <div className="stage01-container">
            <div className="stage01-header">
                <div className="profile-img" />
                <div className="selection-description">user's Repository</div>
            </div>
            <div className="stage01-body">
                <SelectionRepository nextStage={nextStage} />
                <SelectionRepository nextStage={nextStage} />
                <SelectionRepository nextStage={nextStage} />
                <SelectionRepository nextStage={nextStage} />
                <SelectionRepository nextStage={nextStage} />
            </div>
        </div>
    )
}
