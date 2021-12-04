import React, { useEffect, useState } from 'react'
import { Icon, Step } from 'semantic-ui-react';

function CandidateRegisterStepper({ activeStep }) {

   useEffect(() => {
      console.log(checkIfActiveStep('info'))

   }, [])
   const checkIfActiveStep = (name) => {
      if (name == activeStep) {
         return true;
      } else {
         return false;
      }
      return 'aa'
   }
   return (
      <div>
         <Step.Group widths={3}>
            <Step active={checkIfActiveStep('info')} disabled={!checkIfActiveStep('info')} >
               <Icon name='info' />
               <Step.Content>
                  <Step.Title>Genel Bilgiler</Step.Title>
                  <Step.Description>Kimlik bilgilerinizi girin</Step.Description>
               </Step.Content>
            </Step>
            <Step active={checkIfActiveStep('photo')} disabled={!checkIfActiveStep('photo')} >
               <Icon name='photo' />
               <Step.Content>
                  <Step.Title>Photo</Step.Title>
                  <Step.Description>Fotoğraf Yükleyin</Step.Description>
               </Step.Content>
            </Step>
            <Step active={checkIfActiveStep('resume')} disabled={!checkIfActiveStep('resume')} >
               <Icon name='newspaper' />
               <Step.Content>
                  <Step.Title>Özgeçmiş</Step.Title>
                  <Step.Description>Özgeçmişinizi girin</Step.Description>
               </Step.Content>
            </Step>
         </Step.Group>
      </div>
   )
}

export default CandidateRegisterStepper
