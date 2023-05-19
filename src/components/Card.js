import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, {Component} from 'react';

function CourseCard() {
  return (
    <Card className='carda' style={{backgroundColor: '#FE931E',  borderRadius: '40px' }}>
      <Card.Body>
        <Card.Title style={{color: 'white', fontSize: '40px'}}>🌼 course name 🌼</Card.Title>
        <div class="nav-bar"></div>
        <Card.Text style={{textAlign: 'justify', margin: '1rem', fontSize: '36px'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Subtitle className="mb-2" style={{fontSize: '40px', margin: '20px'}}>price</Card.Subtitle>
        <Button className='btn' variant="light" style={{color: '#FE931E', borderRadius: '40px'}}>apply</Button>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;