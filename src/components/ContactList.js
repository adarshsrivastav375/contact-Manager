
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import { useSelector} from "react-redux";

const ContactList = (props) =>{
  const data =useSelector((state)=>state.contacts.data); 

    // const deleteContactHandler=(id)=>{
    //   props.getContactId(id);
    //    };
      
    const renderContactList =data.map((contact)=>{
        return(
         <ContactCard key={contact.id} contact={contact}></ContactCard>
        );
    })
  return (
    
    <div style={{ marginTop :"50px " }} className='main'>
      <h2>Contact List
       <Link to={'add'}> <button style={{marginLeft:"100px"}} className=" ui button blue right">Add Contact</button></Link>
        
      </h2>
       <div className="ui celled list">
       {renderContactList}
       </div>

    </div>
  )
}

export default ContactList