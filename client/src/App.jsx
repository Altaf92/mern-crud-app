import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GetUser from "./components/GetUser";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <GetUser />,
    },
    {
      path: "/add",
      element: <AddUser />,
    },
    {
      path: "/update/:id",
      element: <UpdateUser />,
    },
  ]);
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
