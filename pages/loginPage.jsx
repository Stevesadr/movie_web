import React from "react";
import styles from "@/styles/loginPage.module.css";
import Image from "next/image";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import Swal from "sweetalert2";
import { POST } from "@/repository/sendUserData";
import { useDispatch } from "react-redux";
import { setJwtToken } from "@/redux/fichers/usersSlice/usersRedux";
import { useRouter } from "next/router";

const loginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const sub = (value) => {
    console.log("on sub ");
    POST("users/login", value)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.hasOwnProperty("token")) {
          console.log("is ok");
          dispatch(setJwtToken(data.token));
          router.push("/");
        } else {
          console.log("thas is else error");
          errorHandler();
        }
      })
      .catch((err) => {
        console.log(err);
        errorHandler();
      });
  };
  const validationScheme = Yup.object({
    username: Yup.string().required("Required"),
    password: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const formFild = { username: "", password: "" };
  const errorHandler = () => {
    Swal.fire({
      title: "خطا",
      text: "نام کاربری یا رمز عبور اشتباه است!",
      icon: "error",
      confirmButtonText: "بازگشت",
    });
  };
  return (
    <div className={`${styles.main_Container}`}>
      <div className={`${styles.center_Container}`}>
        <div className={`${styles.form_Container}`}>
          <Formik
            onSubmit={sub}
            initialValues={formFild}
            validationSchema={validationScheme}
            validateOnBlur={false}
            validateOnChange={false}
          >
            <Form className={`${styles.main_form}`}>
              <label>Username</label>
              <Field name="username" type="text" />
              <ErrorMessage name="username" component={errorHandler} />
              <label>Password</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" component={errorHandler} />
              <Link href={"./SignUpPage"} className={`${styles.link_signin}`}>
                Create Account
              </Link>
              <button type="submit" className={`${styles.btn_Submit}`}>
                Login
              </button>
              {/* <button type="submit" className={`${styles.btn_Submit}`}>
                Login
              </button> */}
            </Form>
          </Formik>
        </div>
        <div className={`${styles.image_Container}`}>
          <Image
            src="/images/undraw_futuristic_interface_re_0cm6 (1).svg"
            width={600}
            height={300}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
