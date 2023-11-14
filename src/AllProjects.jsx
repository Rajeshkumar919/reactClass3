import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import product from '../assets/images/img.png';
export default function AllProjects() {
    return(
        <div className={"project-section p-4"}>
            {/*<div className="project-section container">*/}
                <div className="row container d-flex p-4 justify-content-center align-items-center">
                    <h1>All Projects</h1>
                    <div className="col mb-4 col-sm-12 col-md-4 col-lg-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={product} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="dark">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    </div>
                </div>
                
    )
}