import React, { useState} from 'react';
import './App.css';
import { useNotification } from './Notifications/NotificationProvider';

function App() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useNotification();

  const handleNewNotification = () => {
    dispatch({
      type: "success",
      message: inputValue
    })
  }

  const handleNewErrorNotification = () => {
    dispatch({
      type: "error",
      message: inputValue
    })
  }

  const handleNewInfoNotification = () => {
    dispatch({
      type: "info",
      message: inputValue
    })
  }

  return (
    <div className="App">
    <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
    <button onClick={handleNewNotification}>Add Notification</button>
    <button onClick={handleNewErrorNotification}>Add Error Notification</button>
    <button onClick={handleNewInfoNotification}>Add Info Notification</button>
    </div>
  );
}

export default App;
