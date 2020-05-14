import React, { Fragment, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItems';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
export const Contacts = () => {
  const { contacts, filtered, getContacts, loading } = useContext(
    ContactContext
  );
  useEffect(() => {
    getContacts();
  }, []);

  return (
    <Fragment>
      <TransitionGroup>
        {filtered === null
          ? contacts.map((contact) => (
              <CSSTransition key={contact._id} timeout={500} classNames='item'>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : filtered.map((contact) => (
              <CSSTransition key={contact._id} timeout={500} classNames='item'>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
