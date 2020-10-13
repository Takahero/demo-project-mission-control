import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import SubmitButton from '../atoms/Form/SubmitButton';
import * as Yup from "yup"
import Button from '../atoms/Buttons/Button';

interface Props {
    projectId: string;
    requiredResultId: string;
    addToDo: any;
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
    addToDo,
    setShowInput,
}, ref) => {
    return (
        <div
            data-testid="to-do-form"
        >
            <Formik
                initialValues={{ name: '' }}
                validateOnBlur={false}
                validationSchema={toDoSchema}
                onSubmit={(values, { setSubmitting }) => {
                    addToDo(projectId, requiredResultId, values.name)
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