import React from "react"
import { isEmpty } from "react-redux-firebase"
import { useSelector } from "react-redux"
import fromFirestoreObjToArr from '../../utils/fromFirestoreObjToArr';
import { projectsSelector, authSelector } from "../../store/selector"
import ProjectList from "../molecules/ProjectList"
import authProjectsArraySplitter from '../../utils/authProjectsArraySplitter';

const ProjectListSection: React.FC = () => {
	const auth = useSelector(authSelector)
	const projects = useSelector(projectsSelector)
	let signedIn: boolean = !isEmpty(auth)

	let projectArr: any = null
	let sortedProjects: any = null
	if (projects) {
		projectArr = fromFirestoreObjToArr(projects)
		if (signedIn) {
			sortedProjects = authProjectsArraySplitter(projectArr, auth.uid)
		}
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
						projects={projectArr}
						listTitle="People's Projects"
					/>

			}
		</div>
	)
}

export default ProjectListSection
