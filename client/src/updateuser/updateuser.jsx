import React from "react";
import "./updateuser.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

const UpdateUser = () => {
  const users = {
    name: "",
    email: "",
    address: "",
  };

  const [user, setUser] = React.useState(users);
  const navigate = useNavigate();
  const { id } = useParams();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/user/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log("Error fetching user:", err);
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(user);
    await axios
      .put(`http://localhost:8000/api/update/user/${id}`, user)
      .then((res) => {
        toast.success("User updated successfully");
        //console.log("User updated successfully");
        navigate("/");
      })
      .catch((err) => {
        toast.error("Error updating user");
        //console.log("Error updating user:", err);
      });
  };

  return (
    <div className="addUser">
      <Link to="/" className="btn btn-secondary">
        <i className="fa-solid fa-backward"></i> Back
      </Link>

      <h3>Update User</h3>
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
            value={user.email}
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
            value={user.address}
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

export default UpdateUser;
