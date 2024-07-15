import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css";
import LoadingIndicator from "./LoadingIndicator";

function Form({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Form name determined by method
  const name = method === "login" ? "Login" : "Register";

  // Function handling form submission
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      // Make a POST request to the provided route with username and password
      const res = await api.post(route, { username, password });
      // const res2 = await api.post("user/data/", { username, password });
      console.log(res);
      if (method === "login") {
        localStorage.setItem("currentUserId", res.data.user.id);
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);

        navigate("/");
      } else {
        // If registering, navigate to the login page
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form name="main-form" onSubmit={handleSubmit} className="form-container">
      <h1>{name}</h1>
      <input
        className="form-input"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        className="form-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      {loading && <LoadingIndicator />}

      <button className="form-button" type="submit" onSubmit={handleSubmit}>
        {name}
      </button>
    </form>
  );
}

export default Form;
