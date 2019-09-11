import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 240,
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 11,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Handelse
        </Typography>
        <Typography variant="h5" component="h2">
          Dennis
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Kursbokning
        </Typography>
        <Typography variant="body2" component="p">
          
          <br />
          {'Dennis bokad 40h'}
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}