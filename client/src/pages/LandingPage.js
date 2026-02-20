import "./LandingPage.css";

function Landing() {
  return (
    <div className="landing-container">
      {/* Left Orange Panel */}
      <div className="left-panel">
        <div className="left-content">
          <div className="shield">🛡️</div>
          <h1>Aadhaar Enrolment Analytics Platform</h1>
          <p>
            Decision support system for optimizing Aadhaar enrolment center
            placement, scheduling, and resource allocation across India.
          </p>
          <div className="footer-text">
            UIDAI • Government of India • Ministry of Electronics & IT
          </div>
        </div>
      </div>

      {/* Right Login Panel */}
      <div className="right-panel">
        <div className="login-box">
          <h2>Welcome back</h2>
          <p className="subtext">
            Sign in to access the analytics platform
          </p>

          <label>Email Address</label>
          <input type="email" placeholder="admin@uidai.gov.in" />

          <label>Password</label>
          <input type="password" placeholder="••••••••" />

          <div className="login-options">
            <div>
              <input type="checkbox" /> Remember me
            </div>
            <span className="forgot">Forgot password?</span>
          </div>

          <button className="login-btn">Sign In</button>

          <p className="copyright">
            © 2026 UIDAI · Government of India · All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;