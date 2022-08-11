import React, { useEffect, useState } from "react";
import {
  Table,
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  Form,
  Navbar,
} from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const baseURL = `http://localhost:8000/users`;
const SideEffects = () => {
  const initialState = {
    name: "",
    email: "",
    contact: "",
    address: "",
  };
  const [product, setProduct] = useState([]);
  const [state, setState] = useState(initialState);
  const [idEdit,setIdedit]=useState(null);
  const [editMode,setEditMode]=useState(false);
  const { name, address, contact, email } = state;
  const getProducts = async () => {
    const { data } = await axios.get(baseURL);
    console.log(data);
    setProduct(data);
  };
  const handleDelete=async (id)=>{
     if(window.confirm("Are you delete User")){
       await axios.delete(`${baseURL}/${id}`);
       toast.success("Delete Successfuly");
       setTimeout(()=>getProducts(),500);
     }

  }
  const handleUpdate=(id)=>{
    const find=product.find((item)=> item.id===id);
    console.log(find)
    setState({...find});
    setIdedit(id);
    setEditMode(true);
  }
  useEffect(() => {
    console.log('chay')
    getProducts();
  }, []);
  const handleOnSubmit=(e)=>{
    e.preventDefault();
    if(name==="" || address==="" || contact==="" || email===""){
      toast.error("Please Fill All Input Field")
    }
    if(editMode===true){
        axios.put(`${baseURL}/${idEdit},state`);
        toast.success("Update Successlly");
        
        setState({name:"",address:"",contact:"",email:""});
        setTimeout(() => getProducts(),500);
        setIdedit(null);
        setEditMode(false);

    }else{
      axios.post(baseURL,state);
      toast.success("Add Successfully")
      setState({name :"",email:"",address:"",contact:""});
      setTimeout(()=>{
         getProducts();
      },500)
    }
  }
  console.log('Mouting')
  return (
    <>
    {console.log("Mount")}
      <ToastContainer />
      <Navbar bg="primary" variant="dark" className="justify-content-center">
        <Navbar.Brand>
          Build and Deloy React App Using Json Server on Heruku
        </Navbar.Brand>
      </Navbar>
      <Container style={{ marginTop: "100px" }}>
        <Row>
          <Col md={4}>
            <Form onSubmit={handleOnSubmit}>
              <Form.Group>
                <Form.Label style={{ textAlign: "left" }}>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                 
                  value={name}
                  onChange={(e)=> setState({...state,name:e.target.value})}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ textAlign: "left" }}>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address"
               
                  value={address}
                  onChange={(e)=>setState({...state,address:e.target.value})}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ textAlign: "left" }}>Contact</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Contact"
                  name="contact"
                  value={contact}
                  onChange={(e)=> setState({...state,contact:e.target.value})}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ textAlign: "left" }}>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  name="name"
                  value={email}
                  onChange={(e)=> setState({...state,email:e.target.value})}
                />
              </Form.Group>
              <div className="d-grip gap-2 mt-2">
                      <Button type='submit' variant="primary" size="lg">
                        Submit
                      </Button>
              </div>
            </Form>
          </Col>
          <Col md={8}>
            <Table border="true" hover>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Contact</th>
                  <th>Eamil</th>
                  <th>Action</th>
                </tr>
              </thead>
              {product?.map((item, index) => (
                <tbody key={item.id}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.contact}</td>
                    <td>{item.email}</td>
                    
                    <td>
                      <ButtonGroup>
                        <Button style={{ margin: "5px" }} variant="secondary"onClick={()=>handleUpdate(item.id)}>
                          Update
                        </Button>
                        <Button style={{ margin: "5px" }} variant="danger"
                         onClick={()=> handleDelete(item.id)}>
                          Delete
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SideEffects;
