import './App.css';
import { useState, useEffect } from 'react';
import AddContacts from './components/AddContacts';
import ContactList from './components/ContactList';
import Header from './components/Header'

function App() {
  const LOCAL_STORAGE_KEY ="contacts";
  const [contacts,setContacts]=useState([]);
  const addContactHandler = (contact)=>{
    setContacts([...contacts,contact]);
  };

  useEffect(()=>{
   let retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
   setContacts(retriveContacts);
  },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);
  

  return (
    <div className="ui container">L
      <Header/>
      <AddContacts addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/>

    </div>
  );
}

export default App;
