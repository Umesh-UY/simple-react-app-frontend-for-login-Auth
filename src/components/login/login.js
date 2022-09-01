import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
      navigate('/')
    }
  })
  const CheckData = async () => {
    console.warn(email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);

    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("Please Enter correct details.");
    }
  };
  return (
    <Container className="mt-3">
      <h1 className="text-center">Sign In</h1>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </Form.Group>
      <Button onClick={CheckData} variant="primary" type="submit">
        Submit
      </Button>
      <br />
      <span className="mt-4">
        If you don't have account then{" "}
        <Link to="/sign-up" className="link">
          Click here
        </Link>
      </span>
    </Container>
  );
}

export default Login;
