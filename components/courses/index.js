import React from 'react';
import {withLogging} from "gillog"

import Typography from "@material-ui/core/Typography"

import useTypographyStyles from "styles/typography"

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


/*const useStyles = makeStyles({
  card: {
    minWidth: 50,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});*/


function Courses({log, data}) {
    
  //const classes = useStyles();
  
    /*function handleClick() {
      setOpen(!open);
    }*/
    // ====== HOOKS ======>
    //const typographyStyles = useTypographyStyles()

    // ====== RENDER ======>
    // TODO: Fix classNames
    // TODO: If teacher : else button add teacher
    return (

      <>
            {data && data.courses
                ? data.courses.map(course => 
                  <Card /*className={classes.card}*/>
                    <CardContent>
                      <Typography variant="h5" component="h2">
                      {course.name}
                      </Typography>
                      <Typography /*className={classes.pos}*/ color="textSecondary">
                      {'Program: '+course.program}
                      <br/>
                      {'Code: '+course.courseCode}
                      <br/>
                      {'Period: '+course.period+' - '+course.hours+'h'}
                      </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Add Teacher</Button>
      </CardActions>
      </Card>
      ) : "Loading courses..."}
          </>      
    );
}

Courses.id = "courses"

export default withLogging(Courses)
