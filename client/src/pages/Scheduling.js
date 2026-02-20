import "./Scheduling.css";

function Scheduling() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h2>Scheduling Optimization</h2>
          <p>Manage operating hours and capacity planning</p>
        </div>
      </div>

      <div className="card">
        <div className="card-title">Weekly Demand Heatmap</div>
        <div className="heatmap">
          <div className="heat high"></div>
          <div className="heat medium"></div>
          <div className="heat low"></div>
          <div className="heat high"></div>
          <div className="heat medium"></div>
        </div>
      </div>

      <div className="two-column">
        <div className="card small">
          <h4>Avg Operating Hours</h4>
          <h2>8.2 hrs/day</h2>
        </div>

        <div className="card small">
          <h4>Peak Hour</h4>
          <h2>11:00 AM</h2>
        </div>

        <div className="card small">
          <h4>Busiest Day</h4>
          <h2>Saturday</h2>
        </div>
      </div>
    </div>
  );
}

export default Scheduling;