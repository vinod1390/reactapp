import React from "react";
import { Form, Button, Container } from "react-bootstrap";
const EditProfile = () => {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>User Email</Form.Label>
          <Form.Control type="email" required placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>User Password</Form.Label>
          <Form.Control type="password" required placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>User Phone</Form.Label>
          <Form.Control type="text" required placeholder="Enter email" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </Container>
  );
};

export default EditProfile;
