// import Place from "@mui/icons-material/Place";
// import { Box, Button, Grid, TextField } from "@mui/material";
// import Card1 from "components/Card1";
// import UserDashboardHeader from "components/header/UserDashboardHeader";
// import CustomerDashboardLayout from "components/layouts/customer-dashboard";
// import CustomerDashboardNavigation from "components/layouts/customer-dashboard/Navigations";
// import { Formik } from "formik";
// import Link from "next/link";
// import {newAdd} from 'redux/addadrSlice'
// import * as yup from "yup";
// import { AppDispatch } from "redux/store";
// import { useDispatch, useSelector } from "react-redux";
// import { authSelector } from "redux/authSlice";
// import {getAdress } from "redux/adressSlice";
// import { addAdressSelector} from "redux/addadrSlice";
// import { useState, useEffect } from "react";
// import { adressSelector } from "redux/adressSlice";
// import countryList from "data/countryList";
// import Autocomplete from "@mui/material/Autocomplete";

// const AddressEditor = () => {
//   const {user} = useSelector(authSelector) ;
//   const {adresses} = useSelector(adressSelector)
//   //console.log(adresses[1].name)   
//   const dispatch = useDispatch<AppDispatch>();
//   // handle form submit
//   const handleFormSubmit = async (values: any) => {
   
//     console.log(values);
//     //await dispatch(addAdress({user_id:user.id}))   

//    await dispatch<any>(newAdd({user_id:user.id,name:adresses[1].name,mobile:adresses[1].mobile,address:values.address,alternate_mobile:values.altcontact,state:values.Etat}))  
     
//     //console.log(newAdress.name)
//   };

 
//   const [nom,setNom]=useState("")
//   const [mobile,setMobile]=useState("")
//   const [altmobile,setAltmobile]=useState("")
//   const [adress,setAdress]=useState("")
//   const [etat,setEtat]=useState<String>("")
//   const[shipping_country,setShipping_country]=useState<String>("")
//   const List=["ariana","Beja","Ben Arous","Bizerte","Gabès","Gafsa","Jendouba","Kairouan","Kasserine","Kébili","Kef","Mahdia","Manouba","Médenine",
//   "Monastir","Nabeul","Sfax","Sidi Bouzid","Siliana","Sousse","Tataouine","Tozeur","Tunis","Zaghouan"]
 
//   const initialValues = {
//     //name:nom,
//     address: adress,
//     //contact: mobile,
//      altcontact:altmobile,
//      Etat:etat ,
    
//   };
 

//   return (
//     <>
//       <UserDashboardHeader
//         icon={Place}
//         title="Ajouter une nouvelle adresse"
//         navigation={<CustomerDashboardNavigation />}
//         button={
//           <Link href="/address" passHref>
//             <Button color="primary" sx={{ bgcolor: "primary.light", px: 4 }}>
//             Retour à l'adresse
//             </Button>
//           </Link>
//         }
//       />

//       <Card1>
//         <Formik
//           onSubmit={handleFormSubmit}
//           initialValues={initialValues}
//           validationSchema={checkoutSchema}       
//         >
//           {({
//             values,
//             errors,
//             touched,
//             handleChange,
//             handleBlur,
//             handleSubmit,
//             setFieldValue,
//           }) => (
//             <form onSubmit={handleSubmit}>
//               <Box mb={4}>
//                 <Grid container spacing={3}>
//                   <Grid item md={6} xs={12}>
//                     <TextField
//                       fullWidth
//                       name="Nom"
//                       label="Nom"
//                       onBlur={handleBlur}
//                       value={adresses[1].name}
//                      // onChange={handleChange}
//                      // error={!!touched.name && !!errors.name}
//                      // helperText={touched.name && errors.name}
//                     />
//                   </Grid>
//                      <Grid item md={6} xs={12}>
//                     <TextField
//                       fullWidth
//                       name="address"
//                       onBlur={handleBlur}
//                       label="Address"
//                       value={values.address}
//                       onChange={handleChange}
//                       error={!!touched.address && !!errors.address}
//                       helperText={touched.address && errors.address}
//                     />
//                   </Grid>
               
//                 <Grid item md={6} xs={12}>
//                 <Autocomplete
//                   fullWidth
//                   sx={{ mb: 2 }}
//                   options={List}
//                   value={values.Etat}
                
//                  onChange={(_, value) =>
//                      setFieldValue("Etat", value)
//                    }
                
                    
//                   renderInput={(params) => (
//                     <TextField
//                     label="L'état"
//                     placeholder="Select Country"
//                     name="shipping_country"
//                     onBlur={handleBlur}
                   
//                     error={!!touched.Etat && !!errors.Etat}
//                     helperText={touched.Etat && errors.Etat }
                    
//                     {...params}
//                     />
//                   )}
                 
