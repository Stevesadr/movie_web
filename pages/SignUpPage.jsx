import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import styles from "@/styles/sigeinPage.module.css";
import { POST } from "@/repository/sendUserData";
import { useDispatch } from "react-redux";
import { setJwtToken } from "@/redux/fichers/usersSlice/usersRedux";
import { useRouter } from "next/router";
import { IoChevronBackCircleSharp } from "react-icons/io5";

const SignUpPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const validationScheme = Yup.object({
    name: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    username: Yup.string().required("Required"),
    password: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });
  const formFild = { name: "", lastname: "", username: "", password: "" };
  const sub = (value) => {
    POST("users/register", value)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.id === 0) {
          alert("Please enter");
        } else {
          POST("users/login", value)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              dispatch(setJwtToken(data.token));
              router.push("/index");
            });
        }
      })
      .catch((error) => {
        console.log("error");
      });
  };
  const errorHandler = () => {
    Swal.fire({
      title: "خطا",
      text: "نام کاربری یا رمز عبور اشتباه است!",
      icon: "error",
      confirmButtonText: "بازگشت",
    });
  };
  const backHandler = () => {
    router.push("./loginPage");
  };
  return (
    <div className={`${styles.main_Div}`}>
      <Formik
        onSubmit={sub}
        initialValues={formFild}
        validationSchema={validationScheme}
        validateOnBlur={false}
        validateOnChange={false}
      >
        <Form className={`${styles.main_form}`}>
          <label>name</label>
          <Field name="name" type="text" />
          <label lastname>Lastname</label>
          <Field name="lastname" type="text" />
          <label>Username</label>
          <Field name="username" type="text" />
          <ErrorMessage name="user" component={errorHandler} />
          <label>Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component={errorHandler} />
          <button type="submit" className={`${styles.btn_Submit}`}>
            Login
          </button>
        </Form>
      </Formik>
      <div className={`${styles.back_Btn}`} onClick={backHandler}>
        <IoChevronBackCircleSharp />
      </div>
    </div>
  );
};

export default SignUpPage;
