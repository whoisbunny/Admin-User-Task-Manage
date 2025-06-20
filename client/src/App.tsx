import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import UserList from "./pages/user/UserList";
import AssignTask from "./pages/task/AssignTask";
import AddUser from "./pages/user/AddUser";
import UserHome from "./pages/user/UserHome";
import Login from "./pages/Login";
import TaskList from "./pages/task/TaskList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="admin/user-list" element={<UserList />} />
          <Route path="admin/add" element={<AddUser />} />
          <Route path="admin/assign" element={<AssignTask />} />
          <Route path="admin/task-list" element={<TaskList />} />
          <Route path="user/home" element={<UserHome />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
