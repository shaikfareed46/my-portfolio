import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";

export const Resume = () => {
  

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Resume</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Resume</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg={12}>
          <iframe src="https://drive.google.com/file/d/12e4i6oXM3jOPEva4f9PxgRL2cJ_oKB7A/preview" width="100%" height="800px" allow="autoplay"></iframe>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
