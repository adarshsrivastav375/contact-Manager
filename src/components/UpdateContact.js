import React from "react";
import { updateContact } from "../redux/reducers/reducer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
const UpdateContacts = () => {
  const res = useParams();
  const data = useSelector((state) => state.contacts.data);
  const dataValue = data.filter((i) => {
    if (i.id === res.id) {
      return i;
    }
  });
  const { name, mobile, id } = dataValue[0];
  const index = data.indexOf(dataValue[0]);
  const [Name, setName] = useState(name);
  const [Mobile, setMobile] = useState(mobile);
  const dispatch = useDispatch();

  const formSubmit = (e) => {
    e.preventDefault();
    if (name === "" || mobile === "" || mobile.length < 10) {
      return alert("all the filds are mandetory!");
    }

    dispatch(
      updateContact({ data: { name: Name, mobile: Mobile, id }, index: index })
    );
    setName("");
    setMobile("");
  };
  return (
    <div style={{ marginTop: "50px " }} className="ui main">
      <h2>Add Contacts</h2>
      <form className="ui form" onSubmit={formSubmit}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="number"
            name="Mobile"
            value={Mobile}
            onChange={(e) => setMobile(e.target.value)}
          ></input>
        </div>

        <Link to={"/"}>
          {" "}
          <button className="ui button blue">contact List</button>
        </Link>
        <button className="ui button blue">update</button>
      </form>
    </div>
  );
};
export default UpdateContacts;
