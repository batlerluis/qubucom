import React from 'react';
// import { useHistory } from 'react-router-dom';
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';
import "./HomeStyle.css";

import imgGoogle1 from "../assets/img/googlestore1.png";
import imgApple1 from "../assets/img/appstore1.png";
import imgPhone2 from "../assets/img/phone2.png"
import imgLog from "../assets/img/log.png"

const pageStyle = {
  wrapper: {
    flexGrow: 1,
    minHeight: "100vh",
    height: "auto",
    paddingTop: 112,
    '& > *': {
      padding: "20px 0",
    },
  },
  content: {
    height: "fit-content",
    paddingTop: 135,
    paddingLeft: 230
  },
  fullHeight: {
    height: "100%",
  },
  titleGroup: {
    paddingBottom: 30,
  },
  dscrGroup: {
    height: 120,
    paddingBottom: 20
  },
  titleText: {
    font: "normal normal normal 46px/52px Helvetica Neue",
    letterSpacing: "-0.46px",
    color: "#202124",
    opacity: 1,
    margin: 0,
    padding: 10,

  },
  dscrText: {
    font: "normal normal normal 20px/25px Quicksand",
    letterSpacing: "-1px",
    color: "#707070",
    opacity: 1,
    margin: 0
  },
  qubuText: {
    font: "bold normal normal 35px/45px Quicksand",
    letterSpacing: "-1px",
    color: "#000000",
    opacity: 1,
    margin: 0,
  },
  logGroup: {
    paddingBottom: 15
  },
  logContainer: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 6px 9px #00000029",
    color: "#717171",
    width: 84,
    height: 84,
    opacity: 1,
  },
  downloadText: {
    font: "normal normal normal 25px/28px Helvetica Neue",
    letterSpacing: "-0.25px",
    color: "#202124",
    textShadow: "0px 6px 9px #00000029"
  },
  buttonGroup: {
    width: 200
  }
};

const SurveyFinal = (props: any) => {

  const { classes } = props;

  // const history = useHistory();

  return (
    <Grid container justify-xs-space-between="true" className={classes.wrapper}>
      <Grid item md={2} sm={2} xs={1} />
      <Grid item sm={8} md={4} xs={10}>
        <Grid container direction="column">

          <Grid container alignContent="center" className={classes.titleGroup}>
            <h1 className={classes.titleText}>Gracias! Hemos recibido tus comentarios</h1>
          </Grid>

          <Grid item className={classes.dscrGroup}>
            <h3 className={classes.dscrText}>Mira tu opinión y la de otros usuarios en nuestra app. Califica, Comenta y Gana cupones de descuento por tus comentarios.</h3>
          </Grid>

          <Grid item>
            <Grid container direction="column" alignItems="center">
              <Grid item><h2 className={classes.downloadText}>Descárgala ahora!</h2></Grid>

              <Grid item className={classes.logGroup}>
                <Grid container className={classes.logContainer} alignItems="center" justify="center">
                  <img src={imgLog} alt="Can not load any file!" />
                </Grid>
              </Grid>

              <Grid item className={classes.logGroup}>
                <p className={classes.qubuText}>
                  QUBU
                  <CopyrightIcon style={{ fontSize: 10 }}></CopyrightIcon>
                </p>
              </Grid>

              <Grid item>
                <Grid container className={classes.buttonGroup} justify="space-around">
                  <img src={imgApple1} alt="Can not load file!" />
                  <img src={imgGoogle1} alt="Can not load file!" />
                </Grid>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item sm={1} md={1} xs={1} />

      <Grid item sm={12} md={3} xs={12} justify-xs-center="true">
        <Grid container justify="center">
          <img src={imgPhone2} alt="Can not load file!" />
        </Grid>
      </Grid>

      <Grid item md={2} sm={2} />
    </Grid>
  );
}

SurveyFinal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(pageStyle)(SurveyFinal);