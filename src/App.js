import './App.css';
import React, {useState, useEffect} from 'react';
import {Button, Input} from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';


function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const [username, setUsername] = useState('');

  useEffect(() => {
    // run this code on a condition

    db.collection('message').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // snapshot = json objects of our db
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})));
    });

    let uname = '';

    while(!uname){
      uname = prompt('Please enter your name');
    }
    setUsername(uname)

    // load data from db
    
  }, []); // [] is dependencies. If [] is blank, this code only runs once when the component loads



  // useState => variable in react
  // useEffect => runs on a condition

  const sendMessage = (event) => {
    // all logic to send a message...
    event.preventDefault();

    db.collection('message').add({
      username: username, 
      message: input, 
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
      // has to be on servers timezone to prevent client timezone difference effects.
    });

    setInput(''); 
  }; 


  return (
    <div className="App">
      <h1>WELCOME {username} 💯</h1>

      <form>
        <Input value={input} placeholder="Message..." inputProps={{ 'aria-label': 'description' }} 
          onChange={event => setInput(event.target.value)} />

        <Button style={{marginLeft: "10px"}} disabled={!input} variant="contained" color="primary" 
          type="submit" onClick={sendMessage}>Send</Button> 
      </form>

      {/* Comment Line */}
      
      {
        messages.map(({id, message}) => (
          <Message key={id} username={username} message={message}/>
        ))
      }
      

    </div>
  );
}

export default App;
