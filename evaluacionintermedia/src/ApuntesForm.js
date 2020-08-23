import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default function Apuntes() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>

      <Grid item xs={12}>
          <TextField
            id="date"
            label="Fecha Apunte"
            type="date"
            defaultValue="2020-01-01"
            // className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>


        <Grid item xs={12}>
            <TextField
              required
              id="apuntes"
              name="apuntes"
              label="Apuntes"
              fullWidth
              multiline
              rows={10}
              variant="filled"
              autoComplete="shipping address-line1"
            />
          </Grid>

          <Grid item xs = {12}>
            <h2>Tags</h2>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
              <Button>REACT</Button>
              <Button>JAVASCRIPT</Button>
              <Button>FRONT-END</Button>
              <Button>BACK-END</Button>
              <Button>HTML</Button>
              <Button>CSS</Button>
            </ButtonGroup>
          </Grid>

          <Grid item xs = {12}>
            <Button variant="contained">Guardar Apunte</Button>
          </Grid>
          
      </Grid>
    </React.Fragment>
  );
}

