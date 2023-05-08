import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Books from "../books/getBooks"
import Login from "../auth/login";
import Register from "../auth/register";

import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col>{
            <Routes>
              <Route path="/" element={<Books />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          }</Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
};

export default App;