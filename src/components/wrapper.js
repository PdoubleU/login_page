import React from 'react';
import { Container } from 'reactstrap';

const Wrapper = ({ children }) => {
  return (
    <Container className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      {children}
    </Container>
  );
};

export default Wrapper;
