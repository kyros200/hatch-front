import React from 'react';
import './RoomsContainer.scss';

function RoomsContainer({ rooms, joinRoom }) {

  return (
    <div className='roomContainer'>
        {rooms.length === 0 ?
        <>No game rooms! Create a new one!</>
        :
        rooms.map((room) => { return (
          <div className='room'>
            <div className='roomInfo'>
              <div className='left'>
                <div className='field'>{room.name.split("-")[1]}</div>
                <div className='field'>Created by: {room.createdByName}</div>
              </div>
              <div className='right'>
                <div className='field'>Status: {room.status}</div>
                <div className='field'>Players: {room.playersConnected || 0}/{room.playersMaximum}</div>
              </div>
            </div>
            {room.status === "OPEN" && 
            <div className='roomButton' onClick={() => joinRoom(room)}>
              {">"}
            </div>
            }
          </div>
        )})
        }
    </div>
  );
}

export default RoomsContainer;