import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import apiRequest from "../lib/apiRequests";
import UploadWidget from "../components/UploadWidget";

function UpdateUser() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await apiRequest.put(`/users/${currentUser?.id}`, {
        username,
        email,
        password,
        avatar: avatar[0],
      });
      updateUser(res.data);
      navigate("/profile");
    } catch (err: any) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  return (
    <div className="flex h-full">
      <div className="flex w-3/5 items-center justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <h1>Update Profile</h1>
          <div className="flex flex-col gap-1">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser?.username}
              className="rounded-md border border-gray-500 p-5"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser?.email}
              className="rounded-md border border-gray-500 p-5"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="rounded-md border border-gray-500 p-5"
            />
          </div>
          <button className="cursor-pointer rounded-md border-0 bg-teal-500 p-5 font-bold text-white">
            Update
          </button>
          {error && <span>{error}</span>}
        </form>
      </div>
      <div className="flex w-2/5 flex-col items-center justify-center gap-5 bg-white">
        <img
          src={avatar[0] || currentUser?.avatar || "/noavatar.jpg"}
          alt=""
          className="w-1/2 object-cover"
        />
        <UploadWidget
          uwConfig={{
            cloudName: "idzimordo",
            uploadPreset: "real-estate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setPublicId={(publicId) => setAvatar([publicId])}
        />
      </div>
    </div>
  );
}

export default UpdateUser;
