import React from "react"
import {
	Formik,
	Field,
	Form,
	FormikHelpers,
	ErrorMessage
} from "formik"
import { requiredResultFormData } from "../../utils/formData"
import SubmitButton from "../atoms/Form/SubmitButton"
import Label from "../atoms/Form/Label"
import * as Yup from "yup"
import { pushHistoryTo } from "../../utils/history"
import {
	isEmpty,
	useFirestore,
} from "react-redux-firebase"
import { useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import { authSelector } from "../../store/selector"

interface Props {
	projectId: string;
	setCreatingRequiredResult: any;
}

interface Values {
	name: string;
	startDate: string;
	endDate: string;
}

const RequiredResultSchema = Yup.object().shape({
	name: Yup.string()
		.trim()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	startDate: Yup.date()
		.required("Required"),
	endDate: Yup.date()
		.min(Yup.ref('startDate'), "End date should be after start date")
		.required("Required"),
})

const RequiredResultForm: React.FC<Props> = ({ 
	projectId,
	setCreatingRequiredResult
}) => {

	const auth = useSelector(authSelector)
	const firestore = useFirestore()

	if (isEmpty(auth)) {
		return <Redirect to="/" />
	}

	const addRequiredResult = async (values: any) => {
		await firestore.add({
			collection: 'projects',
			doc: projectId,
			subcollections: [{ collection: 'requiredResults' }],
			storeAs: 'requiredResults'
		}, {
			...values,
			completed: false,
			createdAt: firestore.FieldValue.serverTimestamp(),
		}).catch(e => console.error(e))
		setCreatingRequiredResult()
	}

	// const updateProject = async (values: Values, projectId: string ) => {
	// 	await firestore.update({ collection: 'projects', doc: projectId }, {
	// 		...values,
	// 	}).catch(e => console.error(e))
	// 	pushHistoryTo(`/project/${projectId}`)
	// }

	const initialValues = {
		name: "",
		startDate: "",
		endDate: "",
	}

	return (
		<div data-testid="required-result-form">
			<Formik
				initialValues={initialValues}
				validationSchema={RequiredResultSchema}
				onSubmit={async (
					values: Values,
					{ setSubmitting }: FormikHelpers<Values>,
				) => { addRequiredResult(values)
					// projectId ? updateProject(values, projectId) : addProject(values)
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						{requiredResultFormData.map((requiredResultFormDatum, i) => (
							<div key={i}>
								<Label
									label={requiredResultFormDatum.label}
									value={requiredResultFormDatum.value}
								/>
								<Field
									data-testid="field"
									id={requiredResultFormDatum.value}
									name={requiredResultFormDatum.value}
									placeholder={requiredResultFormDatum.placeholder}
									type={requiredResultFormDatum.type}
								/>
								<ErrorMessage name={requiredResultFormDatum.value} />
							</div>
						))}
						<SubmitButton text={
							isSubmitting ? "Loading..." : "Create"
								// projectId? "Update" : "Create"
						} />
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default RequiredResultForm
