export default function Contacts({ contacts, deleteContact }) {
  return (
    <>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <span>{contact.name}:</span>
            <span>{contact.number}</span>
            <button onClick={() => deleteContact(contact.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </>
  );
}
