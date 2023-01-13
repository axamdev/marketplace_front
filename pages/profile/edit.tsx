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
import {editSelector} from "redux/editSlice"
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "redux/editSlice";
import { useState } from "react";
// import { userAgent } from "next/server";

//city:values.ville,pincode:values.CodeZip
const ProfileEditor = () => {
  
  const {user} = useSelector(authSelector)
  const {loading,msg,username,dob,mobile}=useSelector(editSelector)
  const dispatch = useDispatch<AppDispatch>();
   const handleFormSubmit = async (values: any) => {
     console.log(values);
     setImage(user.image)
    await dispatch(updateUser({ username:values.first_name,address:values.last_name,mobile:values.contact,dob:values.birth,user_id:user.id}))
     
   };

   const [image,setImage]=useState(user.image)
  const [nom,setNom]=useState(user.username)
  const [tel,setTobile]=useState(user.mobile)
  const [email,setEmail]=useState(user.email)
  const [birth,setBirth]=useState(user.dob)
  const [adress,setAdress]=useState(user.address)
  const [area,setArea]=useState(user.area)
  const [city,setCity]=useState(user.city)
  const [pin,setPin]=useState(user.pincode)
  const [old,setOld]=useState(user.old)
 const [neauv,setNeauv]=useState(user.new)
  const initialValues = {
    // {(!loading)? {nom}:{username}}
   // first_name: nom,
    first_name: (!loading)?nom:username ,
    last_name:adress,
    // email: email,
     contact: (!loading)?tel:mobile,
     birth:(!loading)?birth:dob,
     Etat:area,
     ville:city,
     CodeZip:pin,
      oldPassword:old,
     nvPassword:neauv,
     username:username
     //birth_date: new Date(),
   };

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

        <Formik
     
          initialValues={initialValues}
          validationSchema={checkoutSchema}
          onSubmit={handleFormSubmit}>
       
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
                      name="first_name"
                      label="nom et prénom"
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

                      label="Adresse"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      //value={user.username}
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
                      label="E-mail"
                      onBlur={handleBlur}
                    //  value={values.email}
                      value={user.email}
                      onChange={handleChange}
                      error={!!touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                    />
                  </Grid>
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
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="date de naissance"
                      name="birth"
                      onBlur={handleBlur}
                      value={values.birth}
                      onChange={handleChange}
                      error={!!touched.birth && !!errors.birth}
                      helperText={touched.birth && errors.birth}
                    />
                  </Grid>
     
                     <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="L'État"
                      name="Etat"
                      onBlur={handleBlur}
                      value={values.Etat}
                      onChange={handleChange}
                     // error={!!touched.Etat && !!errors.Etat}
                    //  helperText={touched.Etat && errors.Etat}
                      disabled={true}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Ville"
                      name="ville"
                      onBlur={handleBlur}
                      value={values.ville}
                      onChange={handleChange}
                    //  error={!!touched.ville && !!errors.ville}
                      //helperText={touched.ville && errors.ville}
                      disabled={true}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="CodeZip"
                      name="CodeZip"
                      onBlur={handleBlur}
                      value={values.CodeZip}
                      onChange={handleChange}
                     // error={!!touched.CodeZip && !!errors.CodeZip}
                     // helperText={touched.CodeZip && errors.CodeZip}
                      disabled={true}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="ancien mot de passe"
                      name="oldPassword"
                      onBlur={handleBlur}
                      value={values.oldPassword}
                      onChange={handleChange}
                     // error={!!touched.oldPassword && !!errors.oldPassword}
                     // helperText={touched.oldPassword && errors.oldPassword}
                      disabled={true}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="nouveau mot de passe"
                      name="nvPassword"
                      onBlur={handleBlur}
                      value={values.nvPassword}
                      onChange={handleChange}
                      //error={!!touched.nvPassword && !!errors.nvPassword}
                     // helperText={touched.nvPassword && errors.nvPassword}
                      disabled={true}
                    />
                  </Grid>
                   {/* <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      name="nom"
                      label="nom"
                      onBlur={handleBlur}
                      onChange={handleChange}
                     //value={values.nom}
                     
                      value={values.nom}
                      //onChange={e=>setNom(e.target.value)}
                      error={!!touched.nom && !!errors.nom}
                      helperText={touched.nom && errors.nom}
                    />
                  </Grid>
              
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      name="email"
                      type="email"
                      label=" E-mail"
                      onBlur={handleBlur}
                      value={values.email}
                      //onChange={e=>setEmail(e.target.value)}
                      //value={values.email}
                      onChange={handleChange}
                      error={!!touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="Téléphone"
                      name="mobile"
                      onBlur={handleBlur}
                      value={values.mobile}
                      //onChange={e=>setMobile(e.target.value)}
                     
                      //value={values.mobile}
                      onChange={handleChange}
                      error={!!touched.mobile && !!errors.mobile}
                      helperText={touched.mobile && errors.mobile}
                    />
                     
                  </Grid> 
                   <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="date de naissance"
                      name="birth"
                      onBlur={handleBlur}
                      value={values.birth}
                      //onChange={e=>setBirth(e.target.value)}
                      //value={values.contact}
                     onChange={handleChange}
                      error={!!touched.birth && !!errors.birth}
                      helperText={touched.birth&& errors.birth}
                    />
                  </Grid>  */}
                   {/* <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="adresse"
                      name="contact"
                      onBlur={handleBlur}
                      value={values.adr}
                      onChange={e=>setAdr(e.target.value)}
                      //value={values.contact}
                      //onChange={handleChange}
                      error={!!touched.contact && !!errors.contact}
                      helperText={touched.contact && errors.contact}
                     
                    />
                  </Grid> */}
                  {/* <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="État"
                      name="contact"
                      onBlur={handleBlur}
                      value={values.area}
                      onChange={e=>setArea(e.target.value)}
                      //value={values.contact}
                      //onChange={handleChange}
                      error={!!touched.contact && !!errors.contact}
                      helperText={touched.contact && errors.contact}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="ville"
                      name="contact"
                      onBlur={handleBlur}
                      value={values.city}
                      onChange={e=>setCity(e.target.value)}
                      //value={values.contact}
                      //onChange={handleChange}
                      error={!!touched.contact && !!errors.contact}
                      helperText={touched.contact && errors.contact}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="zip Code"
                      name="contact"
                      onBlur={handleBlur}
                      value={values.pin}
                      onChange={e=>setPin(e.target.value)}
                      //value={values.contact}
                      //onChange={handleChange}
                      error={!!touched.contact && !!errors.contact}
                      helperText={touched.contact && errors.contact}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="ancien mot de passe"
                      name="contact"
                      onBlur={handleBlur}
                      value={values.old}
                      onChange={e=>setOld(e.target.value)}
                      //value={values.contact}
                      //onChange={handleChange}
                      error={!!touched.contact && !!errors.contact}
                      helperText={touched.contact && errors.contact}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="nouveau mot de passe"
                      name="contact"
                      onBlur={handleBlur}
                      value={values.neauv}
                      onChange={e=>setNeauv(e.target.value)}
                      //value={values.contact}
                      //onChange={handleChange}
                      error={!!touched.contact && !!errors.contact}
                      helperText={touched.contact && errors.contact}
                    />
                  </Grid>  */}



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
          )}
       </Formik>
      </Card1>
    </CustomerDashboardLayout>
  );
};




 const checkoutSchema = yup.object().shape({
  first_name: yup.string().required("required"),
  last_name: yup.string().required("required"),
  //email: yup.string().email("invalid email").required("required"),
   contact: yup.string().required("required"),
   birth: yup.string().required("required"),
  // Etat: yup.string().required("required"),
  // ville: yup.string().required("required"),
   //CodeZip: yup.string().required("required"),
   //oldPassword:yup.string().required("required"),
 // nvPassword:yup.string().required("required"),
 //birth_date: yup.date().required("invalid date"),
 });

export default ProfileEditor;
