import React from 'react';
import { Container, Row, Col, Image  } from 'react-bootstrap';
import './Displayrickmorty.css' 

const Displayrickymorty  = (props) => {
    const {results, searchTerm} = props;
    return (
        <Container id="headcontainet">
            <Row id= 'container-color'>
            {
               results && results.filter((searc) => (
                searc.name && searc.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >-1
               )).map((results, idx) => (
                <Col id='container-row' sm={3} key = {idx} >
                    <Image src={results.image} thumbnail />
                    <div id='container-data'>
                        <Row className='lightbox'>
                            <Col>
                                <div className="namestyle">{results.name}</div>
                                <div>Id: {results.id}</div>
                            </Col>
                        </Row>  
                        <div className='boxbg textalign'>
                        <div className='box-align '>
                            <Row className='box-border' >
                                <Col >STATUS</Col>
                                <Col >{results.status}</Col>
                            </Row>
                            <Row className='box-border'>
                                <Col>SPECIES</Col>
                                <Col>{results.species}</Col>
                            </Row>
                            <Row className='box-border'>
                                <Col>GENDER</Col>
                                <Col>{results.gender}</Col>
                            </Row>
                            <Row className='box-border'>
                                <Col>ORIGIN</Col>
                                <Col>{results.origin.name}</Col>
                            </Row>
                            <Row>
                                <Col>LAST <br/> LOCATION</Col>
                                <Col>{results.location.name}</Col>
                            </Row>
                        </div>
       
                    </div>

                    </div>
                </Col>
                
               ))
            }
            </Row>
        </Container>
    )

};



export default Displayrickymorty;