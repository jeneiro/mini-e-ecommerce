import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { login } from "../redux/auth";
import { RootState } from "../redux/store";
import { useAppDispatch } from "../utilities/custom-dispatch-hook";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/login-page.png";
import "../styles/login.css";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { token, loading, error } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate, token]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h2>Login</h2>

        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="xyz@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit" disabled={loading}>
            {" "}
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {token && <p>Logged in! Token: {token}</p>}
      </div>
      <div className="image-container">
        <img src={loginImage} alt="Login" />
      </div>
    </div>
  );
};

export default Login;
