import React from 'react'
import { Divider, Header, Progress } from 'semantic-ui-react'

function Languages(props) {
   return (
      <div fluid style={{ padding: '5px' }}>
         <Header textAlign='center' size='large'>Languages</Header>
         <Divider />
         {props.languages?.map((language) => (
            <div key={language.id} style={{ padding: '5px' }}>
               <Progress color='blue' size='small' value={language.level} total='5' progress='ratio'>{language.languageName} </Progress>
            </div>
         ))}
      </div>
   )
}

export default Languages
