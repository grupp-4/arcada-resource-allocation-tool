import {withLogging} from "gillog"

import Typography from "@material-ui/core/Typography"

import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


export default function SimpleCard() {

  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Course added to:
        </Typography>
        <Typography variant="h5" component="h2">
          Dennis Biström
        </Typography>
        <Typography color="textSecondary">
          Course added
        </Typography>
        <Typography variant="body2" component="p">
          Webbutveckling
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
/* Detta är äldre men finare kod gjort av Daniel och Johan. Kan ennu implementeras
function EventsFeed({log, cs, strings}) {







    // ====== HOOKS ======>
    const typographyStyles = useTypographyStyles()

    // ====== RENDER ======>
    return(
        <Typography className={typographyStyles.typography} variant={"body1"}>
            cs.map
        </Typography>
        
    )
}
*/
// export default withLogging(EventsFeed)
