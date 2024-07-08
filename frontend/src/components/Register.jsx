import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
              <br />
              <span>Confirm Password</span>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-80 px-3 py-1 border outline-none rounded-md"
                {...register("confirmPassword", { required: true })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500">Confirm password is required</p>
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
