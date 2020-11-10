import React, { useState } from "react";
import {
  Grid,
  makeStyles,
  Typography,
  TextField,
  Button,
  Switch,
} from "@material-ui/core";
import { Formik, Form, useField } from "formik";
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
  text: {
    margin: "10rem",
    fontSize: "2.5rem",
  },
  inputGrid: {
    marginLeft: "15rem",
    marginTop: "8rem",
  },
  inputText: {
    marginBottom: "2.5rem",
  },
}));

const validationSchema = yup.object({
  name: yup
    .string()
    .min(6, "Name should have minimum 6 characters")
    .required("Required"),
  age: yup.number().required("Required"),
  password: yup
    .string()
    .min(6, "Password should have miniumum 6 characters!")
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), "Password does not Match"])
    .required("Password confirm is required"),
});

export default function LandingForm() {
  const classes = useStyles();
  const [state, setstate] = useState(false);

  const MyTextField = ({ label, type, placeholder, ...props }) => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : "";
    return (
      <TextField
        {...field}
        type={type}
        helperText={errorText}
        label={label}
        placeholder={placeholder}
        error={!!errorText}
        className={classes.inputText}
        fullWidth={true}
      />
    );
  };

  const handleClick = (data) => {
    alert(`name:${data.name}
      Age:${data.age}
      `);
    setstate(true);
  };

  return (
    <div>
      <Grid container>
        <Grid item lg={6}>
          {!state ? (
            <Typography className={classes.text}>
              Welcome to Hello World
              <br />
              Assignment at SSS Software
              <br />
              Solutions! Good Luck.
            </Typography>
          ) : (
            <Typography className={classes.text}>Good Luck.</Typography>
          )}
        </Grid>
        <Grid item lg={4}>
          <Formik
            initialValues={{
              name: "",
              age: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(data, { setSubmitting }) => {
              setSubmitting(true);
              handleClick(data);
              console.log("submit: ", data);
              setSubmitting(false);
            }}
          >
            {({ values, errors, isSubmitting }) => (
              <Form className={classes.mainLogin}>
                <div className={classes.inputGrid}>
                  <div>
                    <MyTextField
                      label="Name"
                      name="name"
                      placeholder="Enter your name"
                      required={true}
                    />
                  </div>
                  <div>
                    <MyTextField
                      label="Age"
                      name="age"
                      placeholder="Enter your age"
                      required={true}
                    />
                  </div>
                  <div style={{ marginLeft: "10rem" }}>
                    ARE YOU ABOVE 18
                    <Switch color="primary" />
                  </div>
                  <div>
                    <MyTextField
                      label="Password"
                      name="password"
                      required={true}
                      placeholder="Enter your password"
                      type="password"
                    />
                  </div>
                  <div>
                    <MyTextField
                      label="Confirm Password"
                      name="confirmPassword"
                      required={true}
                      placeholder="Re-enter your password"
                      type="password"
                    />
                  </div>
                  <div>
                    <Button
                      disabled={isSubmitting}
                      color="primary"
                      variant="contained"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </div>
  );
}
