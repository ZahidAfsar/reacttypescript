import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import getData from './Services/DataServices';
import astronaut from './Interfaces/interfaces';

function App() {

  const[astronautInfo, setAstronautInfo] = useState<astronaut>()

  useEffect(() => {
    const astronautData = async () => {
      const fetchedData = await getData();
      setAstronautInfo(fetchedData)
    }
    astronautData();
  }, [])

  return (
    <div>
    <h1>{astronautInfo?.people.map(person => `${person.name} ${person.craft} `)}</h1>
    </div>
  );
}

export default App;
