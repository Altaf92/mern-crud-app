import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";

const GetUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8080/api/getall");
      setUsers(response.data);
      console.log(response.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container m-5 mx-auto">
        <h1 className="text-center m-4">MERN CRUD APP</h1>
        <div className="row bg-white p-5 shadow-lg">
          <div className="col-10 mx-auto">
            <div className=" m-3 float-end">
              <Link to={"/add"}>
                <button type="button" className="btn btn-primary">
                  Add User
                </button>
              </Link>
            </div>
            <div className="p-3">
              <h2 className="text-center m-4">User Table</h2>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">S. no</th>
                    <th scope="col">FirstName</th>
                    <th scope="col">LastName</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th colSpan="2" scope="col">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>
                          <Link to="update" className="text-warning fs-4">
                            <FaEdit />
                          </Link>
                        </td>
                        <td>
                          <button className="text-danger">
                            <MdDeleteForever />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetUser;
