import {
    useGithubRepoList,
    useUser,
} from '@/view-models/index.js'
import SelectionRepository from '@/components/add-repository-modal/selection-repository.jsx'

export default function Stage01({ select }) {
    const githubRepoListViewModel = useGithubRepoList()
    const userViewModel = useUser()

    return (
        <div className="stage01-container">
            <div className="stage01-header">
                <img
                    src={userViewModel.data.avatarUrl}
                    className="profile-img"
                    alt="user avatar img"
                />
                <div className="selection-description">
                    {userViewModel.data.username}'s Repository
                </div>
            </div>
            <div className="stage01-body">
                {githubRepoListViewModel.data.map((data, ind) => (
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
