import React, { useState} from "react";
import { Modal } from "semantic-ui-react"
import CountryList from "./countrylist"

const OrderNow = (props) =>{
     const [open, setOpen] = useState(false)
return (
         <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
          <button className={props.button}>  <div className={`uppercase bg-blue text-white font-bold  tracking-wider ${props.padding}`}> order now </div> </button>

      }
    >
      <Modal.Header>Please select the country</Modal.Header>
      <Modal.Content>
        <Modal.Description></Modal.Description>
        <CountryList />
      </Modal.Content>
    </Modal>
)
}

export default OrderNow