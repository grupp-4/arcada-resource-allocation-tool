import {withLogging} from "gillog"

import Typography from "@material-ui/core/Typography"

import useTypographyStyles from "styles/typography"

import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


function Courses({log, data}) {
    
    const [open, setOpen] = React.useState(true);
  
    function handleClick() {
      setOpen(!open);
    }
    // ====== HOOKS ======>
    //const typographyStyles = useTypographyStyles()

    // ====== RENDER ======>
    // TODO: create this component
    return (
      <List component="nav" aria-label="main mailbox folders">
            {data && data.courses
                ? data.courses.map(course => 
                <><ListItem button onClick={handleClick}>
                    <ListItemText primary={course.name} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemText primary={course.courseCode} />
            <ListItemText primary={course.hours} />
            <ListItemText primary={course.period} />
            <ListItemText primary={course.program} />
          </ListItem>
        </List>
      </Collapse></>
      ) : "Loading courses..."}
                
        </List>
    );
}

Courses.id = "courses"

export default withLogging(Courses)
