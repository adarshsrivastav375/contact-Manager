import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { addContact } from "../redux/reducers/reducer";
import { useState } from "react";
import { useDispatch } from "react-redux"; 
import { Link } from "react-router-dom";
const AddContacts =()=> {
    // const data =useSelector((state)=>state.contacts.data);
 
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  const handleInput = (event) => {
      if (event.target.name === 'name') {
          setName(event.target.value);
      } else {
          setMobile(event.target.value);
      }
  }

  const formSubmit = (e) => {
    e.preventDefault();
      if(name==="" || mobile===''|| mobile.length <10){
          return alert('all the filds are mandetory!')
      }
      const contact = {
          id : uuidv4(),
          name: name,
          mobile: mobile
      }
      dispatch(addContact(contact));
      setName('');
      setMobile('');
  }
    //   const changeHandler=(e)=>{

    //   }
 
    //  add = (e) =>{
    //  e.preventDefault();
    //   if(this.state.name==="" || this.state.email===""){
    //     alert("All the fields are mandetory");
    //     return;
    //   }
    //   this.props.addontact(this.state);
    //   this.setState({name:"",email:""});
    //  }

    
      return (
        <div  style={{ marginTop :"50px " }} className="ui main">
            <h2>Add Contacts</h2>
            <form className="ui form" onSubmit={formSubmit}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" 
                           name="name" 
                           placeholder="Name" 
                           value={name} 
                           onChange={handleInput}/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="number" 
                           name="mobile" 
                           placeholder="Mobile No." 
                           value={mobile} 
                           onChange={handleInput} ></input>
                </div>
            
             <Link to={'/'}> <button className="ui button blue">contact List</button></Link>
             <button className="ui button blue">Add</button>
            </form>

        </div>
      );
    
  }
  export default AddContacts;