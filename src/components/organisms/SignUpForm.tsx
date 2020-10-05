import React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import signUpFormData from '../../utils/signUpFormData'
import SubmitButton from '../atoms/Form/SubmitButton'
import Label from '../atoms/Form/Label'

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
                    { signUpFormData.map( (signUpFormDatum, i) => 
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
                        </div>
                    )}
                    <SubmitButton text="Submit" />
                </Form>
            </Formik>

        </div>
    )
}

export default SignUpForm
