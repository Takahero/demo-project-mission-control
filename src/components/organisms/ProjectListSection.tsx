import React from "react"
import { isEmpty } from "react-redux-firebase"
import { useSelector } from "react-redux"
import { projectsSelector, authSelector } from "../../store/selector"
import ProjectList from "../molecules/ProjectList"
import authProjectsArraySplitter from '../../utils/authProjectsArraySplitter';

const ProjectListSection: React.FC = () => {
	const auth = useSelector(authSelector)
	const projects = useSelector(projectsSelector)
	let signedIn: boolean = !isEmpty(auth)
	let sortedProjects: any = null
	if (signedIn) {
		sortedProjects = authProjectsArraySplitter(projects, auth.uid)
	}

	return (
		<div data-testid="project-list-section">
			{
				signedIn && sortedProjects ? (
					<>
						<ProjectList
							projects={sortedProjects.userProjects}
							listTitle="Your Projects"
							auth={signedIn}
						/>
						<ProjectList
							projects={sortedProjects.otherProjects}
							listTitle="People's Projects"
						/>
					</>
				) :
					<ProjectList
						projects={projects}
						listTitle="People's Projects"
					/>

			}
		</div>
	)
}

export default React.memo(ProjectListSection)
