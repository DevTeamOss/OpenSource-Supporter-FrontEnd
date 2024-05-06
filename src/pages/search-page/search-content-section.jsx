import RepositoryBox from "@/components/repository-box";
import UserCard from "@/components/user-card";

export default function SearchContentSection() {
    return (
        <div className="search-content-section-container">
            <div className="main-content-box">
                <div className="content-title-text">
                    <div className="title-text">Users</div>
                    <div className="count-result-text">4 results</div>
                </div>
                <div className="card-group-container">
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                </div>
            </div>
            <div className="main-content-box">
                <div className="content-title-text">
                    <div className="title-text">Repository</div>
                    <div className="count-result-text">12 results</div>
                </div>
                <div className="card-group-container">
                    <RepositoryBox />
                    <RepositoryBox />
                    <RepositoryBox />
                    <RepositoryBox />
                </div>
            </div>
        </div>
    )
}