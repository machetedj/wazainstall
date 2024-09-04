import React, { useState, useEffect } from "react";
import qs from "query-string";

import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Form, Field } from "formik";
import usePlans from "../../hooks/usePlans";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import logo from "../../assets/logo.png";
import backgroundStep from "../../assets/backgroundStep2.png";
import { i18n } from "../../translate/i18n";
import "./style.css";
import { openApi } from "../../services/api";
import toastError from "../../errors/toastError";
import moment from "moment";
const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        CRM WhatsApp
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    "&.MuiButton-root": {
      margin: "20px 0px 16px",
      backgroundColor: "rgb(52, 137, 255)",
      borderRadius: " 30px",
    },

    "&:hover": {
      backgroundColor: "#7946d1",
      boxShadow: "none",
    },

    backgroundColor: "rgb(52, 137, 255)",
    margin: theme.spacing(3, 0, 2),
    WebkitTextFillColor: "#FFF",
  },
}));

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "¡Demasiado corto!")
    .max(50, "¡Demasiado largo!")
    .required("Requerido"),
  password: Yup.string().min(5, "¡Demasiado corto!").max(50, "¡Demasiado largo!"),
  email: Yup.string().email("Email inválido").required("Requerido"),
});

const SignUp = () => {
  const classes = useStyles();
  const history = useHistory();
  let companyId = null;

  const params = qs.parse(window.location.search);
  if (params.companyId !== undefined) {
    companyId = params.companyId;
  }

  const initialState = {
    name: "",
    email: "",
    phone: "",
    password: "",
    planId: "",
  };

  const [user] = useState(initialState);
  const dueDate = moment().add(14, "day").format();
  const handleSignUp = async (values) => {
    Object.assign(values, { recurrence: "MENSAL" });
    Object.assign(values, { dueDate: dueDate });
    Object.assign(values, { status: "t" });
    Object.assign(values, { campaignsEnabled: true });
    try {
      await openApi.post("/companies/cadastro", values);
      toast.success(i18n.t("signup.toasts.success"));
      history.push("/login");
    } catch (err) {
      console.log(err);
      toastError(err);
    }
  };

  const [plans, setPlans] = useState([]);
  const { list: listPlans } = usePlans();

  useEffect(() => {
    async function fetchData() {
      const list = await listPlans();
      setPlans(list);
    }
    fetchData();
  }, []);

  return (
    <div className="geral-signup">
      <div className={"container-signup"}>
        <div className={"paper"}>
          <img src={logo} alt="Whats" className="img-logo-signup" />

          <h4 className="h4">⚡ Registro</h4>
          <div>
            <span className="span">
              👋🏻 Comienza tu <b>Prueba GRATIS</b> de 14 días de CRM WhatsApp en
              solo 3 pasos!{" "}
              <b>No se preocupe, No te pedimos los datos de tu tarjeta.</b> 💳
            </span>
          </div>
          {/*<Typography component="h1" variant="h5">
    			{i18n.t("signup.title")}
    		</Typography>*/}
          {/* <form className={classes.form} noValidate onSubmit={handleSignUp}> */}

          <Formik
            initialValues={user}
            enableReinitialize={true}
            validationSchema={UserSchema}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                handleSignUp(values);
                actions.setSubmitting(false);
              }, 400);
            }}
          >
            {({ touched, errors, isSubmitting }) => (
              <Form className={classes.form}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <p>Cual es tu nombre?</p>
                    <Field
                      as={TextField}
                      margin="dense"
                      autoComplete="name"
                      name="name"
                      error={touched.name && Boolean(errors.name)}
                      helperText={touched.name && errors.name}
                      variant="outlined"
                      fullWidth
                      id="name"
                      label="Su nombre"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <p>Tu número de WhatsApp</p>
                    <Field
                      as={TextField}
                      margin="dense"
                      variant="outlined"
                      fullWidth
                      id="phone"
                      label="Teléfono WhatsApp"
                      name="phone"
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                      autoComplete="phone"
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <p>Tus datos de acceso</p>
                    <Field
                      as={TextField}
                      variant="outlined"
                      margin="dense"
                      fullWidth
                      id="email"
                      label={i18n.t("signup.form.email")}
                      name="email"
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                      autoComplete="email"
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      margin="dense"
                      variant="outlined"
                      fullWidth
                      name="password"
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                      label={i18n.t("signup.form.password")}
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel htmlFor="plan-selection">Plan</InputLabel>
                    <Field
                      as={Select}
                      margin="dense"
                      variant="outlined"
                      fullWidth
                      id="plan-selection"
                      label="Plan"
                      name="planId"
                      required
                    >
                      {plans.map((plan, key) => (
                        <MenuItem key={key} value={plan.id}>
                          {plan.name} - Operadores: {plan.users} - Whatsapp:{" "}
                          {plan.connections} - Departamentos: {plan.queues} - USD {" "}
                          {plan.value}
                        </MenuItem>
                      ))}
                    </Field>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  margin="dense"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  {i18n.t("signup.buttons.submit")}
                </Button>
                <Grid>
                  <Grid item>
                    <Link
                      href="#"
                      variant="body1"
                      component={RouterLink}
                      to="/login"
                      style={{ color: "#7946d1", fontWeight: 500 }}
                    >
                      {i18n.t("signup.buttons.login")}
                    </Link>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </div>
        <div className="footer">
          <p className="p">
            Copyright ©{" "}
            <a href={"#"} target={"_blank"}>
              CRM WhatsApp {""}
            </a>{" "}
            2024{" "}
          </p>
          <p className="p">
            Este sitio está protegido por reCAPTCHA Enterprise y Google{" "}
            <a href={"https://policies.google.com/privacy"} target={"_blank"}>
              Política de Privacidad
            </a>{" "}
            and{" "}
            <a href={"https://policies.google.com/terms"} target={"_blank"}>
              Términos de Servicio
            </a>
          </p>
        </div>
        <Box mt={5}>{/* <Copyright /> */}</Box>
      </div>
      <div className={"container-img-signup"}>
        <div className="img-signup"></div>
      </div>
    </div>
  );
};

export default SignUp;