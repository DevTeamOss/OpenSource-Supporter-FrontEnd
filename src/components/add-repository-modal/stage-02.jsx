import { useState } from 'react'

import TagChip from '@/components/tag-chip'
import LoadingScreen from '@/components/loading-screen'
import {
    useGithubRepoListController,
    useUserController,
} from '@/controllers/index.js'

export default function Stage02({ close, repoName, cancel }) {
    const userController = useUserController()
    const githubRepoListController = useGithubRepoListController()

    const [description, setDescription] = useState('')
    const [newTagName, setNewTagName] = useState('')
    const [tags, setTags] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    async function submit() {
        setIsLoading(true)
        await githubRepoListController.addRepository({
            username: userController.data.username,
            repoName,
            description,
            tags,
        })
        setIsLoading(false)
        close()
    }

    function addTag() {
        const newTag = newTagName.split(' ').join('')
        if (newTag === '') {
            return
        }
        setTags((prev) => [...prev, newTag])
        setNewTagName('')
    }

    function deleteTag(ind) {
        console.log('delete')
        const newTags = [...tags]
        newTags[ind] = ''
        setTags(newTags.filter((value) => value !== ''))
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
                            <input
                                type="text"
                                id="username"
                                value={userController.data.username}
                                disabled
                            />
                        </div>
                        <div className="input-box">
                            <label htmlFor="repositoryname">
                                Repository name
                            </label>
                            <input
                                type="text"
                                id="repositoryname"
                                value={repoName}
                                disabled
                            />
                        </div>
                    </div>
                    <div className="description-section">
                        <div className="input-box">
                            <label htmlFor="description">Description</label>
                            <textarea
                                name="description"
                                id="description"
                                rows={5}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="tag-section">
                        <div className="input-box">
                            <label htmlFor="tags">Tags</label>
                            <div className="tag-input-group">
                                <input
                                    type="text"
                                    id="tags"
                                    value={newTagName}
                                    onChange={(e) =>
                                        setNewTagName(e.target.value)
                                    }
                                />
                                <div className="tag-add-btn" onClick={addTag}>
                                    +
                                </div>
                            </div>
                            <div className="tag-list-box">
                                {tags.map((tag, ind) => (
                                    <TagChip
                                        key={ind}
                                        onClick={() => deleteTag(ind)}
                                    >
                                        #{tag}
                                    </TagChip>
                                ))}
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
                    <div className="cancel-btn" onClick={cancel}>
                        Cancel
                    </div>
                    <div className="submit-btn" onClick={submit}>
                        Submit
                    </div>
                </div>
            </div>
            {isLoading && <LoadingScreen />}
        </div>
    )
}
