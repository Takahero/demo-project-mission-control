import React from "react"
import ProjectList from "../molecules/ProjectList"
import authProjectsArraySplitter from '../../utils/authProjectsArraySplitter';
import { ProjectType } from '../../utils/firestoreDocumentTypes';

interface Props {
	uid?: string;
	projects: ProjectType[];
}

const ProjectListSection: React.FC<Props> = ({
	uid,
	projects
}) => {
	let sortedProjects: any = null
	if (uid) {
		sortedProjects = authProjectsArraySplitter(projects, uid)
	}

	return (
		<div data-testid="project-list-section">
			{
				uid && sortedProjects ? 
					<>
						<ProjectList
							projects={sortedProjects.userProjects}
							listTitle="Your Projects"
							authed={true}
						/>
						<ProjectList
							projects={sortedProjects.otherProjects}
							listTitle="People's Projects"
						/>
					</>
				:
					<ProjectList
						projects={projects}
						listTitle="People's Projects"
					/>
			}
		</div>
	)
}

export default React.memo(ProjectListSection)