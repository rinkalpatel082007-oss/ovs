import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Vote() {
  const [candidate, setCandidate] = useState("");
  const navigate = useNavigate();

  const handleVote = (e) => {
    e.preventDefault();

    // Get current logged-in user
    const currentUser = localStorage.getItem("currentUser");

    if (!currentUser) {
      alert("Please login first!");
      navigate("/");
      return;
    }

    // Get users who already voted
    let votedUsers =
      JSON.parse(localStorage.getItem("votedUsers")) || {};

    // Check if this user already voted
    if (votedUsers[currentUser] === true) {
      alert("You have already voted!");
      return;
    }

    // Check candidate selection
    if (candidate === "") {
      alert("Please select a candidate");
      return;
    }

    // Get existing votes
    let votes =
      JSON.parse(localStorage.getItem("votes")) || {
        candidate1: 0,
        candidate2: 0,
        candidate3: 0,
      };

    // Add vote
    votes[candidate]++;

    // Save total votes
    localStorage.setItem(
      "votes",
      JSON.stringify(votes)
    );

    // Save user-wise vote details
    let voteDetails =
      JSON.parse(localStorage.getItem("voteDetails")) || {};

    voteDetails[currentUser] = candidate;

    localStorage.setItem(
      "voteDetails",
      JSON.stringify(voteDetails)
    );

    // Mark user as voted
    votedUsers[currentUser] = true;

    localStorage.setItem(
      "votedUsers",
      JSON.stringify(votedUsers)
    );

    alert("Vote submitted successfully!");

    setCandidate("");
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");

    alert("Logout Successful!");

    navigate("/");
  };

  return (
    <div className="form-page">

      <div className="vote-box">

        <h1>🗳️ Cast Your Vote</h1>

        <p className="subtitle">
          Select one candidate and confirm your vote
        </p>

        <form onSubmit={handleVote}>

          <div className="candidate-list">

            {/* Neha Patel */}
            <label className="candidate-option">
              <input
                type="radio"
                name="candidate"
                value="candidate1"
                checked={candidate === "candidate1"}
                onChange={(e) =>
                  setCandidate(e.target.value)
                }
              />
              Neha Patel
            </label>

            {/* Pratik Patil */}
            <label className="candidate-option">
              <input
                type="radio"
                name="candidate"
                value="candidate2"
                checked={candidate === "candidate2"}
                onChange={(e) =>
                  setCandidate(e.target.value)
                }
              />
              Pratik Patil
            </label>

            {/* Aashish Patel */}
            <label className="candidate-option">
              <input
                type="radio"
                name="candidate"
                value="candidate3"
                checked={candidate === "candidate3"}
                onChange={(e) =>
                  setCandidate(e.target.value)
                }
              />
              Aashish Patel
            </label>

          </div>

          <button type="submit">
            🗳️ Confirm Vote
          </button>

        </form>

        <button
          className="vote-logout"
          onClick={handleLogout}
        >
          🔐 Logout
        </button>

      </div>

    </div>
  );
}

export default Vote;