import React, { useState } from 'react'
import { Header, Divider } from 'semantic-ui-react';
import EmployerAddInfos from '../components/Employer/EmployerAddInfos';
import UserAddPhoto from '../components/Candidate/UserAddPhoto';
import EmployerRegisterStepper from '../components/Employer/EmployerRegisterStepper';
function EmployerRegister() {
   const [step, setStep] = useState('info');
   const [addedUserId, setAddedUserId] = useState(null)

   useState(() => {
      console.log(addedUserId);
   }, [addedUserId])

   const renderStep = () => {
      if (step === 'info')
         return (<EmployerAddInfos setstep={setStep} setAddedUser={setAddedUserId} />)

      if (step === 'photo')
         return (<UserAddPhoto userId={addedUserId} setstep={setStep} />)
   }
   return (
      <div style={{ margin: '5em 5em', padding: '2em', border: 'solid lightgrey 1px' }}>
         <Header textAlign='center' as="h1">Register as Employer</Header>
         <Divider />
         <EmployerRegisterStepper activeStep={step} />
         <div>
            {renderStep()}
         </div>

      </div>
   )
}

export default EmployerRegister
