import CameraEnhance from "@mui/icons-material/CameraEnhance";
import Person from "@mui/icons-material/Person";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Avatar, Box, Button, Grid, TextField } from "@mui/material";
import Card1 from "components/Card1";
import { FlexBox } from "components/flex-box";
import UserDashboardHeader from "components/header/UserDashboardHeader";
import CustomerDashboardLayout from "components/layouts/customer-dashboard";
import CustomerDashboardNavigation from "components/layouts/customer-dashboard/Navigations";
import { Formik } from "formik";
import Link from "next/link";
import * as yup from "yup";
import { AppDispatch } from "redux/store";
import { authSelector } from "redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "redux/editSlice";
import { useState } from "react";
import { useFormik } from 'formik';

const ProfileEditor = () => {
  const dispatch = useDispatch<AppDispatch>();
   const handleFormSubmit = async (values: any) => {
     console.log(values);
    //await dispatch(updateUser({ email: values.email, username: values.first_name}))

   };
  const {user} = useSelector(authSelector)
  const [nom,setnom]=useState(user.username)
  const [mobile,setMobile]=useState(user.mobile)
  const [email,setEmail]=useState(user.email)
  const [birth,setBirth]=useState(user.dob)
  const [adr,setAdr]=useState(user.adresse)
  const [area,setArea]=useState(user.area)
  const [city,setCity]=useState(user.city)
  const [pin,setPin]=useState(user.pincode)
  const [old,setOld]=useState(user.old)
  const [neauv,setNeauv]=useState(user.new)
 const formik = useFormik({
   initialValues : {
    nom:nom,
    mobile:mobile,
   email: email,
   birth: birth,
   adr:adr,
   area:area,
   city:city,
   pin:pin,
   old:old,
   neauv:neauv
   },
   validationSchema:yup.object().shape({
      nom: yup.string().required("required"),
      mobile: yup.string().required("required"),
      email: yup.string().email("invalid email").required("required"),
      birth: yup.string().required("required"),
      adr:yup.string().required("required"),
      area:yup.string().required("required"),
      city:yup.string().required("required"),
      pin:yup.string().required("required"),
      old:yup.string().required("required"),
      neauv:yup.string().required("required"),
     
    }),
     onSubmit: values => {
      console.log(values);
     },
   });
  

  
  return (
    <CustomerDashboardLayout>
      <UserDashboardHeader
        icon={Person}
        title=" Editer Le Profil "
        navigation={<CustomerDashboardNavigation />}
        button={
          <Link href="/profile" passHref>
            <Button color="primary" sx={{ px: 4, bgcolor: "primary.light" }}>
            retour au profil
            </Button>
          </Link>
        }
      />

      <Card1>
        <FlexBox alignItems="flex-end" mb={3}>
          <Avatar
            src={user.image}
            sx={{ height: 64, width: 64 }}
          />

          <Box ml={-2.5}>
            <label htmlFor="profile-image">
              <Button
                component="span"
                color="secondary"
                sx={{
                  p: "8px",
                  height: "auto",
                  bgcolor: "grey.300",
                  borderRadius: "50%",
                }}
              >
                <CameraEnhance fontSize="small" />
              </Button>
            </label>
          </Box>

          <Box display="none">
            <input
              onChange={(e) => console.log(e.target.files)}
              id="profile-image"
              accept="image/*"
              type="file"
            />
          </Box>
        </FlexBox>

      
            <form onSubmit={formik.handleSubmit}>
              <Box mb={4}>
                <Grid container spacing={3}>
                {/* <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      name="first_name"
                      label="First Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.first_name}
                      error={!!touched.first_name && !!errors.first_name}
                      helperText={touched.first_name && errors.first_name}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      name="last_name"
                      label="Last Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.last_name}
                      error={!!touched.last_name && !!errors.last_name}
                      helperText={touched.last_name && errors.last_name}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      name="email"
                      type="email"
                      label="Email"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      error={!!touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Phone"
                      name="contact"
                      onBlur={handleBlur}
                      value={values.contact}
                      onChange={handleChange}
                      error={!!touched.contact && !!errors.contact}
                      helperText={touched.contact && errors.contact}
                    />
                  </Grid> */}
                   <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      name="first_name"
                      label="nom"
                     
                     // onChange={handleChange}
                     //value={values.first_name}
                      onBlur={formik.handleBlur}
                      value={formik.values.nom}
                      onChange={formik.handleChange}
                     
                    />
                  </Grid>
              
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      name="email"
                      type="email"
                      label=" E-mail"
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      
                     
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Téléphone"
                      name="contact"
                      onBlur={formik.handleBlur}
                      value={formik.values.mobile}
                      onChange={formik.handleChange}
                     
                    />
                     
                  </Grid> 
                   <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="date de naissance"
                      name="naissance"
                      onBlur={formik.handleBlur}
                      value={formik.values.birth}
                      onChange={formik.handleChange}
                     
                      //value={values.contact}
                     // onChange={handleChange}
                     
                    />
                  </Grid> 
                   <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="adresse"
                      name="contact"
                      onBlur={formik.handleBlur}
                      value={formik.values.adr}
                      onChange={formik.handleChange}
                     
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="État"
                      name="contact"
                      onBlur={formik.handleBlur}
                      value={formik.values.area}
                      onChange={formik.handleChange}
                     
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="ville"
                      name="contact"
                      onBlur={formik.handleBlur}
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="zip Code"
                      name="contact"
                      onBlur={formik.handleBlur}
                      value={formik.values.pin}
                      onChange={formik.handleChange}
                      
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="ancien mot de passe"
                      name="contact"
                      onBlur={formik.handleBlur}
                      value={formik.values.old}
                      onChange={formik.handleChange}
                     
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="nouveau mot de passe"
                      name="contact"
                      onBlur={formik.handleBlur}
                      value={formik.values.neauv}
                      onChange={formik.handleChange}
                    
                    />
                  </Grid> 



                  {/* <Grid item md={6} xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DateTimePicker
                        label="Birth Date"
                        maxDate={new Date()}
                        value={values.birth_date}
                        inputFormat="dd MMMM, yyyy"
                        shouldDisableTime={() => false}
                        renderInput={(props) => (
                          <TextField
                            fullWidth
                            size="small"
                            helperText={touched.birth_date && errors.birth_date}
                            error={
                              (!!touched.birth_date && !!errors.birth_date) ||
                              props.error
                            }
                            {...props}
                          />
                        )}
                        onChange={(newValue) =>
                          setFieldValue("birth_date", newValue)
                        }
                      />
                    </LocalizationProvider>
                  </Grid>  */}
                </Grid>
              </Box>

              <Button type="submit" variant="contained" color="primary">
              Sauvegarder les modifications
              </Button>
            </form>
          
      </Card1>
    </CustomerDashboardLayout>
  );
};

const initialValues = {
  first_name: "",
   last_name: "",
   email: "",
   contact: "",
   birth_date: new Date(),
 };
// const initialValues = {
//   nom:,
//   mobile: "",
//   email: "",
//   birth: "",
//   adr: "",
//   area:"",
//   city:"",
//   pin:"",
//   old:"",
//   neauv:""
// };
// const checkoutSchema = yup.object().shape({
//   nom: yup.string().required("required"),
//   mobile: yup.string().required("required"),
//   email: yup.string().email("invalid email").required("required"),
//   birth: yup.string().required("required"),
//   adr:yup.string().required("required"),
//   area:yup.string().required("required"),
//   city:yup.string().required("required"),
//   pin:yup.string().required("required"),
//   old:yup.string().required("required"),
//   neauv:yup.string().required("required"),
 
// });

 const checkoutSchema = yup.object().shape({
  first_name: yup.string().required("required"),
  last_name: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
   contact: yup.string().required("required"),
  birth_date: yup.date().required("invalid date"),
 });

export default ProfileEditor;
