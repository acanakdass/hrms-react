import React, { useEffect, useState } from 'react'
import { Icon, Label, Menu, Table, Modal, Button, Header, Divider } from 'semantic-ui-react'
import SystemEmployeeService from '../../services/systemEmployeeService';

function ListSystemEmployees() {

   const [systemEmployees, setSystemEmployees] = useState([])
   const [deleteModalOpen, setDeleteModalOpen] = useState(false)
   const [userToDelete, setUserToDelete] = useState({})
   const systemEmployeeService = new SystemEmployeeService();
   useEffect(() => {
      systemEmployeeService
         .getAll()
         .then((result) => setSystemEmployees(result.data.data));
   }, []);
   useEffect(() => {
      systemEmployeeService.getAll().then((res) => {
         console.log(res.data.data.length)
         setSystemEmployees(res.data.data)
      })
   }, [deleteModalOpen])

   return (
      <div style={{ padding: 20, margin: 20 }}>
         <Header textAlign='center' size='huge'>System Employees</Header>
         <Divider />

         {/* {candidates.length == 0 ? <Header size='medium' textAlign='center'>No candidates in favorites</Header> : ''} */}
         {/* <ConfirmModal userToDelete={userToDelete} isOpened={deleteModalOpen} onConfirm={() => deleteCandidate(userToDelete?.id)} /> */}


         <div>
            <Table unstackable>
               <Table.Header>
                  <Table.Row>
                     <Table.HeaderCell>First Name</Table.HeaderCell>
                     <Table.HeaderCell>Last Name</Table.HeaderCell>
                     <Table.HeaderCell>Email</Table.HeaderCell>
                     <Table.HeaderCell textAlign='center'></Table.HeaderCell>

                     {/* <Table.HeaderCell textAlign='right'>Notes</Table.HeaderCell> */}
                  </Table.Row>
               </Table.Header>
               <Table.Body>
                  {
                     systemEmployees.map((employee) => (
                        <Table.Row>
                           <Table.Cell>{employee.firstName}</Table.Cell>
                           <Table.Cell>{employee.lastName}</Table.Cell>
                           <Table.Cell>{employee.email}</Table.Cell>
                           <Table.Cell textAlign='center'>

                              <Button onClick={() => setDeleteModalOpen(true)} color='blue' size="medium" icon="edit" />
                              <Button onClick={() => {
                                 setUserToDelete(employee);
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
               <Icon name='trash' />
               Delete Employee
            </Header>
            <Modal.Content>
               <p>
                  Are you sure that you want to delete candidate {userToDelete?.firstName} {userToDelete?.lastName}?
               </p>
            </Modal.Content>
            <Modal.Actions>
               <Button basic color='red' inverted onClick={() => {
                  setDeleteModalOpen(false)
               }}>
                  <Icon name='remove' /> No
               </Button>
               <Button color='green' inverted onClick={() => {
                  // candidateService.delete(userToDelete.id).then(res => {
                  //    toast.success('Candidate deleted successfully.')
                  //    console.log(res.data)
                  //    setDeleteModalOpen(false)
                  // }).catch((err) => {
                  //    toast.error('Error while deleting candidate.')
                  //    console.log("hata oluştu :" + err)
                  // })
               }}>
                  <Icon name='checkmark' /> Yes
               </Button>
            </Modal.Actions>
         </Modal>

      </div>
   )
}

export default ListSystemEmployees
