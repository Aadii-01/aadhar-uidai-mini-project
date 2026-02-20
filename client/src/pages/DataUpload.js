import React from "react";
import "./DataUpload.css";

function DataUpload() {
  return (
    <div className="dataupload-container">

      <div className="page-header">
        <h2>Data Upload & Management</h2>
        <p>Upload and manage enrolment datasets</p>
      </div>

      {/* Upload Box */}
      <div className="upload-box">
        <div className="upload-icon">⬆</div>
        <p className="upload-text">Drop your CSV or Excel file here</p>
        <p className="upload-subtext">Supports .csv, .xlsx up to 50MB</p>
        <button className="browse-btn">Browse Files</button>
      </div>

      {/* Stats */}
      <div className="stats-container">
        <div className="stat-card">
          <p>Valid Records</p>
          <h3>12,456</h3>
        </div>
        <div className="stat-card warning">
          <p>Warnings</p>
          <h3>234</h3>
        </div>
        <div className="stat-card error">
          <p>Errors</p>
          <h3>18</h3>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-section">
        <div className="table-controls">
          <input type="text" placeholder="Search records..." />
          <select>
            <option>All States</option>
          </select>
          <select>
            <option>All Districts</option>
          </select>
          <button className="filter-btn">Filter</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Pincode</th>
              <th>District</th>
              <th>State</th>
              <th>Enrolments</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>110001</td>
              <td>New Delhi</td>
              <td>Delhi</td>
              <td>1,234</td>
              <td>2025-12-15</td>
              <td><span className="status valid">Valid</span></td>
            </tr>
            <tr>
              <td>400001</td>
              <td>Mumbai</td>
              <td>Maharashtra</td>
              <td>2,456</td>
              <td>2025-12-14</td>
              <td><span className="status valid">Valid</span></td>
            </tr>
            <tr>
              <td>600001</td>
              <td>Chennai</td>
              <td>Tamil Nadu</td>
              <td>890</td>
              <td>2025-12-14</td>
              <td><span className="status warning">Warning</span></td>
            </tr>
            <tr>
              <td>560001</td>
              <td>Bangalore</td>
              <td>Karnataka</td>
              <td>0</td>
              <td>2025-12-13</td>
              <td><span className="status error">Error</span></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default DataUpload;