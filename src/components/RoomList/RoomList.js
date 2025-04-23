import React, { useEffect, useState } from "react";
import "./roomList.css";
import { ListGroup } from "reactstrap";
import RoomItem from "./RoomItem";
import firebase from "firebase/app";
import "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { loadRoomsDataAction } from "../../app/providers/store/actions/chatActions";

const RoomList = ({ value }) => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.chatReducer.rooms);
  const [roomsNotFound, setRoomsNotFound] = useState("");

  console.log(value);

  useEffect(() => {
    const fetchData = async () => {
      const database = firebase.database();
      const roomsRef = database.ref("/");
      roomsRef.on("value", (snapshot) => {
        if (snapshot.exists()) {
          dispatch(loadRoomsDataAction(Object.entries(snapshot.val())));
        } else {
          dispatch(loadRoomsDataAction(null));
          setRoomsNotFound("Rooms not found");
        }
      });
    };
    fetchData();
  }, []);

  return rooms === null ? (
    roomsNotFound === "" ? (
      <div className="lds-dual-ring"></div>
    ) : (
      <div className="roomsNotFound">Комнат не найдено</div>
    )
  ) : (
    <>
      <ListGroup id="d-inline-flex" className="roomList">
        {rooms
          .filter((item) => {
            if (item === "") {
              return true;
            }
            return item[1].name.toLowerCase().includes(value.toLowerCase().trim());
          })
          .map((item, key) => {
            const chatRoomKey = item[0];
            const chatRoomName = item[1].name;
            const chatRoomPassword = item[1].password;
            return <RoomItem key={key} chatRoomKey={chatRoomKey} chatRoomName={chatRoomName} chatRoomPassword={chatRoomPassword}></RoomItem>;
          })}
      </ListGroup>
    </>
  );
};

export default RoomList;
