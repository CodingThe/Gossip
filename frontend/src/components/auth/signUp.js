import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  resetTokenMessages,
  signupRequest,
} from "../../redux/slice/auth.slice";
export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useAppDispatch();
  const { message, error } = useAppSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleSubmit = async (e) => {
    dispatch(signupRequest({ form }));
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 style={styles.mainHeading}>Gossip 💬</h1>
        <h2 style={styles.heading}>User Registration</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
          style={styles.input}
        />

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
          <span style={styles.loginText}>Login →</span>
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
    height: "100vh",
    backgroundColor: "#f2f6fc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    backgroundColor: "#fff",
    padding: "30px 25px",
    borderRadius: "12px",
    boxShadow: "0 0 12px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
  },
  mainHeading: {
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "bold",
    color: "#6B8E23",
    marginBottom: "10px",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
    boxSizing: "border-box",
  },
  submitSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  loginText: {
    fontSize: "16px",
    color: "#6B8E23",
    fontWeight: "500",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#6B8E23",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
