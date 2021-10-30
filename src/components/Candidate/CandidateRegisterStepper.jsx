import React from 'react'
import { Icon, Step } from 'semantic-ui-react';

function CandidateRegisterStepper() {
   return (
      <div>
         <Step.Group widths={3}>
            <Step>
               <Icon name='info' />
               <Step.Content>
                  <Step.Title>Shipping</Step.Title>
                  <Step.Description>Enter billing information</Step.Description>
               </Step.Content>
            </Step>
            <Step active>
               <Icon name='credit card' />
               <Step.Content>
                  <Step.Title>Billing</Step.Title>
               </Step.Content>
            </Step>
            <Step disabled>
               <Icon name='info' />
               <Step.Content>
                  <Step.Title>Confirm Order</Step.Title>
               </Step.Content>
            </Step>
         </Step.Group>
      </div>
   )
}

export default CandidateRegisterStepper
