import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  resetTokenMessages,
  signinRequest,
} from "../../redux/slice/auth.slice";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const dispatch = useAppDispatch();
  const { messages, error } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(signinRequest({ form }));
  };

  useEffect(() => {
  if (messages) {
    console.log("inside success useEffect");
    navigate("/home");
  }
  if (error) {
    console.log("error message", error);
    alert(error);
  }
}, [messages, error, navigate, dispatch]);


  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.mainHeading}>Gossip 💬</h1>
        <h2 style={styles.heading}>User Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
          style={styles.input}
        />

        <div style={styles.submitSection}>
          <Link to= "/" style={styles.loginText}>Register →</Link>
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  form: {
    backgroundColor: "#fff",
    padding: "40px 30px 30px",
    borderRadius: "20px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "450px",
    position: "relative",
    overflow: "hidden",
  },
  mainHeading: {
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "bold",
    color: "white",
    marginBottom: "8px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "30px 20px",
    borderRadius: "18px 18px 0 0",
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
  },
  heading: {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "500",
    color: "#555",
    margin: "20px 0",
  },
  input: {
    width: "100%",
    padding: "14px",
    marginBottom: "18px",
    borderRadius: "12px",
    border: "1px solid #ccc",
    fontSize: "16px",
    backgroundColor: "#f8f9fa",
    boxSizing: "border-box",
    transition: "all 0.2s ease-in-out",
  },
  inputFocus: {
    borderColor: "#667eea",
    outline: "none",
    boxShadow: "0 0 0 3px rgba(102, 126, 234, 0.2)",
  },
  submitSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
  },
  loginText: {
    fontSize: "16px",
    color: "#667eea",
    fontWeight: "600",
    textDecoration: "none",
    transition: "all 0.2s ease",
  },
  loginTextHover: {
    color: "#764ba2",
    textDecoration: "underline",
  },
  button: {
    padding: "12px 30px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "16px",
    boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
    transition: "all 0.3s ease",
  },
  buttonHover: {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(102, 126, 234, 0.6)",
  },
};

