import React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'

interface Values {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }

const SignUpForm: React.FC = () => {
    return (
        <div
            data-testid="sign-up-form"
        >
            <Formik
                initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                }}
                onSubmit={(
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
                ) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 500);
                }}
            >
                <Form>
                <label htmlFor="firstName">First Name</label>
                <Field id="firstName" name="firstName" placeholder="John" />

                <label htmlFor="lastName">Last Name</label>
                <Field id="lastName" name="lastName" placeholder="Doe" />

                <label htmlFor="email">Email</label>
                <Field
                    id="email"
                    name="email"
                    placeholder="john@acme.com"
                    type="email"
                />
                
                <label htmlFor="password">Password</label>
                <Field
                    id="password"
                    name="password"
                    placeholder="spoighapohiqratrea"
                    type="password"
                />

                <button type="submit">Submit</button>
                </Form>
            </Formik>

        </div>
    )
}

export default SignUpForm
