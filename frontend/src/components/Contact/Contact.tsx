/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useFormik, FormikHelpers } from "formik";
import * as yup from "yup";
import { Button, Grid, TextField, Typography } from "@mui/material/";
import SuccessToast from "./SuccessToast";

const validationSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, "Please enter a valid name")
    .max(50, "Please enter a valid name")
    .required("Please specify your first name"),
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email address")
    .required("Email is required."),
  message: yup
    .string()
    .trim()
    .max(250, "Message Limit")
    .required("Please specify your message"),
});

interface Values {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [openToast, setOpenToast] = useState(false);

  const handleCloseToast = () => {
    setOpenToast(false);
  };

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const onSubmit = async (
    values: Values,
    { resetForm }: FormikHelpers<Values>
  ) => {
    try {
      await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify(values),
      });
      resetForm();
      setOpenToast(true);
    } catch (err) {
      alert("Error sending message");
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item container direction="column">
          <Grid item mb={1}>
            <Typography
              variant="h4"
              component="h2"
              color="primary"
              fontWeight="bold"
              mb={2}
            >
              Contact
            </Typography>

            <Typography variant="subtitle1" color="primary">
              Whether you need a photographer or are interested in a creative
              partnership, I'm all ears. Let's discuss your ideas and see what
              we can create together.
            </Typography>
          </Grid>

          <Grid item mb={1}>
            <TextField
              id="name"
              label="Name"
              name="name"
              fullWidth
              variant="standard"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid item mb={4}>
            <TextField
              id="email"
              label="Email"
              type="email"
              name="email"
              variant="standard"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item mb={3}>
            <Typography variant="body1" color="secondary" gutterBottom>
              Message
            </Typography>
            <TextField
              id="message"
              name="message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
          </Grid>
          <Grid item>
            <SuccessToast
              open={openToast}
              handleCloseToast={handleCloseToast}
            />
          </Grid>

          <Grid item>
            <Button variant="outlined" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default Contact;
