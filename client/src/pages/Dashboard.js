// import "./Dashboard.css";

// function Dashboard() {
//   return (
//     <div className="dashboard-container">
//       {/* Sidebar */}
//       <div className="sidebar">
//         <div className="sidebar-logo">Aadhaar Analytics</div>
//         <div className="sidebar-menu">
//           <div className="menu-item active">Dashboard</div>
//           <div className="menu-item">Data Upload</div>
//           <div className="menu-item">Demand Analysis</div>
//           <div className="menu-item">Center Planning</div>
//           <div className="menu-item">Scheduling</div>
//           <div className="menu-item">Reports</div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="main-content">
//         {/* Navbar */}
//         <div className="navbar">
//           <input
//             type="text"
//             className="search-bar"
//             placeholder="Search pincodes, districts..."
//           />
//           <div className="user-info">Admin User</div>
//         </div>

//         {/* Dashboard Body */}
//         <div className="dashboard-body">
//           <div className="dashboard-title">Dashboard</div>
//           <div className="dashboard-subtitle">
//             System overview and key performance indicators
//           </div>

//           {/* KPI Cards */}
//           <div className="kpi-container">
//             <div className="kpi-card">
//               <div className="kpi-title">Total Enrolments</div>
//               <div className="kpi-value">2,34,891</div>
//               <div className="kpi-change">+12.4% vs last week</div>
//             </div>

//             <div className="kpi-card">
//               <div className="kpi-title">High Demand Pincodes</div>
//               <div className="kpi-value">1,247</div>
//               <div className="kpi-change">+8.2% vs last week</div>
//             </div>

//             <div className="kpi-card">
//               <div className="kpi-title">Underserved Regions</div>
//               <div className="kpi-value">342</div>
//               <div className="kpi-change" style={{ color: "red" }}>
//                 -5.1% vs last week
//               </div>
//             </div>

//             <div className="kpi-card">
//               <div className="kpi-title">Active Centers</div>
//               <div className="kpi-value">4,891</div>
//               <div className="kpi-change">+3.7% vs last week</div>
//             </div>
//           </div>

//           {/* Charts Section */}
//           <div className="charts-row">
//             <div className="chart-card">
//               <div className="chart-title">Pincode-wise Demand Intensity</div>
//               <p>Map will be placed here</p>
//             </div>

//             <div className="chart-card">
//               <div className="chart-title">Top States by Demand</div>
//               <p>Bar chart will be placed here</p>
//             </div>
//           </div>

//           <div className="trend-card">
//             <div className="chart-title">Weekly Enrolment Trends</div>
//             <p>Line chart will be placed here</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


import "./Dashboard.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import DataUpload from "./DataUpload";
import DemandAnalysis from "./DemandAnalysis";
import CenterPlanning from "./CenterPlanning";
import Reports from "./Reports";
import Scheduling from "./Scheduling";

function DashboardHome() {
  return (
    <div className="dashboard-body">
      <div className="dashboard-title">Dashboard</div>
      <div className="dashboard-subtitle">
        System overview and key performance indicators
      </div>

      {/* KPI Cards */}
      <div className="kpi-container">
        <div className="kpi-card">
          <div className="kpi-title">Total Enrolments</div>
          <div className="kpi-value">2,34,891</div>
          <div className="kpi-change">+12.4% vs last week</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-title">High Demand Pincodes</div>
          <div className="kpi-value">1,247</div>
          <div className="kpi-change">+8.2% vs last week</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-title">Underserved Regions</div>
          <div className="kpi-value">342</div>
          <div className="kpi-change" style={{ color: "red" }}>
            -5.1% vs last week
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-title">Active Centers</div>
          <div className="kpi-value">4,891</div>
          <div className="kpi-change">+3.7% vs last week</div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts-row">
        <div className="chart-card">
          <div className="chart-title">Pincode-wise Demand Intensity</div>
          <p>Map will be placed here</p>
        </div>

        <div className="chart-card">
          <div className="chart-title">Top States by Demand</div>
          <p>Bar chart will be placed here</p>
        </div>
      </div>

      <div className="trend-card">
        <div className="chart-title">Weekly Enrolment Trends</div>
        <p>Line chart will be placed here</p>
      </div>
    </div>
  );
}

function Dashboard() {
  const location = useLocation();

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-logo">Aadhaar Analytics</div>

        <div className="sidebar-menu">
          <Link
            to="/dash"
            className={`menu-item ${
              location.pathname === "/dash" ? "active" : ""
            }`}
          >
            Dashboard
          </Link>

          <Link
            to="/dash/upload"
            className={`menu-item ${
              location.pathname.includes("upload") ? "active" : ""
            }`}
          >
            Data Upload
          </Link>

          <Link
            to="/dash/demand"
            className={`menu-item ${
              location.pathname.includes("demand") ? "active" : ""
            }`}
          >
            Demand Analysis
          </Link>

          <Link to="/dash/center" className="menu-item">Center Planning</Link>
          <Link to="/dash/scheduling" className="menu-item">Scheduling</Link>
          <Link to="/dash/reports" className="menu-item">Reports</Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <div className="navbar">
          <input
            type="text"
            className="search-bar"
            placeholder="Search pincodes, districts..."
          />
          <div className="user-info">Admin User</div>
        </div>

        {/* Dynamic Page Content */}
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="upload" element={<DataUpload />} />
          <Route path="demand" element={<DemandAnalysis />} />
          <Route path="center" element={<CenterPlanning />} />
        <Route path="reports" element={<Reports />} />
        <Route path="scheduling" element={<Scheduling />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;