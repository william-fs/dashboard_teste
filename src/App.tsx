import { useEffect, useState } from 'react'
import './App.css'
import ComboBox from './components/ComboBox/ComboBox'

function App() {

  const [titleIn, setTitleIn] = useState("");
  const [comboIn, setComboIn] = useState("");

  useEffect(() => {
    
    setTimeout(() => {
      setTitleIn("_in");
    }, 100);

    setTimeout(() => {
      setComboIn("_in")
    }, 300);

  return;
  },[]);
  return (
    <div className='app'>

      <div className={`fadeTitle ${titleIn}`}>
        <h1>Dashboard</h1>
      </div>
      <div className={`fadeComboBox ${comboIn}`}>
        <ComboBox />
      </div>
    </div>
  )
}

export default App
