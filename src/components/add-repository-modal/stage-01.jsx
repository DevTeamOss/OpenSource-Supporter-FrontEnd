import {
    useGithubRepoListController,
    useUserController,
} from '@/controllers/index.js'
import SelectionRepository from '@/components/selection-repository'

export default function Stage01({ select }) {
    const githubRepoListController = useGithubRepoListController()
    const userController = useUserController()

    return (
        <div className="stage01-container">
            <div className="stage01-header">
                <img
                    src={userController.data.avatarUrl}
                    className="profile-img"
                    alt="user avatar img"
                />
                <div className="selection-description">
                    {userController.data.username}'s Repository
                </div>
            </div>
            <div className="stage01-body">
                {githubRepoListController.data.map((data, ind) => (
                    <SelectionRepository
                        key={ind}
                        select={select}
                        data={data}
                    />
                ))}
            </div>
        </div>
    )
}
