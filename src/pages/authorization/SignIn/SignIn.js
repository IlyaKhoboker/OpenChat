import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import "../authorization.css";
import { Button, Label, Input } from "reactstrap";
import { signInAction, googleSignInAction } from "../../../app/providers/store/actions/authActions";
import { Link } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const signInError = useSelector((state) => state.authReducer.signIn_error_message);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("Неверный email фомат").required("Обязательно!"),
      password: yup
        .string()
        .required("Обязательно!")
        .matches(
          /^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          "Пароль должен содержать хотя бы восемь символов, включая хотя бы одну цифру и обе строчные и заглавные буквы"
        ),
    }),
    onSubmit: (value) => {
      dispatch(
        signInAction({
          email: value.email,
          password: value.password,
        })
      );
    },
  });

  return (
    <div className="container">
      <form className="form" onSubmit={formik.handleSubmit}>
        {JSON.stringify(signInError) !== "{}" && signInError !== null ? <p style={{ marginTop: "10px" }}>{signInError}</p> : null}
        <h1 className="header">OpenChat</h1>
        <div>
          <Label>Email</Label>
          <Input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} />
          {formik.errors.email && formik.touched.email && <span className="marker">{formik.errors.email}</span>}
        </div>
        <div>
          <Label>Пароль</Label>
          <Input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} />
          {formik.errors.password && formik.touched.password && <span className="marker">{formik.errors.password}</span>}
        </div>
        <div>
          <Button type="submit" color="primary" size="lg">
            Войти
          </Button>
        </div>
        <div className="form__additional-links">
          <Link to="/signUp">Регистрация</Link>
          <Link to="/forgotPassword">Забыли пароль?</Link>
        </div>
        <div
          className="form__social-networks-auth"
          onClick={() => {
            dispatch(googleSignInAction());
          }}
        >
          Войти с помощью Google
        </div>
      </form>
      <div className="salutation">
        <span style={{ fontSize: "60px" }}>Stop being alone</span>
        <div style={{ color: "#fff" }}>
          настало время открыть для себя <span style={{ color: "#fdb10d" }}>безграничное</span> общение
        </div>
      </div>
    </div>
  );
};

export default SignIn;
