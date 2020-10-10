import React from "react"
import Title from "../atoms/Texts/Title"
import ProjectCard from "../molecules/ProjectCard"
import { shortFullName } from "../../utils/name"
import { projectDateRange } from "../../utils/date"
import { Link } from "react-router-dom"
import { isEmpty } from "react-redux-firebase"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import NavButton from "../atoms/Buttons/NavButton"
import fromFirestoreObjToArr from '../../utils/fromFirestoreObjToArr';
import { projectsSelector, authSelector } from "../../store/selector"

const ProjectList: React.FC = () => {
	const auth = useSelector(authSelector)
	const projects = useSelector(projectsSelector)

	let projectArr: any = null
	if (projects) {
		projectArr = fromFirestoreObjToArr(projects)
	}
	return (
		<div data-testid="project-list">
			<Title title={"People's Projects"} />

            { !isEmpty(auth) &&
				<NavButton
					text="Create a new project"
					path="/project/create"
				/>
			}

			{ projectArr && projectArr.map((project: any, i: string) => (
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
