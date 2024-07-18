import { Link } from "react-router-dom";

const UpdateUser = () => {
  return (
    <>
      <div className="container m-5 mx-auto">
        {/* <h1 className="text-center m-4">MERN CRUD APP</h1> */}
        <div className="row bg-white p-5 shadow-lg">
          <div className="col-10 mx-auto">
            <div className="m-4 mb-2">
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
                  <form className="m-4">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Firstname"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Lastname"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
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
