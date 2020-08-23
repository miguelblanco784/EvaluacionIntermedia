import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
            <Button variant="contained">Guardar Apunte</Button>
          </Grid>
      </Grid>
    </React.Fragment>
  );
}