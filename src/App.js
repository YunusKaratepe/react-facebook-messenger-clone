import './App.css';
import React, {useState, useEffect} from 'react';
import {Button, Input} from '@material-ui/core';
import Message from './Message';


function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{username: 'ahmet', text: 'Naber?'}, {username: 'yunus', text: 'Iyidir.'}]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // run this code on a condition
    let uname = '';

    while(!uname){
      uname = prompt('Please enter your name');
    }
    setUsername(uname)
    
  }, []) // [] is dependencies. If [] is blank, this code only runs once when the component loads

  // useState => variable in react
  // useEffect => runs on a condition

  const sendMessage = (event) => {
    // all logic to send a message...
    event.preventDefault();
    setMessages([...messages, {username: username, text: input}]);
    setInput(''); 
  }; 


  return (
    <div className="App">
      <h1>WELCOME {username} 💯</h1>


      

      <form>
        <Input value={input} placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} 
          onChange={event => setInput(event.target.value)} />

        <Button style={{marginLeft: "10px"}} disabled={!input} variant="contained" color="primary" 
          type="submit" onClick={sendMessage}>Send Message</Button> 
      </form>

      {/* Comment Line */}
      
      {
        messages.map(message => (
          <Message username={username} message={message}/>
        ))
      }
      

    </div>
  );
}

export default App;
