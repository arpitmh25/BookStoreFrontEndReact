import React, { useState } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import {Link} from 'react-router-dom'
import { TextField,Stack } from '@fluentui/react'

const AddressForm = ({handleOrder , userDetails}) => {
    const [ upadtedUserDetails,setUpadtedUserDetails  ] = useState(userDetails);
    const containerStackTokens  = { childrenGap: 24 };

    return (
        <>
          <Typography variant='h5' gutterBottom>
              Shipping Address
              </Typography> 
                  <form onSubmit=''>
          <Grid container spacing={3}>
          <Stack styles={{root:{width:600, marginTop:24}}} verticalFill horizontalAlign='center'   wrap tokens={containerStackTokens}>
          <TextField onChange={(e,value) =>{
              setUpadtedUserDetails({...upadtedUserDetails,firstName:value});
          }} 
          styles={{root:{width:500, paddingBottom:12}}} value={upadtedUserDetails.firstName} required  label = 'firstName'/>
          <TextField onChange={(e,value) =>{
              setUpadtedUserDetails({...upadtedUserDetails,lastName:value});
          }} styles={{root:{width:500, paddingBottom:12}}} value={upadtedUserDetails.lastName} required label = 'lastname'/>
          <TextField onChange={(e,value) =>{
              setUpadtedUserDetails({...upadtedUserDetails,email:value});
          }} styles={{root:{width:500, paddingBottom:12}}}  value={upadtedUserDetails.email} required label = 'email'/>
          <TextField onChange={(e,value) =>{
              setUpadtedUserDetails({...upadtedUserDetails,address:value});
          }} styles={{root:{width:500}}} value={upadtedUserDetails.address} required label = 'address'/>
          </Stack>
         
          </Grid>
          <br />
          <div style={{ display: 'flex', justifyContent:'space-between' , padding : '20px'  }}>
            <Button   component={Link} variant="outlined" to="/cart">Back to Cart</Button>
            <Button component={Link} variant="contained" color="primary" to="/review" onClick={() => {handleOrder(upadtedUserDetails.address)}}>Next</Button>
          </div>
                  </form>
        </>
    )
}

export default AddressForm
