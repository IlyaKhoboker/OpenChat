import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import "../authorization.css";
import { Button, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { signUpAction } from "../../../app/providers/store/actions/authActions";

export default function SignUp() {
  const dispatch = useDispatch();
  const signUpError = useSelector((state) => state.authReducer.signUp_error_message);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
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
      confirmPassword: yup
        .string()
        .required("Обязательно!")
        .test("passwords-match", "Пароли должны совпадать", function (value) {
          return this.parent.password === value;
        }),
    }),
    onSubmit: (value) => {
      dispatch(
        signUpAction({
          email: value.email,
          password: value.password,
        })
      );
    },
  });

  return (
    <div className="container">
      <form className="form" onSubmit={formik.handleSubmit}>
        {JSON.stringify(signUpError) !== "{}" && signUpError !== null ? <p style={{ marginTop: "10px" }}>{signUpError}</p> : null}
        <h1>Регистрация</h1>
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
          <Label>Подтвердите пароль</Label>
          <Input type="password" name="confirmPassword" value={formik.values.confirmPassword} onChange={formik.handleChange} />
          {formik.errors.confirmPassword && formik.touched.confirmPassword && <span className="marker">{formik.errors.confirmPassword}</span>}
        </div>
        <div>
          <Button type="submit" color="primary" size="lg">
            Зарегистрироваться
          </Button>
        </div>
        <div className="form__additional-links">
          <Link to="/signIn">Вход</Link>
          <Link to="/forgotPassword">Забыли пароль?</Link>
        </div>
      </form>
    </div>
  );
}
