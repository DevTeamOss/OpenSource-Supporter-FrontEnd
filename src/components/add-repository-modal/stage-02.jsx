import TagChip from '../tag-chip'
import {
    useGithubRepoListController,
    useUserController,
} from '@/controllers/index.js'

export default function Stage02({ prevStage, close }) {
    const userController = useUserController()
    const githubRepoListController = useGithubRepoListController()

    async function submit() {
        await githubRepoListController.addRepository({
            username: userController.data.username,
            // repoName: 상위 컴포넌트에서 받아와야 할 것
            // description: 현재 스테이지에서 입력받을 것
            // tags: [현재 스테이지에서 입력받을 것들]
        })

        close()
    }

    return (
        <div className="stage02-container">
            <div className="stage02-header">
                <div className="description-title">
                    Let’s introduce your repository.
                </div>
            </div>
            <div className="stage02-body">
                <form>
                    <div className="name-section">
                        <div className="input-box">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" />
                        </div>
                        <div className="input-box">
                            <label htmlFor="repositoryname">
                                Repository name
                            </label>
                            <input type="text" id="repositoryname" />
                        </div>
                    </div>
                    <div className="description-section">
                        <div className="input-box">
                            <label htmlFor="description">Description</label>
                            <textarea
                                name="description"
                                id="description"
                                rows={5}
                            ></textarea>
                        </div>
                    </div>
                    <div className="tag-section">
                        <div className="input-box">
                            <label htmlFor="tags">Tags</label>
                            <div className="tag-input-group">
                                <input type="text" id="tags" />
                                <div className="tag-add-btn">+</div>
                            </div>
                            <div className="tag-list-box">
                                <TagChip>#test</TagChip>
                                <TagChip>#opensource</TagChip>
                                <TagChip>#project</TagChip>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="stage02-footer">
                <div className="footer-left-section">
                    <div className="delete-btn">Delete</div>
                </div>
                <div className="footer-right-section">
                    <div className="cancel-btn" onClick={prevStage}>
                        Cancel
                    </div>
                    <div className="submit-btn">Submit</div>
                </div>
            </div>
        </div>
    )
}
