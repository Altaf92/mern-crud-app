import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const SubmitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8080/api/create", user)
      .then((response) => {
        // console.log(response);
        alert("User added successfully");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="container m-5 mx-auto">
        {/* <h1 className="text-center m-4">MERN CRUD APP</h1> */}
        <div className="row bg-white p-5 shadow-lg">
          <div className="col-10 mx-auto">
            <div className=" m-4 mb-2">
              <Link to={"/"}>
                <button type="button" className="btn btn-primary">
                  Home
                </button>
              </Link>
            </div>
            <div className="p-3 pt-0">
              <h2 className="text-center mb-3">Add User</h2>
              <div className="row">
                <div className="col-6 mx-auto">
                  <form className="m-4" onSubmit={SubmitForm}>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Firstname"
                        onChange={inputHandler}
                        name="fname"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Lastname"
                        onChange={inputHandler}
                        name="lname"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={inputHandler}
                        name="email"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={inputHandler}
                        name="password"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Add
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
