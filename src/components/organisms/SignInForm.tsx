import React from "react"
import {
	Formik,
	Field,
	Form,
	ErrorMessage
} from "formik"
import { signInFormData } from "../../utils/formData"
import SubmitButton from "../atoms/Form/SubmitButton"
import Label from "../atoms/Form/Label"
import * as Yup from "yup"
import { pushHistoryTo } from "../../utils/history"
import { useFirebase} from "react-redux-firebase"
import { useSelector } from "react-redux"
import GoogleAuthButton from "../atoms/Buttons/GoogleAuthButton"
import { isAuthedSelector } from "../../store/selector"
import { Redirect } from "react-router-dom"

interface Values {
	email: string
	password: string
}

const SignInSchema = Yup.object().shape({
	email: Yup.string()
		.trim()
		.email("Invalid email")
		.required("Required"),
	password: Yup.string()
		.trim()
		.min(6, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
})

const initialValues: Values = {
	email: "",
	password: "",
}

const SignInForm: React.FC = () => {
	const authed: boolean = useSelector(isAuthedSelector)
	const firebase = useFirebase()

	if (authed) {
		return <Redirect to="/" />
	}

	const handleSubmit: (values: Values) => void = async (values) => {
		await firebase
			.login({
				email: values.email,
				password: values.password,
			})
			.catch((e) => console.error(e))
		pushHistoryTo("/")
	}

	return (
		<div data-testid="sing-in-form">
			<Formik
				initialValues={initialValues}
				validationSchema={SignInSchema}
				onSubmit={handleSubmit}
			>
				{({ isSubmitting }) => (
					<Form>
						{signInFormData.map((signInFormDatum, i) => (
							<div key={i}>
								<Label
									label={signInFormDatum.label}
									value={signInFormDatum.value}
								/>
								<Field
									data-testid="field"
									id={signInFormDatum.value}
									name={signInFormDatum.value}
									placeholder={signInFormDatum.placeholder}
									type={signInFormDatum.type}
								/>
								<ErrorMessage name={signInFormDatum.value} />
							</div>
						))}
						<SubmitButton
							text={isSubmitting ? "Loading..." : "Sign In"}
							disabled={isSubmitting}
						/>
					</Form>
				)}
			</Formik>
			<GoogleAuthButton />
		</div>
	)
}

export default React.memo(SignInForm)