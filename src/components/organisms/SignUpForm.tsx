import React from 'react'
import { 
    Formik, 
    Field, 
    Form, 
    FormikHelpers,
    ErrorMessage
} from 'formik'
import { signUpFormData } from '../../utils/formData'
import SubmitButton from '../atoms/Form/SubmitButton'
import Label from '../atoms/Form/Label'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '../../store/user'
import { pushHistoryTo } from '../../utils/history'
import { auth } from '../../firebase'

interface Values {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(6, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

const SignUpForm: React.FC = () => {
    const dispatch = useDispatch()
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
                validationSchema={SignupSchema}
                onSubmit={ async (
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                ) => {
                    
                    const res = await auth.createUserWithEmailAndPassword(values.email, values.password)
                    // auth.onAuthStateChanged((user: any) => {
                    //     user.firstName = values.firstName
                    //     user.lastName = values.lastName
                    //     console.log(user)
                    // }) 



                    dispatch(setCurrentUser({ 
                        id: "randomID",
                        firstName: values.firstName,
                        lastName: values.lastName,
                    }))
                    pushHistoryTo('/')
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
                            <ErrorMessage name={signUpFormDatum.value}/>
                        </div>
                    )}
                    <SubmitButton text="Submit" />
                </Form>
            </Formik>

        </div>
    )
}

export default SignUpForm
