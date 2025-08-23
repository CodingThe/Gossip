import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav style={styles.navbar}>
        <h1 style={styles.logo}>Gossip 💬</h1>

        <div style={styles.navRight}>
          <Link to="/home" style={styles.link}>
            Home
          </Link>
          <Link to="/gossip" style={styles.link}>
            Gossips
          </Link>
          <Link to="/mygossip" style={styles.link}>
            My Gossip
          </Link>
          <Link to="/about" style={styles.link}>
            About
          </Link>

          <div style={styles.avatar}>
            {localStorage.getItem("username")?.charAt(0).toUpperCase() ?? "U"}
          </div>
        </div>
      </nav>
    </>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    padding: "0px 15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "9%",
    position: "sticky",
    top: "0px",
    zIndex: "99",
    overflow: "hidden"
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
  },
  body: {
    marginTop: "33px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
  },
  welcome: {
    fontSize: "28px",
    color: "#333",
    marginBottom: "10px",
  },
  text: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "20px",
  },
  dashboardBtn: {
    padding: "12px 24px",
    backgroundColor: "#6B8E23",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: "6px",
    textDecoration: "none",
  },
};
