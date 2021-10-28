import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'

function Categories() {
   const [activeItem, setActiveItem] = useState('home');

   const handleItemClick = (name) => {
      setActiveItem(name);
   }
   return (
      <div>
         <Menu inverted vertical>
            <Menu.Item
               name='home'
               active={activeItem === 'home'}
               onClick={() => handleItemClick('home')}
            />
            <Menu.Item
               name='messages'
               active={activeItem === 'messages'}
               onClick={() => handleItemClick('messages')}
            />
            <Menu.Item
               name='friends'
               active={activeItem === 'friends'}
               onClick={() => handleItemClick('friends')}
            />
         </Menu>
      </div>
   )
}

export default Categories
