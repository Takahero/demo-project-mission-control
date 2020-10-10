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
import { authSelector } from "../../store/selector"

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

	const auth = useSelector(authSelector)
	const profile = useSelector((state: RootState) => state.firebase.profile, shallowEqual)
	const firestore = useFirestore()

	if (isEmpty(auth)) {
		return <Redirect to="/" />
	}

	return (
		<div data-testid="project-form">
			<Formik
				initialValues={{
					projectName: "",
					startDate: "",
					endDate: "",
					accomplishmentStatement: "",
				}}
				validationSchema={PropjectSchema}
				onSubmit={async (
					values: Values,
					{ setSubmitting }: FormikHelpers<Values>,
				) => {
					await firestore.add({ collection: 'projects' }, {
						...values,
						author: {
							uid: auth.uid,
							firstName: profile.firstName,
							lastName: profile.lastName,
						},
						completed: false,
						createdAt: firestore.FieldValue.serverTimestamp(),
					}).catch(e => console.error(e))
					pushHistoryTo("/")
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
						<SubmitButton text={isSubmitting ? "Loading..." : "Create"} />
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default ProjectForm
