import { useState } from "react";

function Result() {
  const [votes] = useState(
    JSON.parse(localStorage.getItem("votes")) || {
      candidate1: 0,
      candidate2: 0,
      candidate3: 0,
    }
  );

  const totalVotes =
    votes.candidate1 +
    votes.candidate2 +
    votes.candidate3;

  const maxVotes = Math.max(
    votes.candidate1,
    votes.candidate2,
    votes.candidate3
  );

  return (
    <div className="form-page">
      <div className="result-box">

        <h1>🏆 Election Result</h1>

        <p className="result-subtitle">
          Current voting results
        </p>

        <div className="result-cards">

          <div className="result-card">
            <h2>Candidate 1</h2>
            <p>{votes.candidate1} Votes</p>
            {votes.candidate1 === maxVotes && maxVotes > 0 && (
              <span>🏆 Leading</span>
            )}
          </div>

          <div className="result-card">
            <h2>Candidate 2</h2>
            <p>{votes.candidate2} Votes</p>
            {votes.candidate2 === maxVotes && maxVotes > 0 && (
              <span>🏆 Leading</span>
            )}
          </div>

          <div className="result-card">
            <h2>Candidate 3</h2>
            <p>{votes.candidate3} Votes</p>
            {votes.candidate3 === maxVotes && maxVotes > 0 && (
              <span>🏆 Leading</span>
            )}
          </div>

        </div>

        <div className="result-total">
          <h2>Total Votes: {totalVotes}</h2>
        </div>

      </div>
    </div>
  );
}

export default Result;