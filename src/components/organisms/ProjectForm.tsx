import React, { useMemo } from "react"
import {
	Formik,
	Field,
	Form,
	ErrorMessage
} from "formik"
import { projectFormData } from "../../utils/formData"
import SubmitButton from "../atoms/Form/SubmitButton"
import Label from "../atoms/Form/Label"
import * as Yup from "yup"
import {
	pushHistoryTo,
	goBackHistory
} from "../../utils/history"
import { useFirestore } from "react-redux-firebase"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { Redirect, useParams } from "react-router-dom"
import Button from "../atoms/Buttons/Button"
import {
	uidSelector,
	profileSelector,
	projectSelectorById
} from "../../store/selector"

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

const ProjectForm: React.FC = () => {
	const firestore = useFirestore()

	const { projectId } = useParams<{ projectId: string }>()
	const memoProjectSelectorById = useMemo(() => projectSelectorById, [])
    const project = useSelector((state: RootState) => memoProjectSelectorById(state, projectId))

	const uid = useSelector(uidSelector)
	const profile = useSelector(profileSelector)

	if (!uid) return <div data-testid="project-form"><Redirect to="/" /></div>

	const initialValues = project ? {
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

	const addProject = async (values: Values) => {
		const result: any = await firestore.add({ collection: "projects" }, {
			...values,
			author: {
				uid,
				firstName: profile.firstName,
				lastName: profile.lastName,
			},
			completed: false,
			createdAt: firestore.FieldValue.serverTimestamp(),
		}).catch(e => console.error(e))
		const newProjectId = result.w_.path.segments[1]
		pushHistoryTo(`/project/${newProjectId}`)
	}

	const updateProject = async (values: Values) => {
		if (project) {
			await firestore.update({ collection: "projects", doc: projectId }, {
				...values,
			}).catch(e => console.error(e))
			pushHistoryTo(`/project/${projectId}`)
		}
	}

	const handleSubmit = async (
		values: Values
	) => {
		project ? updateProject(values) : addProject(values)
	}

	return (
		<div data-testid="project-form">
			<Formik
				initialValues={initialValues}
				validationSchema={PropjectSchema}
				onSubmit={handleSubmit}
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
						<SubmitButton
							text={
								isSubmitting ? "Loading..." :
									project ? "Update" : "Create"
							}
							disabled={isSubmitting}
						/>
					</Form>
				)}
			</Formik>
			<Button
				text="Cancel"
				handleClick={goBackHistory}
			/>
		</div>
	)
}

export default React.memo(ProjectForm)