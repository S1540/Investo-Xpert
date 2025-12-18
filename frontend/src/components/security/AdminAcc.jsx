import React, { useState } from "react";

const AdminAcc = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [data, setData] = useState({});
  const [loginValue, setLoginValue] = useState({});
  const [signupValue, setSignupValue] = useState({});

  /*
  ================================
           login or signup  
  ================================
  */
  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLoginValue({ ...loginValue, [name]: value });
  };

  const handleSignup = (e) => {
    const { name, value } = e.target;
    setSignupValue({ ...signupValue, [name]: value });
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(loginValue),
      });
      const data = await response.json();
      if (data.sucess) window.location.href = "/admin";
    } catch (error) {
      console.log(error);
    }
  };

  const submitSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(signupValue),
      });
      const data = await response.json();
      console.log(data);

      window.location.href = "/admin/login";
    } catch (error) {
      console.log(error);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded shadow">
        {isLogin ? (
          // Login Form
          <>
            <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
            <form onSubmit={submitLogin} className="flex flex-col gap-4">
              <input
                type="email"
                name="email"
                onChange={handleLogin}
                value={loginValue.email}
                required
                placeholder="Enter Your Email"
                className="border border-pink-600 px-4 py-2 outline-none rounded"
              />
              <input
                type="password"
                name="password"
                onChange={handleLogin}
                value={loginValue.password}
                required
                placeholder="Enter Your Password"
                className="border border-pink-600 px-4 py-2 outline-none rounded"
              />
              <button
                type="submit"
                className="bg-pink-600 text-white py-2 rounded"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-center text-sm">
              Don't have an account?{" "}
              <button className="text-pink-600 underline" onClick={toggleForm}>
                Signup
              </button>
            </p>
          </>
        ) : (
          // Signup Form
          <>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Admin Signup
            </h2>
            <form onSubmit={submitSignup} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                onChange={handleSignup}
                value={signupValue.name}
                required
                placeholder="Enter Your Name"
                className="border border-pink-600 px-4 py-2 outline-none rounded"
              />
              <input
                type="email"
                name="email"
                onChange={handleSignup}
                value={signupValue.email}
                required
                placeholder="Enter Your Email"
                className="border border-pink-600 px-4 py-2 outline-none rounded"
              />
              <input
                type="password"
                name="password"
                onChange={handleSignup}
                value={signupValue.password}
                required
                placeholder="Enter Password"
                className="border border-pink-600 px-4 py-2 outline-none rounded"
              />
              <input
                type="password"
                name="Confirm-password"
                onChange={handleSignup}
                value={signupValue.password}
                required
                placeholder="Confirm Password"
                className="border border-pink-600 px-4 py-2 outline-none rounded"
              />
              <button
                type="submit"
                className="bg-pink-600 text-white py-2 rounded"
              >
                Signup
              </button>
            </form>
            <p className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <button className="text-pink-600 underline" onClick={toggleForm}>
                Login
              </button>
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default AdminAcc;
