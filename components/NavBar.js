import Grid from '@material-ui/core/Grid';
import styles from "./styles.scss"
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default function GroupedButtons() {
  return (
    <div className={`${styles.gridStyles} ${styles.gridNavbar}`}>
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Grid container spacing={1} direction="column" alignItems="center">
          <Grid item>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
              <Button>Hem</Button>
              <Button>Sök</Button>
              <Button>Överblick</Button>
              <Button>Placeholder</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </div>
  );
}