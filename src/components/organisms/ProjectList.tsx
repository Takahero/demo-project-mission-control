import React from "react"
import Title from "../atoms/Texts/Title"
import ProjectCard from "../molecules/ProjectCard"
import { mockProjects } from "../../utils/mockProjectsData"
import { shortFullName } from "../../utils/name"
import { projectDateRange } from "../../utils/date"
import { Link } from "react-router-dom"
import { isEmpty } from "react-redux-firebase"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { Redirect } from "react-router-dom"
import NavButton from "../atoms/Buttons/NavButton"

const ProjectList: React.FC = () => {
	const auth = useSelector((state: RootState) => state.firebase.auth)

	return (
		<div data-testid="project-list">
			<Title title={"People's Projects"} />

            { !isEmpty(auth) &&
				<NavButton
					text="Create a new project"
					path="/project/create"
				/>
			}

			{mockProjects.map((mockProject, i) => (
				<Link to={`/project/${mockProject.id}`} key={i}>
					<ProjectCard
						name={mockProject.name}
						authorName={shortFullName(
							mockProject.author.firstName,
							mockProject.author.lastName
						)}
						dateRange={projectDateRange(
							mockProject.startDate,
							mockProject.endDate
						)}
					/>
				</Link>
			))}
		</div>
	)
}

export default ProjectList
