import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import useRouteTitle from '../hooks/useDaynamicTitle';

const Blogs = () => {
    useRouteTitle(' Home')
    return (
        <Container data-aos="fade-up"data-aos-anchor-placement="top-bottom">
            <Row>
                <Col className='mx-auto mt-5' md={6} data-aos="fade-up"data-aos-anchor-placement="top-bottom">
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is an access token and refresh token? How do they work and where should we store them on the client-side?</Accordion.Header>
                        <Accordion.Body>                      
                        An access token is a credential used to access protected resources, while a refresh token is used to obtain new access tokens. They are stored securely on the client-side, typically in a secure cookie or local storage.
                        </Accordion.Body>
                    </Accordion.Item>



                    <Accordion.Item eventKey="1" data-aos="fade-up"data-aos-anchor-placement="top-bottom">
                        <Accordion.Header>Compare SQL and NoSQL databases?</Accordion.Header>
                        <Accordion.Body>
                        SQL databases use structured data models with predefined schemas, support complex relationships, and ensure ACID compliance. NoSQL databases offer flexible data models, scalability, and horizontal scaling, at the cost of sacrificing strict ACID properties and using varied query languages tailored to specific data models.
                        </Accordion.Body>
                    </Accordion.Item>



                    <Accordion.Item eventKey="2" data-aos="fade-up"data-aos-anchor-placement="top-bottom">
                        <Accordion.Header>What is express js? What is Nest JS </Accordion.Header>
                        <Accordion.Body>
                        <b>Express js</b>
                        Express.js is a minimalist web framework for Node.js that simplifies building web applications and APIs. It provides routing, middleware, and http request/response handling.
                        <br />
                        <b>Next Js</b>
                        NestJS is a progressive Node.js framework that builds on top of Express.js. It offers additional features like dependency injection, modular architecture, and TypeScript support, making it suitable for building scalable and maintainable server-side applications.
                        </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item eventKey="3" data-aos="fade-up"data-aos-anchor-placement="top-bottom">
                        <Accordion.Header>What is MongoDB aggregate and how does it work </Accordion.Header>
                        <Accordion.Body>
                        MongoDB's aggregate is a powerful aggregation framework that allows for complex data analysis and transformation operations. It works by combining multiple stages, such as filtering, grouping, sorting, and performing calculations, to process and manipulate data stored in MongoDB collections, providing flexible and efficient data aggregation capabilities.
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
                </Col>
            </Row>
        </Container>
    );
};

export default Blogs;