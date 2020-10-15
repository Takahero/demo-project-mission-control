import React, { Key } from "react"
import Title from "../atoms/Texts/Title"
import ProjectCard from "../molecules/ProjectCard"
import { Link } from "react-router-dom"
import NavButton from "../atoms/Buttons/NavButton"
import { useSelector } from 'react-redux'
import {
	userProjectIdsSelector,
	otherProjectIdsSelector
} from '../../store/selector'

interface Props {
	user?: boolean;
}

const ProjectList: React.FC<Props> = ({
	user
}) => {
	let projectIds = useSelector(user ? userProjectIdsSelector : otherProjectIdsSelector)
	return (
		<div data-testid="project-list">
			<Title title={user ? "Your Projects" : "People's Projects"} />

            { user &&
				<NavButton
					text="Create a new project"
					path="/project/create"
				/>
			}

			{ projectIds && projectIds.length > 0 && projectIds.map((projectId: string, i: Key) =>
				<Link to={`/project/${projectId}`} key={i}>
					<ProjectCard
						key={i}
						projectId={projectId}
					/>
				</Link>
			)}
		</div>
	)
}

export default React.memo(ProjectList)