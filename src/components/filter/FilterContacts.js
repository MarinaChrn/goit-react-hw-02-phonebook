export const FilterContacts = ({searchByName})=> {
    return (
        <div>
            <h3>Find contacts by name</h3>
            <input type="text" placeholder="Write name" onChange={(event)=>{searchByName(event.target.value)}}/>
        </div>
    )
}