import React, {useState} from 'react';

const Forms = ({addContact}) => {
    const [data, setData] = useState({
        name: "",
        email: "",
    });
    
    const handleInput = (e) => {
        setData({...data, [e.target.name]:e.target.value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!data.name || !data.email)
        {
            alert("all fields are mandatory")
            return
        }else{
            addContact(data);
            setData({
                name: "",
                email: ""
            })
        }
    }

    return (
       <div>
          <h2 className='heading'>Manage Contacts</h2>
          <h3 className='subhead'>Add Contact</h3>
          <div className='form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br/>
                <input id="name" type="text" placeholder='Enter Your Name' name="name" 
                onChange={handleInput} value={data.name} /><br/>
                <label htmlFor="email">Email:</label><br/>
                <input type="text" id="email" placeholder='Enter Your email' name="email" 
                onChange={handleInput} value={data.email} /><br/>
                <button>Add Contact</button>
            </form>
          </div>
       </div>
    )
}

export default Forms;