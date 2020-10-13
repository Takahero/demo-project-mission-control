import React from "react"
import {
	Formik,
	Field,
	Form,
	FormikHelpers,
	ErrorMessage
} from "formik"
import { signUpFormData } from "../../utils/formData"
import SubmitButton from "../atoms/Form/SubmitButton"
import Label from "../atoms/Form/Label"
import * as Yup from "yup"
import { pushHistoryTo } from "../../utils/history"
import {
	useFirebase,
	isEmpty
} from "react-redux-firebase"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { Redirect } from "react-router-dom"
import GoogleAuthButton from '../atoms/Buttons/GoogleAuthButton';

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

const SignUpForm: React.FC = () => {
	const auth = useSelector((state: RootState) => state.firebase.auth)
	const firebase = useFirebase()

	if (!isEmpty(auth)) {
		return <Redirect to="/" />
	}

	return (
		<div data-testid="sign-up-form">
			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					email: "",
					password: "",
				}}
				validationSchema={SignupSchema}
				onSubmit={async (
					values: Values,
					{ setSubmitting }: FormikHelpers<Values>
				) => {
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
				}}
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
			<GoogleAuthButton firebase={firebase} />
		</div>
	)
}

export default SignUpForm
