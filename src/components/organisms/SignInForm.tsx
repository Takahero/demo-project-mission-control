import React from 'react'
import SignInButton from '../atoms/Buttons/SignInButton'
import { 
    Formik, 
    Field, 
    Form, 
    FormikHelpers,
    ErrorMessage
} from 'formik'
import { signInFormData } from '../../utils/formData'
import SubmitButton from '../atoms/Form/SubmitButton'
import Label from '../atoms/Form/Label'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '../../store/user'
import { pushHistoryTo } from '../../utils/history'
import { auth } from '../../firebase'

interface Values {
    email: string;
    password: string;
  }

const SignInSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
  });

const SignInForm: React.FC = () => {
    const dispatch = useDispatch()
    return (
        <div
            data-testid="sing-in-form"
        >
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={SignInSchema}
                onSubmit={ async (
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                ) => {
                    
                    const { user }: any = await auth.signInWithEmailAndPassword(values.email, values.password)
                        .catch( error => {
                            console.error(error)
                        })
                    if (user) {
                        dispatch(setCurrentUser({ 
                            id: user.uuid,
                            firstName: user.firstName,
                            lastName: user.lastName,
                        }))
                    }
                    pushHistoryTo('/')
                }}
            >
                <Form>
                    { signInFormData.map( (signInFormDatum, i) => 
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
                            <ErrorMessage name={signInFormDatum.value}/>
                        </div>
                    )}
                    <SubmitButton text="Sign In" />
                </Form>
            </Formik>
        </div>
    )
}

export default SignInForm
