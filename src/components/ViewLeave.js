import React from "react";
import { Button, Container, Table } from "react-bootstrap";

const ViewLeave = () => {
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <b>ID</b>
            </th>
            <th>
              <b>From Date</b>
            </th>
            <th>
              <b>To Date</b>
            </th>
            <th>
              <b>Days</b>
            </th>
            <th>
              <b>Status</b>
            </th>
            <th>
              <b>Cancel</b>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="center">3168</td>
            <td align="center">2021-04-17 Full Day</td>
            <td align="center">2021-04-17 Full Day</td>
            <td align="center">1</td>
            <td align="center">Approved</td>
            <td align="center">
              <a href="cancel_leave.php?username=vinod.calinfo@gmail.com&amp;&amp;name=Vinod &amp;&amp;cancelLeaveID=3168">
                Cancel
              </a>
            </td>
          </tr>
          <tr>
            <td align="center">2762</td>
            <td align="center">2020-03-17 Full Day</td>
            <td align="center">2020-03-17 Full Day</td>
            <td align="center">1</td>
            <td align="center">Approved</td>
            <td align="center">
              <a href="cancel_leave.php?username=vinod.calinfo@gmail.com&amp;&amp;name=Vinod &amp;&amp;cancelLeaveID=2762">
                Cancel
              </a>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default ViewLeave;
