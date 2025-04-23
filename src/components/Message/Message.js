import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessageAction } from "../../app/providers/store/actions/chatActions";
import "./message.css";

const Message = ({ sender, content, timestamp, id }) => {
  const [mouseOver, setMouseOver] = useState(false);

  const dispatch = useDispatch();
  const currentChatRoomKey = useSelector((state) => state.chatReducer.currentChatRoomKey);

  const deleteMessage = () => {
    dispatch(deleteMessageAction({ id, currentChatRoomKey }));
  };

  return (
    <div
      onMouseEnter={() => {
        setMouseOver(true);
      }}
      onMouseLeave={() => {
        setMouseOver(false);
      }}
      className="message"
    >
      <div className="sender">{sender}</div>
      <div className="timestamp">{timestamp}</div>
      <div className="content">{content}</div>
      {mouseOver ? <div onClick={deleteMessage} className="delete-msg"></div> : null}
    </div>
  );
};

export default Message;
