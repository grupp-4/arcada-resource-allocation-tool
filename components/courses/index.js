import React from 'react';
import {withLogging} from "gillog"

import Typography from "@material-ui/core/Typography"
import useTypographyStyles from "styles/typography"

import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

/*Styles
** NOTES:
** 1. Had to add card margin and remove grid spacing to prevent horizontal scrollbar
*/
const useStyles = makeStyles({
  card: {
    minWidth: 50,
    margin: 4,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

//Prototype that takes the first letter of a string and makes it into a Material UI Avatar
//Call this function with "String".makeAvatar()
String.prototype.makeAvatar = function() {
  return <Avatar>{this.charAt(0)}</Avatar>;
}


function Courses({log, data}) {
    
  const classes = useStyles();
  
    // ====== HOOKS ======>
    //const typographyStyles = useTypographyStyles()

    // ====== RENDER ======>
    // Fixed: Avatar
    // Fixed: Display cards in a grid
    // TODO: If teacher : else button add teacher
      // Alternative: Make dropdown with default none : Teachers
    // Fixed: Fix some kind of bug classNames -- Had missed constant? Not sure what fixed this
    // TODO Searchbox && function
    return (
  <>
    <Grid container spacing={0} justify="center" alignItems="stretch">
      {data && data.courses
          ? data.courses.map(course => 
          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardHeader
                avatar={course.name.makeAvatar()}
                title={course.name}
                subheader={'Code: '+course.courseCode}
                />
              <CardContent>
                <Typography variant="h5" component="h2">
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                {'Program: '+course.program}
                <br/>
                {'Time: '+course.hours+'h - Starting period '+course.period}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Add Teacher</Button>
              </CardActions>
            </Card>
          </Grid>
      ) : "Loading courses..."}
    </Grid>
  </>      
    );
}

Courses.id = "courses"

export default withLogging(Courses)
