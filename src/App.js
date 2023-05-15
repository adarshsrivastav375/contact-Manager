import './App.css';
import AddContacts from './components/AddContacts';
import UpdateContacts from './components/UpdateContact';
import { Routes, Route } from "react-router-dom";

import ContactList from './components/ContactList';
import Header from './components/Header'
 
function App() {
  return (
    <div className="ui container">
      <Header />
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/add" element={<AddContacts />} />
        <Route path="/:id/update" element={<UpdateContacts />} />
      </Routes>
    </div>
  );
}






export default App;
