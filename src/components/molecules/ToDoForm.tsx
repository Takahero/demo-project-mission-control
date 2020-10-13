import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import SubmitButton from '../atoms/Form/SubmitButton';
import * as Yup from "yup"
import Button from '../atoms/Buttons/Button';
import { addToDo } from '../../utils/toDosFirestore';
import { useFirestore } from 'react-redux-firebase';

interface Props {
    projectId: string;
    requiredResultId: string;
    setShowInput: any;
}

const toDoSchema = Yup.object().shape({
	name: Yup.string()
		.trim()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
})

const ToDoForm = React.forwardRef<HTMLInputElement, Props>(({
    projectId,
    requiredResultId,
    setShowInput,
}, ref) => {
    const firestore = useFirestore()
    return (
        <div
            data-testid="to-do-form"
        >
            <Formik
                initialValues={{ name: '' }}
                validateOnBlur={false}
                validationSchema={toDoSchema}
                onSubmit={(values, { setSubmitting }) => {
                    addToDo(firestore, projectId, requiredResultId, values.name)
                    setShowInput()
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field
                            name="name"
                            innerRef={ref}
                        />
                        <ErrorMessage name="name" />
                        <SubmitButton
                            text={isSubmitting ? "Loading..." : "Create"}
                            disabled={isSubmitting}
                        />
                    </Form>
                )}
            </Formik>
            <Button
                text="Cancel"
                handleClick={() => {
                    setShowInput()
                }}
            />
        </div>
    )
})

export default ToDoForm