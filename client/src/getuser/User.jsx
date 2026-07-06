import React, { useState, useEffect } from "react";
import "./user.css";

import { Link } from "react-router-dom";

import axios from "axios";
import { toast } from "react-hot-toast";

const User = () => {
  const [users, setUsers] = React.useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    await axios
      .delete(`http://localhost:8000/api/delete/user/${id}`)
      .then((response) => {
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
        toast.success(response.data.message, { position: "top-center" });
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <div className="userTable">
      <Link to="/adduser" className="btn btn-primary">
        Add User <i className="fa-solid fa-user-plus"></i>
      </Link>

      {users.length === 0 ? (
        <div className="noData">
          <h3> No Data to display</h3>
          <p>Click on Add User button to add new user</p>
        </div>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td className="actionButton">
                  <Link
                    to={`/updateuser/${user._id}`}
                    type="button"
                    className="btn btn-info"
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>
                  <button
                    type="button"
                    onClick={() => deleteUser(user._id)}
                    className="btn btn-danger"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default User;
