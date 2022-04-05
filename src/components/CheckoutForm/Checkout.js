import React ,{useState }from 'react'
import { Paper,Stepper,Step,StepLabel,Typography,CircularProgress,Divider,Button } from '@material-ui/core'

import Style from './Style'
import AddressForm from './AddressForm'
import Review from './Review'
const steps = ['Shipping Address','Confimation']
const Checkout = ({handleOrder,userDetails,logoutFunction}) => {
     const [activeStep, setactivesteps] = useState(0)
     const classes = Style()

const Confirmation = () =>{
<div>
    Confirmation
</div>
}
     const Form = () => activeStep === 0 ? <AddressForm userDetails={userDetails} logoutFunction={logoutFunction} handleOrder={handleOrder}/> : <Review/>

    return (
        <>
        <div className={classes.toolbar}/>
        <main className={classes.layout}>
            <Paper classname = {classes.paper}>
                <Typography variant='h4'  align="center">Checkout</Typography>
                <Stepper activeStep={activeStep} className ={classes.Stepper} >
                {
                 steps.map((step) => <Step key = {step}>
                <StepLabel>{step}</StepLabel>
                </Step>)
                }
                </Stepper>
                {activeStep === steps.length? <Confirmation/>:<Form/>}
            </Paper>
        </main>
        </>
    )
}

export default Checkout
