import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Gossip 💬</h1>

      <div style={styles.navRight}>
        <NavLink
          to="/home"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.activeLink } : styles.link
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/gossip"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.activeLink } : styles.link
          }
        >
          Gossips
        </NavLink>
        <NavLink
          to="/mygossip"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.activeLink } : styles.link
          }
        >
          My Gossip
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.activeLink } : styles.link
          }
        >
          About
        </NavLink>

        <div style={styles.avatar}>
          {localStorage.getItem("username")?.charAt(0).toUpperCase() ?? "U"}
        </div>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    padding: "0px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "70px",
    position: "sticky",
    top: "0px",
    zIndex: "99",
  },
  logo: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "white",
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
  },
  navRight: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  link: {
    fontSize: "16px",
    color: "white",
    fontWeight: "500",
    textDecoration: "none",
    padding: "8px 16px",
    borderRadius: "8px",
    transition: "all 0.2s ease-in-out",
  },
  activeLink: {
    backgroundColor: "rgba(255,255,255,0.2)",
    fontWeight: "700",
  },
  avatar: {
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "white",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "18px",
    cursor: "pointer",
    border: "2px solid rgba(255,255,255,0.3)",
    transition: "all 0.2s ease-in-out",
  },
};
