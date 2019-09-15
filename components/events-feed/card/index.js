import MuiCard from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Typography from "@material-ui/core/Typography"

function Card() {
    return (
        <MuiCard>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Kursbokning
                </Typography>
                <Typography variant="h5">
                    Dennis Biström
                </Typography>
                <Typography variant="body2">
                    Dennis bokad 40h
                </Typography>
            </CardContent>
            <CardActions/>
        </MuiCard>
    )
}

export default Card
