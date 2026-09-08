import { useEffect, useState } from "react";

function ViewVotes() {
  const [voteDetails, setVoteDetails] = useState({});

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("voteDetails")) || {};

    setVoteDetails(data);
  }, []);

  const getCandidateName = (candidate) => {
    if (candidate === "candidate1") {
      return "Candidate 1";
    }

    if (candidate === "candidate2") {
      return "Candidate 2";
    }

    if (candidate === "candidate3") {
      return "Candidate 3";
    }

    return "Unknown";
  };

  const users = Object.keys(voteDetails);

  return (
    <div className="form-page">
      <div className="vote-box">

        <h1>📊 Voting Details</h1>

        <p className="subtitle">
          View who voted for which candidate
        </p>

        {users.length === 0 ? (
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
                {users.map((user, index) => (
                  <tr key={user}>
                    <td>{index + 1}</td>

                    <td>{user}</td>

                    <td>
                      {getCandidateName(
                        voteDetails[user]
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>
        )}

      </div>
    </div>
  );
}

export default ViewVotes;