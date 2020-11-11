import React from "react";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    flexGrow: 1,
  },
  link: {
    marginRight: theme.spacing(4),
  },
  linkStyle: {
    textDecoration: "none",
    color: "grey",
    fontSize: "larger",
  },
  activeStyle: {
    color: "black",
    paddingBottom: "8px",
    borderBottom: "3px solid black",
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" className={classes.logo}>
            <img src={logo} alt="logo" style={{ width: "12%" }} />
          </Typography>
          <div className={classes.link}>
            <NavLink
              to="/"
              exact
              className={classes.linkStyle}
              activeClassName={classes.activeStyle}
            >
              Form
            </NavLink>
          </div>
          <div className={classes.link}>
            <NavLink
              to="/card"
              exact
              className={classes.linkStyle}
              activeClassName={classes.activeStyle}
            >
              Card
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
