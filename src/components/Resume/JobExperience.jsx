import React, { useEffect } from 'react'
import { Card, Divider, Header, Image, Item } from 'semantic-ui-react'

function JobExperience(props) {
   const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

   const handleDate = (dateString) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };

      var date = new Date(dateString);
      return date.toLocaleDateString('tr-TR', options);
   }


   return (
      <div style={{ textAlign: 'start' }} >
         <div fluid style={{ padding: '1em' }}>
            <Header textAlign='center' size='large'>Experience</Header>
            <Divider />
            <Item.Group>
               {props.jobExperiences?.map((experience) => (
                  <Item key={experience.id} >
                     <Item.Image size='tiny' src='https://icon-library.com/images/experience-icon-png/experience-icon-png-26.jpg' />

                     <Item.Content>
                        <Item.Header>{experience.company}</Item.Header>
                        <Item.Meta>
                           <span>{experience.position}</span>
                           <br />
                           <span >{handleDate(experience.startDate)}</span>
                           -
                           <span >{handleDate(experience.quitDate)}</span>
                        </Item.Meta>
                        <Item.Description>{paragraph}</Item.Description>
                     </Item.Content>
                  </Item>
               ))}
            </Item.Group>
         </div>
      </div>
   )
}

export default JobExperience
