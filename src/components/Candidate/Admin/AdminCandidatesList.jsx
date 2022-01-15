import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Header, Divider, Card, Table, Button, Icon, Loader, Modal } from 'semantic-ui-react';
import CandidateService from '../../../services/candidateService';
import ConfirmModal from './Modals/ConfirmModal';
function AdminCandidatesList() {

   const [candidates, setCandidates] = useState([])
   const [deleteModalOpen, setDeleteModalOpen] = useState(false)
   const [userToDelete, setUserToDelete] = useState({})
   let candidateService = new CandidateService();

   useEffect(() => {
      candidateService.getAll().then((res) => {
         setCandidates(res.data.data)
      })
   }, [deleteModalOpen])

   const deleteCandidate = (id) => {
      console.log('deleting')
      candidateService.delete(id).then(res => {
         toast.success('Candidate deleted successfully.')
         console.log(res.data)
         setDeleteModalOpen(false)
      }).catch((err) => {
         toast.error('Error while deleting candidate.')
         console.log(err.message)
      })
   }
   useEffect(() => {
      // console.log(deleteModalOpen)
   }, [deleteModalOpen])
   return (

      <div style={{ padding: 20, margin: 20 }}>
         <Header textAlign='center' size='huge'>Candidates</Header>
         <Divider />

         {/* {candidates.length == 0 ? <Header size='medium' textAlign='center'>No candidates in favorites</Header> : ''} */}
         {/* <ConfirmModal userToDelete={userToDelete} isOpened={deleteModalOpen} onConfirm={() => deleteCandidate(userToDelete?.id)} /> */}


         <div>
            <Table unstackable>
               <Table.Header>
                  <Table.Row>
                     <Table.HeaderCell>First Name</Table.HeaderCell>
                     <Table.HeaderCell>Last Name</Table.HeaderCell>
                     <Table.HeaderCell>Birth Year</Table.HeaderCell>
                     <Table.HeaderCell>Last Position</Table.HeaderCell>
                     <Table.HeaderCell textAlign='center'></Table.HeaderCell>

                     {/* <Table.HeaderCell textAlign='right'>Notes</Table.HeaderCell> */}
                  </Table.Row>
               </Table.Header>
               <Table.Body>
                  {
                     candidates.map((candidate) => (
                        <Table.Row key={candidate.id}>
                           <Table.Cell>{candidate.firstName}</Table.Cell>
                           <Table.Cell>{candidate.lastName}</Table.Cell>
                           <Table.Cell>{candidate.birthYear}</Table.Cell>
                           <Table.Cell>{candidate.resume?.jobExperiences[candidate.resume.jobExperiences.length - 1].position}</Table.Cell>
                           <Table.Cell textAlign='center'>

                              <Button onClick={() => setDeleteModalOpen(true)} color='blue' size="medium" icon="edit" />
                              <Button onClick={() => {
                                 setUserToDelete(candidate);
                                 console.log(userToDelete)
                                 setDeleteModalOpen(true)
                              }} color='red' size="medium" icon="trash alternate" />

                           </Table.Cell>
                           {/* <Table.Cell textAlign='right'>None</Table.Cell> */}
                        </Table.Row>
                     ))
                  }
               </Table.Body>
            </Table>
         </div>

         <Modal
            basic

            open={deleteModalOpen}
            size='small'
         >
            <Header icon>
               <Icon name='archive' />
               Archive Old Message
            </Header>
            <Modal.Content>
               <p>
                  Are you sure that you want to delete candidate {userToDelete?.firstName} {userToDelete?.lastName}?
               </p>
            </Modal.Content>
            <Modal.Actions>
               <Button basic color='red' inverted onClick={() => {
                  setDeleteModalOpen(false)
                  console.log("userToDelete.id")
                  console.log(userToDelete.id)
               }}>
                  <Icon name='remove' /> No
               </Button>
               <Button color='green' inverted onClick={() => {
                  console.log(userToDelete)
                  deleteCandidate(userToDelete.id)
                  // candidateService.delete(userToDelete.id).then(res => {
                  //    toast.success('Candidate deleted successfully.')
                  //    console.log(res.data)
                  //    setDeleteModalOpen(false)
                  // }).catch((err) => {
                  //    toast.error('Error while deleting candidate.')
                  //    console.log(err.message)
                  // })
               }}>
                  <Icon name='checkmark' /> Yess
               </Button>
            </Modal.Actions>
         </Modal>
      </div>
   )
}

export default AdminCandidatesList
