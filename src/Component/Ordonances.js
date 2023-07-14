import React, { useEffect, useState } from 'react';
import {
  MDBInput,
  MDBBtn,
  MDBCheckbox,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBIcon
} from 'mdb-react-ui-kit';
import { Container } from '@mui/material';
import { CFormSelect } from '@coreui/react';
import Header from '../Component/Header';

export default function Ordonances() {
    
  const [formValue, setFormValue] = useState({
    date:"",
    nature:'',
    localisation:'',
    chef_exploitation:""
  });
  let chef_exploitation = [{name:"Paul",email:"paul@gmail.com"},{name:"peter",email:"peter@gmail.com"},{name:"john",email:"john@gmail.com"}]
  useEffect(()=>{
    chef_exploitation = [{name:"Paul",email:"paul@gmail.com"},{name:"peter",email:"peter@gmail.com"},{name:"john",email:"john@gmail.com"}]
  },[])
  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(formValue)
  }
  return (
    <>
    <Header/>
    <Container>
        <h1 className='text-center'>Nouvel Enregistrement</h1>
           
            <MDBRow tag="form" onSubmit={handleSubmit} className='g-3'>
                <CFormSelect name="chef_exploitation" onChange={onChange}>
                    <option>Choisir Votre Chargé d'exploitation</option>
                    {chef_exploitation.map((elt)=><option name="chef_exploitation" value={elt.email}>{elt.name}</option>)}
                </CFormSelect>
                <MDBCol md="12">
                    <MDBInput
                    value={formValue.nature}
                    name='nature'
                    onChange={onChange}
                    id='validationCustom01'
                    required
                    label='Nature'
                    />
                </MDBCol>
                
                
                <MDBCol md="12">
                    <MDBInput
                    value={formValue.date}
                    name='date'
                    onChange={onChange}
                    id='validationCustom03'
                    required
                    label='Date'
                    type='date'
                    />
                </MDBCol>
                <MDBCol md="12">
                    <MDBInput
                    value={formValue.localisation}
                    name='localisation'
                    onChange={onChange}
                    id='validationCustom05'
                    required
                    label='Localisation'
                    />
                </MDBCol>
                
                <MDBCol size="12">
                    <MDBBtn type='submit'>Enregistrer</MDBBtn>
                </MDBCol>
            </MDBRow>
            <div className="d-flex flex-column position-fixed fixed-bottom flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

        <div className="text-white mb-3 mb-md-0">
            Copyright Amou'ou Georges Junior &copy; 2023 All rights reserved.
        </div>

        <div>

        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='facebook-f' size="md"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='twitter' size="md"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='google' size="md"/>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='linkedin-in' size="md"/>
        </MDBBtn>

        </div>

        </div>
    </Container>
    </>
  );
}