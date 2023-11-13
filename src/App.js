import { useEffect, useState } from 'react';
import './App.css';
import Contact from './Contact';
import Forms  from './Forms';
import uuid4 from 'uuid4';

function App() {
  const localStoragekey = 'contact'
  const [contact, setContact] = useState(()=>{
    return JSON.parse(localStorage.getItem(localStoragekey));
  });
  useEffect(()=>{
    localStorage.setItem(localStoragekey, JSON.stringify(contact))
  },[contact])
  const addContact = (data) =>{
    setContact([...contact,{id: uuid4(), data}]);
    console.log(data)
  }

  const removeContact = (id) => {
    const updateContact = contact.filter((val) => {
       return val.id !== id;
    })
    setContact(updateContact);
  }

  return (
    <div className="App">
      <Forms addContact={addContact} />
      <Contact contact={contact} removeContact={removeContact}/>
    </div>
  );
}

export default App;
