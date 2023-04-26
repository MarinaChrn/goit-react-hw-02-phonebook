import { ContactElement } from "components/contactElement/ContactElement"

export const ContactList =({contacts})=> {
    console.log(contacts)
    return (
        <ul>
            {contacts.map((contact, idx) => (
                <ContactElement contact={contact} idx={idx}/>
            ))}
        </ul>
    )
}