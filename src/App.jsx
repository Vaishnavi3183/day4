import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  const handleTest = () => {
    setMessage("🎉 Application is working successfully!");
  };

  const scrollToStatus = () => {
    document.getElementById("status")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h2>DevflowCICD</h2>
        <span>CI/CD Demo</span>
      </nav>

      {/* Hero */}
      <main className="hero">
        <div className="card">
          <div className="badge">🚀 React CI/CD Demo</div>

          <h1>Build. Test. Deploy.</h1>

          <p>
            A modern React application created to demonstrate a simple
            Continuous Integration and Continuous Deployment workflow.
            Push your code, run your pipeline, and ship with confidence.
          </p>

          <div className="buttons">
            <button onClick={handleTest}>
              Test Application
            </button>

            <button className="secondary" onClick={scrollToStatus}>
              View Pipeline
            </button>
          </div>

          {message && (
            <p
              style={{
                marginTop: "25px",
                color: "#4ade80",
                fontWeight: "600",
              }}
            >
              {message}
            </p>
          )}
        </div>
      </main>

      {/* Pipeline Status */}
      <section id="status" className="status-section">
        <h2>Pipeline Status</h2>

        <div className="status-grid">
          <div className="status-card">
            <span>✓</span>
            <h3>Source</h3>
            <p>Code pushed successfully</p>
          </div>

          <div className="status-card">
            <span>✓</span>
            <h3>Build</h3>
            <p>React application builds successfully</p>
          </div>

          <div className="status-card">
            <span>✓</span>
            <h3>Deploy</h3>
            <p>Application is ready for deployment</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>DevFlow • React CI/CD Demo</p>
      </footer>
    </div>
  );
}

export default App