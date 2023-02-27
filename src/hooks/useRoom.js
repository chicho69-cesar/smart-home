import { useState, useEffect } from 'react';
import { roomsData } from '../utils/rooms-data';

const useRoom = id => {
  const [ room, setRoom ] = useState({});

  const getRoomData = () => {
    const { rooms } = roomsData();
    setRoom(rooms.find(r => r.id === id));
  }

  useEffect(() => {
    getRoomData();
  }, []);

  const data = room ? room : {};

  return { room: data };
}

export default useRoom;