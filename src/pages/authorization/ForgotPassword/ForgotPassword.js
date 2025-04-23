import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import "../authorization.css";
import { Button, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { forgotPasswordAction } from "../../../app/providers/store/actions/authActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ForgotPassword() {
  const dispatch = useDispatch();

  toast.configure();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("Неверный email фомат").required("Обязательно!"),
    }),
    onSubmit: (value) => {
      dispatch(
        forgotPasswordAction({
          email: value.email,
        })
      );
      toast.success("Пожалуйста, проверьте ваш email для сообщения о восстановлении пароля", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: false,
      });
    },
  });

  return (
    <div className="container">
      <form className="form" onSubmit={formik.handleSubmit}>
        <h2>Восстановление пароля</h2>
        <div>
          <Label>Email</Label>
          <Input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} />
          {formik.errors.email && formik.touched.email && <span className="marker">{formik.errors.email}</span>}
        </div>
        <div>
          <Button type="submit" color="primary" size="lg">
            Восстановить
          </Button>
        </div>
        <div className="form__additional-links">
          <Link to="/signIn">Войти</Link>
          <Link to="/signUp">Зарегистрироваться</Link>
        </div>
      </form>
    </div>
  );
}
