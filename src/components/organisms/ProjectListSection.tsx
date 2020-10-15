import React from "react"
import ProjectList from "../molecules/ProjectList"

const ProjectListSection: React.FC = () => {
	return (
		<div data-testid="project-list-section">
			<ProjectList user={true} />
			<ProjectList />
		</div>
	)
}

export default React.memo(ProjectListSection)