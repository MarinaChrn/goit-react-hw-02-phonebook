import { Field, Formik } from "formik"
import { Form, StyledLabel } from "./ContactForm.styled"

export const ContactForm = () => {
    return (
       <Formik 
        initialValues={{
            name:'',
            number:'',
        }}
       >
        <Form>
            <StyledLabel>
                Name
                <Field name="name"/>
            </StyledLabel>
            <StyledLabel>
                Number
                <Field name="number"/>
            </StyledLabel>
            <button type="submit">Submit</button>
        </Form>

       </Formik>
    )
}