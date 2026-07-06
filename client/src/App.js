import "./App.css";
import User from "./getuser/User";
import AddUser from "./adduser/AddUser";
import UpdateUser from "./updateuser/updateuser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/adduser",
      element: <AddUser />,
    },
    {
      path: "/updateuser/:id",
      element: <UpdateUser />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
