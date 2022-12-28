import { Alert, AlertTitle, Checkbox, FormControlLabel, Modal } from "@mui/material";
import BazaarButton from "components/BazaarButton";
import BazaarTextField from "components/BazaarTextField";
import { FlexBox } from "components/flex-box";
import { H3, H6, Small } from "components/Typography";
import { useFormik } from "formik";
import React, { useCallback, useState } from "react";
import * as yup from "yup";
import EyeToggleButton from "./EyeToggleButton";
import { Wrapper } from "./Login";
import SocialButtons from "./SocialButtons";
//import {Phone} from 'components/mobileCode';
import {UserData} from "utils/api/axam-RegisterUser"
import { useDispatch } from "react-redux";
import { postSignUpUser } from "features/user/userSlice";
import { useAppDispatch } from "redux/store";
import { useSelector } from "react-redux";
import {userSelector} from "features/user/userSlice"
import {useRouter} from 'next/router'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

//import { FC} from "react";
//const dispatch = useDispatch()
//type SignupProps = {
  
 // registerUserList?:UserData;
//};
//const Signup: FC <SignupProps> = (registerUserList) => {
  
const Signup = () => {

  const [passwordVisibility, setPasswordVisibility] = useState(false);
 
  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible);
  }, []);

 const dispatch= useAppDispatch();
 const { error, msg } = useSelector(userSelector)
 const user = useSelector(userSelector)
 //const user = useSelector(userSelector)
 //const [auth,setAuth] = ('signin')
//  const authenticate =()=>{

//  if (auth=='signin'){

//  }else{
//    dispatch(postSignUpUser())
//  }
// }
const router= useRouter();
  const handleFormSubmit = async (values: any) => {
     console.log(values);
     //console.log(user,"here error signup");
   dispatch(postSignUpUser({name:values.name,email:values.email,mobile:values.mobile,password:values.password,country_code:216}))
   console.log("after gestting values"+values);
// console.log(user,"erreur is here");
   {error?router.push("login"): router.push("signup")}
   
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit: handleFormSubmit,
      validationSchema: formSchema,
    });
    

//console.log(registerUserList);
  return (
    <Wrapper elevation={3} passwordVisibility={passwordVisibility}>
      <form onSubmit={handleSubmit}>
        <H3 textAlign="center" mb={1}>
        Créez votre compte
        </H3>
        <Small
          mb={4.5}
          fontSize={12}
          display="block"
          fontWeight={600}
          color="grey.800"
          textAlign="center"
        >
          Veuillez remplir tous les champs pour continuer
        </Small>

        <BazaarTextField
          mb={1.5}
          fullWidth
          name="name"
          size="small"
          label="Nom et prénom"
          variant="outlined"
          onBlur={handleBlur}
          value={values.name}
          onChange={handleChange}
          placeholder="Ahmed Ben Salah"
          error={!!touched.name && !!errors.name}
          helperText={touched.name && errors.name}
        />

        <BazaarTextField
          mb={1.5}
          fullWidth
          name="email"
          size="small"
          type="email"
          variant="outlined"
          onBlur={handleBlur}
          value={values.email}
          onChange={handleChange}
          label="E-mail"
          placeholder="exmple@mail.com"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
        />

<BazaarTextField
          mb={1.5}
          fullWidth
          name="mobile"
          size="small"
          type="mobile"
          
          variant="outlined"
          onBlur={handleBlur}
          value={values.mobile}
          onChange={handleChange}
          label="Téléphone"
          placeholder="+21655823147"
          error={!!touched.mobile && !!errors.mobile}
          helperText={touched.mobile && errors.mobile}
        />
        
        {/* <PhoneInput
         name="mobile"
          onBlur={handleBlur}
          value={values.mobile}
          onChange={handleChange}
          placeholder="+216 50450450"
        
         inputStyle={{width:'405px',height: '45px'}} 
        
      /> */}
        <BazaarTextField
          mb={1.5}
          fullWidth
          size="small"
          name="password"
          label="Mot de passe"
          variant="outlined"
          autoComplete="on"
          placeholder="*********"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          type={passwordVisibility ? "text" : "password"}
          error={!!touched.password && !!errors.password}
          helperText={touched.password && errors.password}
          InputProps={{
            endAdornment: (
              <EyeToggleButton
                show={passwordVisibility}
                click={togglePasswordVisibility}
              />
            ),
          }}
        />

        <BazaarTextField
          fullWidth
          size="small"
          autoComplete="on"
          name="re_password"
          variant="outlined"
          label="Retaper le mot de passe"
          placeholder="*********"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.re_password}
          type={passwordVisibility ? "text" : "password"}
          error={!!touched.re_password && !!errors.re_password}
          helperText={touched.re_password && errors.re_password}
          InputProps={{
            endAdornment: (
              <EyeToggleButton
                show={passwordVisibility}
                click={togglePasswordVisibility}
              />
            ),
          }}
        />

        <FormControlLabel
          name="agreement"
          className="agreement"
          onChange={handleChange}
          control={
            <Checkbox
              size="small"
              color="secondary"
              checked={values.agreement || false}
            />
          }
          label={
            <FlexBox
              flexWrap="wrap"
              alignItems="center"
              justifyContent="flex-start"
            >
              En vous inscrivant, vous acceptez nos
              <a href="/" target="_blank" rel="noreferrer noopener">
                <H6 ml={1} borderBottom="1px solid" borderColor="grey.900">
                Conditions
                </H6>
              </a>
            </FlexBox>
          }
        />

        <BazaarButton
          fullWidth
          type="submit"
          color="primary"
          variant="contained"
          sx={{ height: 44 }}
          
        >
         Créer un compte
        </BazaarButton>
        <br/><br/>
        {error?(<Alert severity="error">
                   <AlertTitle>{msg}</AlertTitle>
</Alert>):null}
                  
         
      </form>

      {/* <SocialButtons redirect="/login" redirectText="Login" /> */}
    </Wrapper>
  );
};

const initialValues = {
  name: "",
  email: "",
  password: "",
  re_password: "",
  agreement: false,
};

const formSchema = yup.object().shape({
  name: yup.string().required("Le nom est requis"),
  email: yup.string().email("e-mail invalide").required("L'e-mail est requis"),
  mobile: yup.string().required("Numéro de téléphone invalide").required("Le numéro de portable est requis"),
  password: yup.string().required("Mot de passe requis"),
  re_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "les mots de passe doivent correspondre")
    .required("Veuillez retaper le mot de passe"),
  agreement: yup
    .bool()
    .test(
      "agreement",
      "You have to agree with our Terms and Conditions!",
      (value) => value === true
    )
    .required("Vous devez accepter nos Termes et Conditions!"),
});

export default Signup;
