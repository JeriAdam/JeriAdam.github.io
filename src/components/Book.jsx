import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Book() {

    const [startDate, setStartDate] = useState(new Date());
  return (
    <Form>
      <Row className='mb-3 mt-10'>
        <p className='text-5xl text-center text-red-500'>Book a virtual appointment</p>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="first name" placeholder="Enter first name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="last name" placeholder="Enter last name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Row>


      <Row className="mb-3">
        <Col xs= {3}>
        <Form.Group  controlId="formGridEmail">
        <Form.Label>Set Date</Form.Label>
        <p className='inset-y-0 left-0'><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /></p>
        </Form.Group>
        </Col>
        <Col xs={3}>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Hour</Form.Label>
          <Form.Select defaultValue="Choose...">
                    <option value="09:00">9:00</option>
                    <option value="09:30">9:30</option>
                    <option value="10:00">10:00</option>
                    <option value="10:30">10:30</option>
                    <option value="11:00">11:00</option>
                    <option value="11:30">11:30</option>
                    <option value="12:00">12:00</option>
                    <option value="12:30">12:30</option>
                    <option value="13:00">13:00</option>
                    <option value="13:30">13:30</option>
                    <option value="14:00">14:00</option>
                    <option value="14:30">14:30</option>
                    <option value="15:00">15:00</option>
                    <option value="15:30">15:30</option>
                    <option value="16:00">16:00</option>
                    <option value="16:30">16:30</option> 
            <option></option>
          </Form.Select>
        </Form.Group>
        </Col>
        <Col xs= "auto">
        <Button className='mt-8 ml-10' variant="primary" type="submit">
        Confirm booking
      </Button>
        </Col>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Accept terms and conditions" />
      </Form.Group>
    </Form>
  );
}

export default Book;