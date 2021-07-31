import React from "react";
import { Form, Button, Container } from "react-bootstrap";
const ApplyLeave = () => {
  return (
    <Container className="applyleave">
      <h2>Apply Leave Form</h2>
      <Form className="form_container">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>User</Form.Label>
          <Form.Control type="email" required placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>From Date</Form.Label>
          <Form.Control type="date" required placeholder="Enter From Date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>To Date</Form.Label>
          <Form.Control type="date" required placeholder="Enter TO Date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Days</Form.Label>
          <Form.Control type="text" required placeholder="Days" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Reason</Form.Label>
          <Form.Control
            as="textarea"
            minlength="20"
            maxlength="50"
            rows={3}
            required
            placeholder="Brief Reason (50 words)"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Apply For Leave
        </Button>
      </Form>
    </Container>
  );
};

export default ApplyLeave;
