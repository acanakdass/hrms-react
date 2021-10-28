import React, { useEffect } from 'react'
import { Card, Divider, Header, Image, Item } from 'semantic-ui-react'
import App from '../../App';

function Schools(props) {
   const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

   const handleDate = (dateString) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };

      var date = new Date(dateString);
      return date.toLocaleDateString('tr-TR', options);
   }
   useEffect(() => {
      console.log(props.schools)
   }, [])
   return (
      <div style={{ textAlign: 'start' }} >
         <div fluid style={{ padding: '1em' }}>
            <Header textAlign='center' size='large'>Education</Header>
            <Divider />
            <Item.Group>
               {props.schools?.map((school) => (
                  <Item key={school.id} >
                     <Item.Image size='tiny' src='https://www.nicepng.com/png/full/888-8880087_college-free-buildings-icons-flaticoncom-high-school-icon.png' />

                     <Item.Content>
                        <Item.Header>{school.schoolName}</Item.Header>
                        <Item.Meta>
                           <span>{school.department}</span>
                           <br />
                           <span >{handleDate(school.startedDate)}</span>
                           -
                           <span >{school.graduateDate ? handleDate(school.graduateDate) : 'Now'}</span>
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

export default Schools
