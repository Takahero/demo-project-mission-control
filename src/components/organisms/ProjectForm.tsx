import React from "react"
import {
	Formik,
	Field,
	Form,
	FormikHelpers,
	ErrorMessage
} from "formik"
import { projectFormData } from "../../utils/formData"
import SubmitButton from "../atoms/Form/SubmitButton"
import Label from "../atoms/Form/Label"
import * as Yup from "yup"
import { pushHistoryTo } from "../../utils/history"
import {
	isEmpty,
	useFirestore,
} from "react-redux-firebase"
import { useSelector, shallowEqual } from "react-redux"
import { RootState } from "../../store"
import { Redirect } from "react-router-dom"
import { authSelector, projectsSelector } from "../../store/selector"

interface Props {
	projectId?: string;
}

interface Values {
	projectName: string;
	startDate: string;
	endDate: string;
	accomplishmentStatement: string;
}

const PropjectSchema = Yup.object().shape({
	projectName: Yup.string()
		.trim()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	startDate: Yup.date()
		.required("Required"),
	endDate: Yup.date()
		.min(Yup.ref('startDate'), "End date should be after start date")
		.required("Required"),
	accomplishmentStatement: Yup.string()
		.trim()
		.min(6, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
})

const ProjectForm: React.FC<Props> = ({ projectId }) => {

	const auth = useSelector(authSelector)
	const profile = useSelector((state: RootState) => state.firebase.profile, shallowEqual)
	const firestore = useFirestore()
	const projects = useSelector(projectsSelector)

	const project = projects.find( (project: any) => project.id === projectId )

	if (isEmpty(auth)) {
		return <Redirect to="/" />
	}

	const addProject = async (values: any) => {
		const result: any = await firestore.add({ collection: 'projects' }, {
			...values,
			author: {
				uid: auth.uid,
				firstName: profile.firstName,
				lastName: profile.lastName,
			},
			completed: false,
			createdAt: firestore.FieldValue.serverTimestamp(),
		}).catch(e => console.error(e))
		const newProjectId = result.w_.path.segments[1]
		pushHistoryTo(`/project/${newProjectId}`)
	}

	const updateProject = async (values: Values, projectId: string ) => {
		await firestore.update({ collection: 'projects', doc: projectId }, {
			...values,
		}).catch(e => console.error(e))
		pushHistoryTo(`/project/${projectId}`)
	}

	const initialValues = projectId ? {
		projectName: project.projectName,
		startDate: project.startDate,
		endDate: project.endDate,
		accomplishmentStatement: project.accomplishmentStatement,
	} : {
		projectName: "",
		startDate: "",
		endDate: "",
		accomplishmentStatement: "",
	}

	return (
		<div data-testid="project-form">
			<Formik
				initialValues={initialValues}
				validationSchema={PropjectSchema}
				onSubmit={async (
					values: Values,
					{ setSubmitting }: FormikHelpers<Values>,
				) => {
					projectId ? updateProject(values, projectId) : addProject(values)
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						{projectFormData.map((projectFormDatum, i) => (
							<div key={i}>
								<Label
									label={projectFormDatum.label}
									value={projectFormDatum.value}
								/>
								<Field
									data-testid="field"
									id={projectFormDatum.value}
									name={projectFormDatum.value}
									placeholder={projectFormDatum.placeholder}
									type={projectFormDatum.type}
									as={projectFormDatum.as}
								/>
								<ErrorMessage name={projectFormDatum.value} />
							</div>
						))}
						<SubmitButton text={
							isSubmitting ? "Loading..." :
								projectId? "Update" : "Create"
						} />
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default ProjectForm
