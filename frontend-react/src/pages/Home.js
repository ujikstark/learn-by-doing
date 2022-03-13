import React from "react";
import { Card, Container } from "react-bootstrap";

function Home() {
    return (
        <Container>
            <h1 className="mt-2 mb-3">Homepage</h1>
            <Card className="mt-4 m-2 pr-2 pl-2 shadow">
                <Card.Body>
                    <Card.Title className="mb-3">Welcome !</Card.Title>
                    <div className="p text-start font-weight-light">
                        <div className="mb-3">
                        This website has been developed for personal learning purposes on different front-end and back-end technologies. It is made of a React SPA and a Symfony API. The API documentation can be seen here. 
                        </div>        
                        <div className="mb-3">
                        The API is consumed by a fully functional JWT authentication and small applications found in the navigation bar.
                        </div>        
                        <div className="mb-3">
                        The full codebase is available on Github
                        </div>
                        <div>
                        More details about the technical stack used in this application below.
                        </div>        
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );

}

export default Home;