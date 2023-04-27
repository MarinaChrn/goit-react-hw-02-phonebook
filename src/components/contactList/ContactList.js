import { ContactElement } from "components/contactElement/ContactElement";
import { StyledList } from "./ContactList.styled";
import PropTypes from 'prop-types';

export const ContactList =({contacts, deleteContact})=> {
    return (
        <StyledList>
            {contacts.map((contact, idx) => (
                <ContactElement contact={contact} idx={idx} deleteContact={deleteContact}/>
            ))}
        </StyledList>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
}