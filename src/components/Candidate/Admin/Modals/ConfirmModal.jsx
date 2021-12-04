import React, { useEffect } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function ConfirmModal(props) {
   const [open, setOpen] = React.useState(props.isOpened)

   useEffect(() => {
      console.log('modal :')
      console.log(props.isOpened)
      console.log("open" + open)
      setOpen(props.isOpened)
   }, [props.isOpened])
   return (
      <Modal
         basic

         open={open}
         size='small'
      >
         <Header icon>
            <Icon name='archive' />
            Archive Old Message
         </Header>
         <Modal.Content>
            <p>
               Are you sure that you want to delete candidate {props.userToDelete?.firstName} {props.userToDelete?.lastName}?
            </p>
         </Modal.Content>
         <Modal.Actions>
            <Button basic color='red' inverted onClick={() => setOpen(false)}>
               <Icon name='remove' /> No
            </Button>
            <Button color='green' inverted onClick={() => {
               props.onConfirm()
               setOpen(false)
            }}>
               <Icon name='checkmark' /> Yes
            </Button>
         </Modal.Actions>
      </Modal>
   )
}

export default ConfirmModal
