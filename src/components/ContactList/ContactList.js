import s from './ContactList.module.css'

import { useDeleteContactMutation } from "../../redux/contact/api";

function ContactList({ contacts }) {
  const [deleteContact] = useDeleteContactMutation();
  return (
    <ul className={s.elem}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <p>Name: {contact.name}</p>
          <p>Number: {contact.phone}</p>
          <button type="button" onClick={() => deleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
