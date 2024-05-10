import SelectionRepository from '@/components/selection-repository'

export default function Stage01({ nextStage }) {
    return (
        <div className="stage01-container">
            <div className="stage01-header">
                <div className="profile-img" />
                <div className="selection-description">
                    user's Repository
                </div>
            </div>
            <div className="stage01-body">
                <SelectionRepository nextStage={nextStage} />
                <SelectionRepository nextStage={nextStage} />
                <SelectionRepository nextStage={nextStage} />
                <SelectionRepository nextStage={nextStage} />
                <SelectionRepository nextStage={nextStage} />
            </div>
        </div>
    );
}
