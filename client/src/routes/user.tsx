import Chat from "../components/Chat";
import UserList from "../components/UserList";

const User = () => {
  return (
    <div className="flex h-full">
      <div className="w-3/5 overflow-y-auto pb-12">
        <div className="flex flex-col gap-12 pr-12">
          <div className="flex items-center justify-between">
            <h1 className="font-thin">User Information</h1>
            <button className="cursor-pointer border-0 bg-primary px-6 py-3">
              Update Profile
            </button>
          </div>
          <div className="flex flex-col gap-5">
            <span className="flex items-center gap-5">
              Avatar:
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="h-10 w-10 rounded-full object-cover"
              />
            </span>
            <span className="flex items-center gap-5">
              Username: <b>John Doe</b>
            </span>
            <span className="flex items-center gap-5">
              E-mail: <b>john@gmail.com</b>
            </span>
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
