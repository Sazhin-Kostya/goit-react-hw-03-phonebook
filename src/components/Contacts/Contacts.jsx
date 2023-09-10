import {
  ContactList,
  ContactItem,
  ContactButton,
  ContactItemContainer,
} from './Contacts.styled';
export default function Contacts({ contacts, deleteContact }) {
  return (
    <>
      <ContactList>
        {contacts.map(contact => (
          <ContactItem key={contact.id}>
            <ContactItemContainer>
              <span>{contact.name}:</span>
              <span>{contact.number}</span>
            </ContactItemContainer>
            <ContactButton onClick={() => deleteContact(contact.id)}>
              Удалить
            </ContactButton>
          </ContactItem>
        ))}
      </ContactList>
    </>
  );
}
