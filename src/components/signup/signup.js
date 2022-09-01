import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem('user');
    if(auth){
      navigate('/')
    }
})
  const collectdata = async () => {
    console.warn(name, email, password);
    let result = await fetch("http://localhost:5000/sign-up", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      result = await result.json();
      console.warn(result);
      localStorage.setItem("user",JSON.stringify(result));
      if (result) {
        navigate("/");
      }
  };




  return (
    <Container className="mt-3">
      <h3 className="text-center">Sign Up</h3>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Button onClick={collectdata} variant="primary" type="submit">
        Submit
      </Button>
      <br />
      <span className="mt-4">
        If you have account then{" "}
        <Link to="/login" className="link">
          Click here
        </Link>
      </span>
    </Container>
  );
}

export default Signup;
