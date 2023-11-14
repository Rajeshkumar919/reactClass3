import { useEffect,useState } from "react";
import Contact from './Contact';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Experiment(){


    useEffect(()=>{
    //alert("hello")
     },[] )

     const [userDetails,setUserDetails] =useState({

        username: 'Rajesh kumar',
        email: 'rajeshkumar.bcsf18@iba-suk.edu.pk'
     })
     function submitInformation(){
            console.log(userDetails)

     }

     return(
        <div className={"project-section p-4"}>
                <h1> Experiments</h1>
                <Form.Group className="mb-3" controlledId="formBasicEmail">
                    <Form.Lable>

                        Email address
                    </Form.Lable>
                    <Form.Control onChange={(e)=> setUserDetails({...userDetails, username:e.target.value})} value={userDetails.email} type="email" placeholder="Enter Email"/>
                    <Form.Text className="text-muted">
                        We will never share your email with anyone else
                    </Form.Text>

                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label> 
                        User Name
                    </Form.Label>
                    <Form.Control onChange={(e)=> setUserDetails({...userDetails,username: e.target.value})} value={userDetails.username} type="text" placeholder="text"/
            >

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out"/>
            </Form.Group>
            <Button onClick={submitInformation} variant="light" type="submit">
                Submit
            </Button>
            

        </div>
     )
}