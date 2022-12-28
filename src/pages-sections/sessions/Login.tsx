import { Alert, AlertTitle, Card, CardProps, Dialog } from "@mui/material";
import { styled } from "@mui/material/styles";
import BazaarButton from "components/BazaarButton";
import BazaarTextField from "components/BazaarTextField";
import { H3, Small } from "components/Typography";
import { useFormik } from "formik";
import React, { useCallback, useState } from "react";
import * as yup from "yup";
import EyeToggleButton from "./EyeToggleButton";
import SocialButtons from "./SocialButtons";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "redux/authSlice";
import { AppDispatch } from "redux/store";
import { authSelector } from "redux/authSlice";
import { useRouter } from "next/router";
const fbStyle = { background: "#3B5998", color: "white" };
const googleStyle = { background: "#4285F4", color: "white" };
type WrapperProps = { passwordVisibility?: boolean };

export const Wrapper = styled<React.FC<WrapperProps & CardProps>>(
  ({ children, passwordVisibility, ...rest }) => (
    <Card {...rest}>{children}</Card>
  )
)<CardProps>(({ theme, passwordVisibility }) => ({
  width: 500,
  padding: "2rem 3rem",
  [theme.breakpoints.down("sm")]: { width: "100%" },
  ".passwordEye": {
    color: passwordVisibility
      ? theme.palette.grey[600]
      : theme.palette.grey[400],
  },
  ".facebookButton": { marginBottom: 10, ...fbStyle, "&:hover": fbStyle },
  ".googleButton": { ...googleStyle, "&:hover": googleStyle },
  ".agreement": { marginTop: 12, marginBottom: 24 },
}));
const Login = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible);
  }, []);   
  const { error, msg,token,user } = useSelector(authSelector);
  const auth = useSelector(authSelector);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
 

  const handleFormSubmit =async ()  => {
    console.log(values);

   await dispatch(loginUser({ email: values.email, password: values.password }));
    console.log(auth, "here error login");
   //{
   //  {error?null:router.push("/")};
  // }  
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit} =
    useFormik({
      initialValues,
      onSubmit: handleFormSubmit,
      validationSchema: formSchema,
    });

  return (
    <Wrapper elevation={3} passwordVisibility={passwordVisibility}>
     {token?(<><H3 textAlign="center" mb={1}>
         Bienvenue chez AXAM
        </H3>
         <Small
         mb={4.5}
         display="block"
         fontSize="22px"
         fontWeight="600"
         color="grey.800"
         textAlign="center"
       >
         {user.username}
       </Small></>):
      (
      <><form onSubmit={handleSubmit}  >
      <H3 textAlign="center" mb={1}>
       Bienvenue chez AXAM
      </H3>
      <Small
        mb={4.5}
        display="block"
        fontSize="12px"
        fontWeight="600"
        color="grey.800"
        textAlign="center"
      >
        Connectez-vous avec email et mot de passe
      </Small>

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
        label="E-mail ou numéro de téléphone"
        placeholder="exemple@mail.com"
        error={!!touched.email && !!errors.email}
        helperText={touched.email && errors.email}
      />

      <BazaarTextField
        mb={2}
        fullWidth
        size="small"
        name="password"
        label="mot de passe"
        autoComplete="on"
        variant="outlined"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.password}
        placeholder="*********"
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

      <BazaarButton
        fullWidth
        type="submit"
        color="primary"
        variant="contained"
        sx={{ mb: "1.65rem", height: 44 }}
       
       // onClick={() =>error?console.log("error : "+error) :console.log("I have no error"+error)}
    //  onClick={() => window.location.reload()}
      >
       connexion
      </BazaarButton>
      {error ? (
        <Alert severity="error">
          <AlertTitle>{msg}</AlertTitle>
        </Alert>
      ) : null}
    </form>
     <SocialButtons redirect="/signup" redirectText="S'inscrire" /></>)}
    </Wrapper>
  );
};

const initialValues = {
  email: "",
  password: "",
};

const formSchema = yup.object().shape({
  password: yup.string().required("Mot de passe requis"),
  email: yup.string().email("email invalide").required("L'e-mail est requis"),
});

export default Login;
