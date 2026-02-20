import "./Reports.css";

function Reports() {
  return (
    <div className="page-container">
      <h2>Reports & Export</h2>
      <p>Generate and download analytical reports</p>

      <div className="card">
        <div className="report-row">
          <select>
            <option>Demand Analysis</option>
          </select>
          <select>
            <option>All India</option>
          </select>
          <select>
            <option>Last 30 Days</option>
          </select>
          <button className="primary-btn">Generate Report</button>
        </div>
      </div>

      <div className="card">
        <div className="card-title">Previously Generated Reports</div>
        <table>
          <thead>
            <tr>
              <th>Report Name</th>
              <th>Date</th>
              <th>Type</th>
              <th>Size</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monthly Demand Report - Dec 2025</td>
              <td>2025-12-31</td>
              <td>PDF</td>
              <td>2.4 MB</td>
              <td>Download</td>
            </tr>
            <tr>
              <td>Center Utilization Analysis Q4</td>
              <td>2025-12-28</td>
              <td>PDF</td>
              <td>3.1 MB</td>
              <td>Download</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Reports;