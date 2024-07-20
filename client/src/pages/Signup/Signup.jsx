import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";

const Signup = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const togglePassword = () => (setShowPassword((prev) => !prev));
  const toggleConfirmPassword = () => (setShowConfirmPassword((prev) => !prev));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username) {
      setError("Please enter username");
      return;
    }

    if (!password) {
      setError("Please enter valid password");
      return;
    }

    if (!email) {
      setError("Please enter valid email");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password not matching");
      return;
    }

    setError("");

  }


  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center mt-28">
        <div className="rounded border w-96 bg-white px-7 py-10 hover:shadow-lg transition-all">

          <form onSubmit={handleSubmit} className="">
            <h4 className="text-2xl font-semibold mb-7">Signup</h4>

            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="input-box" />
            <input required value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="input-box" />

            <div className="flex items-center justify-center">
              <input value={password} onChange={(e) => setpassword(e.target.value)} type={showPassword ? "password" : "text"} placeholder="Password" className="input-box" />
              <div className="absolute md:ml-[25%] px-3 py-3 rounded-full cursor-pointer hover:bg-slate-100 mb-4 bg-white" onClick={togglePassword}>
                {showPassword ? <FaRegEye /> : <FaEyeSlash />}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type={showConfirmPassword ? "password" : "text"} placeholder="Confirm-Password" className="input-box" />
              <div className="absolute md:ml-[25%] px-3 py-3 rounded-full cursor-pointer hover:bg-slate-100 mb-4 bg-white" onClick={toggleConfirmPassword}>
                {showConfirmPassword ? <FaRegEye /> : <FaEyeSlash />}
              </div>
            </div>

            {error && (<h6 className="text-red-700 text-sm">{error}</h6>)}

            <button type="submit" className="btn-primary">Create Account</button>

            <p className="text-sm text-center mt-4">
              Already have an account? {""}
              <Link to={"/login"} className="font-medium underline text-primary">
                login
              </Link>
            </p>

          </form>
        </div>
      </div>
    </>
  )
}

export default Signup;