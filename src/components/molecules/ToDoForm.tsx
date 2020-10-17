import React, { useMemo } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import SubmitButton from '../atoms/Form/SubmitButton'
import * as Yup from "yup"
import Button from '../atoms/Buttons/Button'
import { addToDo, updateToDo } from '../../utils/toDosFirestore'
import { useFirestore } from 'react-redux-firebase'
import { useParams } from 'react-router-dom'
import { toDoSelectorById } from '../../store/selector'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'

interface Props {
    requiredResultId: string;
    setShowInput: () => void;
    update?: boolean;
    toDoId?: string;
}

const toDoSchema = Yup.object().shape({
	name: Yup.string()
		.trim()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required")
})

const ToDoForm = React.forwardRef<HTMLInputElement, Props>(({
    requiredResultId,
    setShowInput,
    update,
    toDoId
}, ref) => {
    const firestore = useFirestore()
    const { projectId } = useParams<{ projectId: string }>()

    const memoToDosSelector = useMemo(() => toDoSelectorById, [])
    const toDo = useSelector((state: RootState) => memoToDosSelector(state, projectId, requiredResultId, toDoId))

    const initialValue = { name: update && toDo ? toDo.name : '' }
    const handleSubmit = ({ name }: { name: string}) => {
        update && toDo ?
            updateToDo(firestore, projectId, requiredResultId, name, toDo)
        :
            addToDo(firestore, projectId, requiredResultId, name)
        setShowInput()
    }

    return (
        <div
            data-testid="to-do-form"
        >
            <Formik
                initialValues={initialValue}
                validateOnBlur={false}
                validationSchema={toDoSchema}
                onSubmit={handleSubmit}
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
                handleClick={setShowInput}
            />
        </div>
    )
})

export default React.memo(ToDoForm)