import "./CenterPlanning.css";

function CenterPlanning() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h2>Center Planning</h2>
          <p>Optimize Aadhaar enrolment center placement</p>
        </div>
        <button className="primary-btn">+ Add New Center</button>
      </div>

      <div className="card">
        <div className="card-title">Center Distribution Map</div>
        <div className="map-placeholder">Map will be placed here</div>
      </div>

      <div className="two-column">
        <div className="card">
          <div className="card-title">⚠ Underserved Areas</div>

          <div className="list-item">
            <div>
              <strong>Barabanki, UP</strong>
              <p>Pop: 34,500 · 12 pincodes</p>
            </div>
            <span className="tag high">High</span>
          </div>

          <div className="list-item">
            <div>
              <strong>Darbhanga, Bihar</strong>
              <p>Pop: 28,200 · 8 pincodes</p>
            </div>
            <span className="tag critical">Critical</span>
          </div>

          <div className="list-item">
            <div>
              <strong>Jaisalmer, Rajasthan</strong>
              <p>Pop: 15,800 · 5 pincodes</p>
            </div>
            <span className="tag high">High</span>
          </div>
        </div>

        <div className="card">
          <div className="card-title">✔ Overserved Areas</div>

          <div className="list-item">
            <div>
              <strong>Connaught Place, Delhi</strong>
              <p>8 centers · 32% utilization</p>
            </div>
            <span className="tag low">Low Utilization</span>
          </div>

          <div className="list-item">
            <div>
              <strong>Andheri, Mumbai</strong>
              <p>6 centers · 41% utilization</p>
            </div>
            <span className="tag low">Low Utilization</span>
          </div>

          <div className="list-item">
            <div>
              <strong>Koramangala, Bangalore</strong>
              <p>5 centers · 38% utilization</p>
            </div>
            <span className="tag low">Low Utilization</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CenterPlanning;