//                 />
//                  </Grid>
//                   <Grid item md={6} xs={12}>
//                     <TextField
//                       fullWidth
//                       label="téléphone"
//                       name="téléphone"
//                       onBlur={handleBlur}
//                       value={adresses[1].mobile}
//                       //onChange={handleChange}
//                      // error={!!touched.contact && !!errors.contact}
//                       //helperText={touched.contact && errors.contact}
//                     />
//                   </Grid>
//                   <Grid item md={6} xs={12}>
//                     <TextField
//                       fullWidth
//                       label="Phone"
//                       name="altcontact"
//                       onBlur={handleBlur}
//                       value={values.altcontact}
//                       onChange={handleChange}
//                       error={!!touched.altcontact && !!errors.altcontact}
//                       helperText={touched.altcontact&& errors.altcontact}
//                     />
//                   </Grid>
//                 </Grid>
//               </Box>

//               <Button type="submit" variant="contained" color="primary">
//                 Sauvegarder les modifications
//               </Button>
//             </form>
//           )}
//         </Formik>
//       </Card1>
//     </>
//   );
// };

// const checkoutSchema = yup.object().shape({
//  // name: yup.string().required("required"),
//   address: yup.string().required("required"),
//  // contact: yup.string().required("required"),
//    altcontact: yup.string().required("required"),
//    Etat: yup.string().required("required"),
  
// });

// export default AddressEditor;
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
import { adressSelector } from "redux/adressSlice";
import countryList from "data/countryList";
import Autocomplete from "@mui/material/Autocomplete";

const AddressEditor = () => {
  const {user} = useSelector(authSelector) ;
  const {adresses} = useSelector(adressSelector)
  //console.log(adresses[1].name)   
  const dispatch = useDispatch<AppDispatch>();
  // handle form submit
  const handleFormSubmit = async (values: any) => {
   
    console.log(values);
    //await dispatch(addAdress({user_id:user.id}))   

   await dispatch<any>(newAdd({user_id:user.id,name:adresses[1].name,mobile:adresses[adresses.length-1].alternate_mobile,address:values.address,alternate_mobile:values.altcontact,state:values.Etat}))  
     
    //console.log(newAdress.name)
  };

 
  const [nom,setNom]=useState("")
  const [mobile,setMobile]=useState("")
  const [altmobile,setAltmobile]=useState("")
  const [adress,setAdress]=useState("")
  const [etat,setEtat]=useState<String>("")
  const[shipping_country,setShipping_country]=useState<String>("")
  const List=["ariana","Beja","Ben Arous","Bizerte","Gabès","Gafsa","Jendouba","Kairouan","Kasserine","Kébili","Kef","Mahdia","Manouba","Médenine",
  "Monastir","Nabeul","Sfax","Sidi Bouzid","Siliana","Sousse","Tataouine","Tozeur","Tunis","Zaghouan"]
 
  const initialValues = {
    //name:nom,
    address: adress,
    //contact: mobile,
     altcontact:altmobile,
     Etat:etat ,
    
  };
 

  return (
    <CustomerDashboardLayout>
      <UserDashboardHeader
        icon={Place}
        title="Ajouter une nouvelle adresse"
        navigation={<CustomerDashboardNavigation />}
        button={
          <Link href="/address" passHref>
            <Button color="primary" sx={{ bgcolor: "primary.light", px: 4 }}>
            Retour à l&aposadresse
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
                      name="Nom"
                      label="Nom"
                      onBlur={handleBlur}
                      value={adresses[1].name}
                     // onChange={handleChange}
                     // error={!!touched.name && !!errors.name}
                     // helperText={touched.name && errors.name}
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
               
                <Grid item md={6} xs={12}>
                <Autocomplete
                  fullWidth
                  sx={{ mb: 2 }}
                  options={List}
                  value={values.Etat}
                
                 onChange={(_, value) =>
                     setFieldValue("Etat", value)
                   }
                
                    
                  renderInput={(params) => (
                    <TextField
                    label="L'état"
                    placeholder="Select Country"
                    name="shipping_country"
                    onBlur={handleBlur}
                   
                    error={!!touched.Etat && !!errors.Etat}
                    helperText={touched.Etat && errors.Etat }
                    
                    {...params}
                    />
                  )}
                 
                />
                 </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      label="téléphone"
                      name="téléphone"
                      onBlur={handleBlur}
                      value={adresses[adresses.length-1].alternate_mobile}
                      //onChange={handleChange}
                     // error={!!touched.contact && !!errors.contact}
                      //helperText={touched.contact && errors.contact}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
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
                  </Grid>
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
 // name: yup.string().required("required"),
  address: yup.string().required("required"),
 // contact: yup.string().required("required"),
   altcontact: yup.string().required("required"),
   Etat: yup.string().required("required"),
  
});

export default AddressEditor;
