import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const votes =
    JSON.parse(localStorage.getItem("votes")) || {
      candidate1: 0,
      candidate2: 0,
      candidate3: 0,
    };

  // User-wise voting details
  const voteDetails =
    JSON.parse(localStorage.getItem("voteDetails")) || {};

  const totalVotes =
    votes.candidate1 +
    votes.candidate2 +
    votes.candidate3;

  // Candidate names
  const getCandidateName = (candidate) => {
    if (candidate === "candidate1") {
      return "Neha Patel";
    }

    if (candidate === "candidate2") {
      return "Pratik Patil";
    }

    if (candidate === "candidate3") {
      return "Aashish Patel";
    }

    return "Unknown";
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");

    alert("Admin Logout Successful!");

    navigate("/");
  };

  return (
    <div className="form-page">

      <div className="admin-dashboard">

        <h1>🛡️ Admin Dashboard</h1>

        <h3>Election Results</h3>

        {/* Candidate Results */}
        <div className="dashboard-cards">

          <div className="dashboard-card">
            <h2>{votes.candidate1}</h2>
            <p>Neha Patel</p>
          </div>

          <div className="dashboard-card">
            <h2>{votes.candidate2}</h2>
            <p>Pratik Patil</p>
          </div>

          <div className="dashboard-card">
            <h2>{votes.candidate3}</h2>
            <p>Aashish Patel</p>
          </div>

        </div>

        {/* Total Votes */}
        <div className="total-votes">
          <h2>Total Votes: {totalVotes}</h2>
        </div>

        {/* User Voting Details */}
        <div className="voting-details">

          <h2>👥 User Voting Details</h2>

          {Object.keys(voteDetails).length === 0 ? (

            <p>No votes submitted yet.</p>

          ) : (

            <div className="vote-table-container">

              <table className="vote-table">

                <thead>
                  <tr>
                    <th>No.</th>
                    <th>User Email</th>
                    <th>Voted Candidate</th>
                  </tr>
                </thead>

                <tbody>

                  {Object.keys(voteDetails).map(
                    (user, index) => (

                      <tr key={user}>

                        <td>
                          {index + 1}
                        </td>

                        <td>
                          {user}
                        </td>

                        <td>
                          {getCandidateName(
                            voteDetails[user]
                          )}
                        </td>

                      </tr>

                    )
                  )}

                </tbody>

              </table>

            </div>

          )}

        </div>

        {/* Buttons */}
        <div className="admin-buttons">

          <button
            onClick={() => navigate("/")}
          >
            🏠 Home
          </button>

          <button
            onClick={() => navigate("/vote")}
          >
            🗳️ Vote Page
          </button>

          <button
            onClick={handleLogout}
          >
            🔐 Logout
          </button>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;