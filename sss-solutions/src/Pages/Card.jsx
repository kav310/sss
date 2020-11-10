import React from "react";
import {
  Grid,
  makeStyles,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    margin: "8rem 0 0 15rem",
  },
  text: {
    margin: "10rem",
    fontSize: "2.5rem",
  },
}));

export default function LandingCard() {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item lg={6}>
          <Typography className={classes.text}>
            Welcome to Hello World
            <br />
            Assignment at SSS Software
            <br />
            Solutions! Good Luck.
          </Typography>
        </Grid>
        <Grid item lg={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                style={{ background: "gray" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Success!
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lets get started doing awesome things.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
