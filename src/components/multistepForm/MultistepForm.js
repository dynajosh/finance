import React,{useState} from 'react'
import {useForm, useStep} from 'react-hooks-helper'
import Form1 from '../stepForm/Form1'
import Form2 from '../stepForm/Form2'
import Form3 from '../stepForm/Form3'
import Form4 from '../stepForm/Form4'
import Form5 from '../stepForm/Form5'
import Form6 from '../stepForm/Form6'
import Form7 from '../stepForm/Form7'
import Form8 from '../stepForm/Form8'
import Form9 from '../stepForm/Form9'
import Form10 from '../stepForm/Form10'
import Form11 from '../stepForm/Form11'
import Form12 from '../stepForm/Form12'
import Form13 from '../stepForm/Form13'
import Form14 from '../stepForm/Form14'
import Form15 from '../stepForm/Form15'
import Form16 from '../stepForm/Form16'
import Form17 from '../stepForm/Form17'
import Form18 from '../stepForm/Form18'
import Form19 from '../stepForm/Form19'
import Form20 from '../stepForm/Form20'
import Form21 from '../stepForm/Form21'
// import Form22 from '../stepForm/Form22'
import Form23 from '../stepForm/Form23'
import Form24 from '../stepForm/Form24'
import Form25 from '../stepForm/Form25'
import Form26 from '../stepForm/Form26'
import Form27 from '../stepForm/Form27'
import SucessPage from '../stepForm/SucessPage'
import  OptionalQuestion1   from    '../stepForm/OptionalQuestion1'
import  OptionalQuestion2   from    '../stepForm/OptionalQuestion2'
import  OptionalQuestion3   from    '../stepForm/OptionalQuestion3'






const defaultData ={
   levelOfConfidence:'',
   retirementTime:'',
   Howdoyoucurrentlymanageyourmoney:'',
   Whatactivityismostimportanttoyouinretirement:'',
   Whichwordmostaccuratelydescribesyourvisionofretirement:'',
   Wheredoyouexpectthemajorityofyourretirementincometocomefrom:'',
   Howwouldyoucharacterizeyouroverallhealth:'',
   Howcomfortableareyouwithinvesting:'',
   Areyoumarried:'',
   Doyouownahome:'',
   Doyoucurrentlyhavechildrenunder18:'',
   Doyouownabusiness:'',
   ImrespondingtotheimpactoftheCoronavirusby:'',
   Doyouhavea401k:'',
   DoyouhaveanIRA:'',
   Doyouhaveanemergencyfund:'',
   importantForAFinancialAdvisor:'',
   Issociallyresponsibleinvestingimportanttoyou:'',
   Doyoucurrentlyhaveafinancialadvisor:'',
   ZipCode:'',
   DoYouNeedyourfinancialadvisortobeinYourImmediateArea:'',
   PleaseEstimateYourHouseholdIncome:'',
   Pleaseestimateyourtotalinvestableassets:'',
   Pleaseestimateyourcurrentmonthlysavings:'',
   Howdidyouhearaboutus:'',
   messagetomatch:'',

// optional questions
   Areyousavingjointlyorseparately:'',
   Whyareyoulookingforanewone:'',
   Haveyourefinancedyourhomerecently:''
};


//  console.log(defaultData)
 

const steps = [
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
    {id:6},
    {id:7},
    {id:8},
    {id:9},
    {id:10},
    {id:11},
    {id:12},
    {id:13},
    {id:14},
    {id:15},
    {id:16},
    {id:17},
    {id:18},
    {id:19},
    {id:20},
    {id:21},
    {id:22},
    {id:23},
    {id:24},
    {id:25},
    {id:26},
    {id:27},
    {id:28},
    {id:29},
    {id:30},

    



]


const MultistepForm = () => {
    // const [ marriedStatus, setMarriedStatus]= useState(true)

    const [formData, setForm]= useForm(defaultData)

    console.log(formData)
    const {step, navigation} = useStep({
        steps,
        initialStep: 0
    })
    const props = {formData, setForm, navigation}

        switch (step.id){
            case 1 : 
            return <Form1 {...props}/>;
            case 2 : 
            return <Form2 {...props}/>;
            case 3 : 
            return <Form3 {...props}/>;
            case 4 : 
            return <Form4 {...props}/>;
            case 5 : 
            return <Form5 {...props}/>;
            case 6 : 
            return <Form6 {...props}/>;
            case 7 : 
            return <Form7 {...props}/>;
            case 8 : 
            return <Form8 {...props}/>;
            case 9 : 
            return <Form9 {...props}  />;
            case 10  : 
            return  <OptionalQuestion1 {...props}/>;
            case 11 : 
            return <Form10 {...props}/>;
            case 12 : 
            return <OptionalQuestion2 {...props}/>;
            case 13 : 
            return <Form11 {...props}/>;
            case 14 : 
            return <Form12 {...props}/>;
            case 15 : 
            return <Form13 {...props}/>;
            case 16 : 
            return <Form14 {...props}/>;
            case 17 : 
            return <Form15 {...props}/>;
            case 18 : 
            return <Form16 {...props}/>;
            case 19 : 
            return <Form17 {...props}/>;
            case 20 : 
            return <Form18 {...props}/>;
            case 21 : 
            return <Form19 {...props}/>;
            case 22 : 
            return <OptionalQuestion2 {...props}/>;
            case 23 : 
            return <Form20 {...props}/>;
            case 24 : 
            return <Form21 {...props}/>;
            case 25 : 
            return <Form23 {...props}/>;
            case 26 : 
            return <Form24 {...props}/>;
            case 27 : 
            return <Form25 {...props}/>;
             case 28 : 
            return <Form26 {...props}/>;
            case 29 : 
            return <Form27 {...props}/>;
            case 30:
                return <SucessPage/>
            default:
                return (
                    <div className='body'>
                        
                    </div>
                )

        }
  
}

export default MultistepForm
