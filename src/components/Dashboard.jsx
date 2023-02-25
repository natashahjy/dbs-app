import React from "react";

import { Link } from "react-router-dom";
import BarCard from "./charts/cards/subCard/BarCard";
const Dashboard = () => {
  const inputBar = {
    title: 'Bar card example',
    type: 'bar',
    xdata: ['team ABC', 'team B', 'team C', 'team D'],
    ydata: [55, 23, 96, 30],
    xlabel: 'team',
    ylabel: 'score',
    captions: [],
    captionValues: []
  }
  const colorBar = ['#a98bfd','#a98bfd','#a98bfd','#a98bfd','#a98bfd'];

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Home</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossOrigin="anonymous"
      />
      <div
        className="container"
        style={{ marginTop: "10rem", marginLeft: "300px" }}
      >
        <div className="row">
          <div
            className="col-3 border border-dark rounded"
            style={{ height: "300px", backgroundColor: "#fdfefe !important" }}
          >
            <div className="row">
              <h3 className="text-center">View Existing Claims</h3>
              <a href="#">
                <img
                  style={{ width: "200px" }}
                  className="image-fluid rounded-pill"
                  src="https://img.freepik.com/premium-vector/tax-payment-paper-mail-folder-cartoon-illustration-flat-vector-isolated-object_374761-118.jpg?w=2000"
                />
              </a>
            </div>
          </div>
          <div className="col-3 border border-dark ms-5 rounded">
            <div className="row">
              <h3 className="text-center">Create Claim</h3>
              <Link to="createclaim">
              <img
                  style={{ width: "200px" }}
                  className="image-fluid rounded-pill"
                  src="https://img.freepik.com/premium-vector/tax-payment-paper-mail-folder-cartoon-illustration-flat-vector-isolated-object_374761-118.jpg?w=2000"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div
            className="col-3 border border-dark rounded"
            style={{ height: "300px" }}
          >
            <div className="row">
              <h3 className="text-center">Claims Academy</h3>
              <a href="#">
                <img
                  style={{ width: "200px" }}
                  className="image-fluid rounded-pill"
                  src="https://img.freepik.com/premium-vector/tax-payment-paper-mail-folder-cartoon-illustration-flat-vector-isolated-object_374761-118.jpg?w=2000"
                />
              </a>
            </div>
          </div>
          <div className="col-3 border border-dark ms-5 rounded">
            <div className="row">
              <h3 className="text-center">View Claims</h3>
              <Link to="viewclaim">
                <img
                  style={{ width: "200px" }}
                  className="image-fluid rounded-pill"
                  src="https://img.freepik.com/premium-vector/tax-payment-paper-mail-folder-cartoon-illustration-flat-vector-isolated-object_374761-118.jpg?w=2000"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
