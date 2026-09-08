import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* Navbar */}
      <nav className="home-navbar">
        <div className="home-logo">
          🗳️ ONLINE VOTING SYSTEM
        </div>

        <div className="home-nav-links">
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/result">Result</Link>
          <Link to="/admin-login">Admin</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="home-hero">

        <div className="hero-text">
          <span className="welcome-text">
            WELCOME TO ONLINE VOTING SYSTEM
          </span>

          <h1>
            Your Vote, <br />
            <span>Your Voice.</span>
          </h1>

          <p>
            A simple, secure and convenient Online Voting System.
            Cast your vote from anywhere and make your voice count.
          </p>

          <div className="home-buttons">
            <Link to="/register" className="home-btn primary-btn">
              Get Started →
            </Link>

            <Link to="/login" className="home-btn outline-btn">
              Login
            </Link>
          </div>
        </div>

        <div className="hero-voting">
          <div className="voting-circle">
            🗳️
          </div>

          <div className="floating-card card-one">
            ✓ Secure Voting
          </div>

          <div className="floating-card card-two">
            🔒 Safe & Easy
          </div>
        </div>

      </section>
      {/* How It Works */}

<section className="how-it-works">

  <h2>How It Works?</h2>

  <p className="feature-subtitle">
    Follow these simple steps to cast your vote.
  </p>

  <div className="steps-container">

    <div className="step-card">
      <div className="step-number">1</div>
      <h3>Register</h3>
      <p>Create your voter account with your details.</p>
    </div>

    <div className="step-card">
      <div className="step-number">2</div>
      <h3>Login</h3>
      <p>Login using your registered email and password.</p>
    </div>

    <div className="step-card">
      <div className="step-number">3</div>
      <h3>Cast Vote</h3>
      <p>Select your candidate and confirm your vote.</p>
    </div>

    <div className="step-card">
      <div className="step-number">4</div>
      <h3>View Result</h3>
      <p>Check the latest election results.</p>
    </div>

  </div>

</section>
      {/* Features */}
      <section className="home-features">

        <h2>Why Choose Online voting System?</h2>

        <p className="feature-subtitle">
          Everything you need for a simple online election.
        </p>

        <div className="home-feature-container">

          <div className="home-feature-card">
            <div className="feature-big-icon">🔒</div>
            <h3>Secure</h3>
            <p>
              Your voting information is protected.
            </p>
          </div>

          <div className="home-feature-card">
            <div className="feature-big-icon">⚡</div>
            <h3>Fast & Easy</h3>
            <p>
              Vote quickly with a simple process.
            </p>
          </div>

          <div className="home-feature-card">
            <div className="feature-big-icon">📊</div>
            <h3>Live Results</h3>
            <p>
              View election results easily.
            </p>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>© 2026 Online Voting System | OVS</p>
      </footer>

    </div>
  );
}

export default Home;