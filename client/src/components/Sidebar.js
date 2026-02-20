import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{
      width: "220px",
      height: "100vh",
      background: "#0f172a",
      color: "white",
      paddingTop: "20px"
    }}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link to="/" style={linkStyle}>Landing</Link></li>
        <li><Link to="/dashboard" style={linkStyle}>Dashboard</Link></li>
        <li><Link to="/upload" style={linkStyle}>Data Upload</Link></li>
        <li><Link to="/analysis" style={linkStyle}>Demand Analysis</Link></li>
      </ul>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  display: "block",
  padding: "12px 20px"
};

export default Sidebar;