import React, { useState, useEffect } from "react";
import Axios from "@/lib/axios";
import { AxiosResponse } from "axios";
import { RoomList } from "@/components/room/RoomList";

const Rooms = () => {
    const [rooms, setRooms] = useState([])
    const fetch = async () => {
        const axios = new Axios();
        const response: Promise<AxiosResponse<any, any>> = await axios.get(
          "/api/rest/rooms",
          {}
        );
    
        if (response && response.data) {
          const newRooms = [...response.data.rooms];
          setRooms(newRooms);
        }
      };
      useEffect(() => {
        fetch();
      }, []);
    return(
        <div>
            <h1>Rooms</h1>
             <RoomList rooms={rooms} />
        </div>
    )
}

export default Rooms
