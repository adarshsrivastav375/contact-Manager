import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import AddContacts from './components/AddContacts';
import ContactList from './components/ContactList';
import Header from './components/Header'

function App() {
  const LOCAL_STORAGE_KEY ="contacts";
  const [contacts,setContacts]=useState([]);
  const addContactHandler = (contact)=>{
    setContacts([...contacts,{id : uuidv4(), ...contact}]);
  };

  const removeContactHandler = (id) =>{
    const newContactList =contacts.filter((contact)=>{
      return contact.id !== id;
    });
    setContacts(newContactList);
  }

  useEffect(()=>{
   let retrive = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrive) { setContacts(retrive);
   }
  },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);
  

  return (
    <div className="ui container">L
      <Header/>
      <AddContacts addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>

    </div>
  );
}

export default App;
