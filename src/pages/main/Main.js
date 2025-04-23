import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "firebase/database";
import { useSelector } from "react-redux";
import "./main.css";
import RoomList from "../../components/RoomList/RoomList";
import Chat from "../../components/Chat/Chat";

const Main = () => {
  const [value, setValue] = useState("");

  const currentChatRoomKey = useSelector((state) => state.chatReducer.currentChatRoomKey);

  return (
    <>
      <Navbar setValue={setValue} />
      <div className="chat-area">
        <RoomList value={value} />
        <div className="verticalLine"></div>
        {currentChatRoomKey === null ? <div className="chatNotSelecter">Выберите чат</div> : <Chat chatRoomKey={currentChatRoomKey} />}
      </div>
    </>
  );
};

export default Main;
