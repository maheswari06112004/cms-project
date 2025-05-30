import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
// import AuthContext from "../context/AuthContext";


export default function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    department: "",
    country: "",
    hobby: ""
  });
  // const{register}=useContext(AuthContext);  
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    // resgister(email,password); 
    
    // Simulate API call
    setTimeout(() => {
      console.log('Sign up data:', formData);
      setIsLoading(false);
      // Handle sign up logic here
      Swal.fire({
      title: "Sign Up Successful!",
      text: "Welcome to the CMS Platform!",
      icon: "success",
      confirmButtonText: "Continue"
    });
    }, 1000);
    
  }

  const inputStyle = {
    borderColor: "#e6e6fa",
    boxShadow: "0 1px 4px 0 rgba(120, 81, 169, 0.08)",
  };

  return (
    <div className="max-w-md w-full mx-auto py-8 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full p-6 sm:p-8 rounded-2xl shadow-2xl border space-y-4 sm:space-y-6"
        style={{
          background: "linear-gradient(135deg, #e6e6fa 0%, #f8f6ff 60%, #d1c4e9 100%)",
          boxShadow: "0 8px 32px 0 rgba(120, 81, 169, 0.18), 0 1.5px 4px rgba(0,0,0,0.08)",
          borderColor: "#e6e6fa",
          backdropFilter: "blur(4px)",
        }}
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-4 sm:mb-6 text-purple-800 drop-shadow-lg">
          Create Account 😉
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white shadow-sm transition-all"
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white shadow-sm transition-all"
            style={inputStyle}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white shadow-sm transition-all"
            style={inputStyle}
          />

          <input
            type="text"
            name="department"
            placeholder="Enter department"
            value={formData.department}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white shadow-sm transition-all"
            style={inputStyle}
          />

          <input
            type="text"
            name="country"
            placeholder="Enter country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white shadow-sm transition-all"
            style={inputStyle}
          />

          <input
            type="text"
            name="hobby"
            placeholder="Enter hobby"
            value={formData.hobby}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white shadow-sm transition-all"
            style={inputStyle}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-white hover:bg-purple-50 disabled:bg-gray-100 text-purple-800 hover:text-purple-900 px-4 py-3 rounded-lg font-semibold transition-all shadow-md border border-purple-200"
        >
          {isLoading ? 'Creating Account...' : 'Create Account'}
        </button>

        <div className="text-center">
          <p className="text-purple-800">
            Already have an account?{' '}
            <Link to="/sign-in" className="font-semibold hover:underline">
              Sign in here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}