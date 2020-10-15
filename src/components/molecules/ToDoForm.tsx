import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import SubmitButton from '../atoms/Form/SubmitButton';
import * as Yup from "yup"
import Button from '../atoms/Buttons/Button';
import { addToDo, updateToDo } from '../../utils/toDosFirestore';
import { useFirestore } from 'react-redux-firebase';
import { ToDoType } from '../../utils/firestoreDocumentTypes';

interface Props {
    projectId: string;
    requiredResultId: string;
    setShowInput: () => void;
    update?: boolean;
    toDo?: ToDoType;
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
    update,
    toDo
}, ref) => {
    const firestore = useFirestore()
    return (
        <div
            data-testid="to-do-form"
        >
            <Formik
                initialValues={{ name: update && toDo ? toDo.name :'' }}
                validateOnBlur={false}
                validationSchema={toDoSchema}
                onSubmit={(values, { setSubmitting }) => {
                    update && toDo ?
                        updateToDo(firestore, projectId, requiredResultId, values.name, toDo)
                    :
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