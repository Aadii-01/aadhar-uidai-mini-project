import React from "react";
import "./DemandAnalysis.css";

function DemandAnalysis() {
  return (
    <div className="demand-container">

      <div className="page-header">
        <h2>Demand Analysis</h2>
        <p>Pincode-level enrolment demand patterns</p>
      </div>

      {/* Filters */}
      <div className="filters">
        <select><option>All States</option></select>
        <select><option>All Districts</option></select>
        <input type="text" placeholder="Pincode..." />
        <select><option>Last 30 Days</option></select>
      </div>

      {/* Top Section */}
      <div className="top-section">
        <div className="heatmap">
          <h4>Demand Heatmap</h4>
          <div className="heatmap-box">[ India Heatmap Placeholder ]</div>
        </div>

        <div className="zone-distribution">
          <h4>Demand Zone Distribution</h4>
          <div className="donut-chart">[ Donut Chart Placeholder ]</div>

          <div className="legend">
            <p><span className="dot high"></span> High Demand - 1,247</p>
            <p><span className="dot medium"></span> Medium Demand - 2,340</p>
            <p><span className="dot low"></span> Low Demand - 891</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar Chart */}
      <div className="bar-section">
        <h4>District-wise Enrolment Breakdown</h4>
        <div className="bar-chart">
          [ Bar Chart Placeholder ]
        </div>
      </div>

    </div>
  );
}

export default DemandAnalysis;