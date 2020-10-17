import React from "react"
import {
	Formik,
	Field,
	Form,
	ErrorMessage
} from "formik"
import { signUpFormData } from "../../utils/formData"
import SubmitButton from "../atoms/Form/SubmitButton"
import Label from "../atoms/Form/Label"
import * as Yup from "yup"
import { pushHistoryTo } from "../../utils/history"
import {
	useFirebase,
} from "react-redux-firebase"
import { useSelector } from "react-redux"
import GoogleAuthButton from "../atoms/Buttons/GoogleAuthButton"
import { isAuthedSelector } from "../../store/selector"
import { Redirect } from "react-router-dom"

interface Values {
	firstName: string
	lastName: string
	email: string
	password: string
}

const SignupSchema = Yup.object().shape({
	firstName: Yup.string()
		.trim()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	lastName: Yup.string()
		.trim()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	email: Yup.string()
		.trim().email("Invalid email").required("Required"),
	password: Yup.string()
		.trim()
		.min(6, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
})

const initialValues: Values = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
}

const SignUpForm: React.FC = () => {
	const authed: boolean = useSelector(isAuthedSelector)
	const firebase = useFirebase()

	if (authed) {
		return <Redirect to="/" />
	}

	const handleSubmit: (values: Values) => void = async (values) => {
		await firebase
			.createUser(
				{
					email: values.email,
					password: values.password,
				},
				{
					firstName: values.firstName,
					lastName: values.lastName,
				}
			)
			.catch((e) => console.error(e))
		pushHistoryTo("/")
	}

	return (
		<div data-testid="sign-up-form">
			<Formik
				initialValues={initialValues}
				validationSchema={SignupSchema}
				onSubmit={handleSubmit}
			>
				{({ isSubmitting }) => (
					<Form>
						{signUpFormData.map((signUpFormDatum, i) => (
							<div key={i}>
								<Label
									label={signUpFormDatum.label}
									value={signUpFormDatum.value}
								/>
								<Field
									data-testid="field"
									id={signUpFormDatum.value}
									name={signUpFormDatum.value}
									placeholder={signUpFormDatum.placeholder}
									type={signUpFormDatum.type}
								/>
								<ErrorMessage name={signUpFormDatum.value} />
							</div>
						))}
						<SubmitButton
							text={isSubmitting ? "Loading..." : "Sign Up"}
							disabled={isSubmitting}
						/>
					</Form>
				)}
			</Formik>
			<GoogleAuthButton />
		</div>
	)
}

export default React.memo(SignUpForm)