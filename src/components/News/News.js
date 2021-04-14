import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';

const News = (props) => {
    const {title,description} = props.article
    return (
        <Container>
            <Card style={{ width: '60rem' }}>
                <Card.Body>
                    <Card.Title> {title} </Card.Title>
                    <Card.Text> {description} </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default News;