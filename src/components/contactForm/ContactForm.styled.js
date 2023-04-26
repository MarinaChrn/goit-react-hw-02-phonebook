import { Form as FormikForm } from "formik";
import styled from "styled-components";

export const Form = styled(FormikForm)`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 200px;
`

export const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: 10px;
`