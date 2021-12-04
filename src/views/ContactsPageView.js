import ContactForm from "../components/ContactForm/ContactForm.js";
import ContactList from "../components/ContactList/ContactList";
import Container from "../components/Container/Container";
import Filter from "../components/Filter/Filter";
import { useState } from "react";
import { useGetContactsQuery } from "../redux/contact/api";

function ContactsView() {
  const { data } = useGetContactsQuery("");

  const [filter, setFilter] = useState("");

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const contactFilter = () => {
    return data.filter((contact) =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  };

  return (
    <Container>
      {data && <ContactForm contacts={data} />}
      <Filter value={filter} onChange={changeFilter} />
      {data && <ContactList contacts={contactFilter()} />}
    </Container>
  );
}

export default ContactsView;