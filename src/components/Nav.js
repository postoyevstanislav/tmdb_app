import React from 'react';
import {Navbar, Form, FormControl, Button} from 'react-bootstrap'

export const Nav = ({handleSearchValue, searchMovie, getMovies, value}) => {
    return (
    <Navbar bg="dark" variant="dark" expand="lg" >
        <Navbar.Brand onClick={getMovies} className="mr-auto">TMDB DiamSol</Navbar.Brand>
            <Form inline onSubmit={searchMovie}>
            <FormControl onInput={handleSearchValue} type="text" value={value} placeholder="Search" className="mr-sm-2" />
            <Button onClick={searchMovie} variant="outline-info">Search</Button>
            </Form>
    </Navbar>
    )
}
