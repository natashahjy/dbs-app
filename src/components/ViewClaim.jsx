import React, { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { Auth } from 'aws-amplify';

function claimData(
  ClaimID,
  InsuranceID,
  InsuranceType,
  FirstName,
  LastName,
  Date,
  Amount,
  Purpose,
  Status
) {
  return {
    ClaimID,
    InsuranceID,
    InsuranceType,
    FirstName,
    LastName,
    Date,
    Amount,
    Purpose,
    Status,
  };
}

const rows = [
  claimData(
    "2023",
    "1016",
    "Travel",
    "Irene",
    "Lim",
    "2023-02-11",
    100.0,
    "Overseas Injury",
    "Approved"
  ),
];

function ViewClaim() {
  const [claim, setClaim] = useState([]);
  const { attributes } = Auth.currentAuthenticatedUser();
  console.log(attributes)

  const fetchClaimData = () => {
    return fetch("https://claimdata.com/insuranceid")
      .then((response) => response.json())
      .then((data) => setClaim(data));
  };

  useEffect(()=> {
    fetchClaimData();
  },[])

  return (
    
    <div>
      <div>
        <h3>View Claim</h3>
      </div>
      <div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ClaimID</TableCell>
                <TableCell>InsuranceID</TableCell>
                <TableCell>InsuranceType</TableCell>
                <TableCell>FirstName</TableCell>
                <TableCell>LastName</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Purpose</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {claim && claim.length > 0 && claim.map((claimObj, index) => (
                <TableCell align="right">{claim.ClaimID}</TableCell>
              ))}
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{row.ClaimID}</TableCell>
                  <TableCell align="right">{row.InsuranceID}</TableCell>
                  <TableCell align="right">{row.InsuranceType}</TableCell>
                  <TableCell align="right">{row.FirstName}</TableCell>
                  <TableCell align="right">{row.LastName}</TableCell>
                  <TableCell align="right">{row.Date}</TableCell>
                  <TableCell align="right">{row.Amount}</TableCell>
                  <TableCell align="right">{row.Purpose}</TableCell>
                  <TableCell align="right">{row.Status}</TableCell>
                  <TableCell align="right">
                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                      Delete
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <Button variant="outlined" startIcon={<EditIcon />}>
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default ViewClaim;
