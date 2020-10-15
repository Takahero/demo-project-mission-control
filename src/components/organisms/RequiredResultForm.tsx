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
import {
	useFirestore,
} from "react-redux-firebase"
import { useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import { 
	requiredResultSelectorById 
} from "../../store/selector"
import { RootState } from "../../store"
import { 
	addRequiredResult, 
	updateRequiredResult 
} from "../../utils/requiredResultsFirestore"
import Button from "../atoms/Buttons/Button"

interface Props {
	requiredResultId?: string;
	projectId: string;
	authed: boolean;
	setShowingForm: any;
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
	requiredResultId,
	projectId,
	authed,
	setShowingForm
}) => {
	const firestore = useFirestore()
	const requiredResult = useSelector((state: RootState) => requiredResultId ? requiredResultSelectorById(state, projectId, requiredResultId) : null)

	if (authed) {
		return <Redirect to="/" />
	}

	const initialValues = requiredResultId ? {
		name: requiredResult.name,
		startDate: requiredResult.startDate,
		endDate: requiredResult.endDate,
	} : {
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
				) => {
					requiredResultId ? updateRequiredResult(firestore, projectId, requiredResultId, values) : addRequiredResult(firestore, projectId, values)
					setShowingForm()
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
						<SubmitButton 
							text={
								isSubmitting ? "Loading..." :
									requiredResultId ? "Update" : "Create"
							} 
							disabled={isSubmitting}
						/>
					</Form>
				)}
			</Formik>
			<Button 
				text="Cancel"
				handleClick={setShowingForm}
			/>
		</div>
	)
}

export default RequiredResultForm