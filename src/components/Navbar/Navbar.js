import React, { useState } from "react";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "reactstrap";
import { signOutAction } from "../../app/providers/store/actions/authActions";
import CreateRoomModal from "../Modals/CreateRoomModal";

export default function Navbar({ setValue }) {
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);

  const debounce = (fn, ms) => {
    let timeout;
    return function () {
      const fnCall = () => {
        fn.apply(this, arguments);
      };
      clearTimeout(timeout);
      timeout = setTimeout(fnCall, ms);
    };
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onChangeDebounced = debounce(onChange, 500);

  return (
    <>
      <CreateRoomModal modal={modal} setModal={setModal} />
      <div className="navbar">
        <div className="searchLine">
          <Input id="roomList__input" type="text" name="findRoom" placeholder="Введите название комнаты" onChange={onChangeDebounced}></Input>
          <Button className="navbar__create-room" onClick={() => setModal(!modal)} type="submit" color="primary" size="lg">
            Создать
          </Button>
        </div>
        <div className="searchLine">
          <h2 className="navbar__display-name">{user.email}</h2>
          <Button className="navbar__sign-out" onClick={() => dispatch(signOutAction())} type="submit" color="primary" size="lg">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20px" height="30px" viewBox="0 0 471.2 471.2" fill="#000000">
              <path
                d="M227.619,444.2h-122.9c-33.4,0-60.5-27.2-60.5-60.5V87.5c0-33.4,27.2-60.5,60.5-60.5h124.9c7.5,0,13.5-6,13.5-13.5 s-6-13.5-13.5-13.5h-124.9c-48.3,0-87.5,39.3-87.5,87.5v296.2c0,48.3,39.3,87.5,87.5,87.5h122.9c7.5,0,13.5-6,13.5-13.5 S235.019,444.2,227.619,444.2z"
                fill="#000000"
              ></path>
              <path
                d="M450.019,226.1l-85.8-85.8c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1l62.8,62.8h-273.9c-7.5,0-13.5,6-13.5,13.5 s6,13.5,13.5,13.5h273.9l-62.8,62.8c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.8-85.8 C455.319,239.9,455.319,231.3,450.019,226.1z"
                fill="#000000"
              ></path>
            </svg>
          </Button>
        </div>
      </div>
    </>
  );
}
