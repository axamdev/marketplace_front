import { Button, Checkbox, Grid, TextField, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import FormControlLabel from "@mui/material/FormControlLabel";
import Card1 from "components/Card1";
import countryList from "data/countryList";
import { postClientOrder } from "features/orders/ordersSlice";
import { userSelector } from "features/user/userSlice";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { authSelector } from "redux/authSlice";
import { useAppDispatch } from "redux/store";
import * as yup from "yup";

const CheckoutForm: FC = () => {
  const router = useRouter();
  const [sameAsShipping, setSameAsShipping] = useState(false);

  const auth = useSelector(authSelector);
  const {user} = useSelector(authSelector);
// const [name,setName] =useState(user.)
const dispatch= useAppDispatch();
  const handleFormSubmit = async (values: any) => {
    dispatch(postClientOrder({user_id: "15",product_variant_id:"70"}))
    router.push("/payment");
  };

  const handleCheckboxChange =
    (values: typeof initialValues, setFieldValue: any) =>
    (e: any, _: boolean) => {
      const checked = e.currentTarget.checked;

      setSameAsShipping(checked);
      setFieldValue("same_as_shipping", checked);
      setFieldValue("billing_name", checked ? values.shipping_name : "");
    };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={checkoutSchema}
      onSubmit={handleFormSubmit}
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
          <Card1 sx={{ mb: 4 }}>
            <Typography fontWeight="600" mb={2}>
            Adresse de livraison
            </Typography>

            <Grid container spacing={6}>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  sx={{ mb: 2 }}
                  label="Nom et prénom"
                  onBlur={handleBlur}
                  name="shipping_name"
                  onChange={handleChange}
                  value={user.username}
                  error={!!touched.shipping_name && !!errors.shipping_name}
                  helperText={touched.shipping_name && errors.shipping_name}
                />
                <TextField
                  fullWidth
                  sx={{ mb: 2 }}
                  onBlur={handleBlur}
                  label="Numéro de téléphone"
                  onChange={handleChange}
                  name="shipping_contact"
                  value={user.mobile}
                  error={
                    !!touched.shipping_contact && !!errors.shipping_contact
                  }
                  helperText={
                    touched.shipping_contact && errors.shipping_contact
                  }
                />
                <TextField
                  fullWidth
                  type="number"
                  sx={{ mb: 2 }}
                  label="Code postal"
                  name="shipping_zip"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.shipping_zip}
                  error={!!touched.shipping_zip && !!errors.shipping_zip}
                  helperText={touched.shipping_zip && errors.shipping_zip}
                />
                <TextField
                  fullWidth
                  label="Adresse 1"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="shipping_address1"
                  value={values.shipping_address1}
                  error={
                    !!touched.shipping_address1 && !!errors.shipping_address1
                  }
                  helperText={
                    touched.shipping_address1 && errors.shipping_address1
                  }
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="email"
                  sx={{ mb: 2 }}
                  onBlur={handleBlur}
                  name="shipping_email"
                  label="Adresse e-mail"
                  onChange={handleChange}
                  value={user.email}
                  error={!!touched.shipping_email && !!errors.shipping_email}
                  helperText={touched.shipping_email && errors.shipping_email}
                />
                <TextField
                  fullWidth
                  sx={{ mb: 2 }}
                  label="Entreprise"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="shipping_company"
                  value={values.shipping_company}
                  error={
                    !!touched.shipping_company && !!errors.shipping_company
                  }
                  helperText={
                    touched.shipping_company && errors.shipping_company
                  }
                />

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

                <TextField
                  fullWidth
                  label="Address 2"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="shipping_address2"
                  value={values.shipping_address2}
                  error={
                    !!touched.shipping_address2 && !!errors.shipping_address2
                  }
                  helperText={
                    touched.shipping_address2 && errors.shipping_address2
                  }
                />
              </Grid>
            </Grid>
          </Card1>

          <Card1 sx={{ mb: 4 }}>
            <Typography fontWeight="600" mb={2}>
            Adresse de facturation
            </Typography>

            <FormControlLabel
              label="Même que l'adresse d'expédition"
              control={<Checkbox size="small" color="secondary" />}
              sx={{
                zIndex: 1,
                position: "relative",
                mb: sameAsShipping ? "" : "1rem",
              }}
              onChange={handleCheckboxChange(values, setFieldValue)}
            />

            {!sameAsShipping && (
              <Grid container spacing={6}>
                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    sx={{ mb: 2 }}
                    label="Nom et prénom"
                    name="billing_name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.billing_name}
                    error={!!touched.billing_name && !!errors.billing_name}
                    helperText={touched.billing_name && errors.billing_name}
                  />
                  <TextField
                    fullWidth
                    sx={{ mb: 2 }}
                    onBlur={handleBlur}
                    label="Numéro de téléphone"
                    name="billing_contact"
                    onChange={handleChange}
                    value={values.billing_contact}
                    error={
                      !!touched.billing_contact && !!errors.billing_contact
                    }
                    helperText={
                      touched.billing_contact && errors.billing_contact
                    }
                  />
                  <TextField
                    fullWidth
                    type="number"
                    sx={{ mb: 2 }}
                    label="Code postal"
                    name="billing_zip"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.billing_zip}
                    error={!!touched.billing_zip && !!errors.billing_zip}
                    helperText={touched.billing_zip && errors.billing_zip}
                  />
                  <TextField
                    fullWidth
                    label="Addresse 1"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="billing_address1"
                    value={values.billing_address1}
                    error={
                      !!touched.billing_address1 && !!errors.billing_address1
                    }
                    helperText={
                      touched.billing_address1 && errors.billing_address1
                    }
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    fullWidth
                    type="email"
                    sx={{ mb: 2 }}
                    onBlur={handleBlur}
                    name="billing_email"
                    label="Adresse e-mail"
                    onChange={handleChange}
                    value={values.billing_email}
                    error={!!touched.billing_email && !!errors.billing_email}
                    helperText={touched.billing_email && errors.billing_email}
                  />
                  <TextField
                    fullWidth
                    sx={{ mb: 2 }}
                    label="Entreprise"
                    onBlur={handleBlur}
                    name="billing_company"
                    onChange={handleChange}
                    value={values.billing_company}
                    error={
                      !!touched.billing_company && !!errors.billing_company
                    }
                    helperText={
                      touched.billing_company && errors.billing_company
                    }
                  />
                  <Autocomplete
                    fullWidth
                    sx={{ mb: 2 }}
                    options={countryList}
                    value={values.billing_country}
                    getOptionLabel={(option) => option.label}
                    onChange={(_, value) =>
                      setFieldValue("billing_country", value)
                    }
                    renderInput={(params) => (
                      <TextField
                        label="L'état"
                        placeholder="Select Country"
                        error={
                          !!touched.billing_country && !!errors.billing_country
                        }
                        helperText={
                          touched.billing_country && errors.billing_country
                        }
                        {...params}
                      />
                    )}
                  />
                  <TextField
                    fullWidth
                    label="Address 2"
                    onBlur={handleBlur}
                    name="billing_address2"
                    onChange={handleChange}
                    value={values.billing_address2}
                    error={
                      !!touched.billing_address2 && !!errors.billing_address2
                    }
                    helperText={
                      touched.billing_address2 && errors.billing_address2
                    }
                  />
                </Grid>
              </Grid>
            )}
          </Card1>

          <Grid container spacing={6}>
            <Grid item sm={6} xs={12}>
              <Link href="/cart" passHref>
                <Button
                  variant="outlined"
                  color="primary"
                  type="button"
                  fullWidth
                >
                  Retour au panier
                </Button>
              </Link>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Procéder au paiement
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

const initialValues = {
  shipping_zip: "",
  shipping_name: "",
  shipping_email: "",
  shipping_contact: "",
  shipping_company: "",
  shipping_address1: "",
  shipping_address2: "",
  shipping_country: countryList[229],

  billing_zip: "",
  billing_name: "",
  billing_email: "",
  billing_contact: "",
  billing_company: "",
  billing_address1: "",
  billing_address2: "",
  billing_country: countryList[229],
};

// uncomment these fields below for from validation
const checkoutSchema = yup.object().shape({
  // shipping_name: yup.string().required("required"),
  // shipping_email: yup.string().email("invalid email").required("required"),
  // shipping_contact: yup.string().required("required"),
  // shipping_zip: yup.string().required("required"),
  // shipping_country: yup.object().required("required"),
  // shipping_address1: yup.string().required("required"),
  // billing_name: yup.string().required("required"),
  // billing_email: yup.string().required("required"),
  // billing_contact: yup.string().required("required"),
  // billing_zip: yup.string().required("required"),
  // billing_country: yup.object().required("required"),
  // billing_address1: yup.string().required("required"),
});

export default CheckoutForm;
