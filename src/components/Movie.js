import React from 'react';
import {Card, Button, Col} from 'react-bootstrap'

export const Movie = ({key, image, title, overview, id, handleMovieInfo}) => {
    return (
        <Col xs={12} sm={6} md={4}>
        <Card style={{marginTop: 30}} key={key}>
            {/* <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w185/${image}`} onClick={() => handleMovieInfo(id)} /> */}
            <Card.Img variant="top" src={image} onClick={() => handleMovieInfo(id)} />
            <Card.Body>
                <Card.Title>{`${title}`}</Card.Title>
                <Card.Text>
                {overview ? overview.slice(0, 100)+'...' : null}
                </Card.Text>
                <Button variant="dark" onClick={() => handleMovieInfo(id)}>More info</Button>
            </Card.Body>
        </Card>
        </Col>
    )
}
