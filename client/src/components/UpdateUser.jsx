import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/getOne/" + id)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8080/api/update/${id}`, user)
      .then((response) => {
        alert("User updated successfully");
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
              <h2 className="text-center mb-3">Update User</h2>
              <div className="row">
                <div className="col-6 mx-auto">
                  <form className="m-4" onSubmit={submitForm}>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Firstname"
                        onChange={handleChange}
                        name="fname"
                        value={user.fname}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Lastname"
                        onChange={handleChange}
                        name="lname"
                        value={user.lname}
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={handleChange}
                        name="email"
                        value={user.email}
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={handleChange}
                        name="password"
                        value={user.password}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Update
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

export default UpdateUser;
