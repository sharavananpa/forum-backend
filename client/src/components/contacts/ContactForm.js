import React, { useState, useContext, useEffect } from 'react';
import contactContext from '../../context/contact/contactContext';
const ContactForm = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });
  const ContactContext = useContext(contactContext);
  const { current, addContact, clearCurrent, updateContact } = ContactContext;
  const { name, email, phone, type } = contact;

  useEffect(() => {
    if (current !== null) setContact(current);
    else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
    }
  }, [current, ContactContext]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };
  const clearAll = () => {
    clearCurrent();
  };

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit Contact' : 'Add Contact'}
      </h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />
      Personal{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />
      Professional{' '}
      <div>
        <input
          type='submit'
          value={current ? 'Update Contact' : 'Add Contact'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <input
            type='submit'
            value='Clear'
            className='btn btn-light btn-block'
            onClick={clearAll}
          />
        </div>
      )}
    </form>
  );
};

export default ContactForm;
