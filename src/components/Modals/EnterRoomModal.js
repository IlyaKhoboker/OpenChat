import React from "react";
import { Button, Modal, ModalBody, ModalFooter, Label, Input } from "reactstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { enterChatRoomAction } from "../../app/providers/store/actions/chatActions";
import "./modals.css";

const EnterRoomModal = ({ modal, setModal, chatRoomKey, chatRoomPassword, chatRoomName }) => {
  const toggle = () => setModal(!modal);

  const dispatch = useDispatch();

  const error_message = useSelector((state) => state.chatReducer.error_message);

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: yup.object({
      password: yup.string().required("Required!"),
    }),
    onSubmit: (value, { resetForm }) => {
      dispatch(
        enterChatRoomAction({
          password: value.password,
          chatRoomPassword: chatRoomPassword,
          chatRoomKey: chatRoomKey,
          chatRoomName: chatRoomName,
        })
      );
      resetForm({
        values: {
          password: "",
        },
      });
      if (value.password === chatRoomPassword) {
        toggle();
      }
    },
  });

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        {error_message === null ? null : <p className="error">{error_message}</p>}
        <ModalBody>
          <form className="form modal-form" onSubmit={formik.handleSubmit}>
            <h2 className="name">{chatRoomName}</h2>
            <div>
              <Label>Пароль комнаты</Label>
              <Input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} />
              {formik.errors.password && formik.touched.password && <p>{formik.errors.password}</p>}
            </div>
            <div>
              <Button type="submit" color="primary" size="lg">
                Создать
              </Button>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Закрыть
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EnterRoomModal;
