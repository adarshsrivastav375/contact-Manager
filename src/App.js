import './App.css';
import AddContacts from './components/AddContacts';
import UpdateContacts from './components/UpdateContact';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ContactList from './components/ContactList';
import Header from './components/Header'
 
const router = createBrowserRouter([
  {
    path: "/",
    element:<ContactList/>,
  },
  {
    path: "/add",
    element: <AddContacts/>,
  },
  {
    path:'/:id/update',
    element:<UpdateContacts/>
  }
  
]);

function App() {
  // const LOCAL_STORAGE_KEY ="contacts";
  // const [contacts,setContacts]=useState([]);
  // const addContactHandler = (contact)=>{
  //   setContacts([...contacts,{id : uuidv4(), ...contact}]);
  // };

  // const removeContactHandler = (id) =>{
  //   const newContactList =contacts.filter((contact)=>{
  //     return contact.id !== id;
  //   });
  //   setContacts(newContactList);
  // }

  // useEffect(()=>{
  //  let retrive = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retrive && retrive.length) { setContacts(retrive);
  //     console.log(retrive);
  //   }
  // },[]);

  // useEffect(()=>{
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // },[contacts]);
  

  return (
    <div className="ui container">
      {/* <Header/>
      <AddContacts addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
       <Header/>
       <RouterProvider router={router} />

    </div>
  );
}

export default App;
