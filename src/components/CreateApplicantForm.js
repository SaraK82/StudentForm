import { useState } from 'react';
import React from 'react'
import Select from './common/Select';
import Input from './common/Input';
import RadioInput from './common/RadioInput';
import { genderOptions } from '../data/gender';
import { programsOptions } from '../data/programs';

function CreateApplicantForm() {
  
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [phn, setPhn] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [programs, setPrograms] = useState();
  
 
  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  }
  const handleLastname = (e) => {
    setLastname(e.target.value);
  }
  
  const handlePhn = (e) => {
    setPhn(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleAge = (e) => {
    setAge(e.target.value);
  }
  const handleGender = (e) => {
    setGender(e.target.value);
  }
  const handlePrograms = (e) => {
    setPrograms(e.target.value);
  }
 
   const doPostData = () => {
    const data = {firstname, lastname, phn, email, age, gender, programs}
    
     fetch ('http://localhost:3000/books', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json'
        }
     }).then((res) => {
        if(res.status == 201) {
          alert("BOok is saved successfully");
        }
     }) 
  } 
  return(

  
    <div className="container my-5">

     <Input 
      label="First Name"
      placeholder="First Name"
      value={firstname}
      onChange={handleFirstname}
      />
      <Input 
      label="Last Name"
      placeholder="Last Name"
      value={lastname}
      onChange={handleLastname}
      />
      <Input 
      label="Phone Number"
      placeholder="Phone Number"
      value={phn}
      onChange={handlePhn}
      />
      <Input 
      label="Email"
      placeholder="Email"
      value={email}
      onChange={handleEmail}
      />
      <Input 
      label="Age"
      placeholder="Age"
      value={age}
      onChange={handleAge}
      />
      <Select
      label="Gender"
      value={gender}
      options={genderOptions}
      onChange={handleGender}
      />
      <RadioInput
      label="Programs"
      value={programs}
      options={programsOptions}
      onClick={handlePrograms}
      />
     
      <div className="mb-3 row">
      <div className="col-md-3 offset-md-2">
        <button className="btn btn-primary" onClick={doPostData}>
          Save Book
        </button>
      </div>
    </div>
    
</div>
  )
}

export default CreateApplicantForm;