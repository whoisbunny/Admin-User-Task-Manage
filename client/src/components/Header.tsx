import { Link,  useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { getUserFromLocalStorage } from "@/services/user.service";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const isLoggedin = localStorage.getItem("token") !== null;
  const user = getUserFromLocalStorage();
  return (
    <>
      <div className="flex items-center p-6 justify-end shadow-lg mb-4 ">
        <ul className="flex gap-4 items-center">
          {isLoggedin && user?.role === "admin" && (
            <>
              <li className="">
                <Link to={"/admin/user-list"}> User List</Link>
              </li>
              <li className="">
                <Link to={"/admin/add"}>Register User</Link>
              </li>
              <li className="">
                <Link to={"/admin/assign"}>Assign User</Link>
              </li>
              <li className="">
                <Link to={"/admin/task-list"}>Task List</Link>
              </li>
            </>
          )}
          <li className="">
            <Button onClick={handleLogout} variant={"ghost"}>
              Logout
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
