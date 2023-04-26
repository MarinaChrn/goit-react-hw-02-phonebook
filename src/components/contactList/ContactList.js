import { ContactElement } from "components/contactElement/ContactElement"

export const ContactList =({contacts, deleteContact})=> {
    return (
        <ul>
            {contacts.map((contact, idx) => (
                <ContactElement contact={contact} idx={idx} deleteContact={deleteContact}/>
            ))}
        </ul>
    )
}