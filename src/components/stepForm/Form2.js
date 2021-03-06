import React from 'react'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import { Typography, Button } from '@material-ui/core';
import Accordion from './Accordion'

import useStyles from './styles.js'

 const Form2 = ({formData, navigation, setForm}) => {
     const classes =useStyles();
     const{retirementTime} = formData

    //  const [value, setValue] = React.useState('1-4 years');

    //  const handleChange = (event) => {
    //    setValue(event.target.value);
    //  };


    return (
        <Container maxWidth='xs' className= {classes.form}>
            <Typography variant='h6' className= {classes.title}>Find Your Advisor Match</Typography>
            <FormControl component="fieldset" style={{width:'100%'}}>
                <Typography variant="h5" style={{marginBottom:'20px'}}>When would you like to retire?</Typography>
                <RadioGroup  controlled="true" style={{paddingLeft:'10px'}} aria-label=" retirement time" name="retirementTime" value={retirementTime} onChange={setForm}>
                    <FormControlLabel  className={classes.formControl}  value="1-4 years" control={<Radio color='black'/>} label="1-4 years" />
                    <FormControlLabel  className={classes.formControl} value="5-9 years" control={<Radio color='black'/>} label="5-9 years" />
                    <FormControlLabel  className={classes.formControl}value="10-19 years" control={<Radio color='black'/>} label="10-19 years" />
                    <FormControlLabel  className={classes.formControl} value=" 20-29 years"  control={<Radio color='black'/>} label=" 20-29 years" />
                    <FormControlLabel  className={classes.formControl} value="30+ years"  control={<Radio color='black'/>} label=" 30+ years" />
                </RadioGroup>
             <div >
                <Button 
                variant='contained'
                color='primary' 
                style={{marginTop:'1rem', marginRight:'3rem'}}
                onClick ={()=>navigation.previous()}>
                    Back
                </Button>
                <Button 
                variant='contained'
                color='secondary' 
                style={{marginTop:'1rem'}}
                onClick ={()=>navigation.next()}>
                Next
                </Button>
             </div>
             <Accordion/>
          </FormControl>
       </Container>
    )
}

export default Form2