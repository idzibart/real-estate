import { Link, useNavigate } from "react-router-dom";
import Chat from "../components/Chat";
import UserList from "../components/UserList";
import apiRequest from "../lib/apiRequests";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const User = () => {
  const { updateUser, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    // SHOW IF THERE IS A USER

    <div className="flex h-full">
      <div className="w-3/5 overflow-y-auto pb-12">
        <div className="flex flex-col gap-12 pr-12">
          <div className="flex items-center justify-between">
            <h1 className="font-thin">User Information</h1>
            <Link to="/profile/update">
              <button className="cursor-pointer border-0 bg-primary px-6 py-3">
                Update Profile
              </button>
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            <span className="flex items-center gap-5">
              Avatar:
              <img
                src={currentUser?.avatar || "noavatar.jpg"}
                alt=""
                className="h-10 w-10 rounded-full object-cover"
              />
            </span>
            <span className="flex items-center gap-5">
              Username: <b>{currentUser?.username}</b>
            </span>
            <span className="flex items-center gap-5">
              E-mail: <b>{currentUser?.email}</b>
            </span>
            <button
              onClick={handleLogout}
              className="w-[100px] cursor-pointer rounded-md border-0 bg-teal-500 px-4 py-2 text-white"
            >
              Logout
            </button>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="font-thin">My List</h1>
            <button className="cursor-pointer border-0 bg-primary px-6 py-3">
              Create New Post
            </button>
          </div>
          <UserList />
          <div className="flex items-center justify-between">
            <h1 className="font-thin">Saved List</h1>
          </div>
          <UserList />
        </div>
      </div>
      <div className="h-full w-2/5 bg-secondary">
        <div className="h-full px-5">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default User;
