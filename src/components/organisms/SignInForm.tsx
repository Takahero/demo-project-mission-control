import React from "react"
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik"
import { signInFormData } from "../../utils/formData"
import SubmitButton from "../atoms/Form/SubmitButton"
import Label from "../atoms/Form/Label"
import * as Yup from "yup"
import { pushHistoryTo } from "../../utils/history"
import { useFirebase } from "react-redux-firebase"

interface Values {
	email: string
	password: string
}

const SignInSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Required"),
	password: Yup.string()
		.min(6, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
})

const SignInForm: React.FC = () => {
	const firebase = useFirebase()

	return (
		<div data-testid="sing-in-form">
			<Formik
				initialValues={{
					email: "",
					password: "",
				}}
				validationSchema={SignInSchema}
				onSubmit={(
					values: Values,
					{ setSubmitting }: FormikHelpers<Values>
				) => {
					firebase
						.login({
							email: values.email,
							password: values.password,
						})
						.catch((e) => console.error(e))

					pushHistoryTo("/")
				}}
			>
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
					<SubmitButton text="Sign In" />
				</Form>
			</Formik>
		</div>
	)
}

export default SignInForm

// firebase.login({
// 	email: values.email,
// 	password: values.password,
// })
// .catch(e => console.error(e))
