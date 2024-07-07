import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ProductList(){
    return(
    <Container>
        <div className="row">
            <div className="col-4">
            <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body className="text-center">
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Price : 90000$
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            
            </div>
            <div className="col-4">
            <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body className="text-center">
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Price : 90000$
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            
            </div>
            <div className="col-4">
            <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body className="text-center">
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Price : 90000$
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            
            </div>
            <div className="row">
            <div className="col-4">
            <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body className="text-center">
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Price : 90000$
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </div>
            <div className="col-4">
            <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body className="text-center">
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Price : 90000$
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </div>
            <div className="col-4">
            <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body className="text-center">
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Price : 90000$
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            
            </div>
            </div>
        </div>
    </Container>);
}