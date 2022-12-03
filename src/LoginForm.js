import React, { useState } from "react";

function LoginForm() {
  const user_data = {
    email: "admin@gmail.com",
    pass: "admin",
  };

  const [user, setUser] = useState({ name: "", email: "", pass: "" });
  const [islogin, setIsLogin] = useState(false);
  const [error, setError] = useState("");
  const loginHandler = (e) => {
    e.preventDefault();

    if(user.email === user_data.email && user.pass === user_data.pass) {
        setIsLogin(true)
    } else {
        setError('Data not match')
    }
    
  };

  const logoutHandler = () => {
    setUser({ name: "", email: "", pass: "" });
    setIsLogin(false)
  };

  return (
    <div>
      { islogin ? (
        <div className="dashboard_wrap">
          <div className="Welcome">Welcome {user.name}</div>
          <div onClick={logoutHandler}>Logout</div>
        </div>
      ) : (
        <div className="login_wrap">
        <div>{error}</div>
        <form onSubmit={loginHandler}>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            name="pass"
            value={user.pass}
            onChange={(e) => setUser({ ...user, pass: e.target.value })}
          />
          <input type="submit" value="Login" />
        </form>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
