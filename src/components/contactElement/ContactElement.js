export const ContactElement = ({contact, idx, deleteContact})=> {
    return (
        <li id={contact.id} key={idx}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <button type="button" onClick={(event)=>{deleteContact(contact.id)}}>Delete</button>
        </li>
    )
}