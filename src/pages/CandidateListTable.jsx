import React, { useEffect, useState } from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import CandidateService from '../services/candidateService'

function CandidateListTable() {

   const [candidates, setCandidates] = useState([])

   useEffect(() => {
      let candidateService = new CandidateService();
      candidateService
         .getAll()
         .then((result) => setCandidates(result.data.data));
   }, []);

   return (
      <div>

         <Table inverted celled>
            <Table.Header>
               <Table.Row>
                  <Table.HeaderCell>#</Table.HeaderCell>
                  <Table.HeaderCell>First Name</Table.HeaderCell>
                  <Table.HeaderCell>Last Name</Table.HeaderCell>
                  <Table.HeaderCell>Kategori</Table.HeaderCell>

               </Table.Row>
            </Table.Header>
            <Table.Body>
               {candidates.map((candidate) => (
                  <Table.Row key={candidate.id}>
                     <Table.Cell>{candidate.id}</Table.Cell>
                     <Table.Cell>{candidate.email}</Table.Cell>
                     <Table.Cell>{candidate.firstName}</Table.Cell>
                     <Table.Cell>{candidate.lastName}</Table.Cell>
                     <Table.Cell></Table.Cell>
                     {/* <Table.Cell>{candidate.resume?.githubAddress}</Table.Cell> */}
                  </Table.Row>
               ))}
            </Table.Body>
            <Table.Footer >
               <Table.Row>
                  <Table.HeaderCell colSpan='3'>
                     <Menu floated='right' pagination>
                        <Menu.Item as='a' icon>
                           <Icon name='chevron left' />
                        </Menu.Item>
                        <Menu.Item as='a'>1</Menu.Item>
                        <Menu.Item as='a'>2</Menu.Item>
                        <Menu.Item as='a'>3</Menu.Item>
                        <Menu.Item as='a'>4</Menu.Item>
                        <Menu.Item as='a' icon>
                           <Icon name='chevron right' />
                        </Menu.Item>
                     </Menu>
                  </Table.HeaderCell>
               </Table.Row>
            </Table.Footer>
         </Table>

      </div>
   )
}

export default CandidateList
