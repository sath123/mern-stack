import React from "react";
import "./adduser.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const AddUser = () => {
  const users = {
    name: "",
    email: "",
    address: "",
  };

  const [user, setUser] = React.useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(user);
    await axios
      .post("http://localhost:8000/api/user", user)
      .then((res) => {
        toast.success("User added successfully");
        //console.log("User added successfully");
        navigate("/");
      })
      .catch((err) => {
        toast.error("Error adding user");
        //console.log("Error adding user:", err);
      });
  };

  return (
    <div className="addUser">
      <Link to="/" className="btn btn-secondary">
        <i className="fa-solid fa-backward"></i> Back
      </Link>

      <h3>Add New User</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="form-">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={user.name}
            onChange={inputHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            onChange={inputHandler}
            className="form-control"
            name="email"
            id="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            onChange={inputHandler}
            className="form-control"
            name="address"
            id="address"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
