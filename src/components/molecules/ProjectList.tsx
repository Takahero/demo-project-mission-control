import React from "react"
import Title from "../atoms/Texts/Title"
import ProjectCard from "../molecules/ProjectCard"
import { shortFullName } from "../../utils/name"
import { projectDateRange } from "../../utils/date"
import { Link } from "react-router-dom"
import NavButton from "../atoms/Buttons/NavButton"

interface Props {
	auth?: boolean;
	listTitle: string;
	projects: any;
}
const ProjectList: React.FC<Props> = ({ projects, listTitle, auth }) => {
	return (
		<div data-testid="project-list">
			<Title title={listTitle} />

            { auth &&
				<NavButton
					text="Create a new project"
					path="/project/create"
				/>
			}

			{ projects && projects.length > 0 && projects.map((project: any, i: string) => (
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
			))}
		</div>
	)
}

export default ProjectList
