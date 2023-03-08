import user from "../images/user.png"
const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    return(
        <div className="item">
            <img className="ui avatar image" src={user} alt="user"/>
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i className="right floated content trash alternate outline icon"
            style={{color: "red" , marginTop :"7px ",cursor:'pointer' }}
            onClick={()=>props.clickHandler(id)}></i>
        </div> 
    )  
}
export default ContactCard;