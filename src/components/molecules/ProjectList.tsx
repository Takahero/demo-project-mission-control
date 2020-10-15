import React, { Key } from "react"
import Title from "../atoms/Texts/Title"
import ProjectCard from "../molecules/ProjectCard"
import { shortFullName } from "../../utils/name"
import { projectDateRange } from "../../utils/date"
import { Link } from "react-router-dom"
import NavButton from "../atoms/Buttons/NavButton"
import { ProjectType } from '../../utils/firestoreDocumentTypes';

interface Props {
	listTitle: string;
	projects: ProjectType[];
	authed?: boolean;
}

const ProjectList: React.FC<Props> = ({
	listTitle,
	projects,
	authed
}) => {
	return (
		<div data-testid="project-list">
			<Title title={listTitle} />

            { authed &&
				<NavButton
					text="Create a new project"
					path="/project/create"
				/>
			}

			{ projects && projects.length > 0 && projects.map((project: ProjectType, i: Key) =>
				<Link to={`/project/${project.id}`} key={i}>
					<ProjectCard
						name={project.projectName}
						authorName={shortFullName(
							project.author.firstName,
							project.author.lastName
						)}
						dateRange={projectDateRange(
							project.startDate,
							project.endDate
						)}
					/>
				</Link>
			)}
		</div>
	)
}

export default React.memo(ProjectList)
