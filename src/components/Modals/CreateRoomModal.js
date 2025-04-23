import React from "react";
import { Button, Modal, ModalBody, ModalFooter, Label, Input } from "reactstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { createRoomAction } from "../../app/providers/store/actions/chatActions";
import "./modals.css";

const CreateRoomModal = ({ modal, setModal }) => {
  const toggle = () => setModal(!modal);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .required("Обязательно!")
        .matches(/^\S.*\S$/, "Room name cannot start with a space"),
      password: yup.string(),
    }),
    onSubmit: (value, { resetForm }) => {
      toggle();
      dispatch(createRoomAction({ name: value.name, password: value.password }));
      resetForm({
        values: {
          password: "",
        },
      });
    },
  });

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <form className="form modal-form" onSubmit={formik.handleSubmit}>
            <h1>Создать комнату</h1>
            <div>
              <Label>Имя</Label>
              <Input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} />
              {formik.errors.name && formik.touched.name && <p>{formik.errors.name}</p>}
            </div>
            <div>
              <Label>Пароль комнаты</Label>
              <Input placeholder="Not required" type="password" name="password" value={formik.values.password} onChange={formik.handleChange} />
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

export default CreateRoomModal;
