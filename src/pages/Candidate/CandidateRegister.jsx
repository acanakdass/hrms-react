import { ErrorMessage, Field, Formik } from 'formik'
import { Form as FormikForm } from 'formik';
import React, { useState } from 'react'
import * as Yup from "yup";
import { FormField, Button, Label, FormGroup, Form, Container, Header, Divider, Input, Step, Icon } from 'semantic-ui-react';
import HrmsTextInput from '../../utilities/customFormControls/HrmsTextInput';
import CandidateService from '../../services/candidateService';
import toast from 'react-hot-toast';
import ImageService from '../../services/imageService';
import { Route, Switch } from 'react-router';
import CandidateAddInfos from '../../components/Candidate/CandidateAddInfos';
import CandidateRegisterStepper from '../../components/Candidate/CandidateRegisterStepper';
import CandidateAddPhoto from '../../components/Candidate/CandidateAddPhoto';
import CandidateAddResume from '../../components/Candidate/CandidateAddResume/CandidateAddResume';
function CandidateRegister() {
   const [step, setStep] = useState('info');
   const [addedUserId, setAddedUserId] = useState(null)

   useState(() => {
      console.log(addedUserId);
   }, [addedUserId])

   const renderStep = () => {
      if (step === 'info')
         return (<CandidateAddInfos setstep={setStep} setAddedUser={setAddedUserId} />)

      if (step === 'photo')
         return (<CandidateAddPhoto userId={addedUserId} setstep={setStep} />)

      if (step === 'resume')
         return (<CandidateAddResume userId={addedUserId} setstep={setStep} />)
   }
   return (
      <div style={{ margin: '5em 5em', padding: '2em', border: 'solid lightgrey 1px' }}>
         <Header textAlign='center' as="h1">Register</Header>
         <Divider />
         <CandidateRegisterStepper activeStep={step} />
         <div>
            {renderStep()}
         </div>

      </div>
   )
}

export default CandidateRegister
