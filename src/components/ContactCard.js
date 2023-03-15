import user from "../images/user.png"
import { useDispatch } from "react-redux";
import { removeContact, updateContact } from "../redux/reducers/reducer";

const ContactCard = (props) => {
    const {id, name, mobile} = props.contact;
    const dispatch= useDispatch();
    // const deleteContact=(id)=>{
    //     dispatch(removeContact(id))

    return(
        <div className="item">
            <img className="ui avatar image" src={user} alt="user"/>
            <div className="content">
                <div className="header">{name}</div>
                <div>+91{mobile}</div>
            </div>
            <div className='item right floated content'>
            <i className="right floated content edit alternate outline icon"
            style={{color: "blue",cursor:'pointer'}}
            onClick={()=> dispatch(updateContact(id))}></i>
            <i className=" trash alternate outline icon"
            style={{color: "red",cursor:'pointer' }}
            onClick={()=> dispatch(removeContact(id))}></i>

            </div>
           
        </div> 
    )  
}
export default ContactCard;