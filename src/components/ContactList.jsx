const ContatList = ({contacts}) => {
    return (
        <ul>
            {contacts.map(({id, name} )=> (
                <li key={id}>{name}</li>
            ))}
        </ul>    
    )
}
export default ContatList;