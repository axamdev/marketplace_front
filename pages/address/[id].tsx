import Place from "@mui/icons-material/Place";
import { Box, Button, Grid, TextField } from "@mui/material";
import Card1 from "components/Card1";
import UserDashboardHeader from "components/header/UserDashboardHeader";
import CustomerDashboardLayout from "components/layouts/customer-dashboard";
import CustomerDashboardNavigation from "components/layouts/customer-dashboard/Navigations";
import { Formik } from "formik";
import Link from "next/link";
import {newAdd} from 'redux/addadrSlice'
import * as yup from "yup";
import { AppDispatch } from "redux/store";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "redux/authSlice";
import {getAdress } from "redux/adressSlice";
import { addAdressSelector} from "redux/addadrSlice";
import { useState, useEffect } from "react";
import countryList from "data/countryList";
import Autocomplete from "@mui/material/Autocomplete";
const AddressEditor = () => {
  const {user} = useSelector(authSelector) ;

  const dispatch = useDispatch<AppDispatch>();
  // handle form submit
  const handleFormSubmit = async (values: any) => {
   
    console.log(values);
   await dispatch<any>(newAdd({user_id:user.id,name:values.name,mobile:values.contact,address:values.address}))  
     
    //console.log(newAdress.name)
  };
  // const addAdress = async () => {
  //   await dispatch(newAdd({user_id:user.id,name:newAdress.name,mobile:newAdress.mobile,adress:newAdress.address}) )  
  //  };
  //  useEffect(() => {
  //   addAdress(); 
  //  }, []);
 
  const [nom,setNom]=useState("")
  const [mobile,setMobile]=useState("")
  const [altmobile,setAltmobile]=useState("")
  const [adress,setAdress]=useState("")
  const [etat,setEtat]=useState("")
  const initialValues = {
    name:nom,
    address: adress,
    contact: mobile,
    // altcontact:altmobile,
    // Etat:etat   
  };

  return (
    <CustomerDashboardLayout>
      <UserDashboardHeader
        icon={Place}
        title="Add New Address"
        navigation={<CustomerDashboardNavigation />}
        button={
          <Link href="/address" passHref>
            <Button color="primary" sx={{ bgcolor: "primary.light", px: 4 }}>
              Back to Address
            </Button>
          </Link>
        }
      />

      <Card1>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}       
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box mb={4}>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      name="name"
                      label="Nom"
                      onBlur={handleBlur}
                      value={values.name}
                      onChange={handleChange}
                      error={!!touched.name && !!errors.name}
                      helperText={touched.name && errors.name}
                    />
                  </Grid>
                     <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      name="address"
                      onBlur={handleBlur}
                      label="Address"
                      value={values.address}
                      onChange={handleChange}
                      error={!!touched.address && !!errors.address}
                      helperText={touched.address && errors.address}
                    />
                  </Grid>
                  {/* <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      name="Etat"
                      onBlur={handleBlur}
                      label="L'état"
                      value={values.Etat}
                      onChange={handleChange}
                      error={!!touched.Etat && !!errors.Etat}
                      helperText={touched.Etat && errors.Etat}
                    />
                  </Grid> */}
                {/* <Grid item md={6} xs={12}>
                <Autocomplete
                  fullWidth
                  sx={{ mb: 2 }}
                  options={countryList}
                  value={values.shipping_country}
                  getOptionLabel={(option) => option.label}
                  onChange={(_, value) =>
                    setFieldValue("shipping_country", value)
                  }
                  renderInput={(params) => (
                    <TextField
                      label="L'état"
                      variant="outlined"
                      placeholder="Select Country"
                      error={
                        !!touched.shipping_country && !!errors.shipping_country
                      }
                      helperText={
                        touched.shipping_country && errors.shipping_country
                      }
                      {...params}
                    />
                  )}
                />
                 </Grid> */}
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="téléphone"
                      name="contact"
                      onBlur={handleBlur}
                      value={values.contact}
                      onChange={handleChange}
                      error={!!touched.contact && !!errors.contact}
                      helperText={touched.contact && errors.contact}
                    />
                  </Grid>
                  {/* <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Phone"
                      name="altcontact"
                      onBlur={handleBlur}
                      value={values.altcontact}
                      onChange={handleChange}
                      error={!!touched.altcontact && !!errors.altcontact}
                      helperText={touched.altcontact&& errors.altcontact}
                    />
                  </Grid> */}
                </Grid>
              </Box>

              <Button type="submit" variant="contained" color="primary">
                Save Changes
              </Button>
            </form>
          )}
        </Formik>
      </Card1>
    </CustomerDashboardLayout>
  );
};

// const initialValues = {
//   name: "",
//   address: "",
//   contact: "",
// };

const checkoutSchema = yup.object().shape({
  name: yup.string().required("required"),
  address: yup.string().required("required"),
  contact: yup.string().required("required"),
  // altcontact: yup.string().required("required"),
  // Etat: yup.string().required("required"),
});

export default AddressEditor;
