import React from 'react'
import { Divider, Header, Image, List } from 'semantic-ui-react'

function Skills(props) {
   return (
      <div fluid style={{ padding: '5px' }}>
         <Header textAlign='center' size='large'>Skills</Header>
         <Divider />
         <List divided horizontal size="large">
            {props.skills?.map((skill) => (
               <List.Item key={skill.id}>
                  {/* <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' /> */}
                  <List.Content>
                     <List.Header>{skill.name} </List.Header>
                  </List.Content>
               </List.Item>
            ))}
         </List>
      </div>
   )
}

export default Skills
