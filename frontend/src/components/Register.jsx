import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/register", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          alert("Register Succesfull");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Error:" + err);
      });
  };

  return (
    <div>
      <dialog id="register_modal" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("register_modal").close()}
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Register</h3>
            <div className="mt-4 space-y-1 flex flex-col">
              <span>Name</span>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-80 px-3 py-1 border outline-none rounded-md"
                {...register("name", { required: true })}
              />
              {errors.email && <p className="text-red-500">Name is required</p>}
              <br />
              <span>Email</span>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border outline-none rounded-md"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500">Email is required</p>
              )}
              <br />
              <span>Password</span>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border outline-none rounded-md"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-red-500">Password is required</p>
              )}
            </div>
            <div className="mt-4 flex justify-around">
              <button
                type="submit"
                className="bg-primary text-white rounded-md py-2 px-3"
              >
                Register
              </button>
              <p>
                Already have an account?
                <span
                  className="text-primary underline cursor-pointer"
                  onClick={() => {
                    document.getElementById("register_modal").close();
                    document.getElementById("my_modal_3").showModal();
                  }}
                >
                  Login
                </span>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Register;
