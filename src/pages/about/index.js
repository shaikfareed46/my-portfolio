import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Row, Col, Card, Container } from "react-bootstrap";
import { Icon } from '@iconify/react';
import {
  dataabout,
  meta,
  worktimeline,
  skills,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="4">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="8" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="4">
            <h3 className="color_sec py-4">Work Timeline</h3>
          </Col>
          <Col lg="8">
            {worktimeline.map((data, i) => {
              return (
                <>
                  <Row key={i}>
                    <Col lg={4}>
                      <div scope="row"><b>{data.jobtitle}</b></div>
                      <div>{data.date}</div>
                    </Col>
                    <Col lg={8}>
                      <div><b>{data.where}</b></div><br />
                      <div>{data.summary && data.summary.map(summary => (
                        <><div>{summary}</div><br /></>
                      ))}</div>
                      {data.keyAchievements && <div>
                        <b>Key Achievements: </b> {data.keyAchievements}
                      </div>}<br />
                      {data.skillsUsed &&
                        <div>
                          <b>Skills Used: </b>
                          {data.skillsUsed.split(',').map((skill, index) => (
                            <>
                              {skill.indexOf('!!') > 0 ? <b>{skill.replace('!!', '').replace('!!', '')} </b> : skill} {index !== (data.skillsUsed.split(',').length - 1) && ','}
                            </>
                          ))}
                        </div>
                      }
                    </Col>
                  </Row>
                  <br /><hr />
                </>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            <Row>
              {skills.map((skill, i) => {
                return (
                  <Col lg={2} style={{ margin: "25px"}}>
                    <div>
                      <Icon icon={skill.skillIcon} width={50} height={50} color={skill.color}/>
                    </div>
                    <div>
                      {skill.name}
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
