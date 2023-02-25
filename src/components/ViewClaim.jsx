import React from "react";

function ViewClaim() {
  return (
    <div>
      <div>
        <h3>View Claim</h3>
      </div>
      <div>
        <table>
          <tr>
            <th>ClaimID</th>
            <th>InsuranceID</th>
            <th>InsuranceType</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Purpose</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>2023</td>
            <td>1016</td>
            <td>Travel</td>
            <td>Irene</td>
            <td>Lim</td>
            <td>2023-02-11</td>
            <td>100.00</td>
            <td>Overseas Injury</td>
            <td>Approved</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ViewClaim;
