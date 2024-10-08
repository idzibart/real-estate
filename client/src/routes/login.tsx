import { FormEvent, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../lib/apiRequests";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [error, setError] = useState<String>("");
  const [isLoading, setIsLoading] = useState(false);
  const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });

      updateUser(res.data);
      navigate("/");
    } catch (err: any) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex h-full">
      <div className="flex h-full w-3/5 items-center justify-center">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            name="username"
            type="text"
            placeholder="Username"
            required
            minLength={3}
            maxLength={20}
            className="rounded-md border p-5"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="rounded-md border p-5"
          />
          <button
            disabled={isLoading}
            className="cursor-pointer rounded-md border-0 bg-teal-500 p-5 font-bold text-white disabled:cursor-not-allowed disabled:bg-[#BED9D8]"
          >
            Login
          </button>
          {error && <span className="text-red-500">{error}</span>}
          <Link
            to="/register"
            className="w-max border-b border-b-gray-500 text-sm text-gray-500"
          >
            {"Don't"} you have an account?
          </Link>
        </form>
      </div>
      {/* RIGHT SECTION */}
      <div className="flex w-2/5 items-center justify-center bg-[#fcf5f3]">
        <img src="/bg.png" alt="" className="w-full" />
      </div>
    </div>
  );
}

export default Login;
