import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function AddressForm({
  name,
  setName,
  contact,
  setContact,
  address,
  setAddress,
  check,setCheck
}) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Typography variant="body2" gutterBottom color="textSecondary">
        Fields with * is required
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            value={name.firstName}
            error={name.firstName.length > 0 ? false : true}
            required
            label="First name"
            fullWidth
            autoComplete="given-name"
            onChange={(event) => {
              setName({
                firstName: event.target.value,
                lastName: name.lastName,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={name.lastName}
            error={name.lastName.length > 0 ? false : true}
            required
            label="Last name"
            fullWidth
            autoComplete="family-name"
            onChange={(event) => {
              setName({
                firstName: name.firstName,
                lastName: event.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={contact.email}
            error={contact.email.includes("@") ? false : true}
            required
            label="Email address"
            fullWidth
            autoComplete="email"
            onChange={(event) => {
              setContact({
                email: event.target.value,
                phone1: contact.phone1,
                phone2: contact.phone2,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={contact.phone1}
            required
            label="Phone 1"
            fullWidth
            autoComplete="phone"
            onChange={(event) => {
              setContact({
                email: contact.email,
                phone1: event.target.value,
                phone2: contact.phone2,
              });
            }}
            error={
              !isNaN(parseInt(contact.phone1)) && contact.phone1.length === 10
                ? false
                : true
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={contact.phone2}
            label="Phone 2"
            fullWidth
            autoComplete="phone"
            onChange={(event) => {
              setContact({
                email: contact.email,
                phone1: contact.phone1,
                phone2: event.target.value,
              });
            }}
            error={
              !isNaN(parseInt(contact.phone2)) && contact.phone2.length === 10
                ? false
                : contact.phone2.length === 0
                ? false
                : true
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={address.address}
            label="Address"
            fullWidth
            autoComplete="address"
            required
            onChange={(event) => {
              setAddress({
                address: event.target.value,
                city: address.city,
                country: address.country,
              });
            }}
            error={address.address.length > 0 ? false : true}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={address.city}
            required
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            onChange={(event) => {
              setAddress({
                address: address.address,
                city: event.target.value,
                country: address.country,
              });
            }}
            error={address.city.length > 0 ? false : true}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={address.country}
            required
            label="Country"
            fullWidth
            autoComplete="shipping country"
            onChange={(event) => {
              setAddress({
                address: address.address,
                city: address.city,
                country: event.target.value,
              });
            }}
            error={address.country.length > 0 ? false : true}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox 
              onChange={() => setCheck(!check)} color="secondary" name="saveAddress" value="yes" />
            }
            label="Receiver lives in apartment"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
