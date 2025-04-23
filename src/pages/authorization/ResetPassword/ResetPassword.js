import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import "../authorization.css";
import { Button, Label, Input } from "reactstrap";
import { Link, Switch, Redirect } from "react-router-dom";
import { resetPasswordAction } from "../../../app/providers/store/actions/authActions";

export default function ResetPassword() {
  const dispatch = useDispatch();

  const passwordIsChanged = useSelector((state) => state.authReducer.passwordIsChanged);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object({
      password: yup
        .string()
        .required("Required!")
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
    onSubmit: function (value) {
      dispatch(
        resetPasswordAction({
          password: value.password,
          actionCode: new URLSearchParams(window.location.search).get("oobCode"),
        })
      );
    },
  });

  return !passwordIsChanged ? (
    <div className="container">
      <form className="form" onSubmit={formik.handleSubmit}>
        <h2>Сброс пароля</h2>
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
            Сбросить
          </Button>
        </div>
        <div className="form__additional-links">
          <Link to="/signIn">Вход</Link>
          <Link to="/signUp">Регистрация</Link>
        </div>
      </form>
    </div>
  ) : (
    <Switch>
      <Redirect to="/signIn" />
    </Switch>
  );
}
