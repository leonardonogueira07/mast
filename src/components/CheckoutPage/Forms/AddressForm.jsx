import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { InputField } from "../../FormFields";

export default function AddressForm(props) {
  const {
    formField: { firstName }
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
