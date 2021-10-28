import React from 'react'
import { Container, Header, Item, List } from 'semantic-ui-react'

function GeneralInfos(props) {
   return (
      <div>
         <Container text>

            <List>
               {/* <List.Item>
                  <List.Icon name='users' />
                  <List.Content>Semantic UI</List.Content>
               </List.Item> */}
               <Header sub size='huge'> {props.candidate.firstName} {props.candidate.lastName}</Header>
               <List.Item>
                  <List.Icon name='marker' />
                  <List.Content>New York, NY</List.Content>
               </List.Item>
               <List.Item>
                  <List.Icon name='mail' />
                  <List.Content>
                     <a href='mailto:jack@semantic-ui.com'>{props.candidate.email} </a>
                  </List.Content>
               </List.Item>
               <List.Item>
                  <List.Icon name='phone' />
                  <List.Content>
                     <a>5071234567 </a>
                  </List.Content>
               </List.Item>
               <List.Item>
                  <List.Icon name='linkedin' />
                  <List.Content>
                     <a href={`https://www.linkedin.com/in/${props.candidate?.resume?.linkedinAddress}`}>{props.candidate?.resume?.linkedinAddress} </a>
                  </List.Content>
               </List.Item>
               <List.Item>
                  <List.Icon name='github' />
                  <List.Content>
                     <a href={`https://www.github.com/${props.candidate.resume?.githubAddress}}`}>{props.candidate.resume?.githubAddress} </a>
                  </List.Content>
               </List.Item>
               {/* <List.Item>
                  <List.Icon name='linkify' />
                  <List.Content>
                     <a href='http://www.semantic-ui.com'>semantic-ui.com</a>
                  </List.Content>
               </List.Item> */}
            </List>
         </Container>
      </div >
   )
}

export default GeneralInfos
