import { Delete, DetailsRounded, Edit, Place } from "@mui/icons-material";
import { Button, FormControl,FormControlLabel, IconButton, Pagination, Radio, RadioGroup, Typography } from "@mui/material";
//import FormControlLabel from '@material-ui/core/FormControlLabel';
import { FlexBox } from "components/flex-box";
import UserDashboardHeader from "components/header/UserDashboardHeader";
import CustomerDashboardLayout from "components/layouts/customer-dashboard";
import CustomerDashboardNavigation from "components/layouts/customer-dashboard/Navigations";
import TableRow from "components/TableRow";
import Link from "next/link";
import { authSelector } from "redux/authSlice";
import { adressSelector } from "redux/adressSlice";
import { AppDispatch } from "redux/store";
import { useDispatch, useSelector } from "react-redux";
import {getAdress } from "redux/adressSlice";
import  { useEffect,useState} from 'react';
import { setSelectedAdrIdSlice } from "redux/sellectedAddress";

const AddressList = () => {
 // const [adr,setAdr]=useState([]);
 const {user} = useSelector(authSelector) ;
 
  const dispatch = useDispatch<AppDispatch>();
  const handle = async () => {
   await dispatch(getAdress({user_id:user.id}))    
  };
  const [value, setValue] =useState('');
  
  const handleChange = (event) => {
    console.log("event.target.value")
    console.log(event.target.value)
    // store.dispatch(setSelectedAdrIdSlice.actions.setID('0'))
    dispatch(setSelectedAdrIdSlice.actions.setID(event.target.value)) 
    
     setValue(event.target.value);

  };
const {adresses} = useSelector(adressSelector) ;
  useEffect(() => {
    handle(); 
  }, []);
 
 
  return (
     
    <>
      {/* <Button onClick={handle} >Click here</Button>  */}

      <UserDashboardHeader
        icon={Place}
        title="My Addresses"
        navigation={<CustomerDashboardNavigation />}
       
        
      />
     <RadioGroup aria-label="gender" name="gender1"  onChange={handleChange}>
       {adresses.map((adr, ind) => (
        <TableRow sx={{ my: 2, padding: "6px 18px" }} key={ind}>
          <Typography whiteSpace="pre" m={0.75} textAlign="left">
           {adr.name}
          </Typography>

          <Typography flex="1 1 260px !important" m={0.75} textAlign="left">
          {adr.address}
          </Typography>

          <Typography whiteSpace="pre" m={0.75} textAlign="left">
           {adr.mobile}
          </Typography>

          <Typography whiteSpace="pre" textAlign="center" color="grey.600">
          <FormControl component="fieldset">
          
                         <FormControlLabel value={adr.id} control={<Radio />} label=''/>
            
        </FormControl>
          </Typography>
        </TableRow>
      ))}
 </RadioGroup>
     
    </>
  );
};



export default AddressList;
