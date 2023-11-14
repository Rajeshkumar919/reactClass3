import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from "react";
export default function Contact(){
    return(
   
      
      <div className={"bg-dark text-white p-4"}>
        <div className="container">
       <h1>  Contact  Page</h1>
       <Form>
        <Form.Group className="mb-3" controllId="formBasicEmail">

          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter Email"/>
          <Form.Text className="text-muted">
            We will never share your email with anyone else
          </Form.Text>
       </Form.Group> 
       <Form.Group className="mb-3" controllId="formBasicPassword">

          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password"/>
      
           
       </Form.Group> 
       <Form.Group className="mb-3" controledid="frormBasicCheckbox">
         <Form.Check type='checkbox' label="check me out"></Form.Check>
        </Form.Group> 
        <Button variant='light' type='submit'></Button>
       

        </Form>
        </div>
        </div>
      
        
    )

  }

