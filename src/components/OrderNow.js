import React, { useState} from "react";
import { Modal } from "semantic-ui-react"
import CountryList from "./countrylist"
import { useIntl } from "gatsby-plugin-intl"


const OrderNow = (props) =>{
     const [open, setOpen] = useState(false)
     const intl = useIntl();

return (
         <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
          <button className={props.button}>  <div className={`uppercase bg-blue text-white font-bold  tracking-wider ${props.padding}`}>{intl.formatMessage({ id: "Order Now" })}
 </div> </button>

      }
    >
      <Modal.Header> {intl.formatMessage({ id: "select country" })}</Modal.Header>
      <Modal.Content>
        <Modal.Description></Modal.Description>
        <CountryList />
      </Modal.Content>
    </Modal>
)
}

export default OrderNow