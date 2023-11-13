import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Contact = (props) => {
  const {contact, removeContact} = props;
  console.log(contact)
  const contactlist = contact.map((value) => {
    return (
        <div className='contactlist'>
            <div className='contname'>{value.data.name}</div>
            <div className='contemail'>{value.data.email}</div>
            <span onClick={()=>removeContact(value.id)}><DeleteIcon/></span>
        </div>
    )
  })
  return (
    <div className='contact'>
        <div>Contact List</div>
        <div>{contactlist}</div>
    </div>
  )
}

export default Contact;
