import React, { useEffect, useState } from 'react'
import astronaut from '../Interfaces/interfaces'


const AstronautComponent = (props: {shipName: string, members: string[]}) => {

    
  return (
    <div>
          {/* <h1>{astronautInfo?.people.map(person => `${person.name} ${person.craft} `)}</h1> */}
          <h3>{props.shipName}</h3>
          {
            props.members.map((name, index) => {
                return(
                <div key={index}>
                    <h3>{name}</h3>
                    <br />
                </div>
                )
            })
          }
          <hr />
    </div>
  )
}

export default AstronautComponent
