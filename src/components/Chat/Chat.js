import React, { useState, useEffect } from "react";
import "./chat.css";
import { Input, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Message/Message";
import { sendMessageAction, loadMessagesDataAction, resetMessageAction } from "../../app/providers/store/actions/chatActions";
import firebase from "firebase/app";
import "firebase/database";
import moment from "moment";

export default function Chat({ chatRoomKey }) {
  const currentChatRoomName = useSelector((state) => state.chatReducer.currentChatRoomName);
  const currentChatRoomMessages = useSelector((state) => state.chatReducer.currentMessages);
  const sender = useSelector((state) => state.authReducer.user.email);

  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchData = async (chatRoomKey) => {
      const database = firebase.database();
      const messagesRef = database.ref(chatRoomKey).child("messages");
      messagesRef.on("value", (snapshot) => {
        if (snapshot.exists()) {
          dispatch(loadMessagesDataAction(Object.entries(snapshot.val())));
        } else {
          dispatch(resetMessageAction());
        }
      });
    };
    fetchData(chatRoomKey);
  }, [chatRoomKey]);

  const sendMessage = () => {
    if (value.trim().length === 0) {
      setValue("");
    } else {
      dispatch(
        sendMessageAction({
          value: value.trim(),
          sender: sender,
          timestamp: firebase.database.ServerValue.TIMESTAMP,
          chatRoomKey: chatRoomKey,
        })
      );
    }
    setValue("");
  };

  const sendMessageEnter = (e) => {
    if (e.key === "Enter") {
      if (value.trim().length === 0) {
        setValue("");
      } else {
        dispatch(
          sendMessageAction({
            value: value.trim(),
            sender: sender,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            chatRoomKey: chatRoomKey,
          })
        );
      }
      setValue("");
      e.preventDefault();
    }
  };

  return currentChatRoomMessages ? (
    <>
      <div className="chat">
        <h4>{currentChatRoomName}</h4>
        <div className="chat__messages">
          {currentChatRoomMessages.map((item, index) => {
            const { writtenBy, content, timestamp } = item[1];
            const id = item[0];
            return <Message sender={writtenBy} content={content} timestamp={moment(timestamp).format("MMMM Do YYYY, h:mm:ss a")} key={id} id={id} />;
          })}
        </div>
        <div className="messageLine">
          <Input
            type="textarea"
            name="text"
            id="chat__input"
            placeholder="Введите сообщение"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={sendMessageEnter}
          />
          <Button onClick={sendMessage} className="chat__btn" color="primary">
            Отправить
          </Button>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="chat">
        <h4>{currentChatRoomName}</h4>
        <div className="chat__messages"></div>
        <div className="messageLine">
          <Input
            type="textarea"
            name="text"
            placeholder="Введите сообщение"
            id="chat__input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button onClick={sendMessage} className="chat__btn" color="primary">
            Отправить
          </Button>
        </div>
      </div>
    </>
  );
}
