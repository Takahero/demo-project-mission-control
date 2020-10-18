import React from "react"
import ProjectList from "../molecules/ProjectList"
import { useSelector } from 'react-redux'
import { isAuthedSelector } from "../../store/selector"

const ProjectListSection: React.FC = () => {
	const authed = useSelector(isAuthedSelector)
	return (
		<div data-testid="project-list-section">
			{ authed && <ProjectList user={true} />}
			<ProjectList />
		</div>
	)
}

export default React.memo(ProjectListSection)