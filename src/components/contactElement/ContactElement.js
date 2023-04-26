export const ContactElement = ({contact, idx})=> {
    return (
        <li id={contact.id} key={idx}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <button type="button">Delete</button>
        </li>
    )
}