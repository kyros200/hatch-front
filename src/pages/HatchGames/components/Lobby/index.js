import React, {useState, useEffect} from 'react';
import Modal from '../../../../components/shared/Modal';
import Input from '../../../../components/shared/Input';
import RoomsContainer from './components/RoomsContainer'
import './Lobby.scss';

function Lobby({ client, choosenProject, setRoomConnected }) {

  const [modalCreate, setModalCreate] = useState(false)
  const [rooms, setRooms] = useState([])
  const [roomName, setRoomName] = useState([])

  useEffect(() => {
    client.on('updateLobbies', () => {
      updateRooms()
    });

    return () => {
      client.off('connect');
    };
  }, [client]);

  useEffect(() => {
    updateRooms()
  }, [])

  const updateRooms = () => {
    client.emit("getProjectRooms", choosenProject, (res) => {
      setRooms(res)
    });
  }

  const openCreateModal = () => {
    setModalCreate(true)
  }

  const createRoom = () => {
    client.emit("createRoom", { name: roomName, choosenProject }, (res) => {
      updateRooms()
      setModalCreate(false)
      joinRoom(res)
    })
  }

  const joinRoom = (room) => {
    console.log("joining ", room.name)
    client.emit("joinRoom", room.name, (res) => {
      setRoomConnected(res)
    })
  }

  return (
    <div className='lobbyContainer'>
        <div className='lobbyContent'>
          <h2>Lobby</h2>
          <RoomsContainer rooms={rooms} joinRoom={joinRoom}/>
          <button onClick={ openCreateModal }>Create Room</button>
          <Modal
            open={modalCreate}
          >
            <button onClick={ () => setModalCreate(false) }>Close</button>
            <Input className={"modalInput"} value={roomName} label={"Name"} onChange={(e) => setRoomName(e.target.value)} />
            <button onClick={ createRoom }>Create room</button>
          </Modal>
        </div>
    </div>
  );
}

export default Lobby;