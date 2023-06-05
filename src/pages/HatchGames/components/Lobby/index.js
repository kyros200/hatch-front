import React, {useState, useEffect, useCallback} from 'react';
import Modal from '../../../../components/shared/Modal';
import Input from '../../../../components/shared/Input';
import Button from '../../../../components/shared/Button';
import RoomsContainer from './components/RoomsContainer'
import './Lobby.scss';
import { toast } from 'react-toastify';

function Lobby({ client, choosenProject, setChoosenProject, setRoomConnected }) {

  const [modalCreate, setModalCreate] = useState(false)
  const [rooms, setRooms] = useState([])
  const [roomName, setRoomName] = useState([])

  const updateRooms = useCallback(() => {
    client.emit("getProjectRooms", choosenProject, (res) => {
      setRooms(res)
    });
  }, [choosenProject, client])

  useEffect(() => {
    client.on('updateLobbies', () => {
      updateRooms()
    });

    return () => {
      client.off('connect');
    };
  }, [client, updateRooms]);

  useEffect(() => {
    updateRooms()
  }, [updateRooms])

  const openCreateModal = () => {
    setModalCreate(true)
  }

  const createRoom = () => {
    client.emit("createRoom", { name: roomName, choosenProject }, (res) => {
      updateRooms()
      setModalCreate(false)
      toast.success(`created Room ${roomName}`)
      joinRoom(res)
    })
  }

  const joinRoom = (room) => {
    console.log("joining ", room.name)
    client.emit("joinRoom", room.name, (res) => {
      setRoomConnected(res)
      toast.info(`joined Room ${room.name}`)
    })
  }

  const exitChoosenProject = () => {
    setChoosenProject("")
  }

  return (
    <div className='lobbyContainer'>
        <div className='lobbyContent'>
          <h2>Lobby</h2>
          <div className="lobbyCloseButton" onClick={exitChoosenProject}>
            X
          </div>
          <RoomsContainer rooms={rooms} joinRoom={joinRoom}/>
          <Button onClick={ openCreateModal }>Create Room</Button>
          <Modal
            open={modalCreate}
          >
            <Input className={"modalInput"} value={roomName} label={"Room Name"} onChange={(e) => setRoomName(e.target.value)} />
            <Button className={"modalButton"} onClick={ createRoom }>Create Room</Button>
            <Button className={"modalButton"} onClick={ () => setModalCreate(false) }>Close</Button>
          </Modal>
        </div>
    </div>
  );
}

export default Lobby;