import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useParams } from 'react-router';
import { Button, Divider, Header, Table } from 'semantic-ui-react';
import ApplicationService from '../../services/applicationService';

const AppliedCandidatesList = (props) => {

   const [applications, setApplications] = useState([])



   const { advertId } = useParams();



   const applicationService = new ApplicationService();
   useEffect(() => {
      console.log(advertId)
      applicationService.getByAdvertId(advertId).then(res => {
         console.log('res.data.data')
         console.log(res)
         if (res.data.success) {
            setApplications(res.data.data)
         } else {
            console.log('empty')
            toast.error('No applications')
         }
      }).catch(er => {
         console.log(er)
         toast.error(er)
      })
   }, [])


   return (
      <div style={{ margin: '1em', padding: '3em' }}>
         <Header size='large' textAlign='center'>Applications</Header>
         <Divider />

         <div>
            <Table unstackable>
               <Table.Header>
                  <Table.Row textAlign='center'>
                     <Table.HeaderCell>First Name</Table.HeaderCell>
                     <Table.HeaderCell>Last Name</Table.HeaderCell>
                     <Table.HeaderCell>Email</Table.HeaderCell>
                     <Table.HeaderCell>Application Date</Table.HeaderCell>
                     {/* <Table.HeaderCell textAlign='center'></Table.HeaderCell> */}

                     {/* <Table.HeaderCell textAlign='right'>Notes</Table.HeaderCell> */}
                  </Table.Row>
               </Table.Header>
               <Table.Body>
                  {
                     applications.map((application) => (
                        <Table.Row textAlign='center'>
                           <Table.Cell>{application.candidate.firstName}</Table.Cell>
                           <Table.Cell>{application.candidate.lastName}</Table.Cell>
                           <Table.Cell>{application.candidate.email}</Table.Cell>
                           <Table.Cell>{application.date}</Table.Cell>
                           {/* <Table.Cell textAlign='center'>

                              <Button onClick={() => console.log('')} color='blue' size="medium" icon="edit" />
                              <Button onClick={() => {
                                 setUserToDelete(employee);
                                 console.log('')
                                 setDeleteModalOpen(true)
                              }} color='red' size="medium" icon="trash alternate" />

                           </Table.Cell> */}
                           {/* <Table.Cell textAlign='right'>None</Table.Cell> */}
                        </Table.Row>
                     ))
                  }
               </Table.Body>
            </Table>
         </div>

      </div>
   )
}






export default AppliedCandidatesList
