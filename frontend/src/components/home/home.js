import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import Navbar from "../navbar/navabar";
export default function HomePage() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div style={styles.container}>
      <Navbar/>
      <div style={styles.body}>
        <h2 style={styles.welcome}>
          Welcome {localStorage.getItem("username") ?? "Guest"} 👋
        </h2>
        <img src="/image.png"/>
        <p style={styles.text}>
          Explore your gossips, share stories, and connect with friends!
        </p>
        <Link to="/gossip" style={styles.dashboardBtn}>
          Go to Gossip →
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    display: "flex",
    flexDirection: "column",
  },
  navbar: {
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    padding: "0px 15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "9%",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#6B8E23",
  },
  navRight: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  link: {
    fontSize: "16px",
    color: "#6B8E23",
    fontWeight: "500",
    textDecoration: "none",
    transition: "color 0.3s ease",
  },
  avatar: {
    backgroundColor: "#6B8E23",
    color: "#fff",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "18px",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    transition: "transform 0.3s ease",
  },
  body: {
    marginTop: "33px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "0px 20px",
  },
  welcome: {
    fontSize: "32px",
    fontWeight: "bold",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "20px",
    textShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  text: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "30px",
    lineHeight: 1.6,
  },
  dashboardBtn: {
    padding: "15px 32px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: "30px",
    textDecoration: "none",
    fontSize: "16px",
    boxShadow: "0 8px 25px rgba(102, 126, 234, 0.4)",
    transition: "all 0.3s ease",
  },
};
