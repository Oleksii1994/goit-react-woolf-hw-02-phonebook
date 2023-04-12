import { ContactItemLi, DeleteBtn } from './ContactItem.styled';

export const ContactItem = ({ contacts, onDeleteContact }) => {
  return contacts.map(({ id, name, number }) => {
    return (
      <ContactItemLi key={id}>
        {name}: {number}
        <DeleteBtn type="button" onClick={() => onDeleteContact(id, name)}>
          Delete
        </DeleteBtn>
      </ContactItemLi>
    );
  });
};
