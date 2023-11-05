export const ContactList = ({ visibleContacts }) => {
  return (
    <>
      {visibleContacts.length > 0 && (
        <ul>
          {visibleContacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
