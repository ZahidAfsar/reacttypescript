import AstronautComponent from './components/AstronautComponent';
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import getData from './Services/DataServices';
import astronaut from './Interfaces/interfaces';

function App() {

  const[astronautInfo, setAstronautInfo] = useState<astronaut>()
  let [count, setCount] = useState<number>(0)

  const nextPage = () => {
    setCount(count+1)
  }

  useEffect(() => {
    const astronautData = async () => {
      const fetchedData = await getData();
      setAstronautInfo(fetchedData)
    }
    astronautData();
  }, [])

  return (
    <div>
      <button onClick={ () => nextPage() } >Next Page</button>
      {
       astronautInfo && <AstronautComponent shipName={astronautInfo.crafts[count].shipName} members={astronautInfo.crafts[count].members} /> 
      }
    </div>
  );
}

export default App;
